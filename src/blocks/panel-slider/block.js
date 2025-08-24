/**
 * BLOCK: uikit-editor-blocks/panel-slider
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';
import './editor.scss';

import generalAttributes from '../../utils/general-attributes.js';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/panel-slider', {
  title: __( 'Panel Slider (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Panel Slider', 'uikit-editor-blocks' ),
    __( 'UIkit Panel Slider', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    sliderWidth: {
      type: 'string',
      default: 'fixed',
    },
    sliderGap: {
      type: 'string',
      default: '',
    },
    sliderDivider: {
      type: 'boolean',
      default: false,
    },
    sliderDefaultWidth: {
      type: 'string',
      default: '',
    },
    sliderSmallWidth: {
      type: 'string',
      default: '1-3',
    },
    sliderMediumWidth: {
      type: 'string',
      default: '',
    },
    sliderLargeWidth: {
      type: 'string',
      default: '',
    },
    sliderXlargeWidth: {
      type: 'string',
      default: '',
    },
    sliderAutoplay: {
      type: 'boolean',
      default: false,
    },
    navigation: {
      type: 'string',
      default: 'dotnav',
    },
    navigationPosition: {
      type: 'string',
      default: 'center',
    },
    navigationMargin: {
      type: 'string',
      default: 'medium',
    },
    navigationBreakpoint: {
      type: 'string',
      default: 'small',
    },
    navigationColor: {
      type: 'string',
      default: '',
    },
    slidenavPosition: {
      type: 'string',
      default: 'default',
    },
    slidenavMargin: {
      type: 'string',
      default: 'medium',
    },
    slidenavBreakpoint: {
      type: 'string',
      default: 'small',
    },
    slidenavColor: {
      type: 'string',
      default: '',
    },
    panelStyle: {
      type: 'string',
      default: 'none',
    },
    panelPadding: {
      type: 'string',
      default: '',
    },
    panelMatch: {
      type: 'boolean',
      default: true,
    },
    panelLink: {
      type: 'boolean',
      default: false,
    },
    imageWidth: {
      type: 'string',
      default: '',
    },
    imageHeight: {
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
