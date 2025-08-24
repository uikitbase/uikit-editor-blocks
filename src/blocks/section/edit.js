// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  SelectControl,
  CheckboxControl,
  BaseControl,
  Button,
  Spinner,
  ResponsiveWrapper,
  RangeControl,
  ToggleControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InspectorControls,
  ColorPalette,
  InnerBlocks,
  MediaUploadCheck,
  MediaUpload,
} = BlockEditor || Editor;

const ALLOWED_MEDIA_TYPES = [ 'image' ];

class UikitSectionEdit extends Component {
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
      style,
      textColor,
      padding,
      removeTopPadding,
      removeBottomPadding,
      container,
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

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs         = [];
    const wrapper_classes       = ['uk-section'];
    const wrapper_styles        = [];
    const wrapper_parallax_data = [];

    const cover_attrs   = [];
    const cover_classes = ['uk-position-cover'];
    const cover_styles  = [];

    const container_attrs   = [];
    const container_classes = [];

    const style_variants = {
      'default': 'uk-section-default',
      'muted': 'uk-section-muted',
      'primary': 'uk-section-primary',
      'secondary': 'uk-section-secondary',
    };

    const textColor_variants = {
      'light': 'uk-light',
      'dark': 'uk-dark',
    };

    const padding_variants = {
      'xsmall': 'uk-section-xsmall',
      'small': 'uk-section-small',
      'large': 'uk-section-large',
      'xlarge': 'uk-section-xlarge',
      'none': 'uk-padding-remove',
    };

    const container_variants = {
      'default': 'uk-container',
      'xsmall': 'uk-container uk-container-xsmall',
      'small': 'uk-container uk-container-small',
      'large': 'uk-container uk-container-large',
      'xlarge': 'uk-container uk-container-xlarge',
      'expand': 'uk-container uk-container-expand',
    };

    const bgImageSize_variants = {
      'cover': 'uk-background-cover',
      'contain': 'uk-background-contain',
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
      'small': 'uk-background-image@s',
      'medium': 'uk-background-image@m',
      'large': 'uk-background-image@l',
      'xlarge': 'uk-background-image@xl',
    };

    if ( style && style_variants[ style ] ) {
      wrapper_classes.push( style_variants[ style ] );
    }

    if ( textColor && textColor_variants[ textColor ] ) {
      wrapper_classes.push( textColor_variants[ textColor ] );
    }

    if ( padding && padding_variants[ padding ] ) {
      wrapper_classes.push( padding_variants[ padding ] );
    }

    if ( padding !== 'none' ) {
      if ( removeTopPadding ) {
        wrapper_classes.push( 'uk-padding-remove-top' );
      }

      if ( removeBottomPadding ) {
        wrapper_classes.push( 'uk-padding-remove-bottom' );
      }
    }

    if ( bgImageMediaId ) {
      wrapper_classes.push( 'uk-background-norepeat' );

      if ( bgImageSize && bgImageSize_variants[ bgImageSize ] ) {
        wrapper_classes.push( bgImageSize_variants[ bgImageSize ] );
      }

      if ( bgImagePosition && bgImagePosition_variants[ bgImagePosition ] ) {
        wrapper_classes.push( bgImagePosition_variants[ bgImagePosition ] );
      }

      if ( bgImageEffect === 'fixed' ) {
        wrapper_classes.push( 'uk-background-fixed' );
      }

      if ( bgImageVisibility && bgImageVisibility_variants[ bgImageVisibility ] ) {
        wrapper_classes.push( bgImageVisibility_variants[ bgImageVisibility ] );
      }

      if ( bgImageOverlay ) {
        wrapper_classes.push( 'uk-position-relative' );
      }
    }

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( bgColor ) {
      wrapper_styles.backgroundColor = bgColor;
    }

    if ( bgImageMediaId && bgImage && bgImage.source_url ) {
      wrapper_styles.backgroundImage = `url(${ bgImage.source_url })`;
    }

    if ( bgImageMediaId && bgImageEffect === 'parallax' ) {
      wrapper_parallax_data.push( `bgx: ${ bgImageParallaxHorizontalStart }, ${ bgImageParallaxHorizontalEnd }` );
      wrapper_parallax_data.push( `bgy: ${ bgImageParallaxVerticalStart }, ${ bgImageParallaxVerticalEnd }` );
    }

    if ( bgImageOverlayColor ) {
      cover_styles.backgroundColor = bgImageOverlayColor;
    }

    if ( container && container_variants[ container ] ) {
      container_classes.push( container_variants[ container ] );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( Object.keys( wrapper_styles ).length ) {
      wrapper_attrs.style = wrapper_styles;
    }

    if ( wrapper_parallax_data.length ) {
      wrapper_attrs['data-uk-parallax'] = wrapper_parallax_data.join( '; ' );
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( cover_classes.length ) {
      cover_attrs.className = cover_classes.join( ' ' );
    }

    if ( Object.keys( cover_styles ).length ) {
      cover_attrs.style = cover_styles;
    }

    if ( container_classes.length ) {
      container_attrs.className = container_classes.join( ' ' );
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
          <PanelBody title={ __( 'Section', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ style }
              options={
                [
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                  { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                  { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                  { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( {
                  style: value,
                } );
              } }
            />
            <SelectControl
              label={ __( 'Text Color', 'uikit-editor-blocks' ) }
              value={ textColor }
              options={
                [
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Light', 'uikit-editor-blocks' ), value: 'light' },
                  { label: __( 'Dark', 'uikit-editor-blocks' ), value: 'dark' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( {
                  textColor: value,
                } );
              } }
            />
            <SelectControl
              label={ __( 'Padding', 'uikit-editor-blocks' ) }
              value={ padding }
              options={
                [
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'X-Small', 'uikit-editor-blocks' ), value: 'xsmall' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                  { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( {
                  padding: value,
                } );
              } }
            />
            { padding != 'none' && (
              <>
                <CheckboxControl
                  label={ __( 'Remove Top Padding', 'uikit-editor-blocks' ) }
                  checked={ removeTopPadding }
                  onChange={ ( isChecked ) =>
                    setAttributes( { removeTopPadding: isChecked } )
                  }
                />
                <CheckboxControl
                  label={ __( 'Remove Bottom Padding', 'uikit-editor-blocks' ) }
                  checked={ removeBottomPadding }
                  onChange={ ( isChecked ) =>
                    setAttributes( { removeBottomPadding: isChecked } )
                  }
                />
              </>
            )}
            <SelectControl
              label={ __( 'Container', 'uikit-editor-blocks' ) }
              value={ container }
              options={
                [
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                  { label: __( 'X-Small', 'uikit-editor-blocks' ), value: 'xsmall' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                  { label: __( 'Expand', 'uikit-editor-blocks' ), value: 'expand' },
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( {
                  container: value,
                } );
              } }
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
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Parallax', 'uikit-editor-blocks' ), value: 'parallax' },
                    { label: __( 'Fixed', 'uikit-editor-blocks' ), value: 'fixed' },
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
                  label={__( 'Overlay', 'uikit-editor-blocks' )}
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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs}>
          { ( bgImageMediaId && bgImageOverlay && bgImageOverlayColor ) && (
            <>
              <div {...cover_attrs}></div>
              <div className="uk-position-relative">
                { container ? (
                  <div {...container_attrs}>
                    <InnerBlocks
                      renderAppender={
                        hasChildBlocks
                          ? undefined
                          : () => <InnerBlocks.ButtonBlockAppender />
                      }
                    />
                  </div>
                ) : (
                  <InnerBlocks
                    renderAppender={
                      hasChildBlocks
                        ? undefined
                        : () => <InnerBlocks.ButtonBlockAppender />
                    }
                  />
                ) }
              </div>
            </>
          ) }
          { !( bgImageMediaId && bgImageOverlay && bgImageOverlayColor ) && (
            <>
              { container ? (
                <div {...container_attrs}>
                  <InnerBlocks
                    renderAppender={
                      hasChildBlocks
                        ? undefined
                        : () => <InnerBlocks.ButtonBlockAppender />
                    }
                  />
                </div>
              ) : (
                <InnerBlocks
                  renderAppender={
                    hasChildBlocks
                      ? undefined
                      : () => <InnerBlocks.ButtonBlockAppender />
                  }
                />
              ) }
            </>
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
)( UikitSectionEdit );
