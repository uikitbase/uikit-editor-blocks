<?php
/**
 * Uikit_Editor_Blocks general options
 *
 * @package uikit-editor-blocks
 */

namespace Uikit_Editor_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


if ( ! class_exists( '\Uikit_Editor_Blocks\General', false ) ) :
    /**
     * Class General
     */
    class General {
        /**
         * True if settings are already initialized.
         *
         * @var bool
         */
        private static $initialized = false;
        
        public static function init() {
            if ( ! self::$initialized ) {
                add_filter( 'render_block', array( __CLASS__, 'render_block' ), 10, 2 );
                add_filter( 'register_block_type_args', array( __CLASS__, 'register_block_type_args' ), 10, 2 );

                self::$initialized = true;
            }
        }

        public static function render_block( $block_content, $block ) {
            $classes = array();

            if( isset( $block['attrs']['ueb_disableBlock'] ) && $block['attrs']['ueb_disableBlock'] ) {
                return '';
            }

            $margin_classes = array(
                'default' => 'uk-margin',
                'small'   => 'uk-margin-small',
                'medium'  => 'uk-margin-medium',
                'large'   => 'uk-margin-large',
                'xlarge'  => 'uk-margin-xlarge',
            );

            $textAlignment_classes = array(
                'left'    => 'uk-text-left',
                'center'  => 'uk-text-center',
                'right'   => 'uk-text-right',
                'justify' => 'uk-text-justify',
            );

            $textAlignmentBreakpoint_classes = array(
                'small'  => '@s',
                'medium' => '@m',
                'large'  => '@l',
                'xlarge' => '@xl',
            );

            $textAlignmentFallback_classes = array(
                'left'    => 'uk-text-left',
                'center'  => 'uk-text-center',
                'right'   => 'uk-text-right',
                'justify' => 'uk-text-justify',
            );

            $maxWidth_classes = array(
                'small'   => 'uk-width-small',
                'medium'  => 'uk-width-medium',
                'large'   => 'uk-width-large',
                'xlarge'  => 'uk-width-xlarge',
                '2xlarge' => 'uk-width-2xlarge',
            );

            $maxWidthBreakpoint_classes = array(
                'small'  => '@s',
                'medium' => '@m',
                'large'  => '@l',
                'xlarge' => '@xl',
            );

            $blockAlignment_classes = array(
                'left'  => 'uk-margin-auto-right',
                'center' => 'uk-margin-auto',
                'right'  => 'uk-margin-auto-left',
            );

            $blockAlignmentBreakpoint_classes = array(
                'small'  => '@s',
                'medium' => '@m',
                'large'  => '@l',
                'xlarge' => '@xl',
            );

            $blockAlignmentFallback_classes = array(
                'left'  => 'uk-margin-auto-right',
                'center' => 'uk-margin-auto',
                'right'  => 'uk-margin-auto-left',
            );

            $visibility_classes = array(
                'visible-small'  => 'uk-visible@s',
                'visible-medium' => 'uk-visible@m',
                'visible-large'  => 'uk-visible@l',
                'visible-xlarge'  => 'uk-visible@xl',
                'hidden-small'  => 'uk-hidden@s',
                'hidden-medium' => 'uk-hidden@m',
                'hidden-large'  => 'uk-hidden@l',
                'hidden-xlarge'  => 'uk-hidden@xl',
            );

            $animation_classes = array(
                'fade'  => 'uk-animation-fade',
                'scale-up' => 'uk-animation-scale-up',
                'scale-down' => 'uk-animation-scale-down',
                'slide-top-small' => 'uk-animation-slide-top-small',
                'slide-bottom-small' => 'uk-animation-slide-bottom-small',
                'slide-left-small' => 'uk-animation-slide-left-small',
                'slide-right-small' => 'uk-animation-slide-right-small',
                'slide-top-medium' => 'uk-animation-slide-top-medium',
                'slide-bottom-medium' => 'uk-animation-slide-bottom-medium',
                'slide-left-medium' => 'uk-animation-slide-left-medium',
                'slide-right-medium' => 'uk-animation-slide-right-medium',
                'slide-top' => 'uk-animation-slide-top',
                'slide-bottom' => 'uk-animation-slide-bottom',
                'slide-left' => 'uk-animation-slide-left',
                'slide-right' => 'uk-animation-slide-right',
            );

            if ( ! empty( $block['attrs']['ueb_margin'] ) ) {
                if ( isset( $margin_classes[ $block['attrs']['ueb_margin'] ] ) ) {
                    array_push( $classes, $margin_classes[ $block['attrs']['ueb_margin'] ] );
                }
                if ( isset ( $block['attrs']['ueb_removeTopMargin'] ) ) {
                    array_push( $classes, 'uk-margin-remove-top' );
                }
                if ( isset ( $block['attrs']['ueb_removeBottomMargin'] ) ) {
                    array_push( $classes, 'uk-margin-remove-bottom' );
                }
            }
            
            if ( ! empty( $block['attrs']['ueb_textAlignment'] ) ) {
                if( empty( $block['attrs']['ueb_textAlignmentBreakpoint'] ) ) {
                    if ( isset( $textAlignment_classes[ $block['attrs']['ueb_textAlignment'] ] ) ) {
                        array_push( $classes, $textAlignment_classes[ $block['attrs']['ueb_textAlignment'] ] );
                    }
                } else {
                    if ( isset( $textAlignment_classes[ $block['attrs']['ueb_textAlignment'] ] ) && isset( $textAlignmentBreakpoint_classes[ $block['attrs']['ueb_textAlignmentBreakpoint'] ] ) ) {
                        array_push( $classes, $textAlignment_classes[ $block['attrs']['ueb_textAlignment'] ] . $textAlignmentBreakpoint_classes[ $block['attrs']['ueb_textAlignmentBreakpoint'] ] );
                    }
                }
                
                if ( ! empty( $block['attrs']['ueb_textAlignmentFallback'] ) ) {
                    if ( isset( $textAlignmentFallback_classes[ $block['attrs']['ueb_textAlignmentFallback'] ] ) ) {
                        array_push( $classes, $textAlignmentFallback_classes[ $block['attrs']['ueb_textAlignmentFallback'] ] );
                    }
                }
            }
            
            if ( ! empty( $block['attrs']['ueb_maxWidth'] ) ) {
                if ( ! empty( $block['attrs']['ueb_maxWidthBreakpoint'] ) ) {
                    if ( isset( $maxWidth_classes[ $block['attrs']['ueb_maxWidth'] ] ) && isset( $maxWidthBreakpoint_classes[ $block['attrs']['ueb_maxWidthBreakpoint'] ] ) ) {
                        array_push( $classes, $maxWidth_classes[ $block['attrs']['ueb_maxWidth'] ] . $maxWidthBreakpoint_classes[ $block['attrs']['ueb_maxWidthBreakpoint'] ] );
                    }
                } else {
                    if ( isset( $maxWidth_classes[ $block['attrs']['ueb_maxWidth'] ] ) ) {
                        array_push( $classes, $maxWidth_classes[ $block['attrs']['ueb_maxWidth'] ] );
                    }
                }
                
                if ( ! empty( $block['attrs']['ueb_blockAlignment'] ) ) {
                    if ( ! empty( $block['attrs']['ueb_blockAlignmentBreakpoint'] ) ) {
                        if ( isset( $blockAlignment_classes[ $block['attrs']['ueb_blockAlignment'] ] ) && isset( $blockAlignmentBreakpoint_classes[ $block['attrs']['ueb_blockAlignmentBreakpoint'] ] ) ) {
                            array_push( $classes, $blockAlignment_classes[ $block['attrs']['ueb_blockAlignment'] ] . $blockAlignmentBreakpoint_classes[ $block['attrs']['ueb_blockAlignmentBreakpoint'] ] );
                        }
                        if ( ! empty( $block['attrs']['ueb_blockAlignmentFallback'] ) ) {
                            if ( isset( $blockAlignmentFallback_classes[ $block['attrs']['ueb_blockAlignmentFallback'] ] ) ) {
                                array_push( $classes, $blockAlignmentFallback_classes[ $block['attrs']['ueb_blockAlignmentFallback'] ] );
                            }
                        }
                    } else {
                        if ( isset( $blockAlignment_classes[ $block['attrs']['ueb_blockAlignment'] ] ) ) {
                            array_push( $classes, $blockAlignment_classes[ $block['attrs']['ueb_blockAlignment'] ] );
                        }
                    }
                }
            }
            
            if ( ! empty( $block['attrs']['ueb_visibility'] ) ) {
                if ( isset( $visibility_classes[ $block['attrs']['ueb_visibility'] ] ) ) {
                    array_push( $classes, $visibility_classes[ $block['attrs']['ueb_visibility'] ] );
                }
            }

            if ( ! empty( $block['attrs']['ueb_animation'] ) ) {
                
                if( $block['attrs']['ueb_animation'] != 'parallax' ) {
                    $scrollspy_attr = array();

                    if ( isset( $animation_classes[ $block['attrs']['ueb_animation'] ] ) ) {
                        array_push( $scrollspy_attr, 'cls: ' . $animation_classes[ $block['attrs']['ueb_animation'] ] );
                    }
                    
                    if( ! empty( $block['attrs']['ueb_animationDelay'] ) ) {
                        array_push( $scrollspy_attr, 'delay: ' . $block['attrs']['ueb_animationDelay'] );
                    }

                    $block_content = self::add_attribute_to_first_html_element( $block_content, 'data-uk-scrollspy', $scrollspy_attr );

                } else {
                    $parallax_attr = array();

                    $parallax_horizontal_start = isset( $block['attrs']['ueb_parallaxHorizontalStart'] ) ? $block['attrs']['ueb_parallaxHorizontalStart'] : 0;
                    $parallax_horizontal_end   = isset( $block['attrs']['ueb_parallaxHorizontalEnd'] ) ? $block['attrs']['ueb_parallaxHorizontalEnd'] : 0;
                    $parallax_vertical_start   = isset( $block['attrs']['ueb_parallaxVerticalStart'] ) ? $block['attrs']['ueb_parallaxVerticalStart'] : 0;
                    $parallax_vertical_end     = isset( $block['attrs']['ueb_parallaxVerticalEnd'] ) ? $block['attrs']['ueb_parallaxVerticalEnd'] : 0;
                    $parallax_scale_start      = isset( $block['attrs']['ueb_parallaxScaleStart'] ) ? $block['attrs']['ueb_parallaxScaleStart'] : 1;
                    $parallax_scale_end        = isset( $block['attrs']['ueb_parallaxScaleEnd'] ) ? $block['attrs']['ueb_parallaxScaleEnd'] : 1;
                    $parallax_rotate_start     = isset( $block['attrs']['ueb_parallaxRotateStart'] ) ? $block['attrs']['ueb_parallaxRotateStart'] : 0;
                    $parallax_rotate_end       = isset( $block['attrs']['ueb_parallaxRotateEnd'] ) ? $block['attrs']['ueb_parallaxRotateEnd'] : 0;
                    $parallax_opacity_start    = isset( $block['attrs']['ueb_parallaxOpacityStart'] ) ? $block['attrs']['ueb_parallaxOpacityStart'] : 1;
                    $parallax_opacity_end      = isset( $block['attrs']['ueb_parallaxOpacityEnd'] ) ? $block['attrs']['ueb_parallaxOpacityEnd'] : 1;
                    
                    array_push( $parallax_attr, 'x: ' . $parallax_horizontal_start . ',' . $parallax_horizontal_end );
                    array_push( $parallax_attr, 'y: ' . $parallax_vertical_start . ',' . $parallax_vertical_end );
                    array_push( $parallax_attr, 'scale: ' . $parallax_scale_start . ',' . $parallax_scale_end );
                    array_push( $parallax_attr, 'rotate: ' . $parallax_rotate_start . ',' . $parallax_rotate_end );
                    array_push( $parallax_attr, 'opacity: ' . $parallax_opacity_start . ',' . $parallax_opacity_end );

                    $block_content = self::add_attribute_to_first_html_element( $block_content, 'data-uk-parallax', $parallax_attr );
                }
            }

            $block_content = self::add_classes_to_first_html_element( $block_content, $classes );

            return $block_content;
        }

        public static function register_block_type_args( $args, $block_type ) {
            $args['attributes']['ueb_margin'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_removeTopMargin'] = array(
                'type'    => 'boolean',
                'default' => false,
            );

            $args['attributes']['ueb_removeBottomMargin'] = array(
                'type'    => 'boolean',
                'default' => false,
            );

            $args['attributes']['ueb_textAlignment'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_textAlignmentBreakpoint'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_textAlignmentFallback'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_maxWidth'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_maxWidthBreakpoint'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_blockAlignment'] = array(
                'type'    => 'string',
                'default' => 'left',
            );

            $args['attributes']['ueb_blockAlignmentBreakpoint'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_blockAlignmentFallback'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_visibility'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_animation'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_animationDelay'] = array(
                'type'    => 'string',
                'default' => '',
            );

            $args['attributes']['ueb_parallaxHorizontalStart'] = array(
                'type'    => 'number',
                'default' => 0,
            );

            $args['attributes']['ueb_parallaxHorizontalEnd'] = array(
                'type'    => 'number',
                'default' => 0,
            );

            $args['attributes']['ueb_parallaxVerticalStart'] = array(
                'type'    => 'number',
                'default' => 0,
            );

            $args['attributes']['ueb_parallaxVerticalEnd'] = array(
                'type'    => 'number',
                'default' => 0,
            );

            $args['attributes']['ueb_parallaxScaleStart'] = array(
                'type'    => 'decimalPoint',
                'default' => 1,
            );

            $args['attributes']['ueb_parallaxScaleEnd'] = array(
                'type'    => 'decimalPoint',
                'default' => 1,
            );

            $args['attributes']['ueb_parallaxRotateStart'] = array(
                'type'    => 'number',
                'default' => 0,
            );

            $args['attributes']['ueb_parallaxRotateEnd'] = array(
                'type'    => 'number',
                'default' => 0,
            );

            $args['attributes']['ueb_parallaxOpacityStart'] = array(
                'type'    => 'decimalPoint',
                'default' => 1,
            );

            $args['attributes']['ueb_parallaxOpacityEnd'] = array(
                'type'    => 'decimalPoint',
                'default' => 1,
            );

            $args['attributes']['ueb_disableBlock'] = array(
                'type'    => 'boolean',
                'default' => false,
            );
            
            return $args;
        }

        public static function add_attribute_to_first_html_element( $block_content, $attribute_name, $attribute_value ) {
            // Validate attribute name to avoid malformed HTML
            if ( ! preg_match( '/^[a-zA-Z_:][a-zA-Z0-9:._-]*$/', $attribute_name ) ) {
                return $block_content;
            }

            // Find the first HTML tag
            if ( ! preg_match( '/<([a-zA-Z0-9]+)(\s[^>]*)?>/su', $block_content, $m, PREG_OFFSET_CAPTURE ) ) {
                return $block_content;
            }

            $fullTag = $m[0][0];
            $pos     = $m[0][1];

            // If attribute already exists (case-insensitive), do nothing
            if ( preg_match( '/\b' . preg_quote( $attribute_name, '/' ) . '\s*=/i', $fullTag ) ) {
                return $block_content;
            }

            // Normalize/escape value
            $val = is_array( $attribute_value ) ? implode( '; ', $attribute_value ) : (string) $attribute_value;
            $val = htmlspecialchars( $val, ENT_QUOTES, 'UTF-8' );

            // Preserve self-closing if present
            if ( preg_match( '/\/>\s*$/', $fullTag ) ) {
                // e.g. <img ... />
                $newTag = preg_replace( '/\/>\s*$/', ' ' . $attribute_name . '="' . $val . '" />', $fullTag, 1 );
            } else {
                // e.g. <div ...>
                $newTag = substr( $fullTag, 0, -1 ) . ' ' . $attribute_name . '="' . $val . '">';
            }

            // Replace exactly the matched occurrence using offset+length
            return substr($block_content, 0, $pos) . $newTag . substr($block_content, $pos + strlen($fullTag));
        }

        public static function add_classes_to_first_html_element( $block_content, $classes ) {
            // If no classes are provided, return the original block content.
            if ( empty( $classes ) ) {
                return $block_content;
            }

            // Combine classes into a single string.
            $class_name = implode( ' ', $classes );

            // Retrieve the opening tag of the first HTML element.
            $html_element_matches = array();
            preg_match( '/<[^>]+>/', $block_content, $html_element_matches, PREG_OFFSET_CAPTURE );

            // If no HTML element is found, return the original block content.
            if (empty($html_element_matches)) {
                return $block_content;
            }

            // Get the first element and its position.
            $first_element = $html_element_matches[0][0];

            // If the first HTML element has a class attribute, append the new classes.
            if ( str_contains( $first_element, 'class="' ) ) {
                $block_content = preg_replace(
                    '/' . preg_quote( 'class="', '/' ) . '/',
                    'class="' . $class_name . ' ',
                    $block_content,
                    1
                );
            } else {
                // If the first HTML element has no class attribute, inject the class attribute.
                $first_element_offset = $html_element_matches[0][1];
                $block_content = substr_replace(
                    $block_content,
                    ' class="' . $class_name . '"',
                    $first_element_offset + strlen( $first_element ) - 1,
                    0
                );
            }

            return $block_content;
        }
    }
endif;
