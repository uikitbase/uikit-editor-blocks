/**
 * BLOCK: uikit-editor-blocks/accordion
 */

// WordPress dependencies
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import edit from './edit';
import { pullquote as icon } from '@wordpress/icons';
import './editor.scss';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const { InnerBlocks } = BlockEditor || Editor;

registerBlockType( 'uikit-editor-blocks/accordion', {
  title: __( 'Accordion (UIkit)', 'uikit-editor-blocks' ),
  icon: icon,
  category: 'uikit-editor-blocks',
  keywords: [
    __( 'Accordion', 'uikit-editor-blocks' ),
    __( 'UIkit Accordion', 'uikit-editor-blocks' ),
    __( 'UIkit', 'uikit-editor-blocks' ),
  ],
  providesContext: {
    'uikit-editor-blocks/accordion-contentStyle': 'contentStyle',
    'uikit-editor-blocks/accordion-contentTopMargin': 'contentTopMargin',
  },

  edit,

  save() {
    return <InnerBlocks.Content />;
  },
} );
