/**
 * BLOCK: uikit-editor-blocks/divider
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { button } from '../icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/divider', {
  title: __( 'Divider (UIkit)', 'uikit-editor-blocks' ),
  icon: button,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Divider', 'uikit-editor-blocks' ),
    __( 'UIkit Divider', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
