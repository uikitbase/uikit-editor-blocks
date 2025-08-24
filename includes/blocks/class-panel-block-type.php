<?php
/**
 * Register uikit-editor-blocks/panel block type.
 *
 * @package uikit-editor-blocks/panel
 */

namespace Uikit_Editor_Blocks\Panel;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Panel\Panel_Block_Type', false ) ) :

    /**
     * Class Panel_Block_Type
     */
    class Panel_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/panel';

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
            'titleText' => array(
                'type' => 'string',
            ),
            'metaText' => array(
                'type' => 'string',
            ),
            'contentText' => array(
                'type' => 'string',
            ),
            'imageMediaId' => array(
                'type' => 'number',
            ),
            'imageWidth' => array(
                'type' => 'string',
            ),
            'imageHeight' => array(
                'type' => 'string',
            ),
            'imageAlt' => array(
                'type' => 'string',
            ),
            'linkUrl' => array(
                'type' => 'string',
            ),
            'linkText' => array(
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
            'padding' => array(
                'type' => 'string',
            ),
            'link' => array(
                'type' => 'boolean',
            ),
            'titleStyle' => array(
                'type' => 'string',
            ),
            'titleDecoration' => array(
                'type' => 'string',
            ),
            'titleColor' => array(
                'type' => 'string',
            ),
            'titleElement' => array(
                'type' => 'string',
            ),
            'titleTopMargin' => array(
                'type' => 'string',
            ),
            'metaStyle' => array(
                'type' => 'string',
            ),
            'metaColor' => array(
                'type' => 'string',
            ),
            'metaAlignment' => array(
                'type' => 'string',
            ),
            'metaElement' => array(
                'type' => 'string',
            ),
            'metaTopMargin' => array(
                'type' => 'string',
            ),
            'contentStyle' => array(
                'type' => 'string',
            ),
            'contentTopMargin' => array(
                'type' => 'string',
            ),
            'linkStyle' => array(
                'type' => 'string',
            ),
            'linkButtonSize' => array(
                'type' => 'string',
            ),
            'linkTopMargin' => array(
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
            'metaText'         => '',
            'contentText'      => '',
            'imageMediaId'     => '',
            'imageWidth'       => '',
            'imageHeight'      => '',
            'imageAlt'         => '',
            'linkUrl'          => '',
            'linkText'         => 'Read more',
            'linkTarget'       => '',
            'linkRel'          => '',
            'linkTitle'        => '',
            'linkAriaLabel'    => '',
            'style'            => '',
            'padding'          => '',
            'link'             => false,
            'titleStyle'       => '',
            'titleDecoration'  => '',
            'titleColor'       => '',
            'titleElement'     => 'h3',
            'titleTopMargin'   => 'default',
            'metaStyle'        => 'text-meta',
            'metaColor'        => '',
            'metaAlignment'    => 'below-title',
            'metaElement'      => 'div',
            'metaTopMargin'    => 'default',
            'contentStyle'     => '',
            'contentTopMargin' => 'default',
            'linkStyle'        => 'button-default',
            'linkButtonSize'   => '',
            'linkTopMargin'    => 'default',
        );
    }

endif;
