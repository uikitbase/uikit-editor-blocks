/**
 * BLOCK: uikit-editor-blocks/button
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { button as icon } from '@wordpress/icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/button', {
  title: __( 'Button (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Button', 'uikit-editor-blocks' ),
    __( 'UIkit Button', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
