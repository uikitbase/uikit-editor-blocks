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
  TextControl,
  ToggleControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import UIkitIconInput from '../uikit-icon-input';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
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

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    const general = useGeneralBlockProps(attributes);
    const { className: generalClassName, ...generalDataAttrs } = general;

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
        <div className={ className }><span data-uk-icon={icon}></span></div>
      </Fragment>
    );
  }
}

export default UikitSocialIconsItemEdit;
