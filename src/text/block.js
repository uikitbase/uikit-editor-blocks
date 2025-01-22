/**
 * BLOCK: uikit-editor-blocks/text
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { button } from '../icons';

registerBlockType( 'uikit-editor-blocks/text', {
  title: __( 'Text (UIkit)', 'uikit-editor-blocks' ),
  icon: button,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Text', 'uikit-editor-blocks' ),
    __( 'UIkit Text', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
