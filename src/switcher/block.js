/**
 * BLOCK: uikit-editor-blocks/switcher
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { reusableBlock as icon } from '@wordpress/icons';
import './editor.scss';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/switcher', {
  title: __( 'Switcher (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Switcher', 'uikit-editor-blocks' ),
    __( 'UIkit Switcher', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
