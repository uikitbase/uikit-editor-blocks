<?php
/**
 * Register uikit-editor-blocks/image block type.
 *
 * @package uikit-editor-blocks/image
 */

namespace Uikit_Editor_Blocks\Image;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Image\Image_Block_Type', false ) ) :

    /**
     * Class Image_Block_Type
     */
    class Image_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/image';

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
            'mediaId' => array(
                'type' => 'number',
            ),
            'mediaUrl' => array(
                'type' => 'string',
            ),
            'width' => array(
                'type' => 'string',
            ),
            'height' => array(
                'type' => 'string',
            ),
            'alt' => array(
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
            'border' => array(
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
            'mediaId'       => '',
            'mediaUrl'      => '',
            'width'         => '',
            'height'        => '',
            'alt'           => '',
            'linkUrl'       => '',
            'linkTarget'    => '',
            'linkRel'       => '',
            'linkTitle'     => '',
            'linkAriaLabel' => '',
            'border'   => '',
        );
    }

endif;
