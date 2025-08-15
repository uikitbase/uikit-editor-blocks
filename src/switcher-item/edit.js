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

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
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

    const general = useGeneralBlockProps(attributes);
    const { className: generalClassName, ...generalDataAttrs } = general;

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
        <div className={ className }>
          <InnerBlocks
            renderAppender={
              hasChildBlocks
                ? undefined
                : () => <InnerBlocks.ButtonBlockAppender />
            }
          />
        </div>
      </Fragment>
    );
  }
}

export default UikitSwitcherItemEdit;
