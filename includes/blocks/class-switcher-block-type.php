<?php
/**
 * Register uikit-editor-blocks/switcher block type.
 *
 * @package uikit-editor-blocks/switcher
 */

namespace Uikit_Editor_Blocks\Switcher;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Switcher\Switcher_Block_Type', false ) ) :

    /**
     * Class Switcher_Block_Type
     */
    class Switcher_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/switcher';

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
            'animation' => array(
                'type' => 'string',
            ),
            'navigation' => array(
                'type' => 'string',
            ),
            'navigationPosition' => array(
                'type' => 'string',
            ),
            'navigationAlignment' => array(
                'type' => 'string',
            ),
            'navigationMargin' => array(
                'type' => 'string',
            ),
            'navigationGridWidth' => array(
                'type' => 'string',
            ),
            'navigationGridColumnGap' => array(
                'type' => 'string',
            ),
            'navigationGridRowGap' => array(
                'type' => 'string',
            ),
            'navigationGridBreakpoint' => array(
                'type' => 'string',
            ),
            'navigationVerticalAlignment' => array(
                'type' => 'boolean',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'                     => '',
            'animation'                   => '',
            'navigation'                  => 'tabs',
            'navigationPosition'          => 'top',
            'navigationAlignment'         => 'left',
            'navigationMargin'            => 'medium',
            'navigationGridWidth'         => 'auto',
            'navigationGridColumnGap'     => '',
            'navigationGridRowGap'        => '',
            'navigationGridBreakpoint'    => 'small',
            'navigationVerticalAlignment' => false,
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
