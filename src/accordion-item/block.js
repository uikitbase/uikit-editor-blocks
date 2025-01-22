/**
 * BLOCK: uikit-editor-blocks/accordion-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { column } from '../icons';

registerBlockType( 'uikit-editor-blocks/accordion-item', {
  title: __( 'Accordion Item (UIkit)', 'uikit-editor-blocks' ),
  icon: column,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Accordion Item', 'uikit-editor-blocks' ),
    __( 'UIkit Accordion Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/accordion' ],

  edit,

  save() {
    return null;
  },
} );
