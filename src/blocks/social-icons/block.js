/**
 * BLOCK: uikit-editor-blocks/social-icons
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { share as icon } from '@wordpress/icons';
import './editor.scss';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/social-icons', {
  title: __( 'Social Icons (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Social Icons', 'uikit-editor-blocks' ),
    __( 'UIkit Social Icons', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    linkStyle: {
      type: 'string',
      default: 'default',
    },
    grid: {
      type: 'string',
      default: '',
    },
    gridBreakpoint: {
      type: 'string',
      default: '',
    },
    gridGap: {
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
