
// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  RangeControl,
  PanelBody,
  SelectControl,
  Button,
  Spinner,
  ResponsiveWrapper,
  BaseControl,
  ToggleControl,

} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  ColorPalette,
  MediaUploadCheck,
  MediaUpload,
  InnerBlocks,
} =  BlockEditor || Editor;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const ColumnSizeRangeControl = ( {
  label,
  attributeName,
  value,
  setAttributes,
  ...props
} ) => {
  return (
    <RangeControl
      label={ label }
      value={ value }
      onChange={ ( selectedSize ) => {
        setAttributes( {
          [ attributeName ]: selectedSize,
        } );
      } }
      min={ 0 }
      max={ 12 }
      { ...props }
    />
  );
};

let widthSizeOptions = [
  { label: __( 'Inherit', 'uikit-editor-blocks' ), value: '' },
  { label: __( '1/1', 'uikit-editor-blocks' ), value: '1-1' },
  { label: __( '1/2', 'uikit-editor-blocks' ), value: '1-2' },
  { label: __( '1/3', 'uikit-editor-blocks' ), value: '1-3' },
  { label: __( '2/3', 'uikit-editor-blocks' ), value: '2-3' },
  { label: __( '1/4', 'uikit-editor-blocks' ), value: '1-4' },
  { label: __( '3/4', 'uikit-editor-blocks' ), value: '3-4' },
  { label: __( '1/5', 'uikit-editor-blocks' ), value: '1-5' },
  { label: __( '2/5', 'uikit-editor-blocks' ), value: '2-5' },
  { label: __( '3/5', 'uikit-editor-blocks' ), value: '3-5' },
  { label: __( '4/5', 'uikit-editor-blocks' ), value: '4-5' },
  { label: __( '1/6', 'uikit-editor-blocks' ), value: '1-6' },
  { label: __( '5/6', 'uikit-editor-blocks' ), value: '5-6' },
  { label: __( 'Expand', 'uikit-editor-blocks' ), value: 'expand' },
  { label: __( 'Auto', 'uikit-editor-blocks' ), value: 'auto' },
];

class UikitColumnEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      hasChildBlocks,
      bgImage,
      clientId,
    } = this.props;

    const {
      blockId,
      defaultWidth,
      smallWidth,
      mediumWidth,
      largeWidth,
      xlargeWidth,
      orderFirst,
      bgColor,
      bgImageMediaId,
      bgImageSize,
      bgImagePosition,
      bgImageEffect,
      bgImageParallaxHorizontalStart,
      bgImageParallaxHorizontalEnd,
      bgImageParallaxVerticalStart,
      bgImageParallaxVerticalEnd,
      bgImageVisibility,
      bgImageOverlay,
      bgImageOverlayColor,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    const onUpdateImage = ( image ) => {
      setAttributes( {
        bgImageMediaId: image.id,
      } );
    };

    const onRemoveImage = () => {
      setAttributes( {
        bgImageMediaId: undefined,
      } );
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Grid Column', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Phone Portrait', 'uikit-editor-blocks' ) }
              value={ defaultWidth }
              options={ widthSizeOptions.filter((item) => item.value !== '') }
              onChange={( value ) => {
                setAttributes( { defaultWidth: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Phone Landscape', 'uikit-editor-blocks' ) }
              value={ smallWidth }
              options={ widthSizeOptions }
              onChange={( value ) => {
                setAttributes( { smallWidth: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Tablet Landscape', 'uikit-editor-blocks' ) }
              value={ mediumWidth }
              options={ widthSizeOptions }
              onChange={( value ) => {
                setAttributes( { mediumWidth: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Desktop', 'uikit-editor-blocks' ) }
              value={ largeWidth }
              options={ widthSizeOptions }
              onChange={( value ) => {
                setAttributes( { largeWidth: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Large Screens', 'uikit-editor-blocks' ) }
              value={ xlargeWidth }
              options={ widthSizeOptions }
              onChange={( value ) => {
                setAttributes( { xlargeWidth: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Order First', 'uikit-editor-blocks' ) }
              value={ orderFirst }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Always', 'uikit-editor-blocks' ), value: 'always' },
                { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { orderFirst: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Background Color', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <ColorPalette
              value={ bgColor }
              onChange={( value ) => {
                setAttributes( { bgColor: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Background Image', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <BaseControl>
              <div className="uikit-editor-blocks-image-select">
                <MediaUploadCheck fallback={ <p>{ __( 'To edit the background image, you need permission to upload media.', 'uikit-editor-blocks' ) }</p> }>
                  <MediaUpload
                    title={ __( 'Image', 'uikit-editor-blocks' ) }
                    onSelect={ onUpdateImage }
                    allowedTypes={ ALLOWED_MEDIA_TYPES }
                    value={ bgImageMediaId }
                    render={ ( { open } ) => (
                      <Button
                        className={ ! bgImageMediaId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                        onClick={ open }>
                        { ! bgImageMediaId && ( __( 'Set image', 'uikit-editor-blocks' ) ) }
                        { !! bgImageMediaId && ! bgImage && <Spinner /> }
                        { !! bgImageMediaId && bgImage &&
                          <ResponsiveWrapper
                            naturalWidth={ bgImage.media_details.width }
                            naturalHeight={ bgImage.media_details.height }
                          >
                            <img src={ bgImage.source_url } alt={ __( 'Image', 'uikit-editor-blocks' ) } />
                          </ResponsiveWrapper>
                        }
                      </Button>
                    ) }
                  />
                </MediaUploadCheck>
                { !! bgImageMediaId && bgImage &&
                  <MediaUploadCheck>
                    <MediaUpload
                      title={ __( 'Image', 'uikit-editor-blocks' ) }
                      onSelect={ onUpdateImage }
                      allowedTypes={ ALLOWED_MEDIA_TYPES }
                      value={ bgImageMediaId }
                      render={ ( { open } ) => (
                        <Button onClick={ open } isDefault isLarge>
                          { __( 'Replace image', 'uikit-editor-blocks' ) }
                        </Button>
                      ) }
                    />
                  </MediaUploadCheck>
                }
                { !! bgImageMediaId &&
                  <MediaUploadCheck>
                    <Button onClick={ onRemoveImage } isLink isDestructive>
                      { __( 'Remove image', 'uikit-editor-blocks' ) }
                    </Button>
                  </MediaUploadCheck>
                }
              </div>
            </BaseControl>
            { bgImageMediaId && (
              <>
                <SelectControl 
                  label={ __( 'Image Size', 'uikit-editor-blocks' ) }
                  value={ bgImageSize }
                  options={[
                    { label: __( 'Auto', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Cover', 'uikit-editor-blocks' ), value: 'cover' },
                    { label: __( 'Contain', 'uikit-editor-blocks' ), value: 'contain' },
                    { label: __( 'Width 100%', 'uikit-editor-blocks' ), value: 'full-width' },
                    { label: __( 'Height 100%', 'uikit-editor-blocks' ), value: 'full-height' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { bgImageSize: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Image Position', 'uikit-editor-blocks' ) }
                  value={ bgImagePosition }
                  options={[
                    { label: __( 'Top Left', 'uikit-editor-blocks' ), value: 'top-left' },
                    { label: __( 'Top Center', 'uikit-editor-blocks' ), value: 'top-center' },
                    { label: __( 'Top Right', 'uikit-editor-blocks' ), value: 'top-right' },
                    { label: __( 'Center Left', 'uikit-editor-blocks' ), value: 'center-left' },
                    { label: __( 'Center Center', 'uikit-editor-blocks' ), value: 'center-center' },
                    { label: __( 'Center Right', 'uikit-editor-blocks' ), value: 'center-right' },
                    { label: __( 'Bottom Left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                    { label: __( 'Bottom Center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                    { label: __( 'Bottom Right', 'uikit-editor-blocks' ), value: 'bottom-right' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { bgImagePosition: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Image Effect', 'uikit-editor-blocks' ) }
                  value={ bgImageEffect }
                  options={[
                    { label: __( 'Parallax', 'uikit-editor-blocks' ), value: 'parallax' },
                    { label: __( 'Fixed', 'uikit-editor-blocks' ), value: 'fixed' },
                    { label: __( 'None', 'uikit-editor-blocks' ), value: ' ' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { bgImageEffect: value } );
                  }}
                />
                { bgImageEffect == 'parallax' && (
                  <>
                    <RangeControl
                      label={ __( 'Horizontal Start', 'uikit-editor-blocks' ) }
                      value={ bgImageParallaxHorizontalStart }
                      onChange={( value ) => {
                        setAttributes( { bgImageParallaxHorizontalStart: value } );
                      }}
                      min={ -600 }
                      max={ 600 }
                      step={ 10 } 
                    />
                    <RangeControl
                      label={ __( 'Horizontal End', 'uikit-editor-blocks' ) }
                      value={ bgImageParallaxHorizontalEnd }
                      onChange={( value ) => {
                        setAttributes( { bgImageParallaxHorizontalEnd: value } );
                      }}
                      min={ -600 }
                      max={ 600 }
                      step={ 10 } 
                    />
                    <RangeControl
                      label={ __( 'Vertical Start', 'uikit-editor-blocks' ) }
                      value={ bgImageParallaxVerticalStart }
                      onChange={( value ) => {
                        setAttributes( { bgImageParallaxVerticalStart: value } );
                      }}
                      min={ -600 }
                      max={ 600 }
                      step={ 10 } 
                    />
                    <RangeControl
                      label={ __( 'Vertical End', 'uikit-editor-blocks' ) }
                      value={ bgImageParallaxVerticalEnd }
                      onChange={( value ) => {
                        setAttributes( { bgImageParallaxVerticalEnd: value } );
                      }}
                      min={ -600 }
                      max={ 600 }
                      step={ 10 } 
                    />
                  </>
                )}
                <SelectControl 
                  label={ __( 'Visibility', 'uikit-editor-blocks' ) }
                  value={ bgImageVisibility }
                  options={[
                    { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { bgImageVisibility: value } );
                  }}
                />
                <ToggleControl
                  key="togglecontrol"
                  label={ __( 'Overlay', 'uikit-editor-blocks' ) }
                  checked={!!bgImageOverlay}
                  onChange={( value ) => {
                    setAttributes( { bgImageOverlay: value } );
                  }}
                />
              </>
            )}
            { ( bgImageMediaId && bgImageOverlay ) &&
              <ColorPalette
                value={ bgImageOverlayColor }
                enableAlpha = { true }
                onChange={( value ) => {
                  setAttributes( { bgImageOverlayColor: value } );
                }}
              />
            }
          </PanelBody>
        </InspectorControls>
        <div className={ className }>
          <InnerBlocks
            templateLock={ false }
            renderAppender={
              hasChildBlocks
                ? undefined
                : () => <InnerBlocks.ButtonBlockAppender />
            }
          />
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withSelect( ( select, props ) => {
    const { bgImageMediaId } = props.attributes;
    const { getMedia } = select( 'core' );

    const { clientId } = props;
    const { getBlockOrder } = select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

    return {
      hasChildBlocks: getBlockOrder( clientId ).length > 0,
      bgImage: bgImageMediaId ? getMedia( bgImageMediaId ) : null,
    };
  } )
)( UikitColumnEdit );
