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

const {
  InspectorControls,
  InnerBlocks,
} =  BlockEditor || Editor;

class UikitSwitcherItemEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      hasChildBlocks,
      clientId,
    } = this.props;

    const {
      blockId,
      titleText,
    } = attributes;

    if ( blockId !== clientId ) {
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
        <InnerBlocks
          renderAppender={
            hasChildBlocks
              ? undefined
              : () => <InnerBlocks.ButtonBlockAppender />
          }
        />
      </Fragment>
    );
  }
}

export default UikitSwitcherItemEdit;
