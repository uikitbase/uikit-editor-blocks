/**
 * BLOCK: uikit-editor-blocks/overlay
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit';
import { postFeaturedImage as icon } from '@wordpress/icons';

import generalAttributes from '../../utils/general-attributes.js';

registerBlockType( 'uikit-editor-blocks/overlay', {
  title: __( 'Overlay (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Overlay', 'uikit-editor-blocks' ),
    __( 'UIkit Overlay', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  attributes: {
    blockId: {
      type: 'string',
      default: '',
    },
    imageMediaId: {
      type: 'number',
      default: '',
    },
    imageWidth: {
      type: 'string',
      default: '',
    },
    imageHeight: {
      type: 'string',
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
    mode: {
      type: 'string',
      default: 'caption',
    },
    hover: {
      type: 'boolean',
      default: false,
    },
    style: {
      type: 'string',
      default: 'overlay-primary',
    },
    textColor: {
      type: 'string',
      default: '',
    },
    padding: {
      type: 'string',
      default: '',
    },
    position: {
      type: 'string',
      default: 'center',
    },
    margin: {
      type: 'string',
      default: '',
    },
    maxWidth: {
      type: 'string',
      default: '',
    },
    link: {
      type: 'boolean',
      default: false,
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
    return null;
  },
} );
