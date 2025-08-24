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

const ALLOWED_MEDIA_TYPES = [ 'image' ];

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitPanelSliderItemEdit extends Component {
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
      titleText,
      metaText,
      contentText,
      imageMediaId,
      imageAlt,
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

    const parentSliderWidth        = context?.['uikit-editor-blocks/panel-slider-sliderWidth'] || '';
    const parentSliderDefaultWidth = context?.['uikit-editor-blocks/panel-slider-sliderDefaultWidth'] || '';
    const parentSliderSmallWidth   = context?.['uikit-editor-blocks/panel-slider-sliderSmallWidth'] || '';
    const parentSliderMediumWidth  = context?.['uikit-editor-blocks/panel-slider-sliderMediumWidth'] || '';
    const parentSliderLargeWidth   = context?.['uikit-editor-blocks/panel-slider-sliderLargeWidth'] || '';
    const parentSliderXlargeWidth  = context?.['uikit-editor-blocks/panel-slider-sliderXlargeWidth'] || '';
    const parentPanelStyle         = context?.['uikit-editor-blocks/panel-slider-panelStyle'] || '';
    const parentPanelPadding       = context?.['uikit-editor-blocks/panel-slider-panelPadding'] || '';
    const parentPanelLink          = context?.['uikit-editor-blocks/panel-slider-panelLink'] || '';
    const parentImageWidth         = context?.['uikit-editor-blocks/panel-slider-imageWidth'] || '';
    const parentImageHeight        = context?.['uikit-editor-blocks/panel-slider-imageHeight'] || '';
    const parentTitleStyle         = context?.['uikit-editor-blocks/panel-slider-titleStyle'] || '';
    const parentTitleDecoration    = context?.['uikit-editor-blocks/panel-slider-titleDecoration'] || '';
    const parentTitleColor         = context?.['uikit-editor-blocks/panel-slider-titleColor'] || '';
    const parentTitleElement       = context?.['uikit-editor-blocks/panel-slider-titleElement'] || '';
    const parentTitleTopMargin     = context?.['uikit-editor-blocks/panel-slider-titleTopMargin'] || '';
    const parentMetaStyle          = context?.['uikit-editor-blocks/panel-slider-metaStyle'] || '';
    const parentMetaColor          = context?.['uikit-editor-blocks/panel-slider-metaColor'] || '';
    const parentMetaAlignment      = context?.['uikit-editor-blocks/panel-slider-metaAlignment'] || '';
    const parentMetaElement        = context?.['uikit-editor-blocks/panel-slider-metaElement'] || '';
    const parentMetaTopMargin      = context?.['uikit-editor-blocks/panel-slider-metaTopMargin'] || '';
    const parentContentStyle       = context?.['uikit-editor-blocks/panel-slider-contentStyle'] || '';
    const parentContentTopMargin   = context?.['uikit-editor-blocks/panel-slider-contentTopMargin'] || '';
    const parentLinkStyle          = context?.['uikit-editor-blocks/panel-slider-linkStyle'] || '';
    const parentLinkButtonSize     = context?.['uikit-editor-blocks/panel-slider-linkButtonSize'] || '';
    const parentLinkTopMargin      = context?.['uikit-editor-blocks/panel-slider-linkTopMargin'] || '';

    const parentDeps = {
      sliderWidth: parentSliderWidth,
      sliderDefaultWidth: parentSliderDefaultWidth,
      sliderSmallWidth: parentSliderSmallWidth,
      sliderMediumWidth: parentSliderMediumWidth,
      sliderLargeWidth: parentSliderLargeWidth,
      sliderXlargeWidth: parentSliderXlargeWidth,
    };
    const depsHash = JSON.stringify(parentDeps);

    if ( attributes.__parentDepsHash !== depsHash ) {
      setAttributes({ __parentDepsHash: depsHash });
    }

    const panel_attrs   = [];
    const panel_classes = [];

    const image_attrs   = {};
    const image_styles  = [];
    const image_classes = [];

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

    const parent_panelStyle_variants = {
      'none':           'uk-panel',
      'card-default':   'uk-card uk-card-default',
      'card-primary':   'uk-card uk-card-primary',
      'card-secondary': 'uk-card uk-card-secondary',
      'card-hover':     'uk-card uk-card-hover',
      'tile-default':   'uk-panel uk-tile-default',
      'tile-muted':     'uk-panel uk-tile-muted',
      'tile-primary':   'uk-panel uk-tile-primary',
      'tile-secondary': 'uk-panel uk-tile-secondary',
    };

    const parent_panelPadding_variants = {
      'default': 'uk-padding',
      'small':   'uk-padding-small',
      'large':   'uk-padding-large',
    };

    const parent_titleStyle_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge':  'uk-heading-xlarge',
      'heading-large':   'uk-heading-large',
      'heading-medium':  'uk-heading-medium',
      'heading-small':   'uk-heading-small',
      'h1':              'uk-h1',
      'h2':              'uk-h2',
      'h3':              'uk-h3',
      'h4':              'uk-h4',
      'h5':              'uk-h5',
      'h6':              'uk-h6',
      'text-meta':       'uk-text-meta',
      'text-lead':       'uk-text-lead',
      'text-small':      'uk-text-small',
      'text-large':      'uk-text-large',
    };

    const parent_titleDecoration_variants = {
      'divider': 'uk-heading-divider',
      'bullet':  'uk-heading-bullet',
      'line':    'uk-heading-line',
    };

    const parent_titleColor_variants = {
      'muted':      'uk-text-muted',
      'emphasis':   'uk-text-emphasis',
      'primary':    'uk-text-primary',
      'secondary':  'uk-text-secondary',
      'success':    'uk-text-success',
      'warning':    'uk-text-warning',
      'danger':     'uk-text-danger',
      'background': 'uk-text-background',
    };

    const parent_titleTopMargin_variants = {
      'default': 'uk-margin-top',
      'small':   'uk-margin-small-top',
      'medium':  'uk-margin-medium-top',
      'large':   'uk-margin-large-top',
      'xlarge':  'uk-margin-xlarge-top',
    };

    const parent_metaStyle_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge':  'uk-heading-xlarge',
      'heading-large':   'uk-heading-large',
      'heading-medium':  'uk-heading-medium',
      'heading-small':   'uk-heading-small',
      'h1':              'uk-h1',
      'h2':              'uk-h2',
      'h3':              'uk-h3',
      'h4':              'uk-h4',
      'h5':              'uk-h5',
      'h6':              'uk-h6',
      'text-meta':       'uk-text-meta',
      'text-lead':       'uk-text-lead',
      'text-small':      'uk-text-small',
      'text-large':      'uk-text-large',
    };

    const parent_metaColor_variants = {
      'muted':      'uk-text-muted',
      'emphasis':   'uk-text-emphasis',
      'primary':    'uk-text-primary',
      'secondary':  'uk-text-secondary',
      'success':    'uk-text-success',
      'warning':    'uk-text-warning',
      'danger':     'uk-text-danger',
      'background': 'uk-text-background',
    };

    const parent_metaTopMargin_variants = {
      'default': 'uk-margin-top',
      'small':   'uk-margin-small-top',
      'medium':  'uk-margin-medium-top',
      'large':   'uk-margin-large-top',
      'xlarge':  'uk-margin-xlarge-top',
    };

    const parent_contentStyle_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge':  'uk-heading-xlarge',
      'heading-large':   'uk-heading-large',
      'heading-medium':  'uk-heading-medium',
      'heading-small':   'uk-heading-small',
      'h1':              'uk-h1',
      'h2':              'uk-h2',
      'h3':              'uk-h3',
      'h4':              'uk-h4',
      'h5':              'uk-h5',
      'h6':              'uk-h6',
      'text-meta':       'uk-text-meta',
      'text-lead':       'uk-text-lead',
      'text-small':      'uk-text-small',
      'text-large':      'uk-text-large',
    };

    const parent_contentTopMargin_variants = {
      'default': 'uk-margin-top',
      'small':   'uk-margin-small-top',
      'medium':  'uk-margin-medium-top',
      'large':   'uk-margin-large-top',
      'xlarge':  'uk-margin-xlarge-top',
    };

    const parent_linkStyle_variants = {
      'button-default':   'uk-button uk-button-default',
      'button-primary':   'uk-button uk-button-primary',
      'button-secondary': 'uk-button uk-button-secondary',
      'button-danger':    'uk-button uk-button-danger',
      'button-text':      'uk-button uk-button-text',
      'link':             'uk-link',
      'link-muted':       'uk-link-muted',
      'link-text':        'uk-link-text',
    };

    const parent_linkButtonSize_variants = {
      'small': 'uk-button-small',
      'large': 'uk-button-large',
    };

    const parent_linkTopMargin_variants = {
      'default': 'uk-margin-top',
      'small':   'uk-margin-small-top',
      'medium':  'uk-margin-medium-top',
      'large':   'uk-margin-large-top',
      'xlarge':  'uk-margin-xlarge-top',
    };

    if ( parentPanelStyle && parent_panelStyle_variants[ parentPanelStyle ] ) {
      panel_classes.push( parent_panelStyle_variants[ parentPanelStyle ] );
    }

    if ( parentPanelPadding && parent_panelPadding_variants[ parentPanelPadding ] ) {
      panel_classes.push( parent_panelPadding_variants[ parentPanelPadding ] );
    }

    if ( parentPanelLink && linkUrl ) {
      panel_classes.push( 'uk-link-toggle uk-display-block' );
    }

    if ( imageMediaId && parentImageWidth ) {
      image_styles.push( 'width: ' + parentImageWidth + 'px' );
    }

    if ( imageMediaId && parentImageHeight ) {
      image_styles.push( 'height: ' + parentImageHeight + 'px' );
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
      if ( parentLinkStyle === 'button-default' || parentLinkStyle === 'button-primary' || parentLinkStyle === 'button-secondary' || parentLinkStyle === 'button-danger' || parentLinkStyle === 'button-text' ) {
        if ( parentLinkButtonSize && parent_linkButtonSize_variants[ parentLinkButtonSize ] ) {
          link_text_classes.push( parent_linkButtonSize_variants[ parentLinkButtonSize ] );
        }
      }
    }

    if ( parentPanelLink ) {
      if ( linkUrl ) {
        panel_attrs.href = linkUrl;
      }
      if ( linkTarget ) {
        panel_attrs.target = linkTarget;
      }
      if ( linkTitle ) {
        panel_attrs.title = linkTitle;
      }
      if ( linkRel ) {
        panel_attrs.rel = linkRel;
      }
      if ( linkAriaLabel ) {
        panel_attrs['aria-label'] = linkAriaLabel;
      }
    }

    if ( panel_classes.length ) {
      panel_attrs.className = panel_classes.join( ' ' );
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
    }

    if ( image_classes.length ) {
      image_attrs.className = image_classes.join( ' ' );
    }

    if ( image_styles.length ) {
      image_attrs.style = { cssText: image_styles.join( '; ' ) };
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

    if ( ! parentPanelLink ) {
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
      link_text_attrs.className = link_text_classes.join( ' ' );
    }

    const TitleTag = parentTitleElement || 'div';
    const MetaTag = parentMetaElement || 'div';


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
        { parentPanelLink ? (
          <div className="uk-grid-item-match">
            <a
              {...panel_attrs}
              onClick={ ( event ) => event.preventDefault() }
            >
              <img {...image_attrs} />
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
            </a>
          </div>
        ) : (
          <div {...panel_attrs}>
            <img {...image_attrs} />
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
)( UikitPanelSliderItemEdit );
