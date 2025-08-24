<?php
/**
 * Register uikit-editor-blocks/panel-slider block type.
 *
 * @package uikit-editor-blocks/panel-slider
 */

namespace Uikit_Editor_Blocks\Panel_Slider;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Panel_Slider\Panel_Slider_Block_Type', false ) ) :

    /**
     * Class Panel_Slider_Block_Type
     */
    class Panel_Slider_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/panel-slider';

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
            'sliderWidth' => array(
                'type' => 'string',
            ),
            'sliderGap' => array(
                'type' => 'string',
            ),
            'sliderDivider' => array(
                'type' => 'boolean',
            ),
            'sliderDefaultWidth' => array(
                'type' => 'string',
            ),
            'sliderSmallWidth' => array(
                'type' => 'string',
            ),
            'sliderMediumWidth' => array(
                'type' => 'string',
            ),
            'sliderLargeWidth' => array(
                'type' => 'string',
            ),
            'sliderXlargeWidth' => array(
                'type' => 'string',
            ),
            'sliderAutoplay' => array(
                'type' => 'boolean',
            ),
            'navigation' => array(
                'type' => 'string',
            ),
            'navigationPosition' => array(
                'type' => 'string',
            ),
            'navigationMargin' => array(
                'type' => 'string',
            ),
            'navigationBreakpoint' => array(
                'type' => 'string',
            ),
            'navigationColor' => array(
                'type' => 'string',
            ),
            'slidenavPosition' => array(
                'type' => 'string',
            ),
            'slidenavMargin' => array(
                'type' => 'string',
            ),
            'slidenavBreakpoint' => array(
                'type' => 'string',
            ),
            'slidenavColor' => array(
                'type' => 'string',
            ),
            'panelStyle' => array(
                'type' => 'string',
            ),
            'panelPadding' => array(
                'type' => 'string',
            ),
            'panelMatch' => array(
                'type' => 'boolean',
            ),
            'panelLink' => array(
                'type' => 'boolean',
            ),
            'imageWidth' => array(
                'type' => 'string',
            ),
            'imageHeight' => array(
                'type' => 'string',
            ),
            'titleStyle' => array(
                'type' => 'string',
            ),
            'titleDecoration' => array(
                'type' => 'string',
            ),
            'titleColor' => array(
                'type' => 'string',
            ),
            'titleElement' => array(
                'type' => 'string',
            ),
            'titleTopMargin' => array(
                'type' => 'string',
            ),
            'metaStyle' => array(
                'type' => 'string',
            ),
            'metaColor' => array(
                'type' => 'string',
            ),
            'metaAlignment' => array(
                'type' => 'string',
            ),
            'metaElement' => array(
                'type' => 'string',
            ),
            'metaTopMargin' => array(
                'type' => 'string',
            ),
            'contentStyle' => array(
                'type' => 'string',
            ),
            'contentTopMargin' => array(
                'type' => 'string',
            ),
            'linkStyle' => array(
                'type' => 'string',
            ),
            'linkButtonSize' => array(
                'type' => 'string',
            ),
            'linkTopMargin' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'              => '',
            'sliderWidth'          => 'fixed',
            'sliderGap'            => '',
            'sliderDivider'        => '',
            'sliderDefaultWidth'   => '',
            'sliderSmallWidth'     => '1-3',
            'sliderMediumWidth'    => '',
            'sliderLargeWidth'     => '',
            'sliderXlargeWidth'    => '',
            'sliderAutoplay'       => false,
            'navigation'           => 'dotnav',
            'navigationPosition'   => 'center',
            'navigationMargin'     => 'medium',
            'navigationBreakpoint' => 'small',
            'navigationColor'      => '',
            'slidenavPosition'     => 'default',
            'slidenavMargin'       => 'medium',
            'slidenavBreakpoint'   => 'small',
            'slidenavColor'        => '',
            'panelStyle'           => 'none',
            'panelPadding'         => '',
            'panelMatch'           => true,
            'panelLink'            => false,
            'imageWidth'           => '',
            'imageHeight'          => '',
            'titleStyle'           => '',
            'titleDecoration'      => '',
            'titleColor'           => '',
            'titleElement'         => 'h3',
            'titleTopMargin'       => 'default',
            'metaStyle'            => 'text-meta',
            'metaColor'            => '',
            'metaAlignment'        => 'below-title',
            'metaElement'          => 'div',
            'metaTopMargin'        => 'default',
            'contentStyle'         => '',
            'contentTopMargin'     => 'default',
            'linkStyle'            => 'button-default',
            'linkButtonSize'       => '',
            'linkTopMargin'        => 'default',
        );

        /**
         * Default values of block provides_context.
         *
         * @var array
         */
        protected $provides_context = array(
            'uikit-editor-blocks/panel-slider-sliderWidth'        => 'sliderWidth',
            'uikit-editor-blocks/panel-slider-sliderDefaultWidth' => 'sliderDefaultWidth',
            'uikit-editor-blocks/panel-slider-sliderSmallWidth'   => 'sliderSmallWidth',
            'uikit-editor-blocks/panel-slider-sliderMediumWidth'  => 'sliderMediumWidth',
            'uikit-editor-blocks/panel-slider-sliderLargeWidth'   => 'sliderLargeWidth',
            'uikit-editor-blocks/panel-slider-sliderXlargeWidth'  => 'sliderXlargeWidth',
            'uikit-editor-blocks/panel-slider-panelStyle'         => 'panelStyle',
            'uikit-editor-blocks/panel-slider-panelPadding'       => 'panelPadding',
            'uikit-editor-blocks/panel-slider-panelLink'          => 'panelLink',
            'uikit-editor-blocks/panel-slider-imageWidth'         => 'imageWidth',
            'uikit-editor-blocks/panel-slider-imageHeight'        => 'imageHeight',
            'uikit-editor-blocks/panel-slider-titleStyle'         => 'titleStyle',
            'uikit-editor-blocks/panel-slider-titleDecoration'    => 'titleDecoration',
            'uikit-editor-blocks/panel-slider-titleColor'         => 'titleColor',
            'uikit-editor-blocks/panel-slider-titleElement'       => 'titleElement',
            'uikit-editor-blocks/panel-slider-titleTopMargin'     => 'titleTopMargin',
            'uikit-editor-blocks/panel-slider-metaStyle'          => 'metaStyle',
            'uikit-editor-blocks/panel-slider-metaColor'          => 'metaColor',
            'uikit-editor-blocks/panel-slider-metaAlignment'      => 'metaAlignment',
            'uikit-editor-blocks/panel-slider-metaElement'        => 'metaElement',
            'uikit-editor-blocks/panel-slider-metaTopMargin'      => 'metaTopMargin',
            'uikit-editor-blocks/panel-slider-contentStyle'       => 'contentStyle',
            'uikit-editor-blocks/panel-slider-contentTopMargin'   => 'contentTopMargin',
            'uikit-editor-blocks/panel-slider-linkStyle'          => 'linkStyle',
            'uikit-editor-blocks/panel-slider-linkButtonSize'     => 'linkButtonSize',
            'uikit-editor-blocks/panel-slider-linkTopMargin'      => 'linkTopMargin',
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
