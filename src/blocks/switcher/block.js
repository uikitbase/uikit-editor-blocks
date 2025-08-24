/**
 * BLOCK: uikit-editor-blocks/switcher
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { reusableBlock as icon } from '@wordpress/icons';
import './editor.scss';
import './editor.js';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/switcher', {
  title: __( 'Switcher (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Switcher', 'uikit-editor-blocks' ),
    __( 'UIkit Switcher', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    animation: {
      type: 'string',
      default: '',
    },
    navigation: {
      type: 'string',
      default: 'tabs',
    },
    navigationPosition: {
      type: 'string',
      default: 'top',
    },
    navigationAlignment: {
      type: 'string',
      default: 'left',
    },
    navigationMargin: {
      type: 'string',
      default: 'medium',
    },
    navigationGridWidth: {
      type: 'string',
      default: 'auto',
    },
    navigationGridColumnGap: {
      type: 'string',
      default: '',
    },
    navigationGridRowGap: {
      type: 'string',
      default: '',
    },
    navigationGridBreakpoint: {
      type: 'string',
      default: 'small',
    },
    navigationVerticalAlignment: {
      type: 'boolean',
      default: false,
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
