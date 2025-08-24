<?php
/**
 * Register uikit-editor-blocks/accordion block type.
 *
 * @package uikit-editor-blocks/accordion
 */

namespace Uikit_Editor_Blocks\Accordion;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Accordion\Accordion_Block_Type', false ) ) :

    /**
     * Class Accordion_Block_Type
     */
    class Accordion_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/accordion';

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
            'multiple' => array(
                'type' => 'boolean',
            ),
            'collapsible' => array(
                'type' => 'boolean',
            ),
            'contentStyle' => array(
                'type' => 'string',
            ),
            'contentTopMargin' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'          => '',
            'multiple'         => false,
            'collapsible'      => false,
            'contentStyle'     => '',
            'contentTopMargin' => '',
        );

        /**
         * Default values of block provides_context.
         *
         * @var array
         */
        protected $provides_context = array(
            'uikit-editor-blocks/accordion-contentStyle'     => 'contentStyle',
            'uikit-editor-blocks/accordion-contentTopMargin' => 'contentTopMargin',
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
