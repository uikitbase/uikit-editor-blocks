/**
 * BLOCK: uikit-editor-blocks/slideshow
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

registerBlockType( 'uikit-editor-blocks/slideshow', {
  title: __( 'Slideshow (UIkit)', 'uikit-editor-blocks' ),
  icon: columns,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Slideshow', 'uikit-editor-blocks' ),
    __( 'UIkit Slideshow', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
