/**
 * BLOCK: uikit-editor-blocks/card
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/card', {
  title: __( 'Card (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Card', 'uikit-editor-blocks' ),
    __( 'UIkit Card', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
