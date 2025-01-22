/**
 * BLOCK: uikit-editor-blocks/switcher-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { column } from '../icons';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/switcher-item', {
  title: __( 'Switcher Item (UIkit)', 'uikit-editor-blocks' ),
  icon: column,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Switcher Item', 'uikit-editor-blocks' ),
    __( 'UIkit Switcher Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/switcher' ],

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
