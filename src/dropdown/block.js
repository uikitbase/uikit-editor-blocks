/**
 * BLOCK: uikit-editor-blocks/dropdown
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { columns } from '../icons';
import './editor.scss';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/dropdown', {
  title: __( 'Dropdown (UIkit)', 'uikit-editor-blocks' ),
  icon: columns,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Dropdown', 'uikit-editor-blocks' ),
    __( 'UIkit Dropdown', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
