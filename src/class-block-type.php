<?php
/**
 * Main class
 *
 * @package uikit-editor-blocks
 */

namespace Uikit_Editor_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Block_Type', false ) ) :

    /**
     * Class Block_Type
     */
    abstract class Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = '';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array();

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array();

        /**
         * Default values of block provides_context.
         *
         * @var array
         */
        protected $provides_context = array();

        /**
         * Default values of block uses_context.
         *
         * @var array
         */
        protected $uses_context = array();

        /**
         * Block_Type constructor.
         */
        public function __construct() {
            add_action( 'init', array( $this, 'register_block_type' ) );
        }

        /**
         * Registers block type
         */
        public function register_block_type() {
            /**
             * Filters default attributes of the block.
             *
             * @since 1.0.0
             *
             * @param array $default_attributes Default attributes of block.
             */
            $this->default_attributes = apply_filters( "uikit_editor_blocks_{$this->get_filter_prefix()}_default_attributes", $this->default_attributes );

            foreach ( $this->default_attributes as $attribute_name => $default_value ) {
                if ( array_key_exists( $attribute_name, $this->attributes ) ) {
                    $this->attributes[ $attribute_name ]['default'] = $default_value;
                }
            }

            register_block_type(
                $this->name,
                array(
                    'render_callback' => array( $this, 'render_callback' ),
                    'attributes' => $this->attributes,
                    'provides_context' => $this->provides_context,
                    'uses_context' => $this->uses_context,
                )
            );
        }

        /**
         * Render callback for uikit-editor-blocks/grid block.
         *
         * @param array  $attributes Block attributes.
         * @param string $content HTML content of block.
         * @return string Rendered block.
         */
        public function render_callback( $attributes, $content, $block ) {
            return uikit_editor_blocks_get_template( $this->get_template_name(), $attributes, $block, $content );
        }

        /**
         * Get filter prefix.
         *
         * @return string
         */
        protected function get_filter_prefix() {
            // Replace all special characters in block type name with underscore.
            // Eg. uikit-editor-blocks/myblock => uikit_editor_blocks_myblock
            return preg_replace( '/[-\/]/', '_', $this->name );
        }

        /**
         * Get name of block template.
         *
         * @return string
         */
        protected function get_template_name() {
            // Remove namespace from block name.
            $namespace_separator_position = strrpos( $this->name, '/' );
            return false === $namespace_separator_position ? $this->name : substr( $this->name, $namespace_separator_position + 1 );
        }
    }

endif;
