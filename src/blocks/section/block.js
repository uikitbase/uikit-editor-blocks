/**
 * BLOCK: uikit-editor-blocks/section
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { page as icon } from '@wordpress/icons';
import './editor.scss';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/section', {
  title: __( 'Section (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Section', 'uikit-editor-blocks' ),
    __( 'UIkit Section', 'uikit-editor-blocks' ),
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
    textColor: {
      type: 'string',
      default: '',
    },
    padding: {
      type: 'string',
      default: '',
    },
    removeTopPadding: {
      type: 'boolean',
      default: false,
    },
    removeBottomPadding: {
      type: 'boolean',
      default: false,
    },
    container: {
      type: 'string',
      default: 'default',
    },
    bgColor: {
      type: 'string',
      default: '',
    },
    bgImageMediaId: {
      type: 'number',
      default: '',
    },
    bgImageSize: {
      type: 'string',
      default: '',
    },
    bgImagePosition: {
      type: 'string',
      default: 'center-center',
    },
    bgImageEffect: {
      type: 'string',
      default: '',
    },
    bgImageParallaxHorizontalStart: {
      type: 'decimalPoint',
      default: 0,
    },
    bgImageParallaxHorizontalEnd: {
      type: 'decimalPoint',
      default: 0,
    },
    bgImageParallaxVerticalStart: {
      type: 'decimalPoint',
      default: 0,
    },
    bgImageParallaxVerticalEnd: {
      type: 'decimalPoint',
      default: 0,
    },
    bgImageVisibility: {
      type: 'string',
      default: '',
    },
    bgImageOverlay: {
      type: 'boolean',
      default: false,
    },
    bgImageOverlayColor: {
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
