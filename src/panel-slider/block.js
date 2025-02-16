/**
 * BLOCK: uikit-editor-blocks/panel-slider
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';
import './editor.scss';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/panel-slider', {
  title: __( 'Panel Slider (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Panel Slider', 'uikit-editor-blocks' ),
    __( 'UIkit Panel Slider', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
