/**
 * BLOCK: uikit-editor-blocks/slideshow-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { row as icon } from '@wordpress/icons';

registerBlockType( 'uikit-editor-blocks/slideshow-item', {
  title: __( 'Slideshow Item (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Slideshow Item', 'uikit-editor-blocks' ),
    __( 'UIkit Slideshow Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/slideshow' ],

  edit,

  save() {
    return null;
  },
} );
