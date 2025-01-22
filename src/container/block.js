/**
 * BLOCK: uikit-editor-blocks/container
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { stack } from '../icons';
import './editor.scss';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/container', {
  title: __( 'Container (UIkit)', 'uikit-editor-blocks' ),
  icon: stack,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Container', 'uikit-editor-blocks' ),
    __( 'UIkit Container', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
