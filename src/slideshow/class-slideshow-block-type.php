<?php
/**
 * Register uikit-editor-blocks/slideshow block type.
 *
 * @package uikit-editor-blocks/slideshow
 */

namespace Uikit_Editor_Blocks\Slideshow;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Slideshow\Slideshow_Block_Type', false ) ) :

    /**
     * Class Slideshow_Block_Type
     */
    class Slideshow_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/slideshow';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'height' => array(
                'type' => 'string',
            ),
            'heightViewport' => array(
                'type' => 'string',
            ),
            'ratio' => array(
                'type' => 'string',
            ),
            'minHeight' => array(
                'type' => 'string',
            ),
            'maxHeight' => array(
                'type' => 'string',
            ),
            'textColor' => array(
                'type' => 'string',
            ),
            'boxShadow' => array(
                'type' => 'string',
            ),
            'animation' => array(
                'type' => 'string',
            ),
            'autoplay' => array(
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
            'slidenavPosition' => array(
                'type' => 'string',
            ),
            'slidenavMargin' => array(
                'type' => 'string',
            ),
            'overlayContainerWidth' => array(
                'type' => 'string',
            ),
            'overlayContainerPadding' => array(
                'type' => 'string',
            ),
            'overlayMargin' => array(
                'type' => 'string',
            ),
            'overlayPosition' => array(
                'type' => 'string',
            ),
            'overlayStyle' => array(
                'type' => 'string',
            ),
            'overlayPadding' => array(
                'type' => 'string',
            ),
            'overlayWidth' => array(
                'type' => 'string',
            ),
            'overlayAnimation' => array(
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
            'blockId'                 => '',
            'height'                  => '',
            'heightViewport'          => '100',
            'ratio'                   => '',
            'minHeight'               => '300',
            'maxHeight'               => '600',
            'textColor'               => '',
            'boxShadow'               => '',
            'animation'               => '',
            'autoplay'                => false,
            'navigation'              => 'dotnav',
            'navigationPosition'      => 'bottom-center',
            'navigationMargin'        => 'medium',
            'slidenavPosition'        => 'default',
            'slidenavMargin'          => 'medium',
            'overlayContainerWidth'   => '',
            'overlayContainerPadding' => '',
            'overlayMargin'           => '',
            'overlayPosition'         => 'center-center',
            'overlayStyle'            => 'overlay-primary',
            'overlayPadding'          => 'large',
            'overlayWidth'            => '',
            'overlayAnimation'        => '',
            'titleStyle'              => '',
            'titleDecoration'         => '',
            'titleColor'              => '',
            'titleElement'            => 'h3',
            'titleTopMargin'          => 'default',
            'metaStyle'               => 'text-meta',
            'metaColor'               => '',
            'metaAlignment'           => 'below-title',
            'metaElement'             => 'div',
            'metaTopMargin'           => 'default',
            'contentStyle'            => '',
            'contentTopMargin'        => 'default',
            'linkStyle'               => 'button-default',
            'linkButtonSize'          => '',
            'linkTopMargin'           => 'default',
        );

        /**
         * Default values of block provides_context.
         *
         * @var array
         */
        protected $provides_context = array(
            'uikit-editor-blocks/slideshow-textColor'               => 'textColor',
            'uikit-editor-blocks/slideshow-overlayContainerWidth'   => 'overlayContainerWidth',
            'uikit-editor-blocks/slideshow-overlayContainerPadding' => 'overlayContainerPadding',
            'uikit-editor-blocks/slideshow-overlayMargin'           => 'overlayMargin',
            'uikit-editor-blocks/slideshow-overlayPosition'         => 'overlayPosition',
            'uikit-editor-blocks/slideshow-overlayStyle'            => 'overlayStyle',
            'uikit-editor-blocks/slideshow-overlayPadding'          => 'overlayPadding',
            'uikit-editor-blocks/slideshow-overlayWidth'            => 'overlayWidth',
            'uikit-editor-blocks/slideshow-overlayAnimation'        => 'overlayAnimation',
            'uikit-editor-blocks/slideshow-titleStyle'              => 'titleStyle',
            'uikit-editor-blocks/slideshow-titleDecoration'         => 'titleDecoration',
            'uikit-editor-blocks/slideshow-titleColor'              => 'titleColor',
            'uikit-editor-blocks/slideshow-titleElement'            => 'titleElement',
            'uikit-editor-blocks/slideshow-titleTopMargin'          => 'titleTopMargin',
            'uikit-editor-blocks/slideshow-metaStyle'               => 'metaStyle',
            'uikit-editor-blocks/slideshow-metaColor'               => 'metaColor',
            'uikit-editor-blocks/slideshow-metaAlignment'           => 'metaAlignment',
            'uikit-editor-blocks/slideshow-metaElement'             => 'metaElement',
            'uikit-editor-blocks/slideshow-metaTopMargin'           => 'metaTopMargin',
            'uikit-editor-blocks/slideshow-contentStyle'            => 'contentStyle',
            'uikit-editor-blocks/slideshow-contentTopMargin'        => 'contentTopMargin',
            'uikit-editor-blocks/slideshow-linkStyle'               => 'linkStyle',
            'uikit-editor-blocks/slideshow-linkButtonSize'          => 'linkButtonSize',
            'uikit-editor-blocks/slideshow-linkTopMargin'           => 'linkTopMargin',
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
