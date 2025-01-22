<?php
/**
 * Register uikit-editor-blocks/overlay-slider block type.
 *
 * @package uikit-editor-blocks/overlay-slider
 */

namespace Uikit_Editor_Blocks\Overlay_Slider;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Overlay_Slider\Overlay_Slider_Block_Type', false ) ) :

    /**
     * Class Overlay_Slider_Block_Type
     */
    class Overlay_Slider_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/overlay-slider';

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
            'sliderHeight' => array(
                'type' => 'string',
            ),
            'sliderMinHeight' => array(
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
            'overlayMode' => array(
                'type' => 'string',
            ),
            'overlayHover' => array(
                'type' => 'boolean',
            ),
            'overlayStyle' => array(
                'type' => 'string',
            ),
            'overlayTextColor' => array(
                'type' => 'string',
            ),
            'overlayPadding' => array(
                'type' => 'string',
            ),
            'overlayPosition' => array(
                'type' => 'string',
            ),
            'overlayMargin' => array(
                'type' => 'string',
            ),
            'overlayMaxWidth' => array(
                'type' => 'string',
            ),
            'overlayLink' => array(
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
            'sliderHeight'         => '',
            'sliderMinHeight'      => 300,
            'sliderGap'            => '',
            'sliderDivider'        => '',
            'sliderDefaultWidth'   => '1-1',
            'sliderSmallWidth'     => '',
            'sliderMediumWidth'    => '1-3',
            'sliderLargeWidth'     => '',
            'sliderXlargeWidth'    => '',
            'sliderAutoplay'       => false,
            'navigation'           => 'dotnav',
            'navigationPosition'   => 'center',
            'navigationMargin'     => 'top',
            'navigationBreakpoint' => 'small',
            'navigationColor'      => '',
            'slidenavPosition'     => 'default',
            'slidenavMargin'       => 'medium',
            'slidenavBreakpoint'   => 'small',
            'slidenavColor'        => '',
            'overlayMode'          => 'cover',
            'overlayHover'         => true,
            'overlayStyle'         => 'overlay-primary',
            'overlayTextColor'     => '',
            'overlayPadding'       => '',
            'overlayPosition'      => 'center',
            'overlayMargin'        => '',
            'overlayMaxWidth'      => '',
            'overlayLink'          => false,
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
            'uikit-editor-blocks/overlay-slider-sliderWidth'        => 'sliderWidth',
            'uikit-editor-blocks/overlay-slider-sliderHeight'       => 'sliderHeight',
            'uikit-editor-blocks/overlay-slider-sliderMinHeight'    => 'sliderMinHeight',
            'uikit-editor-blocks/overlay-slider-sliderDefaultWidth' => 'sliderDefaultWidth',
            'uikit-editor-blocks/overlay-slider-sliderSmallWidth'   => 'sliderSmallWidth',
            'uikit-editor-blocks/overlay-slider-sliderMediumWidth'  => 'sliderMediumWidth',
            'uikit-editor-blocks/overlay-slider-sliderLargeWidth'   => 'sliderLargeWidth',
            'uikit-editor-blocks/overlay-slider-sliderXlargeWidth'  => 'sliderXlargeWidth',
            'uikit-editor-blocks/overlay-slider-overlayMode'        => 'overlayMode',
            'uikit-editor-blocks/overlay-slider-overlayHover'       => 'overlayHover',
            'uikit-editor-blocks/overlay-slider-overlayStyle'       => 'overlayStyle',
            'uikit-editor-blocks/overlay-slider-overlayTextColor'   => 'overlayTextColor',
            'uikit-editor-blocks/overlay-slider-overlayPadding'     => 'overlayPadding',
            'uikit-editor-blocks/overlay-slider-overlayPosition'    => 'overlayPosition',
            'uikit-editor-blocks/overlay-slider-overlayMargin'      => 'overlayMargin',
            'uikit-editor-blocks/overlay-slider-overlayMaxWidth'    => 'overlayMaxWidth',
            'uikit-editor-blocks/overlay-slider-overlayLink'        => 'overlayLink',
            'uikit-editor-blocks/overlay-slider-imageWidth'         => 'imageWidth',
            'uikit-editor-blocks/overlay-slider-imageHeight'        => 'imageHeight',
            'uikit-editor-blocks/overlay-slider-titleStyle'         => 'titleStyle',
            'uikit-editor-blocks/overlay-slider-titleDecoration'    => 'titleDecoration',
            'uikit-editor-blocks/overlay-slider-titleColor'         => 'titleColor',
            'uikit-editor-blocks/overlay-slider-titleElement'       => 'titleElement',
            'uikit-editor-blocks/overlay-slider-titleTopMargin'     => 'titleTopMargin',
            'uikit-editor-blocks/overlay-slider-metaStyle'          => 'metaStyle',
            'uikit-editor-blocks/overlay-slider-metaColor'          => 'metaColor',
            'uikit-editor-blocks/overlay-slider-metaAlignment'      => 'metaAlignment',
            'uikit-editor-blocks/overlay-slider-metaElement'        => 'metaElement',
            'uikit-editor-blocks/overlay-slider-metaTopMargin'      => 'metaTopMargin',
            'uikit-editor-blocks/overlay-slider-contentStyle'       => 'contentStyle',
            'uikit-editor-blocks/overlay-slider-contentTopMargin'   => 'contentTopMargin',
            'uikit-editor-blocks/overlay-slider-linkStyle'          => 'linkStyle',
            'uikit-editor-blocks/overlay-slider-linkButtonSize'     => 'linkButtonSize',
            'uikit-editor-blocks/overlay-slider-linkTopMargin'      => 'linkTopMargin',
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
