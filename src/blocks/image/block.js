/**
 * BLOCK: uikit-editor-blocks/image
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { image as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/image', {
  title: __( 'Image (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Image', 'uikit-editor-blocks' ),
    __( 'UIkit Image', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    mediaId: {
      type: 'number',
      default: '',
    },
    mediaUrl: {
      type: 'string',
      default: '',
    },
    width: {
      type: 'string',
      default: '',
    },
    height: {
      type: 'string',
      default: '',
    },
    alt: {
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
    border: {
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
