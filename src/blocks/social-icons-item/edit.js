// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import UIkitIconInput from '../../components/UIkitIconInput.js';

const {
  InspectorControls,
} =  BlockEditor || Editor;

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitSocialIconsItemEdit extends Component {
  componentDidMount() {
    const { attributes, setAttributes } = this.props;

    if (!attributes.icon) {
      setAttributes({ icon: 'x' });
    }
  }

  render() {
    const {
      attributes,
      className,
      setAttributes,
      clientId,
      context,
    } = this.props;

    const {
      blockId,
      icon,
      linkUrl,
      linkTarget,
      linkRel,
      linkTitle,
      linkAriaLabel,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const parentLinkStyle = context?.['uikit-editor-blocks/social-icons-linkStyle'] || '';

    const wrapper_link_attrs   = [];
    const wrapper_link_classes = [];

    const icon_attrs     = [];
    const icon_icon_data = [];

    const linkStyle_variants = {
      'default': 'uk-icon-link',
      'button': 'uk-icon-button',
      'link-muted': 'uk-link-muted',
      'link-text': 'uk-link-text',
      'link-reset': 'uk-link-reset',
    };

    if ( parentLinkStyle ) {
      const ls = parentLinkStyle;
      if ( linkStyle_variants[ ls ] ) {
        wrapper_link_classes.push( linkStyle_variants[ ls ] );
      }
    }

    if ( icon ) {
      icon_icon_data.push( icon );
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

    if ( wrapper_link_classes.length ) {
      wrapper_link_attrs.className = wrapper_link_classes.join( ' ' );
    }

    if ( icon_icon_data.length ) {
      icon_attrs['data-uk-icon'] = icon_icon_data.join( '; ' );
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

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
            <UIkitIconInput
              allowedIcons={ ['facebook', 'whatsapp', 'instagram', 'youtube', 'telegram', 'github', 'vimeo', 'twitch', 'soundcloud', 'reddit', 'discord', 'linkedin', 'tiktok', 'google', 'pinterest', 'signal', 'threads', 'dribbble', 'flickr', 'foursquare', 'mastodon', 'tumblr', 'x', 'xing', 'youtube'] }
              label={ __( 'Icon', 'uikit-editor-blocks' ) }
              help={ __( 'Enter icon name from UIkit or select one.', 'uikit-editor-blocks' ) }
              value={ attributes.icon || '' }
              onChange={ ( value ) =>
                setAttributes( { icon: value } )
              }
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
          </PanelBody>
        </InspectorControls>
        <a
          { ...wrapper_link_attrs }
          onClick={ ( event ) => event.preventDefault() }
        >
          <span { ...icon_attrs }></span>
        </a>
      </Fragment>
    );
  }
}

export default UikitSocialIconsItemEdit;
