/**
 * BLOCK: uikit-editor-blocks/quotation
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { quote as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/quotation', {
  title: __( 'Quotation (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Quotation', 'uikit-editor-blocks' ),
    __( 'UIkit Quotation', 'uikit-editor-blocks' ),
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
    authorName: {
      type: 'string',
      default: '',
    },
    authorLinkUrl: {
      type: 'string',
      default: '',
    },
    authorLinkTarget: {
      type: 'string',
      default: '',
    },
    authorLinkRel: {
      type: 'string',
      default: '',
    },
    authorLinkTitle: {
      type: 'string',
      default: '',
    },
    authorLinkAriaLabel: {
      type: 'string',
      default: '',
    },
    footerText: {
      type: 'string',
      default: '',
    },
    linkStyle: {
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
