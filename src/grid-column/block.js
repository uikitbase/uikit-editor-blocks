/**
 * BLOCK: uikit-editor-blocks/grid-column
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { column as icon } from '@wordpress/icons';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/grid-column', {
  title: __( 'Grid Column (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Grid Column', 'uikit-editor-blocks' ),
    __( 'UIkit Grid Column', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/grid' ],

  // attributes are defined server side with register_block_type(). This is needed to make default attributes available in the blocks render callback.

  getEditWrapperProps( attributes ) {
    const {
      defaultWidth,
      smallWidth,
      mediumWidth,
      largeWidth,
      xlargeWidth,
    } = attributes;

    return {
      'data-width': largeWidth,
    };
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
