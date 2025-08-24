/**
 * BLOCK: uikit-editor-blocks/divider
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { separator as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/divider', {
  title: __( 'Divider (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Divider', 'uikit-editor-blocks' ),
    __( 'UIkit Divider', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    style: {
      type: 'string',
      default: '',
    },
    element: {
      type: 'string',
      default: 'hr',
    },
    alignment: {
      type: 'string',
      default: '',
    },
    alignmentBreakpoint: {
      type: 'string',
      default: '',
    },
    alignmentFallback: {
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
