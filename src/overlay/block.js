/**
 * BLOCK: uikit-editor-blocks/overlay
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/overlay', {
  title: __( 'Overlay (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Overlay', 'uikit-editor-blocks' ),
    __( 'UIkit Overlay', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
