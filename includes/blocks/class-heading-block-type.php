<?php
/**
 * Register uikit-editor-blocks/heading block type.
 *
 * @package uikit-editor-blocks/heading
 */

namespace Uikit_Editor_Blocks\Heading;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Heading\Heading_Block_Type', false ) ) :

    /**
     * Class Heading_Block_Type
     */
    class Heading_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/heading';

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
            'text' => array(
                'type' => 'string',
            ),
            'style' => array(
                'type' => 'string',
            ),
            'decoration' => array(
                'type' => 'string',
            ),
            'color' => array(
                'type' => 'string',
            ),
            'element' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'    => '',
            'text'       => '',
            'style'      => '',
            'decoration' => '',
            'color'      => '',
            'element'    => 'h1',
        );
    }

endif;
