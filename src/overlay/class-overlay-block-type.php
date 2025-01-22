<?php
/**
 * Register uikit-editor-blocks/overlay block type.
 *
 * @package uikit-editor-blocks/overlay
 */

namespace Uikit_Editor_Blocks\Overlay;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Overlay\Overlay_Block_Type', false ) ) :

    /**
     * Class Overlay_Block_Type
     */
    class Overlay_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/overlay';

        /**
         * Block attributes.
         *
         * @var array
         */
        protected $attributes = array(
            'blockId' => array(
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
            'titleText' => array(
                'type' => 'string',
            ),
            'metaText' => array(
                'type' => 'string',
            ),
            'contentText' => array(
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
            'mode' => array(
                'type' => 'string',
            ),
            'hover' => array(
                'type' => 'boolean',
            ),
            'style' => array(
                'type' => 'string',
            ),
            'textColor' => array(
                'type' => 'string',
            ),
            'padding' => array(
                'type' => 'string',
            ),
            'position' => array(
                'type' => 'string',
            ),
            'margin' => array(
                'type' => 'string',
            ),
            'maxWidth' => array(
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
            'imageMediaId'     => '',
            'imageWidth'       => '',
            'imageHeight'      => '',
            'imageAlt'         => '',
            'titleText'        => '',
            'metaText'         => '',
            'contentText'      => '',
            'linkUrl'          => '',
            'linkText'         => '',
            'linkTarget'       => '',
            'linkRel'          => '',
            'linkTitle'        => '',
            'linkAriaLabel'    => '',
            'mode'             => 'cover',
            'hover'            => true,
            'style'            => 'overlay-primary',
            'textColor'        => '',
            'padding'          => '',
            'position'         => 'center',
            'margin'           => '',
            'maxWidth'         => '',
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
