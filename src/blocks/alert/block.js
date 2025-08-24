/**
 * BLOCK: uikit-editor-blocks/alert
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { info as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/alert', {
  title: __( 'Alert (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Alert', 'uikit-editor-blocks' ),
    __( 'UIkit Alert', 'uikit-editor-blocks' ),
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
      default: '',
    },
    largerPadding: {
      type: 'boolean',
      default: false,
    },
    titleStyle: {
      type: 'string',
      default: '',
    },
    titleElement: {
      type: 'string',
      default: 'h3',
    },
    contentStyle: {
      type: 'string',
      default: '',
    },
    contentTopMargin: {
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
