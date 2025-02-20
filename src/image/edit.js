// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  BaseControl,
  Button,
  Spinner,
  ResponsiveWrapper,
  TextControl,
  SelectControl,
  ToggleControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
} = BlockEditor || Editor;

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

class UikitImageEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      image,
      clientId,
    } = this.props;

    const {
      blockId,
      mediaId,
      mediaUrl,
      width,
      height,
      alt,
      linkUrl,
      linkTarget,
      linkRel,
      linkTitle,
      linkAriaLabel,
      border,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        useGeneralBlockProps(attributes)?.className,
        {
          [`uk-border-${border}`]: border,
        },
        className
      ),
    };

    // Open in new tab behavior from core/button (source: https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/button/edit.js)
    const onToggleOpenInNewTab = ( value ) => {
      const newLinkTarget = value ? '_blank' : undefined;

      let updatedRel = linkRel;
      if ( newLinkTarget && ! linkRel ) {
        updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
      } else if ( ! newLinkTarget && linkRel === NEW_TAB_REL_DEFAULT_VALUE ) {
        updatedRel = undefined;
      }

      setAttributes( {
        linkTarget: newLinkTarget,
        linkRel: updatedRel,
      } );
    };

    const onUpdateImage = ( image ) => {
      setAttributes( {
        mediaId: image.id,
        mediaUrl: image.url
      } );
    };

    const onRemoveImage = () => {
      setAttributes( {
        mediaId: undefined,
        mediaUrl: ''
      } );
    };

    const imageStyle = {
      width: width ? `${width}px` : 'auto',
      height: height ? `${height}px` : 'auto',
    };

    const placeholder = (
      <div className="image-placeholder" style={{ width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
          <rect x="0" y="0" width="300" height="300" fill="#e0e0e0" />
          <text x="50%" y="50%" textAnchor="middle" fill="#888" fontSize="20" dy=".3em">
            No Image
          </text>
        </svg>
      </div>
    );

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
            <BaseControl>
              <div className="uikit-editor-blocks-image-select">
                <MediaUploadCheck fallback={ <p>{ __( 'To edit the image, you need permission to upload media.', 'uikit-editor-blocks' ) }</p> }>
                  <MediaUpload
                    title={ __( 'Image', 'uikit-editor-blocks' ) }
                    onSelect={ onUpdateImage }
                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                    value={ mediaId }
                    render={ ( { open } ) => (
                      <Button
                        className={ ! mediaId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                        onClick={ open }>
                        { ! mediaId && ( __( 'Set image', 'uikit-editor-blocks' ) ) }
                        { !! mediaId && ! image && <Spinner /> }
                        { !! mediaId && image &&
                          <ResponsiveWrapper
                            naturalWidth={ image.media_details.width }
                            naturalHeight={ image.media_details.height }
                          >
                            <img src={ image.source_url } alt={ __( 'Image', 'uikit-editor-blocks' ) } />
                          </ResponsiveWrapper>
                        }
                      </Button>
                    ) }
                  />
                </MediaUploadCheck>
                { !! mediaId && image &&
                  <MediaUploadCheck>
                    <MediaUpload
                      title={ __( 'Image', 'uikit-editor-blocks' ) }
                      onSelect={ onUpdateImage }
                      allowedTypes={ ALLOWED_MEDIA_TYPES }
                      value={ mediaId }
                      render={ ( { open } ) => (
                        <Button onClick={ open } isDefault isLarge>
                          { __( 'Replace image', 'uikit-editor-blocks' ) }
                        </Button>
                      ) }
                    />
                  </MediaUploadCheck>
                }
                { !! mediaId &&
                  <MediaUploadCheck>
                    <Button onClick={ onRemoveImage } isLink isDestructive>
                      { __( 'Remove image', 'uikit-editor-blocks' ) }
                    </Button>
                  </MediaUploadCheck>
                }
              </div>
            </BaseControl>
            { mediaId && (
              <>
                <TextControl
                  type="number"
                  label={ __( 'Image Width', 'uikit-editor-blocks' ) }
                  value={ width }
                  placeholder= { __( 'Auto', 'uikit-editor-blocks' ) }
                  onChange={ ( value ) => setAttributes( { width: value } ) }
                />
                <TextControl
                  type="number"
                  label={ __( 'Image Height', 'uikit-editor-blocks' ) }
                  placeholder= { __( 'Auto', 'uikit-editor-blocks' ) }
                  value={ height }
                  onChange={ ( value ) => setAttributes( { height: value } ) }
                />
                <TextControl
                  label={ __( 'Image Alt', 'uikit-editor-blocks' ) }
                  value={ alt }
                  onChange={ ( value ) => setAttributes( { alt: value } ) }
                />
                <TextControl
                  label={ __( 'Link', 'uikit-editor-blocks' ) }
                  value={ linkUrl }
                  onChange={ ( value ) => setAttributes( { linkUrl: value } ) }
                />
                { linkUrl && (
                  <>
                    <ToggleControl
                      label={ __( 'Open in New Tab', 'uikit-editor-blocks' ) }
                      onChange={ onToggleOpenInNewTab }
                      checked={ linkTarget === '_blank' }
                    />
                    <TextControl
                      label={ __( 'Link Rel', 'uikit-editor-blocks' ) }
                      value={ linkRel || '' }
                      onChange={ ( newRel ) => {
                        setAttributes( { linkRel: newRel } );
                      } }
                    />
                    <TextControl
                      label={ __( 'Link Title', 'uikit-editor-blocks' ) }
                      value={ linkTitle }
                      onChange={ ( value ) => {
                        setAttributes( {
                          linkTitle: value,
                        } );
                      } }
                    />
                    <TextControl
                      label={ __( 'Link Aria Label', 'uikit-editor-blocks' ) }
                      value={ linkAriaLabel }
                      onChange={ ( value ) => {
                        setAttributes( {
                          linkAriaLabel: value,
                        } );
                      } }
                    />
                  </>
                )}
              </>
            )}
          </PanelBody>
          <PanelBody title={ __( 'Image', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Border', 'uikit-editor-blocks' ) }
              value={ border }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Rounded', 'uikit-editor-blocks' ), value: 'rounded' },
                { label: __( 'Circle', 'uikit-editor-blocks' ), value: 'circle' },
                { label: __( 'Pill', 'uikit-editor-blocks' ), value: 'pill' },
              ]}
              onChange={( value ) => {
                setAttributes( { border: value } );
              }}
            />
          </PanelBody>
        </InspectorControls>
        <div>
          { mediaUrl ? (
            <img src={ mediaUrl } alt={ alt } style={ imageStyle } className={blockProps.className} />
          ) : (
            placeholder
          )}
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withSelect( ( select, props ) => {
    const { mediaId } = props.attributes;
    const { getMedia } = select( 'core' );

    return {
      image: mediaId ? getMedia( mediaId ) : undefined,
    };
  } )
)( UikitImageEdit );
