/**
 * BLOCK: uikit-editor-blocks/overlay-slider-item
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';
import { select } from '@wordpress/data';

registerBlockType( 'uikit-editor-blocks/overlay-slider-item', {
  title: __( 'Overlay Slider Item (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Overlay Slider Item', 'uikit-editor-blocks' ),
    __( 'UIkit Overlay Slider Item', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  parent: [ 'uikit-editor-blocks/overlay-slider' ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    imageMediaId: {
      type: 'number',
      default: '',
    },
    imageAlt: {
      type: 'string',
      default: '',
    },
    titleText: {
      type: 'string',
      default: '',
    },
    metaText: {
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
    linkText: {
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
  },

  getEditWrapperProps( attributes, className ) {
    const {
      blockId,
      __parentDepsHash
    } = attributes;

    const beSelect = select( 'core/block-editor' ) || select( 'core/editor' );
    const parentId = beSelect.getBlockRootClientId( blockId );
    const parentBlock = parentId ? beSelect.getBlock( parentId ) : null;
    const p = parentBlock && parentBlock.attributes ? parentBlock.attributes : {};

    const wrapper_attrs = {};
    const wrapper_classes = [];

    const parent_textColor_variants = {
      light: 'uk-light',
      dark: 'uk-dark',
    };

    if ( p.sliderWidth === 'fixed' ) {
      if ( p.sliderDefaultWidth ) {
        wrapper_classes.push( `uk-width-${ p.sliderDefaultWidth }` );
      }

      if ( p.sliderSmallWidth ) {
        wrapper_classes.push( `uk-width-${ p.sliderSmallWidth }@s` );
      }

      if ( p.sliderMediumWidth ) {
        wrapper_classes.push( `uk-width-${ p.sliderMediumWidth }@m` );
      }

      if ( p.sliderLargeWidth ) {
        wrapper_classes.push( `uk-width-${ p.sliderLargeWidth }@l` );
      }

      if ( p.sliderXlargeWidth ) {
        wrapper_classes.push( `uk-width-${ p.sliderXlargeWidth }@xl` );
      }
    }

    if ( p && p.overlayTextColor && parent_textColor_variants[ p.overlayTextColor ] ) {
      wrapper_classes.push( parent_textColor_variants[ p.overlayTextColor ] );
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( wrapper_classes.length ) {
      wrapper_attrs.className = wrapper_classes.join(' ');
    }

    wrapper_attrs.draggable = false;

    return wrapper_attrs;
  },

  edit,

  save() {
    return null;
  },
} );
