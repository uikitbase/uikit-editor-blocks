<?php
/**
 * Register uikit-editor-blocks/button block type.
 *
 * @package uikit-editor-blocks/button
 */

namespace Uikit_Editor_Blocks\Button;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Button\Button_Block_Type', false ) ) :

    /**
     * Class Button_Block_Type
     */
    class Button_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/button';

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
            'linkUrl' => array(
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
            'style' => array(
                'type' => 'string',
            ),
            'size' => array(
                'type' => 'string',
            ),
            'fullWidth' => array(
                'type' => 'boolean',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'       => '',
            'text'          => '',
            'linkUrl'       => '',
            'linkTarget'    => '',
            'linkRel'       => '',
            'linkTitle'     => '',
            'linkAriaLabel' => '',
            'style'         => 'default',
            'size'          => '',
            'fullWidth'     => false,
        );
    }

endif;
