<?php
/**
 * Register uikit-editor-blocks/alert block type.
 *
 * @package uikit-editor-blocks/alert
 */

namespace Uikit_Editor_Blocks\Alert;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Alert\Alert_Block_Type', false ) ) :

    /**
     * Class Alert_Block_Type
     */
    class Alert_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/alert';

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
            'style' => array(
                'type' => 'string',
            ),
            'largerPadding' => array(
                'type' => 'boolean',
            ),
            'titleStyle' => array(
                'type' => 'string',
            ),
            'titleElement' => array(
                'type' => 'string',
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
            'titleText'        => '',
            'contentText'      => '',
            'linkUrl'          => '',
            'linkTarget'       => '',
            'linkRel'          => '',
            'linkTitle'        => '',
            'linkAriaLabel'    => '',
            'style'            => '',
            'largerPadding'    => false,
            'titleStyle'       => '',
            'titleElement'     => 'h3',
            'contentStyle'     => '',
            'contentTopMargin' => '',
        );
    }

endif;
