/**
 * BLOCK: uikit-editor-blocks/switcher-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { reusableBlock as icon } from '@wordpress/icons';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/switcher-item', {
  title: __( 'Switcher Item (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Switcher Item', 'uikit-editor-blocks' ),
    __( 'UIkit Switcher Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/switcher' ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    titleText: {
      type: 'string',
      default: 'Title',
    },
  },

  getEditWrapperProps( attributes, className ) {
    const wrapper_attrs   = [];
    const wrapper_classes = [];

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( wrapper_classes.length ) {
      wrapper_attrs.className = wrapper_classes.join( ' ' );
    }

    return wrapper_attrs;
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
