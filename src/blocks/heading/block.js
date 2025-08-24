/**
 * BLOCK: uikit-editor-blocks/heading
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { heading as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/heading', {
  title: __( 'Heading (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Heading', 'uikit-editor-blocks' ),
    __( 'UIkit Heading', 'uikit-editor-blocks' ),
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
    style: {
      type: 'string',
      default: '',
    },
    decoration: {
      type: 'string',
      default: '',
    },
    color: {
      type: 'string',
      default: '',
    },
    element: {
      type: 'string',
      default: 'h1',
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return null;
  },
} );
