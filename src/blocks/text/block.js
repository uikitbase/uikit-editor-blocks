/**
 * BLOCK: uikit-editor-blocks/text
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { postContent as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/text', {
  title: __( 'Text (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Text', 'uikit-editor-blocks' ),
    __( 'UIkit Text', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    text: {
      type: 'string',
      default: '',
    },
    dropCap: {
      type: 'boolean',
      default: false,
    },
    style: {
      type: 'string',
      default: '',
    },
    color: {
      type: 'string',
      default: '',
    },
    size: {
      type: 'string',
      default: '',
    },
    element: {
      type: 'string',
      default: 'p',
    },
    alignment: {
      type: 'string',
      default: '',
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return null;
  },
} );
