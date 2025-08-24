/**
 * BLOCK: uikit-editor-blocks/grid-column
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { column as icon } from '@wordpress/icons';

const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/grid-column', {
  title: __( 'Grid Column (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Grid Column', 'uikit-editor-blocks' ),
    __( 'UIkit Grid Column', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/grid' ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    defaultWidth: {
      type: 'string',
      default: '1-1',
    },
    smallWidth: {
      type: 'string',
      default: '',
    },
    mediumWidth: {
      type: 'string',
      default: '',
    },
    largeWidth: {
      type: 'string',
      default: '1-2',
    },
    xlargeWidth: {
      type: 'string',
      default: '',
    },
    orderFirst: {
      type: 'string',
      default: '',
    },
    verticalAlignment: {
      type: 'string',
      default: '',
    },
    padding: {
      type: 'string',
      default: '',
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
  },

  getEditWrapperProps( attributes, className ) {
    const {
      defaultWidth,
      smallWidth,
      mediumWidth,
      largeWidth,
      xlargeWidth,
      orderFirst,
      verticalAlignment,
      bgColor,
      bgImageMediaId,
    } = attributes;

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const orderFirst_variants = {
      always: 'uk-flex-first',
      small: 'uk-flex-first@s',
      medium: 'uk-flex-first@m',
      large: 'uk-flex-first@l',
      xlarge: 'uk-flex-first@xl',
    };

    if ( defaultWidth ) {
      wrapper_classes.push( 'uk-width-' + defaultWidth );
    }

    if ( smallWidth ) {
      wrapper_classes.push( 'uk-width-' + smallWidth + '@s' );
    }

    if ( mediumWidth ) {
      wrapper_classes.push( 'uk-width-' + mediumWidth + '@m' );
    }

    if ( largeWidth ) {
      wrapper_classes.push( 'uk-width-' + largeWidth + '@l' );
    }

    if ( xlargeWidth ) {
      wrapper_classes.push( 'uk-width-' + xlargeWidth + '@xl' );
    }

    if ( orderFirst && orderFirst_variants[orderFirst] ) {
      wrapper_classes.push( orderFirst_variants[orderFirst] );
    }

    if ( bgColor || bgImageMediaId || verticalAlignment ) {
      wrapper_classes.push( 'uk-grid-item-match' );
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( wrapper_classes.length ) {
      wrapper_attrs.className = wrapper_classes.join(' ');
    }

    return wrapper_attrs;
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
