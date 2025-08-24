/**
 * BLOCK: uikit-editor-blocks/social-icons-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { share as icon } from '@wordpress/icons';

registerBlockType( 'uikit-editor-blocks/social-icons-item', {
  title: __( 'Social Icons Item (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Social Icons Item', 'uikit-editor-blocks' ),
    __( 'UIkit Social Icons Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/social-icons' ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    icon: {
      type: 'string',
      default: '',
    },
    linkUrl: {
      type: 'string',
      default: '',
    },
    linkTarget: {
      type: 'string',
      default: '',
    },
    linkRel: {
      type: 'string',
      default: '',
    },
    linkTitle: {
      type: 'string',
      default: '',
    },
    linkAriaLabel: {
      type: 'string',
      default: '',
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
  },

  edit,

  save() {
    return null;
  },
} );
