/**
 * BLOCK: uikit-editor-blocks/social-icons-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { column } from '../icons';

registerBlockType( 'uikit-editor-blocks/social-icons-item', {
  title: __( 'Social Icons Item (UIkit)', 'uikit-editor-blocks' ),
  icon: column,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Social Icons Item', 'uikit-editor-blocks' ),
    __( 'UIkit Social Icons Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/social-icons' ],

  edit,

  save() {
    return null;
  },
} );
