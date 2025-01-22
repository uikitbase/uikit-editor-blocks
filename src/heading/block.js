/**
 * BLOCK: uikit-editor-blocks/heading
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { button } from '../icons';
import './editor.scss';

registerBlockType( 'uikit-editor-blocks/heading', {
  title: __( 'Heading (UIkit)', 'uikit-editor-blocks' ),
  icon: button,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Heading', 'uikit-editor-blocks' ),
    __( 'UIkit Heading', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],

  edit,

  save() {
    return null;
  },
} );
