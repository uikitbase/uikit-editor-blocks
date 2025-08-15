<?php
/**
 * Template for uikit-editor-blocks/panel-slider
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/panel-slider.php.
 *
 * @package uikit-editor-blocks/templates/panel-slider
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs       = [];
$wrapper_classes     = [];
$wrapper_slider_data = [];

$slider_attrs             = [];
$slider_classes           = ['uk-slider-items', 'uk-grid'];
$slider_height_match_data = [];

$slidenav_attrs   = [];
$slidenav_classes = [];

$slidenav_left_attrs   = [];
$slidenav_left_classes = [];

$slidenav_right_attrs   = [];
$slidenav_right_classes = [];

$navigation_container_attrs   = [];
$navigation_container_classes = [];

$navigation_attrs   = [];
$navigation_classes = ['uk-slider-nav', 'uk-dotnav'];

$sliderGap_variants = [
    'small'  => 'uk-grid-small',
    'medium' => 'uk-grid-medium',
    'large'  => 'uk-grid-large',
    'none'   => 'uk-grid-collapse',
];

$navigationPosition_variants = [
    'left'   => 'uk-flex-left',
    'center' => 'uk-flex-center',
    'right'  => 'uk-flex-right',
];

$navigationMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
];

$navigationBreakpoint_variants = [
    'small'  => 'visible@s',
    'medium' => 'visible@m',
    'large'  => 'visible@l',
    'xlarge' => 'visible@xl',
];

$navigationColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$slidenavPosition_variants = [
    'top-left'      => 'uk-position-top-left',
    'top-right'     => 'uk-position-top-right',
    'center-left'   => 'uk-position-center-left',
    'center-right'  => 'uk-position-center-right',
    'bottom-left'   => 'uk-position-bottom-left',
    'bottom-center' => 'uk-position-bottom-center',
    'bottom-right'  => 'uk-position-bottom-right',
];

$slidenavMargin_variants = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
];

$slidenavBreakpoint_variants = [
    'small'  => 'visible@s',
    'medium' => 'visible@m',
    'large'  => 'visible@l',
    'xlarge' => 'visible@xl',
];

$slidenavColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Slider classes
 */
if ( $attributes['sliderGap'] ) {
    if ( isset( $sliderGap_variants[ $attributes['sliderGap'] ] ) ) {
        $slider_classes[] = $sliderGap_variants[ $attributes['sliderGap'] ];
    }
}

if ( $attributes['sliderDivider'] ) {
    $slider_classes[] = 'uk-grid-divider';
}

if ( $attributes['panelMatch'] && $attributes['panelMatch'] ) {
    $slider_classes[] = 'uk-grid-match';
}

/**
 * Slider height-match-data
 */
if( $attributes['sliderWidth'] && $attributes['sliderWidth'] === 'auto' ) {
    $slider_height_match_data[] = 'target: .wub-image';
}

/**
 * Slidenav classes
 */
if( $attributes['slidenavPosition'] ) {
    if( $attributes['slidenavPosition'] !== 'default' && $attributes['slidenavPosition'] !== 'outside' ) {
        if ( isset( $slidenavPosition_variants[ $attributes['slidenavPosition'] ] ) ) {
            $slidenav_classes[] = $slidenavPosition_variants[ $attributes['slidenavPosition'] ];
        }

        if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
        }

        $slidenav_classes[] = 'uk-slidenav-container';
    }

    if ( $attributes['slidenavBreakpoint'] ) {
        if ( isset( $slidenavBreakpoint_variants[ $attributes['slidenavBreakpoint'] ] ) ) {
            $slidenav_classes[] = $slidenavBreakpoint_variants[ $attributes['slidenavBreakpoint'] ];
        }
    }

    if ( $attributes['slidenavColor'] ) {
        if ( isset( $slidenavColor_variants[ $attributes['slidenavColor'] ] ) ) {
            $slidenav_classes[] = $slidenavColor_variants[ $attributes['slidenavColor'] ];
        }
    }
}

/**
 * Slidenav left classes
 */
if( $attributes['slidenavPosition'] ) {
    if( $attributes['slidenavPosition'] === 'default' ) {
        $slidenav_left_classes[] = 'uk-position-center-left';

        if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_left_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
        }
    } elseif( $attributes['slidenavPosition'] === 'outside' ) {
        $slidenav_left_classes[] = 'uk-position-center-left-out';

        if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_left_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
        }
    }
}

/**
 * Slidenav right classes
 */
if( $attributes['slidenavPosition'] ) {
    if( $attributes['slidenavPosition'] === 'default' ) {
        $slidenav_right_classes[] = 'uk-position-center-right';

        if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_right_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
        }
    } elseif( $attributes['slidenavPosition'] === 'outside' ) {
        $slidenav_right_classes[] = 'uk-position-center-right-out';

        if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_right_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
        }
    }
}

/**
 * Navigation container classes
 */
if( $attributes['navigation'] ) {
    if ( $attributes['navigationMargin'] ) {
        if ( isset( $navigationMargin_variants[ $attributes['navigationMargin'] ] ) ) {
            $navigation_container_classes[] = $navigationMargin_variants[ $attributes['navigationMargin'] ];
        }
    }

    if ( $attributes['navigationColor'] ) {
        if ( isset( $navigationColor_variants[ $attributes['navigationColor'] ] ) ) {
            $navigation_container_classes[] = $navigationColor_variants[ $attributes['navigationColor'] ];
        }
    }
}

/**
 * Navigation classes
 */
if( $attributes['navigation'] ) {
    if ( $attributes['navigationPosition'] ) {
        if ( isset( $navigationPosition_variants[ $attributes['navigationPosition'] ] ) ) {
            $navigation_classes[] = $navigationPosition_variants[ $attributes['navigationPosition'] ];
        }
    }

    if ( $attributes['navigationBreakpoint'] ) {
        if ( isset( $navigationBreakpoint_variants[ $attributes['navigationBreakpoint'] ] ) ) {
            $navigation_classes[] = $navigationBreakpoint_variants[ $attributes['navigationBreakpoint'] ];
        }
    }
}

/**
 * Filters panel-slider block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_panel_slider_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-slider=""';

/**
 * Slider attributes
 */
if ( $slider_classes ) {
    $slider_attrs[] = 'class="' . esc_attr( implode( ' ', $slider_classes ) ) . '"';
}

if( $slider_height_match_data ) {
    $slider_attrs[] = 'data-uk-height-match="' . esc_attr( implode( '; ', $slider_height_match_data ) ) . '"';
}

/**
 * Slidenav attributes
 */
if ( $slidenav_classes ) {
    $slidenav_attrs[] = 'class="' . esc_attr( implode( ' ', $slidenav_classes ) ) . '"';
}

/**
 * Slidenav left attributes
 */
$slidenav_left_attrs[] = 'href="#"';

if ( $slidenav_left_classes ) {
    $slidenav_left_attrs[] = 'class="' . esc_attr( implode( ' ', $slidenav_left_classes ) ) . '"';
}

$slidenav_left_attrs[] = 'data-uk-slidenav-' . ( ! is_rtl() ? 'previous' : 'next' );
$slidenav_left_attrs[] = 'data-uk-slider-item="previous"';

/**
 * Slidenav right attributes
 */
$slidenav_right_attrs[] = 'href="#"';

if ( $slidenav_right_classes ) {
    $slidenav_right_attrs[] = 'class="' . esc_attr( implode( ' ', $slidenav_right_classes ) ) . '"';
}

$slidenav_right_attrs[] = 'data-uk-slidenav-' . ( ! is_rtl() ? 'next' : 'previous' );
$slidenav_right_attrs[] = 'data-uk-slider-item="next"';

/**
 * Navigation container attributes
 */
if ( $navigation_container_classes ) {
    $navigation_container_attrs[] = 'class="' . esc_attr( implode( ' ', $navigation_container_classes ) ) . '"';
}

/**
 * Navigation attributes
 */
if ( $navigation_classes ) {
    $navigation_attrs[] = 'class="' . esc_attr( implode( ' ', $navigation_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <div class="uk-position-relative">
        <div class="uk-slider-container">
            <div <?php echo implode( ' ', $slider_attrs ); ?>>
                <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </div>
        </div>
        <?php if( $attributes['slidenavPosition'] ) : ?>
        <div <?php echo implode( ' ', $slidenav_attrs ); ?>>
            <a <?php echo implode( ' ', $slidenav_left_attrs ); ?>></a>
            <a <?php echo implode( ' ', $slidenav_right_attrs ); ?>></a>
        </div>
        <?php endif; ?>
    </div>
    <?php if( $attributes['navigation'] ) : ?>
    <div <?php echo implode( ' ', $navigation_container_attrs ); ?>>
        <ul <?php echo implode( ' ', $navigation_attrs ); ?>></ul>
    </div>
    <?php endif; ?>
</div>