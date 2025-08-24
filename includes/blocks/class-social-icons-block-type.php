<?php
/**
 * Register uikit-editor-blocks/social-icons block type.
 *
 * @package uikit-editor-blocks/social-icons
 */

namespace Uikit_Editor_Blocks\Social_Icons;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Social_Icons\Social_Icons_Block_Type', false ) ) :

    /**
     * Class Social_Icons_Block_Type
     */
    class Social_Icons_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/social-icons';

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
            'linkStyle' => array(
                'type' => 'string',
            ),
            'grid' => array(
                'type' => 'string',
            ),
            'gridBreakpoint' => array(
                'type' => 'string',
            ),
            'gridGap' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'        => '',
            'linkStyle'      => 'default',
            'grid'           => '',
            'gridBreakpoint' => '',
            'gridGap'        => '',
        );

        /**
         * Default values of block provides_context.
         *
         * @var array
         */
        protected $provides_context = array(
            'uikit-editor-blocks/social-icons-linkStyle' => 'linkStyle',
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
