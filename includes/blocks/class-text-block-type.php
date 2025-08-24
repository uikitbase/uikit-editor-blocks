<?php
/**
 * Register uikit-editor-blocks/text block type.
 *
 * @package uikit-editor-blocks/text
 */

namespace Uikit_Editor_Blocks\Text;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Text\Text_Block_Type', false ) ) :

    /**
     * Class Text_Block_Type
     */
    class Text_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/text';

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
            'dropCap' => array(
                'type' => 'boolean',
            ),
            'style' => array(
                'type' => 'string',
            ),
            'color' => array(
                'type' => 'string',
            ),
            'size' => array(
                'type' => 'string',
            ),
            'element' => array(
                'type' => 'string',
            ),
            'alignment' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'   => '',
            'text'      => '',
            'dropCap'   => '',
            'style'     => '',
            'color'     => '',
            'size'      => '',
            'element'   => 'p',
            'alignment' => '',
        );
    }

endif;
