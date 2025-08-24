<?php
/**
 * Register uikit-editor-blocks/section block type.
 *
 * @package uikit-editor-blocks/section
 */

namespace Uikit_Editor_Blocks\Section;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Section\Section_Block_Type', false ) ) :

    /**
     * Class Section_Block_Type
     */
    class Section_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/section';

        /**
         * Enable general attributes for this block.
         *
         * @var bool
         */
        protected $has_general_attributes = true;

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'style' => array(
                'type' => 'string',
            ),
            'textColor' => array(
                'type' => 'string',
            ),
            'padding' => array(
                'type' => 'string',
            ),
            'removeTopPadding' => array(
                'type' => 'boolean',
            ),
            'removeBottomPadding' => array(
                'type' => 'boolean',
            ),
            'container' => array(
                'type' => 'string',
            ),
            'bgColor' => array(
                'type' => 'string',
            ),
            'bgImageMediaId' => array(
                'type' => 'number',
            ),
            'bgImageSize' => array(
                'type' => 'string',
            ),
            'bgImagePosition' => array(
                'type' => 'string',
            ),
            'bgImageEffect' => array(
                'type' => 'string',
            ),
            'bgImageParallaxHorizontalStart' => array(
                'type' => 'decimalPoint',
            ),
            'bgImageParallaxHorizontalEnd' => array(
                'type' => 'decimalPoint',
            ),
            'bgImageParallaxVerticalStart' => array(
                'type' => 'decimalPoint',
            ),
            'bgImageParallaxVerticalEnd' => array(
                'type' => 'decimalPoint',
            ),
            'bgImageVisibility' => array(
                'type' => 'string',
            ),
            'bgImageOverlay' => array(
                'type' => 'boolean',
            ),
            'bgImageOverlayColor' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'                        => '',
            'style'                          => '',
            'textColor'                      => '',
            'padding'                        => '',
            'removeTopPadding'               => '',
            'removeBottomPadding'            => '',
            'container'                      => 'default',
            'bgColor'                        => '',
            'bgImageMediaId'                      => '',
            'bgImageSize'                    => '',
            'bgImagePosition'                => 'center-center',
            'bgImageEffect'                  => '',
            'bgImageParallaxHorizontalStart' => 0,
            'bgImageParallaxHorizontalEnd'   => 0,
            'bgImageParallaxVerticalStart'   => 0,
            'bgImageParallaxVerticalEnd'     => 0,
            'bgImageVisibility'              => '',
            'bgImageOverlay'                 => false,
            'bgImageOverlayColor'            => '',
        );
    }

endif;
