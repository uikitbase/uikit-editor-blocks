/**
 * BLOCK: uikit-editor-blocks/card
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/card', {
  title: __( 'Card (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Card', 'uikit-editor-blocks' ),
    __( 'UIkit Card', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
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
    style: {
      type: 'string',
      default: 'default',
    },
    size: {
      type: 'string',
      default: '',
    },
    titleElement: {
      type: 'string',
      default: 'h3',
    },
    contentElement: {
      type: 'string',
      default: 'p',
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return null;
  },
} );
