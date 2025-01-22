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

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
} =  BlockEditor || Editor;

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitSocialIconsItemEdit extends Component {
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
            <SelectControl 
              label={ __( 'Icon', 'uikit-editor-blocks' ) }
              value={ icon }
              options={[
                { label: __( 'Facebook', 'uikit-editor-blocks' ), value: 'facebook' },
                { label: __( 'WhatsApp', 'uikit-editor-blocks' ), value: 'whatsapp' },
                { label: __( 'Instagram', 'uikit-editor-blocks' ), value: 'instagram' },
                { label: __( 'YouTube', 'uikit-editor-blocks' ), value: 'youtube' },
                { label: __( 'Telegram', 'uikit-editor-blocks' ), value: 'telegram' },
                { label: __( 'GitHub', 'uikit-editor-blocks' ), value: 'github' },
                { label: __( 'Vimeo', 'uikit-editor-blocks' ), value: 'vimeo' },
                { label: __( 'Twitch', 'uikit-editor-blocks' ), value: 'twitch' },
                { label: __( 'SoundCloud', 'uikit-editor-blocks' ), value: 'soundcloud' },
                { label: __( 'Reddit', 'uikit-editor-blocks' ), value: 'reddit' },
                { label: __( 'Discord', 'uikit-editor-blocks' ), value: 'discord' },
                { label: __( 'LinkedIn', 'uikit-editor-blocks' ), value: 'linkedin' },
                { label: __( 'TikTok', 'uikit-editor-blocks' ), value: 'tiktok' },
                { label: __( 'Google', 'uikit-editor-blocks' ), value: 'google' },
                { label: __( 'Pinterest', 'uikit-editor-blocks' ), value: 'pinterest' },
                { label: __( 'Signal', 'uikit-editor-blocks' ), value: 'signal' },
                { label: __( 'Threads', 'uikit-editor-blocks' ), value: 'threads' },
              ]}
              onChange={( value ) => {
                setAttributes( { icon: value } );
              }}
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
        <div className={ className }>{ icon != '' ? icon : __( 'Title', 'uikit-editor-blocks' ) }</div>
      </Fragment>
    );
  }
}

export default UikitSocialIconsItemEdit;
