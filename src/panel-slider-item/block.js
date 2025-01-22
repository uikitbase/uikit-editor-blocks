/**
 * BLOCK: uikit-editor-blocks/panel-slider-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { column } from '../icons';

registerBlockType( 'uikit-editor-blocks/panel-slider-item', {
  title: __( 'Panel Slider Item (UIkit)', 'uikit-editor-blocks' ),
  icon: column,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Panel Slider Item', 'uikit-editor-blocks' ),
    __( 'UIkit Panel Slider Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/panel-slider' ],

  edit,

  save() {
    return null;
  },
} );
