/**
 * BLOCK: uikit-editor-blocks/button
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { button as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/button', {
  title: __( 'Button (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Button', 'uikit-editor-blocks' ),
    __( 'UIkit Button', 'uikit-editor-blocks' ),
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
    style: {
      type: 'string',
      default: 'default',
    },
    size: {
      type: 'string',
      default: '',
    },
    fullWidth: {
      type: 'boolean',
      default: false,
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return null;
  },
} );
