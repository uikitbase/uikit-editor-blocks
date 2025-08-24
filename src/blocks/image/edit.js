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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
} = BlockEditor || Editor;

import placeholderImage from '../../assets/images/image-placeholder.png';

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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const wrapper_link_attrs = [];

    const image_attrs   = [];
    const image_classes = [];
    const image_styles  = [];

    const border_variants = {
      rounded: 'uk-border-rounded',
      circle: 'uk-border-circle',
      pill: 'uk-border-pill',
    };

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( border && border_variants[ border ] ) {
      image_classes.push( border_variants[ border ] );
    }

    if ( mediaId && width ) {
      image_styles.width = `${width}px`;
    }

    if ( mediaId && height ) {
      image_styles.height = `${height}px`;
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( linkUrl ) {
      wrapper_link_attrs.href = linkUrl;
    }

    if ( linkTarget ) {
      wrapper_link_attrs.target = linkTarget;
    }

    if ( linkTitle ) {
      wrapper_link_attrs.title = linkTitle;
    }

    if ( linkRel ) {
      wrapper_link_attrs.rel = linkRel;
    }

    if ( linkAriaLabel ) {
      wrapper_link_attrs['aria-label'] = linkAriaLabel;
    }

    if ( mediaId ) {
      if ( image && image.source_url ) {
        image_attrs.src = image.source_url;
      }

      if ( alt ) {
        image_attrs.alt = alt;
      }

      if ( image && image.media_details ) {
        if ( image.media_details.width ) {
          image_attrs.width = image.media_details.width;
        }

        if ( image.media_details.height ) {
          image_attrs.height = image.media_details.height;
        }
      }
    } else {
      image_attrs.src = placeholderImage;
    }

    if ( image_classes.length ) {
      image_attrs.className = image_classes.join( ' ' );
    }

    if ( Object.keys( image_styles ).length ) {
      image_attrs.style = image_styles;
    }

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
      } );
    };

    const onRemoveImage = () => {
      setAttributes( {
        mediaId: undefined,
      } );
    };

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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs}>
          { linkUrl ? (
            <a
              {...wrapper_link_attrs}
              onClick={ ( event ) => event.preventDefault() }
            >
              <img {...image_attrs} />
            </a>
          ) : (
            <img {...image_attrs} />
          ) }
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
