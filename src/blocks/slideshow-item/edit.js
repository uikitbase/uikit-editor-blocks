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
} =  BlockEditor || Editor;

import placeholderImage from '../../assets/images/image-placeholder.png';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitSlideshowItemEdit extends Component {
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
      textColor,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const parentTextColor               = context?.['uikit-editor-blocks/slideshow-textColor'] || '';
    const parentOverlayContainerWidth   = context?.['uikit-editor-blocks/slideshow-overlayContainerWidth'] || '';
    const parentOverlayContainerPadding = context?.['uikit-editor-blocks/slideshow-overlayContainerPadding'] || '';
    const parentOverlayMargin           = context?.['uikit-editor-blocks/slideshow-overlayMargin'] || '';
    const parentOverlayPosition         = context?.['uikit-editor-blocks/slideshow-overlayPosition'] || '';
    const parentOverlayStyle            = context?.['uikit-editor-blocks/slideshow-overlayStyle'] || '';
    const parentOverlayPadding          = context?.['uikit-editor-blocks/slideshow-overlayPadding'] || '';
    const parentOverlayWidth            = context?.['uikit-editor-blocks/slideshow-overlayWidth'] || '';
    const parentOverlayAnimation        = context?.['uikit-editor-blocks/slideshow-overlayAnimation'] || '';
    const parentTitleStyle              = context?.['uikit-editor-blocks/slideshow-titleStyle'] || '';
    const parentTitleDecoration         = context?.['uikit-editor-blocks/slideshow-titleDecoration'] || '';
    const parentTitleColor              = context?.['uikit-editor-blocks/slideshow-titleColor'] || '';
    const parentTitleElement            = context?.['uikit-editor-blocks/slideshow-titleElement'] || '';
    const parentTitleTopMargin          = context?.['uikit-editor-blocks/slideshow-titleTopMargin'] || '';
    const parentMetaStyle               = context?.['uikit-editor-blocks/slideshow-metaStyle'] || '';
    const parentMetaColor               = context?.['uikit-editor-blocks/slideshow-metaColor'] || '';
    const parentMetaAlignment           = context?.['uikit-editor-blocks/slideshow-metaAlignment'] || '';
    const parentMetaElement             = context?.['uikit-editor-blocks/slideshow-metaElement'] || '';
    const parentMetaTopMargin           = context?.['uikit-editor-blocks/slideshow-metaTopMargin'] || '';
    const parentContentStyle            = context?.['uikit-editor-blocks/slideshow-contentStyle'] || '';
    const parentContentTopMargin        = context?.['uikit-editor-blocks/slideshow-contentTopMargin'] || '';
    const parentLinkStyle               = context?.['uikit-editor-blocks/slideshow-linkStyle'] || '';
    const parentLinkButtonSize          = context?.['uikit-editor-blocks/slideshow-linkButtonSize'] || '';
    const parentLinkTopMargin           = context?.['uikit-editor-blocks/slideshow-linkTopMargin'] || '';

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const image_attrs = [];

    const cover_attrs   = [];
    const cover_classes = ['uk-position-cover', 'uk-flex'];

    const overlay_attrs   = [];
    const overlay_classes = ['uk-margin-remove-first-child'];

    const meta_attrs   = [];
    const meta_classes = [];

    const title_attrs   = [];
    const title_classes = ['uk-margin-remove-bottom' ];

    const content_attrs   = [];
    const content_classes = ['uk-panel'];

    const link_container_attrs   = [];
    const link_container_classes = [];

    const link_text_attrs   = [];
    const link_text_classes = [];

    const textColor_variants = {
      light: 'uk-light',
      dark: 'uk-dark',
    };

    const parent_textColor_variants = {
      light: 'uk-light',
      dark: 'uk-dark',
    };

    const parent_overlayContainerWidth_variants = {
      default: 'uk-container',
      small: 'uk-container uk-container-small',
      large: 'uk-container uk-container-large',
      xlarge: 'uk-container uk-container-xlarge',
      expand: 'uk-container uk-container-expand',
    };

    const parent_overlayContainerPadding_variants = {
      default: 'uk-section',
      xsmall: 'uk-section-xsmall',
      small: 'uk-section-small',
      large: 'uk-section-large',
      xlarge: 'uk-section-xlarge',
    };

    const parent_overlayMargin_variants = {
      default: 'uk-padding',
      small: 'uk-padding-small',
      large: 'uk-padding-large',
    };

    const parent_overlayPosition_variants = {
      top: 'uk-flex-top',
      bottom: 'uk-flex-bottom',
      left: 'uk-flex-left',
      right: 'uk-flex-right',
      'top-left': 'uk-flex-top uk-flex-left',
      'top-center': 'uk-flex-top uk-flex-center',
      'top-right': 'uk-flex-top uk-flex-right',
      'center-left': 'uk-flex-middle uk-flex-left',
      'center-center': 'uk-flex-middle uk-flex-center',
      'center-right': 'uk-flex-middle uk-flex-right',
      'bottom-left': 'uk-flex-bottom uk-flex-left',
      'bottom-center': 'uk-flex-bottom uk-flex-center',
      'bottom-right': 'uk-flex-bottom uk-flex-right',
    };

    const parent_overlayStyle_variants = {
      'overlay-default': 'uk-overlay-default',
      'overlay-primary': 'uk-overlay-primary',
      'tile-default': 'uk-tile-default',
      'tile-muted': 'uk-tile-muted',
      'tile-primary': 'uk-tile-primary',
      'tile-secondary': 'uk-tile-secondary',
    };

    const parent_overlayPadding_variants = {
      small: 'uk-padding-small',
      large: 'uk-padding-large',
    };

    const parent_overlayWidth_variants = {
      small: 'uk-width-small',
      medium: 'uk-width-medium',
      large: 'uk-width-large',
      xlarge: 'uk-width-xlarge',
      '2xlarge': 'uk-width-2xlarge',
    };

    const parent_overlayAnimation_variants = {
      fade: 'uk-transition-fade',
      'scale-up': 'uk-transition-scale-up',
      'scale-down': 'uk-transition-scale-down',
      'slide-top-small': 'uk-transition-slide-top-small',
      'slide-bottom-small': 'uk-transition-slide-bottom-small',
      'slide-left-small': 'uk-transition-slide-left-small',
      'slide-right-small': 'uk-transition-slide-right-small',
      'slide-top-medium': 'uk-transition-slide-top-medium',
      'slide-bottom-medium': 'uk-transition-slide-bottom-medium',
      'slide-left-medium': 'uk-transition-slide-left-medium',
      'slide-right-medium': 'uk-transition-slide-right-medium',
      'slide-top': 'uk-transition-slide-top',
      'slide-bottom': 'uk-transition-slide-bottom',
      'slide-left': 'uk-transition-slide-left',
      'slide-right': 'uk-transition-slide-right',
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

    const linkStyle_variants = {
      'button-default': 'uk-button uk-button-default',
      'button-primary': 'uk-button uk-button-primary',
      'button-secondary': 'uk-button uk-button-secondary',
      'button-danger': 'uk-button uk-button-danger',
      'button-text': 'uk-button uk-button-text',
      'link': 'uk-link',
      'link-muted': 'uk-link-muted',
      'link-text': 'uk-link-text',
    };

    const linkButtonSize_variants = {
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

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( parentOverlayContainerWidth ) {
      const v = parentOverlayContainerWidth;
      if ( parent_overlayContainerWidth_variants[ v ] ) {
        cover_classes.push( parent_overlayContainerWidth_variants[ v ] );
      }

      if ( parentOverlayContainerPadding ) {
        const pv = parentOverlayContainerPadding;
        if ( parent_overlayContainerPadding_variants[ pv ] ) {
          cover_classes.push( parent_overlayContainerPadding_variants[ pv ] );
        }
      }
    } else {
      if ( parentOverlayMargin ) {
        const mv = parentOverlayMargin;
        if ( parent_overlayMargin_variants[ mv ] ) {
          cover_classes.push( parent_overlayMargin_variants[ mv ] );
        }
      }
    }

    if ( parentOverlayPosition ) {
      const pos = parentOverlayPosition;
      if ( parent_overlayPosition_variants[ pos ] ) {
        cover_classes.push( parent_overlayPosition_variants[ pos ] );
      }
    }

    if ( textColor ) {
      if ( textColor_variants[ textColor ] ) {
        overlay_classes.push( textColor_variants[ textColor ] );
      }
    } else if ( parentTextColor ) {
      const tcv = parentTextColor;
      if ( parent_textColor_variants[ tcv ] ) {
        overlay_classes.push( parent_textColor_variants[ tcv ] );
      }
    }

    if ( parentOverlayStyle ) {
      const osv = parentOverlayStyle;
      if ( parent_overlayStyle_variants[ osv ] ) {
        overlay_classes.push( parent_overlayStyle_variants[ osv ] );
      }
      if ( parentOverlayPadding ) {
        const opv = parentOverlayPadding;
        if ( parent_overlayPadding_variants[ opv ] ) {
          overlay_classes.push( parent_overlayPadding_variants[ opv ] );
        }
      }
    } else {
      overlay_classes.push( 'uk-panel' );
    }

    if ( parentOverlayWidth ) {
      const ow = parentOverlayWidth;
      if ( parent_overlayWidth_variants[ ow ] ) {
        overlay_classes.push( parent_overlayWidth_variants[ ow ] );
      }
    }

    if ( parentOverlayAnimation ) {
      const oa = parentOverlayAnimation;
      if ( parent_overlayAnimation_variants[ oa ] ) {
        overlay_classes.push( parent_overlayAnimation_variants[ oa ] );
      }
    }

    if ( parentMetaStyle ) {
      const ms = parentMetaStyle;
      if ( parent_metaStyle_variants[ ms ] ) {
        meta_classes.push( parent_metaStyle_variants[ ms ] );
      }
    }
    if ( parentMetaColor ) {
      const mc = parentMetaColor;
      if ( parent_metaColor_variants[ mc ] ) {
        meta_classes.push( parent_metaColor_variants[ mc ] );
      }
    }
    if ( parentMetaTopMargin ) {
      const mt = parentMetaTopMargin;
      if ( parent_metaTopMargin_variants[ mt ] ) {
        meta_classes.push( parent_metaTopMargin_variants[ mt ] );
      }
    }

    if ( parentTitleStyle ) {
      const ts = parentTitleStyle;
      if ( parent_titleStyle_variants[ ts ] ) {
        title_classes.push( parent_titleStyle_variants[ ts ] );
      }
    }
    if ( parentTitleDecoration ) {
      const td = parentTitleDecoration;
      if ( parent_titleDecoration_variants[ td ] ) {
        title_classes.push( parent_titleDecoration_variants[ td ] );
      }
    }
    if ( parentTitleColor ) {
      const tc = parentTitleColor;
      if ( parent_titleColor_variants[ tc ] ) {
        title_classes.push( parent_titleColor_variants[ tc ] );
      }
    }
    if ( parentTitleTopMargin ) {
      const ttm = parentTitleTopMargin;
      if ( parent_titleTopMargin_variants[ ttm ] ) {
        title_classes.push( parent_titleTopMargin_variants[ ttm ] );
      }
    }

    if ( parentContentStyle ) {
      const cs = parentContentStyle;
      if ( parent_contentStyle_variants[ cs ] ) {
        content_classes.push( parent_contentStyle_variants[ cs ] );
      }
    }
    if ( parentContentTopMargin ) {
      const ctm = parentContentTopMargin;
      if ( parent_contentTopMargin_variants[ ctm ] ) {
        content_classes.push( parent_contentTopMargin_variants[ ctm ] );
      }
    }

    if ( parentLinkTopMargin ) {
      const ltm = parentLinkTopMargin;
      if ( parent_linkTopMargin_variants[ ltm ] ) {
        link_container_classes.push( parent_linkTopMargin_variants[ ltm ] );
      }
    }

    if ( parentLinkStyle ) {
      const ls = parentLinkStyle;
      if ( linkStyle_variants[ ls ] ) {
        link_text_classes.push( linkStyle_variants[ ls ] );
      }
      if ( ls === 'button-default' || ls === 'button-primary' || ls === 'button-secondary' || ls === 'button-danger' || ls === 'button-text' ) {
        const lbs = parentLinkButtonSize;
        if ( lbs && linkButtonSize_variants[ lbs ] ) {
          link_text_classes.push( linkButtonSize_variants[ lbs ] );
        }
      }
    }

    if ( wrapper_classes.length ) {
      wrapper_attrs.className = wrapper_classes.join( ' ' );
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

    image_attrs['data-uk-cover'] = '';

    if ( cover_classes.length ) {
      cover_attrs.className = cover_classes.join( ' ' );
    }

    if ( overlay_classes.length ) {
      overlay_attrs.className = overlay_classes.join( ' ' );
    }

    if ( meta_classes.length ) {
      meta_attrs.className = meta_classes.join( ' ' );
    }

    if ( title_classes.length ) {
      title_attrs.className = title_classes.join( ' ' );
    }

    if ( content_classes.length ) {
      content_attrs.className = content_classes.join( ' ' );
    }

    if ( link_container_classes.length ) {
      link_container_attrs.className = link_container_classes.join( ' ' );
    }

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

    if ( link_text_classes.length ) {
      link_text_attrs.className = link_text_classes.join( ' ' );
    }

    const MetaTag = parentMetaElement || 'div';
    const TitleTag = parentTitleElement || 'div';
    const metaAlignment = parentMetaAlignment;

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
            { imageMediaId &&
              <TextControl
                label={ __( 'Image Alt', 'uikit-editor-blocks' ) }
                value={ imageAlt }
                onChange={ ( value ) => setAttributes( { imageAlt: value } ) }
              />
            }
            <TextControl
              label={ __( 'Link url', 'uikit-editor-blocks' ) }
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
          <PanelBody title={ __( 'Slideshow Item', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Text Color', 'uikit-editor-blocks' ) }
              value={ textColor }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Light', 'uikit-editor-blocks' ), value: 'light' },
                { label: __( 'Dark', 'uikit-editor-blocks' ), value: 'dark' },
              ]}
              onChange={( value ) => {
                setAttributes( { textColor: value } );
              }}
            />
          </PanelBody>
        </InspectorControls>
        <div { ...wrapper_attrs }>
          <img { ...image_attrs } />
          <div { ...cover_attrs }>
            <div { ...overlay_attrs }>
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
              { linkUrl ? (
                <div { ...link_container_attrs }>
                  <a { ...link_text_attrs }>{ linkText }</a>
                </div>
              ) : null }
            </div>
          </div>
        </div>
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
)( UikitSlideshowItemEdit );
