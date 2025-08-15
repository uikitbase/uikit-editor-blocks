<?php
/**
 * Register uikit-editor-blocks/grid-column block type.
 *
 * @package uikit-editor-blocks/grid-column
 */

namespace Uikit_Editor_Blocks\Grid_Column;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Grid_Column\Grid_Column_Block_Type', false ) ) :

    /**
     * Class Grid_Column_Block_Type
     */
    class Grid_Column_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/grid-column';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'defaultWidth' => array(
                'type' => 'string',
            ),
            'smallWidth' => array(
                'type' => 'string',
            ),
            'mediumWidth' => array(
                'type' => 'string',
            ),
            'largeWidth' => array(
                'type' => 'string',
            ),
            'xlargeWidth' => array(
                'type' => 'string',
            ),
            'orderFirst' => array(
                'type' => 'string',
            ),
            'verticalAlignment' => array(
                'type' => 'string',
            ),
            'padding' => array(
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
            'defaultWidth'                   => '1-1',
            'smallWidth'                     => '',
            'mediumWidth'                    => '',
            'largeWidth'                     => '1-2',
            'xlargeWidth'                    => '',
            'orderFirst'                     => '',
            'verticalAlignment'              => '',
            'padding'                        => '',
            'bgColor'                        => '',
            'bgImageMediaId'                 => '',
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
