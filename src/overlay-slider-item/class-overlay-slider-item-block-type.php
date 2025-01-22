<?php
/**
 * Register uikit-editor-blocks/overlay-slider-item block type.
 *
 * @package uikit-editor-blocks/overlay-slider-item
 */

namespace Uikit_Editor_Blocks\Overlay_Slider_Item;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Overlay_Slider_Item\Overlay_Slider_Item_Block_Type', false ) ) :

    /**
     * Class Overlay_Slider_Item_Block_Type
     */
    class Overlay_Slider_Item_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/overlay-slider-item';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'imageMediaId' => array(
                'type' => 'number',
            ),
            'imageAlt' => array(
                'type' => 'string',
            ),
            'titleText' => array(
                'type' => 'string',
            ),
            'metaText' => array(
                'type' => 'string',
            ),
            'contentText' => array(
                'type' => 'string',
            ),
            'linkUrl' => array(
                'type' => 'string',
            ),
            'linkText' => array(
                'type' => 'string',
            ),
            'linkTarget' => array(
                'type' => 'string',
            ),
            'linkRel' => array(
                'type' => 'string',
            ),
            'linkTitle' => array(
                'type' => 'string',
            ),
            'linkAriaLabel' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'       => '',
            'imageMediaId'       => '',
            'imageAlt'      => '',
            'titleText'     => '',
            'metaText'      => '',
            'contentText'   => '',
            'linkUrl'       => '',
            'linkText'      => '',
            'linkTarget'    => '',
            'linkRel'       => '',
            'linkTitle'     => '',
            'linkAriaLabel' => '',
        );

        /**
         * Default values of block uses_context.
         *
         * @var array
         */
        protected $uses_context = array(
            'uikit-editor-blocks/overlay-slider-sliderWidth',
            'uikit-editor-blocks/overlay-slider-sliderHeight',
            'uikit-editor-blocks/overlay-slider-sliderMinHeight',
            'uikit-editor-blocks/overlay-slider-sliderDefaultWidth',
            'uikit-editor-blocks/overlay-slider-sliderSmallWidth',
            'uikit-editor-blocks/overlay-slider-sliderMediumWidth',
            'uikit-editor-blocks/overlay-slider-sliderLargeWidth',
            'uikit-editor-blocks/overlay-slider-sliderXlargeWidth',
            'uikit-editor-blocks/overlay-slider-overlayMode',
            'uikit-editor-blocks/overlay-slider-overlayHover',
            'uikit-editor-blocks/overlay-slider-overlayStyle',
            'uikit-editor-blocks/overlay-slider-overlayTextColor',
            'uikit-editor-blocks/overlay-slider-overlayPadding',
            'uikit-editor-blocks/overlay-slider-overlayPosition',
            'uikit-editor-blocks/overlay-slider-overlayMargin',
            'uikit-editor-blocks/overlay-slider-overlayMaxWidth',
            'uikit-editor-blocks/overlay-slider-overlayLink',
            'uikit-editor-blocks/overlay-slider-imageWidth',
            'uikit-editor-blocks/overlay-slider-imageHeight',
            'uikit-editor-blocks/overlay-slider-titleStyle',
            'uikit-editor-blocks/overlay-slider-titleDecoration',
            'uikit-editor-blocks/overlay-slider-titleColor',
            'uikit-editor-blocks/overlay-slider-titleElement',
            'uikit-editor-blocks/overlay-slider-titleTopMargin',
            'uikit-editor-blocks/overlay-slider-metaStyle',
            'uikit-editor-blocks/overlay-slider-metaColor',
            'uikit-editor-blocks/overlay-slider-metaAlignment',
            'uikit-editor-blocks/overlay-slider-metaElement',
            'uikit-editor-blocks/overlay-slider-metaTopMargin',
            'uikit-editor-blocks/overlay-slider-contentStyle',
            'uikit-editor-blocks/overlay-slider-contentTopMargin',
            'uikit-editor-blocks/overlay-slider-linkStyle',
            'uikit-editor-blocks/overlay-slider-linkButtonSize',
            'uikit-editor-blocks/overlay-slider-linkTopMargin',
        );

        /**
         * Get name of block template.
         *
         * @return string
         */
        protected function get_template_name() {
            $template_name = parent::get_template_name();
            
            return $template_name;
        }
    }

endif;
