<?php

if ( ! defined( 'ABSPATH' ) ) {
    exit; // Exit if accessed directly.
}

function uikit_editor_blocks_get_general_attributes() {
    return [
        'generalMargin'                  => [ 'type' => 'string', 'default' => '' ],
        'generalRemoveTopMargin'         => [ 'type' => 'boolean', 'default' => false ],
        'generalRemoveBottomMargin'      => [ 'type' => 'boolean', 'default' => false ],
        'generalTextAlignment'           => [ 'type' => 'string', 'default' => '' ],
        'generalTextAlignmentBreakpoint' => [ 'type' => 'string', 'default' => '' ],
        'generalTextAlignmentFallback'   => [ 'type' => 'string', 'default' => '' ],
        'generalMaxWidth'                => [ 'type' => 'string', 'default' => '' ],
        'generalMaxWidthBreakpoint'      => [ 'type' => 'string', 'default' => '' ],
        'generalBlockAlignment'          => [ 'type' => 'string', 'default' => 'left' ],
        'generalBlockAlignmentBreakpoint'=> [ 'type' => 'string', 'default' => '' ],
        'generalBlockAlignmentFallback'  => [ 'type' => 'string', 'default' => '' ],
        'generalVisibility'              => [ 'type' => 'string', 'default' => '' ],
        'generalAnimation'               => [ 'type' => 'string', 'default' => '' ],
        'generalAnimationDelay'          => [ 'type' => 'string', 'default' => '' ],
        'generalParallaxHorizontalStart' => [ 'type' => 'number', 'default' => 0 ],
        'generalParallaxHorizontalEnd'   => [ 'type' => 'number', 'default' => 0 ],
        'generalParallaxVerticalStart'   => [ 'type' => 'number', 'default' => 0 ],
        'generalParallaxVerticalEnd'     => [ 'type' => 'number', 'default' => 0 ],
        'generalParallaxScaleStart'      => [ 'type' => 'number', 'default' => 1 ],
        'generalParallaxScaleEnd'        => [ 'type' => 'number', 'default' => 1 ],
        'generalParallaxRotateStart'     => [ 'type' => 'number', 'default' => 0 ],
        'generalParallaxRotateEnd'       => [ 'type' => 'number', 'default' => 0 ],
        'generalParallaxOpacityStart'    => [ 'type' => 'number', 'default' => 1 ],
        'generalParallaxOpacityEnd'      => [ 'type' => 'number', 'default' => 1 ],
    ];
}

function uikit_editor_blocks_get_general_default_attributes() {
    $defaults = [];
    $attributes = uikit_editor_blocks_get_general_attributes();
    foreach ( $attributes as $key => $value ) {
        if ( isset( $value['default'] ) ) {
            $defaults[ $key ] = $value['default'];
        }
    }
    return $defaults;
}

function uikit_editor_blocks_get_general_props( $attributes ) {
    $output = [];

    $general_classes        = [];
    $general_attrs          = [];
    $general_scrollspy_attr = [];
    $general_parallax_attr  = [];

    $margin_variants = array(
        'default' => 'uk-margin',
        'small'   => 'uk-margin-small',
        'medium'  => 'uk-margin-medium',
        'large'   => 'uk-margin-large',
        'xlarge'  => 'uk-margin-xlarge',
    );

    $textAlignment_variants = array(
        'left'    => 'uk-text-left',
        'center'  => 'uk-text-center',
        'right'   => 'uk-text-right',
        'justify' => 'uk-text-justify',
    );

    $textAlignmentBreakpoint_variants = array(
        'small'  => '@s',
        'medium' => '@m',
        'large'  => '@l',
        'xlarge' => '@xl',
    );

    $textAlignmentFallback_variants = array(
        'left'    => 'uk-text-left',
        'center'  => 'uk-text-center',
        'right'   => 'uk-text-right',
        'justify' => 'uk-text-justify',
    );

    $maxWidth_variants = array(
        'small'   => 'uk-width-small',
        'medium'  => 'uk-width-medium',
        'large'   => 'uk-width-large',
        'xlarge'  => 'uk-width-xlarge',
        '2xlarge' => 'uk-width-2xlarge',
    );

    $maxWidthBreakpoint_variants = array(
        'small'  => '@s',
        'medium' => '@m',
        'large'  => '@l',
        'xlarge' => '@xl',
    );

    $blockAlignment_variants = array(
        'left'   => 'uk-margin-auto-right',
        'center' => 'uk-margin-auto',
        'right'  => 'uk-margin-auto-left',
    );

    $blockAlignmentBreakpoint_variants = array(
        'small'  => '@s',
        'medium' => '@m',
        'large'  => '@l',
        'xlarge' => '@xl',
    );

    $blockAlignmentFallback_variants = array(
        'left'   => 'uk-margin-auto-right',
        'center' => 'uk-margin-auto',
        'right'  => 'uk-margin-auto-left',
    );

    $visibility_variants = array(
        'visible-small'  => 'uk-visible@s',
        'visible-medium' => 'uk-visible@m',
        'visible-large'  => 'uk-visible@l',
        'visible-xlarge' => 'uk-visible@xl',
        'hidden-small'   => 'uk-hidden@s',
        'hidden-medium'  => 'uk-hidden@m',
        'hidden-large'   => 'uk-hidden@l',
        'hidden-xlarge'  => 'uk-hidden@xl',
    );

    $animation_variants = array(
        'fade'                => 'uk-animation-fade',
        'scale-up'            => 'uk-animation-scale-up',
        'scale-down'          => 'uk-animation-scale-down',
        'slide-top-small'     => 'uk-animation-slide-top-small',
        'slide-bottom-small'  => 'uk-animation-slide-bottom-small',
        'slide-left-small'    => 'uk-animation-slide-left-small',
        'slide-right-small'   => 'uk-animation-slide-right-small',
        'slide-top-medium'    => 'uk-animation-slide-top-medium',
        'slide-bottom-medium' => 'uk-animation-slide-bottom-medium',
        'slide-left-medium'   => 'uk-animation-slide-left-medium',
        'slide-right-medium'  => 'uk-animation-slide-right-medium',
        'slide-top'           => 'uk-animation-slide-top',
        'slide-bottom'        => 'uk-animation-slide-bottom',
        'slide-left'          => 'uk-animation-slide-left',
        'slide-right'         => 'uk-animation-slide-right',
    );

    if ( $attributes['generalMargin'] ) {
        if ( isset( $margin_variants[ $attributes['generalMargin'] ] ) ) {
            $general_classes[] = $margin_variants[ $attributes['generalMargin'] ];
        }

        if ( $attributes['generalRemoveTopMargin'] ) {
            $general_classes[] = 'uk-margin-remove-top';
        }

        if ( $attributes['generalRemoveBottomMargin'] ) {
            $general_classes[] ='uk-margin-remove-bottom';
        }
    }

    if ( $attributes['generalTextAlignment'] ) {
        if( ! $attributes['generalTextAlignmentBreakpoint'] ) {
            if ( isset( $textAlignment_variants[ $attributes['generalTextAlignment'] ] ) ) {
                $general_classes[] = $textAlignment_variants[ $attributes['generalTextAlignment'] ];
            }
        } else {
            if ( isset( $textAlignment_variants[ $attributes['generalTextAlignment'] ] ) && isset( $textAlignmentBreakpoint_variants[ $attributes['generalTextAlignmentBreakpoint'] ] ) ) {
                $general_classes[] = $textAlignment_variants[ $attributes['generalTextAlignment'] ] . $textAlignmentBreakpoint_variants[ $attributes['generalTextAlignmentBreakpoint'] ];
            }
        }

        if ( $attributes['generalTextAlignmentFallback'] ) {
            if ( isset( $textAlignmentFallback_variants[ $attributes['generalTextAlignmentFallback'] ] ) ) {
                $general_classes[] = $textAlignmentFallback_variants[ $attributes['generalTextAlignmentFallback'] ];
            }
        }
    }

    if ( $attributes['generalMaxWidth'] ) {
        if ( $attributes['generalMaxWidthBreakpoint'] ) {
            if ( isset( $maxWidth_variants[ $attributes['generalMaxWidth'] ] ) && isset( $maxWidthBreakpoint_variants[ $attributes['generalMaxWidthBreakpoint'] ] ) ) {
                $general_classes[] = $maxWidth_variants[ $attributes['generalMaxWidth'] ] . $maxWidthBreakpoint_variants[ $attributes['generalMaxWidthBreakpoint'] ];
            }
        } else {
            if ( isset( $maxWidth_variants[ $attributes['generalMaxWidth'] ] ) ) {
                $general_classes[] = $maxWidth_variants[ $attributes['generalMaxWidth'] ];
            }
        }

        if ( $attributes['generalBlockAlignment'] ) {
            if ( $attributes['generalBlockAlignmentBreakpoint'] ) {
                if ( isset( $blockAlignment_variants[ $attributes['generalBlockAlignment'] ] ) && isset( $blockAlignmentBreakpoint_variants[ $attributes['generalBlockAlignmentBreakpoint'] ] ) ) {
                    $general_classes[] = $blockAlignment_variants[ $attributes['generalBlockAlignment'] ] . $blockAlignmentBreakpoint_variants[ $attributes['generalBlockAlignmentBreakpoint'] ];
                }

                if ( $attributes['generalBlockAlignmentFallback'] ) {
                    if ( isset( $blockAlignmentFallback_variants[ $attributes['generalBlockAlignmentFallback'] ] ) ) {
                        $general_classes[] = $blockAlignmentFallback_variants[ $attributes['generalBlockAlignmentFallback'] ];
                    }
                }
            } else {
                if ( isset( $blockAlignment_variants[ $attributes['generalBlockAlignment'] ] ) ) {
                    $general_classes[] = $blockAlignment_variants[ $attributes['generalBlockAlignment'] ];
                }
            }
        }
    }

    if ( $attributes['generalVisibility'] ) {
        if ( isset( $visibility_variants[ $attributes['generalVisibility'] ] ) ) {
            $general_classes[] = $visibility_variants[ $attributes['generalVisibility'] ];
        }
    }

    if ( $attributes['generalAnimation'] ) {
        if( $attributes['generalAnimation'] !== 'parallax' ) {
            if ( isset( $animation_variants[ $attributes['generalAnimation'] ] ) ) {
                $general_scrollspy_attr[] = 'cls: ' . $animation_variants[ $attributes['generalAnimation'] ];
            }

            if ( $attributes['generalAnimationDelay'] ) {
                $general_scrollspy_attr[] = 'delay: ' . $attributes['generalAnimationDelay'];
            }
        } else {
            $parallax_horizontal_start = isset( $attributes['generalParallaxHorizontalStart'] ) ? $attributes['generalParallaxHorizontalStart'] : 0;
            $parallax_horizontal_end   = isset( $attributes['generalParallaxHorizontalEnd'] ) ? $attributes['generalParallaxHorizontalEnd'] : 0;
            $parallax_vertical_start   = isset( $attributes['generalParallaxVerticalStart'] ) ? $attributes['generalParallaxVerticalStart'] : 0;
            $parallax_vertical_end     = isset( $attributes['generalParallaxVerticalEnd'] ) ? $attributes['generalParallaxVerticalEnd'] : 0;
            $parallax_scale_start      = isset( $attributes['generalParallaxScaleStart'] ) ? $attributes['generalParallaxScaleStart'] : 1;
            $parallax_scale_end        = isset( $attributes['generalParallaxScaleEnd'] ) ? $attributes['generalParallaxScaleEnd'] : 1;
            $parallax_rotate_start     = isset( $attributes['generalParallaxRotateStart'] ) ? $attributes['generalParallaxRotateStart'] : 0;
            $parallax_rotate_end       = isset( $attributes['generalParallaxRotateEnd'] ) ? $attributes['generalParallaxRotateEnd'] : 0;
            $parallax_opacity_start    = isset( $attributes['generalParallaxOpacityStart'] ) ? $attributes['generalParallaxOpacityStart'] : 1;
            $parallax_opacity_end      = isset( $attributes['generalParallaxOpacityEnd'] ) ? $attributes['generalParallaxOpacityEnd'] : 1;

            $general_parallax_attr[] = 'x: ' . $parallax_horizontal_start . ', ' . $parallax_horizontal_end;
            $general_parallax_attr[] = 'y: ' . $parallax_vertical_start . ', ' . $parallax_vertical_end;
            $general_parallax_attr[] = 'scale: ' . $parallax_scale_start . ', ' . $parallax_scale_end;
            $general_parallax_attr[] = 'rotate: ' . $parallax_rotate_start . ', ' . $parallax_rotate_end;
            $general_parallax_attr[] = 'opacity: ' . $parallax_opacity_start . ', ' . $parallax_opacity_end;
        }
    }

    if ( $general_classes ) {
        $output['class'] = $general_classes;
    }

    if ( $general_scrollspy_attr ) {
        $output['data_attrs']['data-uk-scrollspy'] = $general_scrollspy_attr;
    }

    if ( $general_parallax_attr ) {
        $output['data_attrs']['data-uk-parallax'] = $general_parallax_attr;
    }

    return $output;
}