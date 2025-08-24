/**
 * BLOCK: uikit-editor-blocks/icon
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { starEmpty as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/icon', {
  title: __( 'Icon (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Icon', 'uikit-editor-blocks' ),
    __( 'UIkit Icon', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    icon: {
      type: 'string',
      default: 'star',
    },
    color: {
      type: 'string',
      default: '',
    },
    width: {
      type: 'integer',
      default: 60,
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return null;
  },
} );
