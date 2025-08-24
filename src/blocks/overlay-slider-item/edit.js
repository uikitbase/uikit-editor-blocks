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
  TextControl,
  Button,
  Spinner,
  ResponsiveWrapper,
  ToggleControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const {
  InspectorControls,
  MediaUploadCheck,
  MediaUpload,
  RichText,
} = BlockEditor || Editor;

import placeholderImage from '../../assets/images/image-placeholder.png';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitOverlaySliderItemEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      image,
      clientId,
      context,
    } = this.props;

    const {
      blockId,
      imageMediaId,
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
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const parentSliderWidth        = context?.['uikit-editor-blocks/overlay-slider-sliderWidth'] || '';
    const parentSliderHeight       = context?.['uikit-editor-blocks/overlay-slider-sliderHeight'] || '';
    const parentSliderMinHeight    = context?.['uikit-editor-blocks/overlay-slider-sliderMinHeight'] || '';
    const parentSliderDefaultWidth = context?.['uikit-editor-blocks/overlay-slider-sliderDefaultWidth'] || '';
    const parentSliderSmallWidth   = context?.['uikit-editor-blocks/overlay-slider-sliderSmallWidth'] || '';
    const parentSliderMediumWidth  = context?.['uikit-editor-blocks/overlay-slider-sliderMediumWidth'] || '';
    const parentSliderLargeWidth   = context?.['uikit-editor-blocks/overlay-slider-sliderLargeWidth'] || '';
    const parentSliderXlargeWidth  = context?.['uikit-editor-blocks/overlay-slider-sliderXlargeWidth'] || '';
    const parentOverlayMode        = context?.['uikit-editor-blocks/overlay-slider-overlayMode'] || '';
    const parentOverlayHover       = context?.['uikit-editor-blocks/overlay-slider-overlayHover'] || '';
    const parentOverlayStyle       = context?.['uikit-editor-blocks/overlay-slider-overlayStyle'] || '';
    const parentOverlayTextColor   = context?.['uikit-editor-blocks/overlay-slider-overlayTextColor'] || '';
    const parentOverlayPadding     = context?.['uikit-editor-blocks/overlay-slider-overlayPadding'] || '';
    const parentOverlayPosition    = context?.['uikit-editor-blocks/overlay-slider-overlayPosition'] || '';
    const parentOverlayMargin      = context?.['uikit-editor-blocks/overlay-slider-overlayMargin'] || '';
    const parentOverlayMaxWidth    = context?.['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] || '';
    const parentOverlayLink        = context?.['uikit-editor-blocks/overlay-slider-overlayLink'] || '';
    const parentImageWidth         = context?.['uikit-editor-blocks/overlay-slider-imageWidth'] || '';
    const parentImageHeight        = context?.['uikit-editor-blocks/overlay-slider-imageHeight'] || '';
    const parentTitleStyle         = context?.['uikit-editor-blocks/overlay-slider-titleStyle'] || '';
    const parentTitleDecoration    = context?.['uikit-editor-blocks/overlay-slider-titleDecoration'] || '';
    const parentTitleColor         = context?.['uikit-editor-blocks/overlay-slider-titleColor'] || '';
    const parentTitleElement       = context?.['uikit-editor-blocks/overlay-slider-titleElement'] || '';
    const parentTitleTopMargin     = context?.['uikit-editor-blocks/overlay-slider-titleTopMargin'] || '';
    const parentMetaStyle          = context?.['uikit-editor-blocks/overlay-slider-metaStyle'] || '';
    const parentMetaColor          = context?.['uikit-editor-blocks/overlay-slider-metaColor'] || '';
    const parentMetaAlignment      = context?.['uikit-editor-blocks/overlay-slider-metaAlignment'] || '';
    const parentMetaElement        = context?.['uikit-editor-blocks/overlay-slider-metaElement'] || '';
    const parentMetaTopMargin      = context?.['uikit-editor-blocks/overlay-slider-metaTopMargin'] || '';
    const parentContentStyle       = context?.['uikit-editor-blocks/overlay-slider-contentStyle'] || '';
    const parentContentTopMargin   = context?.['uikit-editor-blocks/overlay-slider-contentTopMargin'] || '';
    const parentLinkStyle          = context?.['uikit-editor-blocks/overlay-slider-linkStyle'] || '';
    const parentLinkButtonSize     = context?.['uikit-editor-blocks/overlay-slider-linkButtonSize'] || '';
    const parentLinkTopMargin      = context?.['uikit-editor-blocks/overlay-slider-linkTopMargin'] || '';

    const parentDeps = {
      sliderWidth: parentSliderWidth,
      sliderDefaultWidth: parentSliderDefaultWidth,
      sliderSmallWidth: parentSliderSmallWidth,
      sliderMediumWidth: parentSliderMediumWidth,
      sliderLargeWidth: parentSliderLargeWidth,
      sliderXlargeWidth: parentSliderXlargeWidth,
      overlayTextColor: parentOverlayTextColor,
    };
    const depsHash = JSON.stringify(parentDeps);

    if ( attributes.__parentDepsHash !== depsHash ) {
      setAttributes({ __parentDepsHash: depsHash });
    }

    const overlay_attrs   = [];
    const overlay_classes = ['uk-cover-container'];
    const overlay_styles  = [];

    const image_attrs   = [];
    const image_classes = ['uk-transition-opaque'];
    const image_styles  = [];

    const invisible_image_attrs   = [];
    const invisible_image_classes = ['uk-invisible'];
    let invisible_image_show      = false;

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

    const parent_style_variants = {
      'overlay-default': 'uk-overlay-default',
      'overlay-primary': 'uk-overlay-primary',
      'tile-default': 'uk-tile-default',
      'tile-muted': 'uk-tile-muted',
      'tile-primary': 'uk-tile-primary',
      'tile-secondary': 'uk-tile-secondary',
    };

    const parent_padding_variants = {
      small: 'uk-padding-small',
      large: 'uk-padding-large',
      none: 'uk-padding-remove',
    };

    const parent_position_variants = {
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

    const parent_margin_variants = {
      small: 'uk-position-small',
      medium: 'uk-position-medium',
      large: 'uk-position-large',
    };

    const parent_maxWidth_variants = {
      small: 'uk-width-small',
      medium: 'uk-width-medium',
      large: 'uk-width-large',
      xlarge: 'uk-width-xlarge',
      '2xlarge': 'uk-width-2xlarge',
    };

    const parent_titleStyle_variants = {
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

    const parent_titleDecoration_variants = {
      divider: 'uk-heading-divider',
      bullet: 'uk-heading-bullet',
      line: 'uk-heading-line',
    };

    const parent_titleColor_variants = {
      muted: 'uk-text-muted',
      emphasis: 'uk-text-emphasis',
      primary: 'uk-text-primary',
      secondary: 'uk-text-secondary',
      success: 'uk-text-success',
      warning: 'uk-text-warning',
      danger: 'uk-text-danger',
      background: 'uk-text-background',
    };

    const parent_titleTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    const parent_metaStyle_variants = {
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

    const parent_metaColor_variants = {
      muted: 'uk-text-muted',
      emphasis: 'uk-text-emphasis',
      primary: 'uk-text-primary',
      secondary: 'uk-text-secondary',
      success: 'uk-text-success',
      warning: 'uk-text-warning',
      danger: 'uk-text-danger',
      background: 'uk-text-background',
    };

    const parent_metaTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    const parent_contentStyle_variants = {
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

    const parent_contentTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    const parent_linkStyle_variants = {
      'button-default': 'uk-button uk-button-default',
      'button-primary': 'uk-button uk-button-primary',
      'button-secondary': 'uk-button uk-button-secondary',
      'button-danger': 'uk-button uk-button-danger',
      'button-text': 'uk-button uk-button-text',
      link: 'uk-link',
      'link-muted': 'uk-link-muted',
      'link-text': 'uk-link-text',
    };

    const parent_linkButtonSize_variants = {
      small: 'uk-button-small',
      large: 'uk-button-large',
    };

    const parent_linkTopMargin_variants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    if ( parentOverlayHover ) {
      overlay_classes.push('uk-transition-toggle');
    }

    if ( parentOverlayLink ) {
      overlay_classes.push('uk-link-toggle');
    }

    if ( parentSliderMinHeight ) {
        if ( ! parentSliderWidth || parentSliderWidth === 'fixed' && parentSliderWidth !== 'viewport' ) {
            overlay_styles.minHeight = `${ parentSliderMinHeight }px`;
        }
    }

    if ( imageMediaId && parentImageWidth ) {
      image_styles.width = `${ parentImageWidth }px`;
    }

    if ( imageMediaId && parentImageHeight ) {
      image_styles.height = `${ parentImageHeight }px`;
    }

    if ( parentSliderWidth === 'fixed' ) {
        if ( parentSliderHeight === '' ) {
            if ( parentSliderMinHeight ) {
                invisible_image_show = true;
            }
        }
    } else if( ! parentSliderWidth ) {
        invisible_image_show = true;
    }

    if ( parentOverlayMode === 'cover' ) {
      if ( parentOverlayHover ) {
        cover_classes.push('uk-transition-fade');
      }
      if ( parentOverlayStyle && parent_style_variants[ parentOverlayStyle ] ) {
        cover_classes.push( parent_style_variants[ parentOverlayStyle ] );
      }
      if ( parentOverlayMargin && parent_margin_variants[ parentOverlayMargin ] ) {
        cover_classes.push( parent_margin_variants[ parentOverlayMargin ] );
      }
    }

    if ( parentOverlayMode === 'caption' ) {
      if ( parentOverlayHover ) {
        overlay_inner_classes.push('uk-transition-fade');
      }
      if ( parentOverlayStyle && parent_style_variants[ parentOverlayStyle ] ) {
        overlay_inner_classes.push( parent_style_variants[ parentOverlayStyle ] );
      }
      if ( parentOverlayMargin && parent_margin_variants[ parentOverlayMargin ] ) {
        overlay_inner_classes.push( parent_margin_variants[ parentOverlayMargin ] );
      }
    }

    if ( parentOverlayPadding && parent_padding_variants[ parentOverlayPadding ] ) {
      overlay_inner_classes.push( parent_padding_variants[ parentOverlayPadding ] );
    }

    if ( parentOverlayPosition && parent_position_variants[ parentOverlayPosition ] ) {
      overlay_inner_classes.push( parent_position_variants[ parentOverlayPosition ] );
    }

    if ( parentOverlayMaxWidth && parent_maxWidth_variants[ parentOverlayMaxWidth ] ) {
      overlay_container_classes.push( parent_maxWidth_variants[ parentOverlayMaxWidth ] );
    }

    if ( parentMetaStyle && parent_metaStyle_variants[ parentMetaStyle ] ) {
      meta_classes.push( parent_metaStyle_variants[ parentMetaStyle ] );
    }

    if ( parentMetaColor && parent_metaColor_variants[ parentMetaColor ] ) {
      meta_classes.push( parent_metaColor_variants[ parentMetaColor ] );
    }

    if ( parentMetaTopMargin && parent_metaTopMargin_variants[ parentMetaTopMargin ] ) {
      meta_classes.push( parent_metaTopMargin_variants[ parentMetaTopMargin ] );
    }

    if ( parentTitleStyle && parent_titleStyle_variants[ parentTitleStyle ] ) {
      title_classes.push( parent_titleStyle_variants[ parentTitleStyle ] );
    }

    if ( parentTitleDecoration && parent_titleDecoration_variants[ parentTitleDecoration ] ) {
      title_classes.push( parent_titleDecoration_variants[ parentTitleDecoration ] );
    }

    if ( parentTitleColor && parent_titleColor_variants[ parentTitleColor ] ) {
      title_classes.push( parent_titleColor_variants[ parentTitleColor ] );
    }

    if ( parentTitleTopMargin && parent_titleTopMargin_variants[ parentTitleTopMargin ] ) {
      title_classes.push( parent_titleTopMargin_variants[ parentTitleTopMargin ] );
    }

    if ( parentContentStyle && parent_contentStyle_variants[ parentContentStyle ] ) {
      content_classes.push( parent_contentStyle_variants[ parentContentStyle ] );
    }

    if ( parentContentTopMargin && parent_contentTopMargin_variants[ parentContentTopMargin ] ) {
      content_classes.push( parent_contentTopMargin_variants[ parentContentTopMargin ] );
    }

    if ( parentLinkTopMargin && parent_linkTopMargin_variants[ parentLinkTopMargin ] ) {
      link_container_classes.push( parent_linkTopMargin_variants[ parentLinkTopMargin ] );
    }

    if ( parentLinkStyle && parent_linkStyle_variants[ parentLinkStyle ] ) {
      link_text_classes.push( parent_linkStyle_variants[ parentLinkStyle ] );

      if ( ['button-default','button-primary','button-secondary','button-danger','button-text'].includes( parentLinkStyle ) ) {
        if ( parentLinkButtonSize && parent_linkButtonSize_variants[ parentLinkButtonSize ] ) {
          link_text_classes.push( parent_linkButtonSize_variants[ parentLinkButtonSize ] );
        }
      }
    }

    if ( parentOverlayLink ) {
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

    if ( Object.keys(overlay_styles).length ) {
      overlay_attrs.style = overlay_styles;
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

    if ( Object.keys(image_styles).length ) {
      image_attrs.style = image_styles;
    }

    if ( imageMediaId ) {
      if ( image && image.source_url ) {
        invisible_image_attrs.src = image.source_url;
      }

      if ( imageAlt ) {
        invisible_image_attrs.alt = imageAlt;
      }

      if ( image && image.media_details ) {
        if ( image.media_details.width ) {
          invisible_image_attrs.width = image.media_details.width;
        }

        if ( image.media_details.height ) {
          invisible_image_attrs.height = image.media_details.height;
        }
      }
    } else {
      invisible_image_attrs.src = placeholderImage;
    }

    if ( invisible_image_classes.length ) {
      invisible_image_attrs.className = invisible_image_classes.join(' ');
    }

    if ( parentSliderWidth === 'fixed' ) {
        if ( parentSliderHeight === '' ) {
            if ( parentSliderMinHeight ) {
                image_attrs['data-uk-cover'] = '';
            }
        } else if( parentSliderHeight === 'viewport' ) {
            image_attrs['data-uk-cover'] = '';
        }
    } else if( ! parentSliderWidth ) {
        image_attrs['data-uk-cover'] = '';
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

    if ( ! (parentOverlayLink) ) {
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

    const MetaTag = parentMetaElement ? parentMetaElement : 'div';
    const TitleTag = parentTitleElement ? parentTitleElement : 'div';

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

    const instructions = <p>{ __( 'To edit the background image, you need permission to upload media.', 'uikit-editor-blocks' ) }</p>;

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
                <MediaUploadCheck fallback={ instructions }>
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
            { imageMediaId &&
              <TextControl
                label={ __( 'Image Alt', 'uikit-editor-blocks' ) }
                value={ imageAlt }
                onChange={ ( value ) => setAttributes( { imageAlt: value } ) }
              />
            }
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
                  onChange={ ( value ) => setAttributes( { linkText: value } ) }
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
        </InspectorControls>
          { parentOverlayLink ? (
          <a
            {...overlay_attrs}
            onClick={ ( event ) => event.preventDefault() }
          >
            { invisible_image_show ? <img {...invisible_image_attrs} /> : null }
            <img {...image_attrs} />
            { parentOverlayMode === 'cover' ? <div {...cover_attrs}></div> : null }
            <div {...overlay_inner_attrs}>
              <div {...overlay_container_attrs}>
                { parentMetaAlignment === 'above-title' ? (
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
                { parentMetaAlignment === 'below-title' ? (
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
                { parentMetaAlignment === 'below-content' ? (
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
            { invisible_image_show ? <img {...invisible_image_attrs} /> : null }
            <img {...image_attrs} />
            { parentOverlayMode === 'cover' ? <div {...cover_attrs}></div> : null }
            <div {...overlay_inner_attrs}>
              <div {...overlay_container_attrs}>
                { parentMetaAlignment === 'above-title' ? (
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
                { parentMetaAlignment === 'below-title' ? (
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
                { parentMetaAlignment === 'below-content' ? (
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
      </Fragment>
    );
  }
}

export default compose(
  withSelect( ( select, props ) => {
    const { clientId } = props;
    const { getBlockOrder } = select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

    const { getMedia } = select( 'core' );
    const { imageMediaId } = props.attributes;

    return {
      image: imageMediaId ? getMedia( imageMediaId ) : null,
    };
  } )
)( UikitOverlaySliderItemEdit );
