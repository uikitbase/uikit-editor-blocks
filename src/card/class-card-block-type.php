<?php
/**
 * Register uikit-editor-blocks/card block type.
 *
 * @package uikit-editor-blocks/card
 */

namespace Uikit_Editor_Blocks\Card;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Card\Card_Block_Type', false ) ) :

    /**
     * Class Card_Block_Type
     */
    class Card_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/card';

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
            'style' => array(
                'type' => 'string',
            ),
            'size' => array(
                'type' => 'string',
            ),
            'titleElement' => array(
                'type' => 'string',
            ),
            'contentElement' => array(
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
            'titleText'      => '',
            'contentText'    => '',
            'style'          => '',
            'size'           => '',
            'titleElement'   => 'h3',
            'contentElement' => 'p',
        );
    }

endif;
