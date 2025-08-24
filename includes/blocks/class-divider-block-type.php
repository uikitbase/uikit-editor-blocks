<?php
/**
 * Register uikit-editor-blocks/divider block type.
 *
 * @package uikit-editor-blocks/divider
 */

namespace Uikit_Editor_Blocks\Divider;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Divider\Divider_Block_Type', false ) ) :

    /**
     * Class Divider_Block_Type
     */
    class Divider_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/divider';

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
            'element' => array(
                'type' => 'string',
            ),
            'alignment' => array(
                'type' => 'string',
            ),
            'alignmentBreakpoint' => array(
                'type' => 'string',
            ),
            'alignmentFallback' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'             => '',
            'style'               => '',
            'element'             => 'hr',
            'alignment'           => '',
            'alignmentBreakpoint' => '',
            'alignmentFallback'   => '',
        );
    }

endif;
