<?php
/**
 * Register uikit-editor-blocks/quotation block type.
 *
 * @package uikit-editor-blocks/quotation
 */

namespace Uikit_Editor_Blocks\Quotation;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Quotation\Quotation_Block_Type', false ) ) :

    /**
     * Class Quotation_Block_Type
     */
    class Quotation_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/quotation';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
                'type' => 'string',
            ),
            'text' => array(
                'type' => 'string',
            ),
            'authorName' => array(
                'type' => 'string',
            ),
            'authorLinkUrl' => array(
                'type' => 'string',
            ),
            'authorLinkTarget' => array(
                'type' => 'string',
            ),
            'authorLinkRel' => array(
                'type' => 'string',
            ),
            'authorLinkTitle' => array(
                'type' => 'string',
            ),
            'authorLinkAriaLabel' => array(
                'type' => 'string',
            ),
            'footerText' => array(
                'type' => 'string',
            ),
            'linkStyle' => array(
                'type' => 'string',
            ),
        );

        /**
         * Default values of block attributes.
         *
         * @var array
         */
        protected $default_attributes = array(
            'blockId'             => '',
            'text'                => '',
            'authorName'          => '',
            'authorLinkUrl'       => '',
            'authorLinkTarget'    => '',
            'authorLinkRel'       => '',
            'authorLinkTitle'     => '',
            'authorLinkAriaLabel' => '',
            'footerText'          => '',
            'linkStyle'           => '',
        );
    }

endif;
