<?php
/**
 * Register uikit-editor-blocks/container block type.
 *
 * @package uikit-editor-blocks/container
 */

namespace Uikit_Editor_Blocks\Container;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Container\Container_Block_Type', false ) ) :

    /**
     * Class Container_Block_Type
     */
    class Container_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/container';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'size' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId' => '',
            'size'    => '',
        );
    }

endif;
