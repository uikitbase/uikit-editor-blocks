<?php
/**
 * Register uikit-editor-blocks/dropdown block type.
 *
 * @package uikit-editor-blocks/dropdown
 */

namespace Uikit_Editor_Blocks\Dropdown;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Dropdown\Dropdown_Block_Type', false ) ) :

    /**
     * Class Dropdown_Block_Type
     */
    class Dropdown_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/dropdown';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'position' => array(
                'type' => 'string',
            ),
            'titleText' => array(
                'type' => 'string',
            ),
            'buttonSize' => array(
                'type' => 'string',
            ),
            'buttonStyle' => array(
                'type' => 'string',
            ),
            'buttonIcon' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'     => '',
            'titleText'   => 'Dropdown',
            'position'    => 'bottom-left',
            'buttonSize'  => '',
            'buttonStyle' => 'default',
            'buttonIcon'  => '',
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
