<?php
/**
 * Register uikit-editor-blocks/icon block type.
 *
 * @package uikit-editor-blocks/icon
 */

namespace Uikit_Editor_Blocks\Icon;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Icon\Icon_Block_Type', false ) ) :

    /**
     * Class Icon_Block_Type
     */
    class Icon_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/icon';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'icon' => array(
                'type' => 'string',
            ),
            'color' => array(
                'type' => 'string',
            ),
            'width' => array(
                'type' => 'integer',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId' => '',
            'icon'    => '',
            'color'   => '',
            'width'   => 60,
        );
    }

endif;
