<?php
/**
 * Register uikit-editor-blocks/accordion-item block type.
 *
 * @package uikit-editor-blocks/accordion-item
 */

namespace Uikit_Editor_Blocks\Accordion_Item;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Accordion_Item\Accordion_Item_Block_Type', false ) ) :

    /**
     * Class Accordion_Item_Block_Type
     */
    class Accordion_Item_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/accordion-item';

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
            'contentText' => array(
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
            'titleText'   => '',
            'contentText' => '',
        );

        /**
         * Default values of block uses_context.
         *
         * @var array
         */
        protected $uses_context = array(
            'uikit-editor-blocks/accordion-contentStyle',
            'uikit-editor-blocks/accordion-contentTopMargin',
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
