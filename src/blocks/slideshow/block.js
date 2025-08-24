/**
 * BLOCK: uikit-editor-blocks/slideshow
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { row as icon } from '@wordpress/icons';
import './editor.scss';
import './editor.js';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/slideshow', {
  title: __( 'Slideshow (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Slideshow', 'uikit-editor-blocks' ),
    __( 'UIkit Slideshow', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    height: {
      type: 'string',
      default: '',
    },
    heightViewport: {
      type: 'string',
      default: '100',
    },
    ratio: {
      type: 'string',
      default: '',
    },
    minHeight: {
      type: 'string',
      default: '300',
    },
    maxHeight: {
      type: 'string',
      default: '600',
    },
    textColor: {
      type: 'string',
      default: '',
    },
    boxShadow: {
      type: 'string',
      default: '',
    },
    animation: {
      type: 'string',
      default: '',
    },
    autoplay: {
      type: 'boolean',
      default: false,
    },
    navigation: {
      type: 'string',
      default: 'dotnav',
    },
    navigationPosition: {
      type: 'string',
      default: 'bottom-center',
    },
    navigationMargin: {
      type: 'string',
      default: 'medium',
    },
    slidenavPosition: {
      type: 'string',
      default: 'default',
    },
    slidenavMargin: {
      type: 'string',
      default: 'medium',
    },
    overlayContainerWidth: {
      type: 'string',
      default: '',
    },
    overlayContainerPadding: {
      type: 'string',
      default: '',
    },
    overlayMargin: {
      type: 'string',
      default: '',
    },
    overlayPosition: {
      type: 'string',
      default: 'center-center',
    },
    overlayStyle: {
      type: 'string',
      default: 'overlay-primary',
    },
    overlayPadding: {
      type: 'string',
      default: 'large',
    },
    overlayWidth: {
      type: 'string',
      default: '',
    },
    overlayAnimation: {
      type: 'string',
      default: '',
    },
    titleStyle: {
      type: 'string',
      default: '',
    },
    titleDecoration: {
      type: 'string',
      default: '',
    },
    titleColor: {
      type: 'string',
      default: '',
    },
    titleElement: {
      type: 'string',
      default: 'h3',
    },
    titleTopMargin: {
      type: 'string',
      default: 'default',
    },
    metaStyle: {
      type: 'string',
      default: 'text-meta',
    },
    metaColor: {
      type: 'string',
      default: '',
    },
    metaAlignment: {
      type: 'string',
      default: 'below-title',
    },
    metaElement: {
      type: 'string',
      default: 'div',
    },
    metaTopMargin: {
      type: 'string',
      default: 'default',
    },
    contentStyle: {
      type: 'string',
      default: '',
    },
    contentTopMargin: {
      type: 'string',
      default: 'default',
    },
    linkStyle: {
      type: 'string',
      default: 'button-default',
    },
    linkButtonSize: {
      type: 'string',
      default: '',
    },
    linkTopMargin: {
      type: 'string',
      default: 'default',
    },
    ...generalAttributes,
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
