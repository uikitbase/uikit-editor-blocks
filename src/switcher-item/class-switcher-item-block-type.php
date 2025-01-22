<?php
/**
 * Register uikit-editor-blocks/switcher-item block type.
 *
 * @package uikit-editor-blocks/switcher-item
 */

namespace Uikit_Editor_Blocks\Switcher_Item;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Switcher_Item\Switcher_Item_Block_Type', false ) ) :

    /**
     * Class Switcher_Item_Block_Type
     */
    class Switcher_Item_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/switcher-item';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'titleText' => array(
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
            'titleText' => 'Title',
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
