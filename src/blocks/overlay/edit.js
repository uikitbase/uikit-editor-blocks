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
  CheckboxControl,
  ToggleControl,
  SelectControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
  RichText,
} = BlockEditor || Editor;

import placeholderImage from '../../assets/images/image-placeholder.png';

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

class UikitOverlayEdit extends Component {
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
      imageMediaId,
      imageWidth,
      imageHeight,
      imageAlt,
      titleText,
      metaText,
      contentText,
      linkUrl,
      linkText,
      linkTarget,
      linkRel,
      linkTitle,
      linkAriaLabel,
      mode,
      hover,
      style,
      textColor,
      padding,
      position,
      margin,
      maxWidth,
      link,
      titleStyle,
      titleDecoration,
      titleColor,
      titleElement,
      titleTopMargin,
      metaStyle,
      metaColor,
      metaAlignment,
      metaElement,
      metaTopMargin,
      contentStyle,
      contentTopMargin,
      linkStyle,
      linkButtonSize,
      linkTopMargin,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const overlay_attrs   = [];
    const overlay_classes = ['uk-inline-clip'];

    const image_attrs   = [];
    const image_classes = ['uk-transition-opaque'];
    const image_styles  = [];

    const cover_attrs   = [];
    const cover_classes = ['uk-position-cover'];

    const overlay_inner_attrs   = [];
    const overlay_inner_classes = [];

    const overlay_container_attrs   = [];
    const overlay_container_classes = ['uk-overlay', 'uk-margin-remove-first-child'];

    const meta_attrs   = [];
    const meta_classes = [];

    const title_attrs   = [];
    const title_classes = ['uk-margin-remove-bottom'];

    const content_attrs   = [];
    const content_classes = ['uk-panel'];

    const link_container_attrs   = [];
    const link_container_classes = [];

    const link_text_attrs   = [];
    const link_text_classes = [];

    const style_variants = {
      'overlay-default': 'uk-overlay-default',
      'overlay-primary': 'uk-overlay-primary',
      'tile-default': 'uk-tile-default',
      'tile-muted': 'uk-tile-muted',
      'tile-primary': 'uk-tile-primary',
      'tile-secondary': 'uk-tile-secondary',
    };

    const textColor_variants = {
      light: 'uk-light',
      dark: 'uk-dark',
    };

    const padding_variants = {
      small: 'uk-padding-small',
      large: 'uk-padding-large',
      none: 'uk-padding-remove',
    };

    const position_variants = {
      top: 'uk-position-top',
      bottom: 'uk-position-bottom',
      left: 'uk-position-left',
      right: 'uk-position-right',
      'top-left': 'uk-position-top-left',
      'top-center': 'uk-position-top-center',
      'top-right': 'uk-position-top-right',
      'bottom-left': 'uk-position-bottom-left',
      'bottom-center': 'uk-position-bottom-center',
      'bottom-right': 'uk-position-bottom-right',
      center: 'uk-position-center',
      'center-left': 'uk-position-center-left',
      'center-right': 'uk-position-center-right',
    };

    const margin_variants = {
      small: 'uk-position-small',
      medium: 'uk-position-medium',
      large: 'uk-position-large',
    };

    const maxWidth_variants = {
      small: 'uk-width-small',
      medium: 'uk-width-medium',
      large: 'uk-width-large',
      xlarge: 'uk-width-xlarge',
      '2xlarge': 'uk-width-2xlarge',
    };

    const titleStyle_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge': 'uk-heading-xlarge',
      'heading-large': 'uk-heading-large',
      'heading-medium': 'uk-heading-medium',
      'heading-small': 'uk-heading-small',
      h1: 'uk-h1',
      h2: 'uk-h2',
      h3: 'uk-h3',
      h4: 'uk-h4',
      h5: 'uk-h5',
      h6: 'uk-h6',
      'text-meta': 'uk-text-meta',
      'text-lead': 'uk-text-lead',
      'text-small': 'uk-text-small',
      'text-large': 'uk-text-large',
    };

    const titleDecoration_variants = {
      divider: 'uk-heading-divider',
      bullet: 'uk-heading-bullet',
      line: 'uk-heading-line',
    };

    const titleColor_variants = {
      muted: 'uk-text-muted',
      emphasis: 'uk-text-emphasis',
      primary: 'uk-text-primary',
      secondary: 'uk-text-secondary',
      success: 'uk-text-success',
      warning: 'uk-text-warning',
      danger: 'uk-text-danger',
      background: 'uk-text-background',
    };

    const titleTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    const metaStyle_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge': 'uk-heading-xlarge',
      'heading-large': 'uk-heading-large',
      'heading-medium': 'uk-heading-medium',
      'heading-small': 'uk-heading-small',
      h1: 'uk-h1',
      h2: 'uk-h2',
      h3: 'uk-h3',
      h4: 'uk-h4',
      h5: 'uk-h5',
      h6: 'uk-h6',
      'text-meta': 'uk-text-meta',
      'text-lead': 'uk-text-lead',
      'text-small': 'uk-text-small',
      'text-large': 'uk-text-large',
    };

    const metaColor_variants = {
      muted: 'uk-text-muted',
      emphasis: 'uk-text-emphasis',
      primary: 'uk-text-primary',
      secondary: 'uk-text-secondary',
      success: 'uk-text-success',
      warning: 'uk-text-warning',
      danger: 'uk-text-danger',
      background: 'uk-text-background',
    };

    const metaTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    const contentStyle_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge': 'uk-heading-xlarge',
      'heading-large': 'uk-heading-large',
      'heading-medium': 'uk-heading-medium',
      'heading-small': 'uk-heading-small',
      h1: 'uk-h1',
      h2: 'uk-h2',
      h3: 'uk-h3',
      h4: 'uk-h4',
      h5: 'uk-h5',
      h6: 'uk-h6',
      'text-meta': 'uk-text-meta',
      'text-lead': 'uk-text-lead',
      'text-small': 'uk-text-small',
      'text-large': 'uk-text-large',
    };

    const contentTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    const linkStyle_variants = {
      'button-default': 'uk-button uk-button-default',
      'button-primary': 'uk-button uk-button-primary',
      'button-secondary': 'uk-button uk-button-secondary',
      'button-danger': 'uk-button uk-button-danger',
      'button-text': 'uk-button uk-button-text',
      link: 'uk-link',
      'link-muted': 'uk-link-muted',
      'link-text': 'uk-link-text',
    };

    const linkButtonSize_variants = {
      small: 'uk-button-small',
      large: 'uk-button-large',
    };

    const linkTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    if ( textColor && textColor_variants[ textColor ] ) {
      wrapper_classes.push( textColor_variants[ textColor ] );
    }

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( hover ) {
      overlay_classes.push('uk-transition-toggle');
    }

    if ( link ) {
      overlay_classes.push('uk-link-toggle');
    }

    if ( imageMediaId && imageWidth ) {
      image_styles.width = `${imageWidth}px`;
    }

    if ( imageMediaId && imageHeight ) {
      image_styles.height = `${imageHeight}px`;
    }

    if ( mode === 'cover' ) {
      if ( hover ) {
        cover_classes.push('uk-transition-fade');
      }

      if ( style && style_variants[ style ] ) {
        cover_classes.push( style_variants[ style ] );
      }

      if ( margin && margin_variants[ margin ] ) {
        cover_classes.push( margin_variants[ margin ] );
      }
    }

    if ( mode === 'caption' ) {
      if ( hover ) {
        overlay_inner_classes.push('uk-transition-fade');
      }

      if ( style && style_variants[ style ] ) {
        overlay_inner_classes.push( style_variants[ style ] );
      }

      if ( margin && margin_variants[ margin ] ) {
        overlay_inner_classes.push( margin_variants[ margin ] );
      }
    }

    if ( padding && padding_variants[ padding ] ) {
      overlay_inner_classes.push( padding_variants[ padding ] );
    }

    if ( position && position_variants[ position ] ) {
      overlay_inner_classes.push( position_variants[ position ] );
    }

    if ( maxWidth && maxWidth_variants[ maxWidth ] ) {
      overlay_container_classes.push( maxWidth_variants[ maxWidth ] );
    }

    if ( metaStyle && metaStyle_variants[ metaStyle ] ) {
      meta_classes.push( metaStyle_variants[ metaStyle ] );
    }

    if ( metaColor && metaColor_variants[ metaColor ] ) {
      meta_classes.push( metaColor_variants[ metaColor ] );
    }

    if ( metaTopMargin && metaTopMargin_variants[ metaTopMargin ] ) {
      meta_classes.push( metaTopMargin_variants[ metaTopMargin ] );
    }

    if ( titleStyle && titleStyle_variants[ titleStyle ] ) {
      title_classes.push( titleStyle_variants[ titleStyle ] );
    }

    if ( titleDecoration && titleDecoration_variants[ titleDecoration ] ) {
      title_classes.push( titleDecoration_variants[ titleDecoration ] );
    }

    if ( titleColor && titleColor_variants[ titleColor ] ) {
      title_classes.push( titleColor_variants[ titleColor ] );
    }

    if ( titleTopMargin && titleTopMargin_variants[ titleTopMargin ] ) {
      title_classes.push( titleTopMargin_variants[ titleTopMargin ] );
    }

    if ( contentStyle && contentStyle_variants[ contentStyle ] ) {
      content_classes.push( contentStyle_variants[ contentStyle ] );
    }

    if ( contentTopMargin && contentTopMargin_variants[ contentTopMargin ] ) {
      content_classes.push( contentTopMargin_variants[ contentTopMargin ] );
    }

    if ( linkTopMargin && linkTopMargin_variants[ linkTopMargin ] ) {
      link_container_classes.push( linkTopMargin_variants[ linkTopMargin ] );
    }

    if ( linkStyle && linkStyle_variants[ linkStyle ] ) {
      link_text_classes.push( linkStyle_variants[ linkStyle ] );

      if ( ( linkStyle === 'button-default' || linkStyle === 'button-primary' || linkStyle === 'button-secondary' || linkStyle === 'button-danger' || linkStyle === 'button-text' ) && linkButtonSize && linkButtonSize_variants[ linkButtonSize ] ) {
        link_text_classes.push( linkButtonSize_variants[ linkButtonSize ] );
      }
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( link ) {
      if ( linkUrl ) {
        overlay_attrs.href = linkUrl;
      }

      if ( linkTarget ) {
        overlay_attrs.target = linkTarget;
      }

      if ( linkTitle ) {
        overlay_attrs.title = linkTitle;
      }

      if ( linkRel ) {
        overlay_attrs.rel = linkRel;
      }

      if ( linkAriaLabel ) {
        overlay_attrs['aria-label'] = linkAriaLabel;
      }
    }

    if ( overlay_classes.length ) {
      overlay_attrs.className = overlay_classes.join(' ');
    }

    if ( imageMediaId ) {
      if ( image && image.source_url ) {
        image_attrs.src = image.source_url;
      }

      if ( imageAlt ) {
        image_attrs.alt = imageAlt;
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
      image_attrs.className = image_classes.join(' ');
    }

    if ( Object.keys( image_styles ).length ) {
      image_attrs.style = image_styles;
    }

    if ( cover_classes.length ) {
      cover_attrs.className = cover_classes.join(' ');
    }

    if ( overlay_inner_classes.length ) {
      overlay_inner_attrs.className = overlay_inner_classes.join(' ');
    }

    if ( overlay_container_classes.length ) {
      overlay_container_attrs.className = overlay_container_classes.join(' ');
    }

    if ( meta_classes.length ) {
      meta_attrs.className = meta_classes.join(' ');
    }

    if ( title_classes.length ) {
      title_attrs.className = title_classes.join(' ');
    }

    if ( content_classes.length ) {
      content_attrs.className = content_classes.join(' ');
    }

    if ( link_container_classes.length ) {
      link_container_attrs.className = link_container_classes.join(' ');
    }

    if ( ! link ) {
      if ( linkUrl ) {
        link_text_attrs.href = linkUrl;
      }

      if ( linkTarget ) {
        link_text_attrs.target = linkTarget;
      }

      if ( linkTitle ) {
        link_text_attrs.title = linkTitle;
      }

      if ( linkRel ) {
        link_text_attrs.rel = linkRel;
      }

      if ( linkAriaLabel ) {
        link_text_attrs['aria-label'] = linkAriaLabel;
      }
    }

    if ( link_text_classes.length ) {
      link_text_attrs.className = link_text_classes.join(' ');
    }

    const TitleTag = titleElement || 'div';
    const MetaTag = metaElement || 'div';

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
        imageMediaId: image.id,
      } );
    };

    const onRemoveImage = () => {
      setAttributes( {
        imageMediaId: undefined,
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
                    value={ imageMediaId }
                    render={ ( { open } ) => (
                      <Button
                        className={ ! imageMediaId ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
                        onClick={ open }>
                        { ! imageMediaId && ( __( 'Set image', 'uikit-editor-blocks' ) ) }
                        { !! imageMediaId && ! image && <Spinner /> }
                        { !! imageMediaId && image &&
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
                { !! imageMediaId && image &&
                  <MediaUploadCheck>
                    <MediaUpload
                      title={ __( 'Image', 'uikit-editor-blocks' ) }
                      onSelect={ onUpdateImage }
                      allowedTypes={ ALLOWED_MEDIA_TYPES }
                      value={ imageMediaId }
                      render={ ( { open } ) => (
                        <Button onClick={ open } isDefault isLarge>
                          { __( 'Replace image', 'uikit-editor-blocks' ) }
                        </Button>
                      ) }
                    />
                  </MediaUploadCheck>
                }
                { !! imageMediaId &&
                  <MediaUploadCheck>
                    <Button onClick={ onRemoveImage } isLink isDestructive>
                      { __( 'Remove image', 'uikit-editor-blocks' ) }
                    </Button>
                  </MediaUploadCheck>
                }
              </div>
            </BaseControl>
            { imageMediaId && (
              <>
                <TextControl
                  label={ __( 'Image Width', 'uikit-editor-blocks' ) }
                  value={ imageWidth }
                  placeholder= { __( 'Auto', 'uikit-editor-blocks' ) }
                  onChange={ ( value ) => {
                    setAttributes( {
                      imageWidth: value,
                    } );
                  } }
                />
                <TextControl
                  label={ __( 'Image Height', 'uikit-editor-blocks' ) }
                  value={ imageHeight }
                  placeholder= { __( 'Auto', 'uikit-editor-blocks' ) }
                  onChange={ ( value ) => {
                    setAttributes( {
                      imageHeight: value,
                    } );
                  } }
                />
                <TextControl
                  label={ __( 'Image Alt', 'uikit-editor-blocks' ) }
                  value={ imageAlt }
                  onChange={ ( value ) => {
                    setAttributes( {
                      imageAlt: value,
                    } );
                  } }
                />
              </>
            )}
            <TextControl
              label={ __( 'Link', 'uikit-editor-blocks' ) }
              value={ linkUrl }
              onChange={ ( value ) => setAttributes( { linkUrl: value } ) }
            />
            { linkUrl && (
              <>
                <TextControl
                  label={ __( 'Link Text', 'uikit-editor-blocks' ) }
                  value={ linkText }
                  onChange={ ( value ) => {
                    setAttributes( {
                      linkText: value,
                    } );
                  } }
                />
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
          </PanelBody>
          <PanelBody title={ __( 'Overlay', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Mode', 'uikit-editor-blocks' ) }
              value={ mode }
              options={[
                { label: __( 'Cover', 'uikit-editor-blocks' ), value: 'cover' },
                { label: __( 'Caption', 'uikit-editor-blocks' ), value: 'caption' },
              ]}
              onChange={( value ) => {
                setAttributes( { mode: value } );
              }}
            />
            <CheckboxControl
              label={ __( 'Display Overlay on Hover', 'uikit-editor-blocks' ) }
              checked={ hover }
              onChange={ ( value ) =>
                setAttributes( { hover: value } )
              }
            />
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ style }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Overlay Default', 'uikit-editor-blocks' ), value: 'overlay-default' },
                { label: __( 'Overlay Primary', 'uikit-editor-blocks' ), value: 'overlay-primary' },
                { label: __( 'Tile Default', 'uikit-editor-blocks' ), value: 'tile-default' },
                { label: __( 'Tile Muted', 'uikit-editor-blocks' ), value: 'tile-muted' },
                { label: __( 'Tile Primary', 'uikit-editor-blocks' ), value: 'tile-primary' },
                { label: __( 'Tile Secondary', 'uikit-editor-blocks' ), value: 'tile-secondary' },
              ]}
              onChange={( value ) => {
                setAttributes( { style: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Text Color', 'uikit-editor-blocks' ) }
              value={ textColor }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Light', 'uikit-editor-blocks' ), value: 'light' },
                { label: __( 'Dark', 'uikit-editor-blocks' ), value: 'dark' },
              ]}
              onChange={( value ) => {
                setAttributes( { textColor: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Padding', 'uikit-editor-blocks' ) }
              value={ padding }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
              ]}
              onChange={( value ) => {
                setAttributes( { padding: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Position', 'uikit-editor-blocks' ) }
              value={ position }
              options={[
                { label: __( 'Top', 'uikit-editor-blocks' ), value: 'top' },
                { label: __( 'Bottom', 'uikit-editor-blocks' ), value: 'bottom' },
                { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                { label: __( 'Top Left', 'uikit-editor-blocks' ), value: 'top-left' },
                { label: __( 'Top Center', 'uikit-editor-blocks' ), value: 'top-center' },
                { label: __( 'Top Right', 'uikit-editor-blocks' ), value: 'top-right' },
                { label: __( 'Bottom Left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                { label: __( 'Bottom Center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                { label: __( 'Bottom Right', 'uikit-editor-blocks' ), value: 'bottom-right' },
                { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                { label: __( 'Center Left', 'uikit-editor-blocks' ), value: 'center-left' },
                { label: __( 'Center Right', 'uikit-editor-blocks' ), value: 'center-right' },
              ]}
              onChange={( value ) => {
                setAttributes( { position: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin', 'uikit-editor-blocks' ) }
              value={ margin }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={( value ) => {
                setAttributes( { margin: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Max Width', 'uikit-editor-blocks' ) }
              value={ maxWidth }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'Xlarge', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( '2Xlarge', 'uikit-editor-blocks' ), value: '2xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { maxWidth: value } );
              }}
            />
            <CheckboxControl
              label={ __( 'Link Overlay', 'uikit-editor-blocks' ) }
              checked={ link }
              onChange={ ( value ) =>
                setAttributes( { link: value } )
              }
            />
          </PanelBody>
          <PanelBody title={ __( 'Title', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ titleStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Decoration', 'uikit-editor-blocks' ) }
              value={ titleDecoration }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Divider', 'uikit-editor-blocks' ), value: 'divider' },
                { label: __( 'Bullet', 'uikit-editor-blocks' ), value: 'bullet' },
                { label: __( 'Line', 'uikit-editor-blocks' ), value: 'line' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleDecoration: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Color', 'uikit-editor-blocks' ) }
              value={ titleColor }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                { label: __( 'Emphasis', 'uikit-editor-blocks' ), value: 'emphasis' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                { label: __( 'Success', 'uikit-editor-blocks' ), value: 'success' },
                { label: __( 'Warning', 'uikit-editor-blocks' ), value: 'warning' },
                { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                { label: __( 'Background', 'uikit-editor-blocks' ), value: 'background' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleColor: value } );
              }}
            />
            <SelectControl 
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ titleElement }
              options={[
                { label: __( 'H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Div', 'uikit-editor-blocks' ), value: 'div' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleElement: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ titleTopMargin }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleTopMargin: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Meta', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ metaStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Color', 'uikit-editor-blocks' ) }
              value={ metaColor }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                { label: __( 'Emphasis', 'uikit-editor-blocks' ), value: 'emphasis' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                { label: __( 'Success', 'uikit-editor-blocks' ), value: 'success' },
                { label: __( 'Warning', 'uikit-editor-blocks' ), value: 'warning' },
                { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                { label: __( 'Background', 'uikit-editor-blocks' ), value: 'background' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaColor: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Alignment', 'uikit-editor-blocks' ) }
              value={ metaAlignment }
              options={[
                { label: __( 'Above Title', 'uikit-editor-blocks' ), value: 'above-title' },
                { label: __( 'Below Title', 'uikit-editor-blocks' ), value: 'below-title' },
                { label: __( 'Below Content', 'uikit-editor-blocks' ), value: 'below-content' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaAlignment: value } );
              }}
            />
            <SelectControl 
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ metaElement }
              options={[
                { label: __( 'H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Div', 'uikit-editor-blocks' ), value: 'div' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaElement: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ metaTopMargin }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaTopMargin: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Content', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ contentStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
              ]}
              onChange={( value ) => {
                setAttributes( { contentStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ contentTopMargin }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
              ]}
              onChange={( value ) => {
                setAttributes( { contentTopMargin: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Link', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ linkStyle }
              options={[
                { label: __( 'Button Default', 'uikit-editor-blocks' ), value: 'button-default' },
                { label: __( 'Button Primary', 'uikit-editor-blocks' ), value: 'button-primary' },
                { label: __( 'Button Secondary', 'uikit-editor-blocks' ), value: 'button-secondary' },
                { label: __( 'Button Danger', 'uikit-editor-blocks' ), value: 'button-danger' },
                { label: __( 'Button Text', 'uikit-editor-blocks' ), value: 'button-text' },
                { label: __( 'Link', 'uikit-editor-blocks' ), value: 'link' },
                { label: __( 'Link Muted', 'uikit-editor-blocks' ), value: 'link-muted' },
                { label: __( 'Link Text', 'uikit-editor-blocks' ), value: 'link-text' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkStyle: value } );
              }}
            />
            { ( linkStyle == 'button-default' || linkStyle == 'button-primary' || linkStyle == 'button-secondary' || linkStyle == 'button-danger' || linkStyle == 'button-text' ) &&
            <SelectControl 
              label={ __( 'Button Size', 'uikit-editor-blocks' ) }
              value={ linkButtonSize }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkButtonSize: value } );
              }}
            />
            }
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ linkTopMargin }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkTopMargin: value } );
              }}
            />
          </PanelBody>
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs}>
          { link ? (
            <a
              {...overlay_attrs}
              onClick={ ( event ) => event.preventDefault() }
            >
              <img {...image_attrs} />
              { mode === 'cover' ? <div {...cover_attrs}></div> : null }
              <div {...overlay_inner_attrs}>
                <div {...overlay_container_attrs}>
                  { metaAlignment === 'above-title' ? (
                    <RichText
                      tagName={ MetaTag }
                      value={ metaText || '' }
                      onChange={ ( value ) => setAttributes( { metaText: value } ) }
                      placeholder={ __( 'Enter meta...', 'uikit-editor-blocks' ) }
                      allowedFormats={ [] }
                      keepPlaceholderOnFocus
                      {...meta_attrs}
                    />
                  ) : null }
                  <RichText
                    tagName={ TitleTag }
                    value={ titleText || '' }
                    onChange={ ( value ) => setAttributes( { titleText: value } ) }
                    placeholder={ __( 'Enter title...', 'uikit-editor-blocks' ) }
                    allowedFormats={ [] }
                    keepPlaceholderOnFocus
                    {...title_attrs}
                  />
                  { metaAlignment === 'below-title' ? (
                    <RichText
                      tagName={ MetaTag }
                      value={ metaText || '' }
                      onChange={ ( value ) => setAttributes( { metaText: value } ) }
                      placeholder={ __( 'Enter meta...', 'uikit-editor-blocks' ) }
                      allowedFormats={ [] }
                      keepPlaceholderOnFocus
                      {...meta_attrs}
                    />
                  ) : null }
                  <RichText
                    tagName='div'
                    value={ contentText || '' }
                    onChange={ ( value ) => setAttributes( { contentText: value } ) }
                    placeholder={ __( 'Enter content...', 'uikit-editor-blocks' ) }
                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
                    keepPlaceholderOnFocus
                    {...content_attrs}
                  />
                  { metaAlignment === 'below-content' ? (
                    <RichText
                      tagName={ MetaTag }
                      value={ metaText || '' }
                      onChange={ ( value ) => setAttributes( { metaText: value } ) }
                      placeholder={ __( 'Enter meta...', 'uikit-editor-blocks' ) }
                      allowedFormats={ [] }
                      keepPlaceholderOnFocus
                      {...meta_attrs}
                    />
                  ) : null }
                  { linkText && linkUrl ? (
                    <div {...link_container_attrs}>
                      <div {...link_text_attrs}>{ linkText }</div>
                    </div>
                  ) : null }
                </div>
              </div>
            </a>
          ) : (
            <div {...overlay_attrs}>
              <img {...image_attrs} />
              { mode === 'cover' ? <div {...cover_attrs}></div> : null }
              <div {...overlay_inner_attrs}>
                <div {...overlay_container_attrs}>
                  { metaAlignment === 'above-title' ? (
                    <RichText
                      tagName={ MetaTag }
                      value={ metaText || '' }
                      onChange={ ( value ) => setAttributes( { metaText: value } ) }
                      placeholder={ __( 'Enter meta...', 'uikit-editor-blocks' ) }
                      allowedFormats={ [] }
                      keepPlaceholderOnFocus
                      {...meta_attrs}
                    />
                  ) : null }
                  <RichText
                    tagName={ TitleTag }
                    value={ titleText || '' }
                    onChange={ ( value ) => setAttributes( { titleText: value } ) }
                    placeholder={ __( 'Enter title...', 'uikit-editor-blocks' ) }
                    allowedFormats={ [] }
                    keepPlaceholderOnFocus
                    {...title_attrs}
                  />
                  { metaAlignment === 'below-title' ? (
                    <RichText
                      tagName={ MetaTag }
                      value={ metaText || '' }
                      onChange={ ( value ) => setAttributes( { metaText: value } ) }
                      placeholder={ __( 'Enter meta...', 'uikit-editor-blocks' ) }
                      allowedFormats={ [] }
                      keepPlaceholderOnFocus
                      {...meta_attrs}
                    />
                  ) : null }
                  <RichText
                    tagName='div'
                    value={ contentText || '' }
                    onChange={ ( value ) => setAttributes( { contentText: value } ) }
                    placeholder={ __( 'Enter content...', 'uikit-editor-blocks' ) }
                    allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
                    keepPlaceholderOnFocus
                    {...content_attrs}
                  />
                  { metaAlignment === 'below-content' ? (
                    <RichText
                      tagName={ MetaTag }
                      value={ metaText || '' }
                      onChange={ ( value ) => setAttributes( { metaText: value } ) }
                      placeholder={ __( 'Enter meta...', 'uikit-editor-blocks' ) }
                      allowedFormats={ [] }
                      keepPlaceholderOnFocus
                      {...meta_attrs}
                    />
                  ) : null }
                  { linkText && linkUrl ? (
                    <div {...link_container_attrs}>
                      <a {...link_text_attrs}>{ linkText }</a>
                    </div>
                  ) : null }
                </div>
              </div>
            </div>
          ) }
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withSelect( ( select, props ) => {
    const { getMedia } = select( 'core' );
    const { imageMediaId } = props.attributes;

    return {
      image: imageMediaId ? getMedia( imageMediaId ) : imageMediaId,
    };
  } )
)( UikitOverlayEdit );
