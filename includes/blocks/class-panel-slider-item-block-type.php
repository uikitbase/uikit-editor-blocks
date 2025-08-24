<?php
/**
 * Register uikit-editor-blocks/panel-slider-item block type.
 *
 * @package uikit-editor-blocks/panel-slider-item
 */

namespace Uikit_Editor_Blocks\Panel_Slider_Item;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Panel_Slider_Item\Panel_Slider_Item_Block_Type', false ) ) :

    /**
     * Class Panel_Slider_Item_Block_Type
     */
    class Panel_Slider_Item_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/panel-slider-item';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
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
            'imageMediaId' => array(
                'type' => 'number',
            ),
            'imageAlt' => array(
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
            'titleText'     => '',
            'metaText'      => '',
            'contentText'   => '',
            'imageMediaId'  => '',
            'imageAlt'      => '',
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
            'uikit-editor-blocks/panel-slider-sliderWidth',
            'uikit-editor-blocks/panel-slider-sliderDefaultWidth',
            'uikit-editor-blocks/panel-slider-sliderSmallWidth',
            'uikit-editor-blocks/panel-slider-sliderMediumWidth',
            'uikit-editor-blocks/panel-slider-sliderLargeWidth',
            'uikit-editor-blocks/panel-slider-sliderXlargeWidth',
            'uikit-editor-blocks/panel-slider-panelStyle',
            'uikit-editor-blocks/panel-slider-panelPadding',
            'uikit-editor-blocks/panel-slider-panelLink',
            'uikit-editor-blocks/panel-slider-imageWidth',
            'uikit-editor-blocks/panel-slider-imageHeight',
            'uikit-editor-blocks/panel-slider-titleStyle',
            'uikit-editor-blocks/panel-slider-titleDecoration',
            'uikit-editor-blocks/panel-slider-titleColor',
            'uikit-editor-blocks/panel-slider-titleElement',
            'uikit-editor-blocks/panel-slider-titleTopMargin',
            'uikit-editor-blocks/panel-slider-metaStyle',
            'uikit-editor-blocks/panel-slider-metaColor',
            'uikit-editor-blocks/panel-slider-metaAlignment',
            'uikit-editor-blocks/panel-slider-metaElement',
            'uikit-editor-blocks/panel-slider-metaTopMargin',
            'uikit-editor-blocks/panel-slider-contentStyle',
            'uikit-editor-blocks/panel-slider-contentTopMargin',
            'uikit-editor-blocks/panel-slider-linkStyle',
            'uikit-editor-blocks/panel-slider-linkButtonSize',
            'uikit-editor-blocks/panel-slider-linkTopMargin',
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
