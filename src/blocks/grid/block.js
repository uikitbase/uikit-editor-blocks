/**
 * BLOCK: uikit-editor-blocks/grid
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { columns as icon } from '@wordpress/icons';
import './editor.scss';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/grid', {
  title: __( 'Grid (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Grid', 'uikit-editor-blocks' ),
    __( 'UIkit Grid', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    layout: {
      type: 'string',
      default: '1-2+1-2',
    },
    columnGap: {
      type: 'string',
      default: '',
    },
    rowGap: {
      type: 'string',
      default: '',
    },
    columnMatch: {
      type: 'boolean',
      default: false,
    },
    divider: {
      type: 'boolean',
      default: false,
    },
    centerColumns: {
      type: 'boolean',
      default: false,
    },
    centerRows: {
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
