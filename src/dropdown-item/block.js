/**
 * BLOCK: uikit-editor-blocks/dropdown-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { chevronDown as icon } from '@wordpress/icons';

registerBlockType( 'uikit-editor-blocks/dropdown-item', {
  title: __( 'Dropdown Item (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Dropdown Item', 'uikit-editor-blocks' ),
    __( 'UIkit Dropdown Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/dropdown' ],

  edit,

  save() {
    return null;
  },
} );
