/**
 * BLOCK: uikit-editor-blocks/dropdown
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { chevronDown as icon } from '@wordpress/icons';
import './editor.scss';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/dropdown', {
  title: __( 'Dropdown (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Dropdown', 'uikit-editor-blocks' ),
    __( 'UIkit Dropdown', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    titleText: {
      type: 'string',
      default: 'Dropdown',
    },
    position: {
      type: 'string',
      default: 'bottom-left',
    },
    buttonSize: {
      type: 'string',
      default: '',
    },
    buttonStyle: {
      type: 'string',
      default: 'default',
    },
    buttonIcon: {
      type: 'string',
      default: '',
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
