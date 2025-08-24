<?php
/**
 * Register uikit-editor-blocks/slideshow-item block type.
 *
 * @package uikit-editor-blocks/slideshow-item
 */

namespace Uikit_Editor_Blocks\Slideshow_Item;

use Uikit_Editor_Blocks\Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( '\Uikit_Editor_Blocks\Slideshow_Item\Slideshow_Item_Block_Type', false ) ) :

    /**
     * Class Slideshow_Item_Block_Type
     */
    class Slideshow_Item_Block_Type extends Block_Type {
        /**
         * Name of block type including namespace.
         *
         * @var string
         */
        protected $name = 'uikit-editor-blocks/slideshow-item';

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
            'textColor' => array(
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
            'imageMediaId'  => '',
            'imageAlt'      => '',
            'titleText'     => '',
            'metaText'      => '',
            'contentText'   => '',
            'linkUrl'       => '',
            'linkText'      => '',
            'linkTarget'    => '',
            'linkRel'       => '',
            'linkTitle'     => '',
            'linkAriaLabel' => '',
            'textColor'     => '',
        );

        /**
         * Default values of block uses_context.
         *
         * @var array
         */
        protected $uses_context = array(
            'uikit-editor-blocks/slideshow-textColor',
            'uikit-editor-blocks/slideshow-overlayContainerWidth',
            'uikit-editor-blocks/slideshow-overlayContainerPadding',
            'uikit-editor-blocks/slideshow-overlayMargin',
            'uikit-editor-blocks/slideshow-overlayPosition',
            'uikit-editor-blocks/slideshow-overlayStyle',
            'uikit-editor-blocks/slideshow-overlayPadding',
            'uikit-editor-blocks/slideshow-overlayWidth',
            'uikit-editor-blocks/slideshow-overlayAnimation',
            'uikit-editor-blocks/slideshow-titleStyle',
            'uikit-editor-blocks/slideshow-titleDecoration',
            'uikit-editor-blocks/slideshow-titleColor',
            'uikit-editor-blocks/slideshow-titleElement',
            'uikit-editor-blocks/slideshow-titleTopMargin',
            'uikit-editor-blocks/slideshow-metaStyle',
            'uikit-editor-blocks/slideshow-metaColor',
            'uikit-editor-blocks/slideshow-metaAlignment',
            'uikit-editor-blocks/slideshow-metaElement',
            'uikit-editor-blocks/slideshow-metaTopMargin',
            'uikit-editor-blocks/slideshow-contentStyle',
            'uikit-editor-blocks/slideshow-contentTopMargin',
            'uikit-editor-blocks/slideshow-linkStyle',
            'uikit-editor-blocks/slideshow-linkButtonSize',
            'uikit-editor-blocks/slideshow-linkTopMargin',
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
