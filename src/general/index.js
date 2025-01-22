/**
 * Imports
 */

import { addFilter } from '@wordpress/hooks';
import uikitGeneralInspectorControls from './general.js';


/*
 * Register attributes to every block
 */
addFilter(
    'blocks.registerBlockType',
    'uikit-editor-blocks/general-attributes',
    ( settings, name ) => {
        const newSettings = {
            ...settings,
            attributes: {
                ...settings.attributes,
                ueb_margin: { type: 'string', default: '' },
                ueb_removeTopMargin: { type: 'boolean', default: false },
                ueb_removeBottomMargin: { type: 'boolean', default: false },
                ueb_textAlignment: { type: 'string', default: '' },
                ueb_textAlignmentBreakpoint: { type: 'string', default: '' },
                ueb_textAlignmentFallback: { type: 'string', default: '' },
                ueb_maxWidth: { type: 'string', default: '' },
                ueb_maxWidthBreakpoint: { type: 'string', default: '' },
                ueb_blockAlignment: { type: 'string', default: 'left' },
                ueb_blockAlignmentBreakpoint: { type: 'string', default: '' },
                ueb_blockAlignmentFallback: { type: 'string', default: '' },
                ueb_visibility: { type: 'string', default: '' },
                ueb_animation: { type: 'string', default: '' },
                ueb_animationDelay: { type: 'string', default: '' },
                ueb_parallaxHorizontalStart: { type: 'number', default: 0 },
                ueb_parallaxHorizontalEnd: { type: 'number', default: 0 },
                ueb_parallaxVerticalStart: { type: 'number', default: 0 },
                ueb_parallaxVerticalEnd: { type: 'number', default: 0 },
                ueb_parallaxScaleStart: { type: 'decimalPoint', default: 1 },
                ueb_parallaxScaleEnd: { type: 'decimalPoint', default: 1 },
                ueb_parallaxRotateStart: { type: 'number', default: 0 },
                ueb_parallaxRotateEnd: { type: 'number', default: 0 },
                ueb_parallaxOpacityStart: { type: 'decimalPoint', default: 1 },
                ueb_parallaxOpacityEnd: { type: 'decimalPoint', default: 1 },
                ueb_disableBlock: { type: 'boolean', default: false },
            },
        };

        return newSettings;
        
    }
);

/*
 * Add inspector controls to every block
 */
addFilter(
    'editor.BlockEdit',
    'uikit-editor-blocks/general-inspector',
    uikitGeneralInspectorControls
);
