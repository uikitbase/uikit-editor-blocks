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
      verticalAlignment,
      padding,
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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const content_attrs         = [];
    const content_classes       = [];
    const content_styles        = [];
    const content_parallax_data = [];

    const overlay_attrs   = [];
    const overlay_classes = ['uk-position-cover'];
    const overlay_styles  = [];

    const bgImageSize_variants = {
      cover: 'uk-background-cover',
      contain: 'uk-background-contain',
      'full-width': 'uk-background-width-1-1',
      'full-height': 'uk-background-height-1-1',
    };

    const bgImagePosition_variants = {
      'top-left': 'uk-background-top-left',
      'top-center': 'uk-background-top-center',
      'top-right': 'uk-background-top-right',
      'center-left': 'uk-background-center-left',
      'center-center': 'uk-background-center-center',
      'center-right': 'uk-background-center-right',
      'bottom-left': 'uk-background-bottom-left',
      'bottom-center': 'uk-background-bottom-center',
      'bottom-right': 'uk-background-bottom-right',
    };

    const bgImageVisibility_variants = {
      small: 'uk-background-image@s',
      medium: 'uk-background-image@m',
      large: 'uk-background-image@l',
      xlarge: 'uk-background-image@xl',
    };

    const verticalAlignment_variants = {
      middle: 'uk-flex-middle',
      bottom: 'uk-flex-bottom',
    };

    const padding_variants = {
      default: 'uk-tile',
      xsmall: 'uk-tile-xsmall',
      small: 'uk-tile-small',
      large: 'uk-tile-large',
      xlarge: 'uk-tile-xlarge',
    };

    if ( bgImageMediaId ) {
      content_classes.push( 'uk-background-norepeat' );

      if ( bgImageSize && bgImageSize_variants[bgImageSize] ) {
        content_classes.push( bgImageSize_variants[bgImageSize] );
      }

      if ( bgImagePosition && bgImagePosition_variants[bgImagePosition] ) {
        content_classes.push( bgImagePosition_variants[bgImagePosition] );
      }

      if ( bgImageEffect === 'fixed' ) {
        content_classes.push( 'uk-background-fixed' );
      }

      if ( bgImageVisibility && bgImageVisibility_variants[bgImageVisibility] ) {
        content_classes.push( bgImageVisibility_variants[bgImageVisibility] );
      }
    }

    if ( verticalAlignment ) {
      content_classes.push( 'uk-flex' );

      if ( verticalAlignment_variants[verticalAlignment] ) {
        content_classes.push( verticalAlignment_variants[verticalAlignment] );
      }
    }

    if ( padding ) {
      if ( padding !== 'default' ) {
        content_classes.push( 'uk-tile' );
      }

      if ( padding_variants[padding] ) {
        content_classes.push( padding_variants[padding] );
      }
    }

    if ( bgColor ) {
      content_styles.backgroundColor = bgColor;
    }

    if ( bgImageMediaId ) {
      const src = bgImage && bgImage.source_url ? bgImage.source_url : '';

      if ( src ) {
        content_styles.backgroundImage = `url(${src})`;
      }
    }

    if ( bgImageMediaId && bgImageEffect === 'parallax' ) {
      content_parallax_data.push( `bgx: ${bgImageParallaxHorizontalStart}, ${bgImageParallaxHorizontalEnd}` );
      content_parallax_data.push( `bgy: ${bgImageParallaxVerticalStart}, ${bgImageParallaxVerticalEnd}` );
    }

    if ( bgImageMediaId ) {
      if ( bgImageOverlay && bgImageOverlayColor ) {
        overlay_styles.backgroundColor = bgImageOverlayColor;
      }
    }

    if ( content_classes.length ) {
      content_attrs.className = content_classes.join(' ');
    }

    if ( Object.keys(content_styles).length ) {
      content_attrs.style = content_styles;
    }

    if ( content_parallax_data.length ) {
      content_attrs['data-uk-parallax'] = content_parallax_data.join('; ');
    }

    if ( overlay_classes.length ) {
      overlay_attrs.className = overlay_classes.join(' ');
    }

    if ( Object.keys(overlay_styles).length ) {
      overlay_attrs.style = overlay_styles;
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
            <SelectControl 
              label={ __( 'Vertical Alignment', 'uikit-editor-blocks' ) }
              value={ verticalAlignment }
              options={[
                { label: __( 'Top', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Middle', 'uikit-editor-blocks' ), value: 'middle' },
                { label: __( 'Bottom', 'uikit-editor-blocks' ), value: 'bottom' },
              ]}
              onChange={( value ) => {
                setAttributes( { verticalAlignment: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Padding', 'uikit-editor-blocks' ) }
              value={ padding }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'X-Small', 'uikit-editor-blocks' ), value: 'xsmall' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
              ]}
              onChange={( value ) => {
                setAttributes( { padding: value } );
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
        <div {...content_attrs}>
          { ( bgImageMediaId && bgImageOverlay ) ? ( <div {...overlay_attrs}></div> ) : null }
          { verticalAlignment || ( bgImageMediaId && bgImageOverlay ) ? (
            <div className="uk-panel">
              <InnerBlocks
                templateLock={ false }
                renderAppender={
                  hasChildBlocks
                    ? undefined
                    : () => <InnerBlocks.ButtonBlockAppender />
                }
              />
            </div>
          ) : (
            <InnerBlocks
              templateLock={ false }
              renderAppender={
                hasChildBlocks
                  ? undefined
                  : () => <InnerBlocks.ButtonBlockAppender />
              }
            />
          ) }
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
