/**
 * BLOCK: uikit-editor-blocks/panel
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/panel', {
  title: __( 'Panel (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Panel', 'uikit-editor-blocks' ),
    __( 'UIkit Panel', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
