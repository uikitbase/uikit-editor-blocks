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
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  InnerBlocks,
} =  BlockEditor || Editor;

class UikitDropdownItemEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      bgImage,
      clientId,
    } = this.props;

    const {
      blockId,
      titleText,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
            <TextControl
              label={ __( 'Title', 'uikit-editor-blocks' ) }
              value={ titleText }
              onChange={ ( value ) => setAttributes( { titleText: value } ) }
            />
          </PanelBody>
        </InspectorControls>
        <div className={ className }>{ titleText != '' ? titleText : __( 'Title', 'uikit-editor-blocks' ) }</div>
      </Fragment>
    );
  }
}

export default ( UikitDropdownItemEdit );
