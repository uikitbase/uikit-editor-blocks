/**
 * BLOCK: uikit-editor-blocks/image
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { button } from '../icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/image', {
  title: __( 'Image (UIkit)', 'uikit-editor-blocks' ),
  icon: button,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Image', 'uikit-editor-blocks' ),
    __( 'UIkit Image', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
