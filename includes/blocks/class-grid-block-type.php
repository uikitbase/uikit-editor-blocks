<?php
/**
 * Register uikit-editor-blocks/grid block type.
 *
 * @package uikit-editor-blocks/grid
 */

namespace Uikit_Editor_Blocks\Grid;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Grid\Grid_Block_Type', false ) ) :

    /**
     * Class Grid_Block_Type
     */
    class Grid_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/grid';

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
            'layout' => array(
                'type' => 'string',
            ),
            'columnGap' => array(
                'type' => 'string',
            ),
            'rowGap' => array(
                'type' => 'string',
            ),
            'columnMatch' => array(
                'type' => 'boolean',
            ),
            'divider' => array(
                'type' => 'boolean',
            ),
            'centerColumns' => array(
                'type' => 'boolean',
            ),
            'centerRows' => array(
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
            'layout'        => '1-2+1-2',
            'columnGap'     => '',
            'rowGap'        => '',
            'columnMatch'   => false,
            'divider'       => false,
            'centerColumns' => false,
            'centerRows'    => false,
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
