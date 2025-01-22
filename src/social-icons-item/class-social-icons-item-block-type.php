<?php
/**
 * Register uikit-editor-blocks/social-icons-item block type.
 *
 * @package uikit-editor-blocks/social-icons-item
 */

namespace Uikit_Editor_Blocks\Social_Icons_Item;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Social_Icons_Item\Social_Icons_Item_Block_Type', false ) ) :

    /**
     * Class Social_Icons_Item_Block_Type
     */
    class Social_Icons_Item_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/social-icons-item';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'icon' => array(
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
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'       => '',
            'icon'          => '',
            'linkUrl'       => '',
            'linkTarget'    => '',
            'linkRel'       => '',
            'linkTitle'     => '',
            'linkAriaLabel' => '',
        );

        /**
         * Default values of block uses_context.
         *
         * @var array
         */
        protected $uses_context = array(
            'uikit-editor-blocks/social-icons-linkStyle',
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
