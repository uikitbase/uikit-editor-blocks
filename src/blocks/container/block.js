/**
 * BLOCK: uikit-editor-blocks/container
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { fullscreen as icon } from '@wordpress/icons';
import './editor.scss';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/container', {
  title: __( 'Container (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Container', 'uikit-editor-blocks' ),
    __( 'UIkit Container', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    size: {
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
