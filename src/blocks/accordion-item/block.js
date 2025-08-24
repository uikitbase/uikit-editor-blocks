/**
 * BLOCK: uikit-editor-blocks/accordion-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { pullquote as icon } from '@wordpress/icons';

registerBlockType( 'uikit-editor-blocks/accordion-item', {
  title: __( 'Accordion Item (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Accordion Item', 'uikit-editor-blocks' ),
    __( 'UIkit Accordion Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/accordion' ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    titleText: {
      type: 'string',
      default: '',
    },
    contentText: {
      type: 'string',
      default: '',
    },
  },
  usesContext: [
      'uikit-editor-blocks/accordion-contentStyle',
      'uikit-editor-blocks/accordion-contentTopMargin'
  ],

  getEditWrapperProps( attributes, className ) {
    const wrapper_attrs   = [];
    const wrapper_classes = [];

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( wrapper_classes.length ) {
      wrapper_attrs.className = wrapper_classes.join(' ');
    }

    return wrapper_attrs;
  },

  edit,

  save() {
    return null;
  },
} );
