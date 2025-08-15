<?php
/**
 * Template for uikit-editor-blocks/slideshow
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/slideshow.php.
 *
 * @package uikit-editor-blocks/templates/slideshow
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs          = [];
$wrapper_classes        = [];
$wrapper_slideshow_data = [];

$slideshow_items_attrs          = [];
$slideshow_items_classes        = ['uk-slideshow-items'];
$slideshow_height_viewport_data = [];

$slidenav_attrs   = [];
$slidenav_classes = [];

$slidenav_left_attrs   = [];
$slidenav_left_classes = [];

$slidenav_right_attrs   = [];
$slidenav_right_classes = [];

$navigation_container_attrs   = [];
$navigation_container_classes = [];

$navigation_attrs   = [];
$navigation_classes = ['uk-slideshow-nav'];

$textColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$boxShadow_variants = [
    'small'  => 'uk-box-shadow-small',
    'medium' => 'uk-box-shadow-medium',
    'large'  => 'uk-box-shadow-large',
    'xlarge' => 'uk-box-shadow-xlarge',
];

$navigationPosition_variants = [
    'top-left'      => 'uk-position-top-left',
    'top-right'     => 'uk-position-top-right',
    'center-left'   => 'uk-position-center-left',
    'center-right'  => 'uk-position-center-right',
    'bottom-left'   => 'uk-position-bottom-left',
    'bottom-center' => 'uk-position-bottom-center',
    'bottom-right'  => 'uk-position-bottom-right',
];

$navigationMargin_variants = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
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

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Wrapper slideshow-data
 */
if( $attributes['height'] ) {
    $wrapper_slideshow_data[] = 'ratio: false';
} else {
    if( $attributes['ratio'] ) {
        $wrapper_slideshow_data[] = 'ratio: ' . $attributes['ratio'];
    }

    if( $attributes['minHeight'] ) {
        $wrapper_slideshow_data[] = 'minHeight: ' . $attributes['minHeight'];
    }

    if( $attributes['maxHeight'] ) {
        $wrapper_slideshow_data[] = 'maxHeight: ' . $attributes['maxHeight'];
    }
}

if ( $attributes['autoplay'] ) {
    $wrapper_slideshow_data[] = 'autoplay: true';
}

if( $attributes['animation'] ) {
    $wrapper_slideshow_data[] = 'animation: ' . $attributes['animation'];
}

/**
 * Slideshow items classes
 */
if( $attributes['boxShadow'] ) {
    if ( isset( $boxShadow_variants[ $attributes['boxShadow'] ] ) ) {
        $slideshow_items_classes[] = $boxShadow_variants[ $attributes['boxShadow'] ];
    }
}

/**
 * Slideshow height-viewport-data
 */
if( $attributes['height'] ) {
    $slideshow_height_viewport_data[] = 'offset-top: true';
    $slideshow_height_viewport_data[] = 'minHeight: ' . $attributes['minHeight'];

    if( $attributes['height'] === 'viewport' ) {
        if( $attributes['heightViewport'] ) {
            $slideshow_height_viewport_data[] = 'offset-bottom: ' . 100 - $attributes['heightViewport'];
        }
    }
}

/**
 * Slidenav classes
 */
if( $attributes['textColor'] ) {
    if ( isset( $textColor_variants[ $attributes['textColor'] ] ) ) {
        $slidenav_classes[] = $textColor_variants[ $attributes['textColor'] ];
    }
}

if( $attributes['slidenavPosition'] ) {
    if ( $attributes['slidenavPosition']  !== 'default' ) {
        if ( isset( $slidenavPosition_variants[ $attributes['slidenavPosition'] ] ) ) {
            $slidenav_classes[] = $slidenavPosition_variants[ $attributes['slidenavPosition'] ];
        }

        if( $attributes['slidenavMargin'] ) {
            if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
                $slidenav_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
            }
        }
    }
}

/**
 * Slidenav left classes
 */
if( $attributes['slidenavPosition'] ) {
    if ( $attributes['slidenavPosition']  === 'default' ) {
        $slidenav_left_classes[] = 'uk-position-center-left';

        if( $attributes['slidenavMargin'] ) {
            if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
                $slidenav_left_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
            }
        }
    }
}

/**
 * Slidenav right classes
 */
if( $attributes['slidenavPosition'] ) {
    if ( $attributes['slidenavPosition']  === 'default' ) {
        $slidenav_right_classes[] = 'uk-position-center-right';

        if( $attributes['slidenavMargin'] ) {
            if ( isset( $slidenavMargin_variants[ $attributes['slidenavMargin'] ] ) ) {
                $slidenav_right_classes[] = $slidenavMargin_variants[ $attributes['slidenavMargin'] ];
            }
        }
    }
}

/**
 * Navigation container classes
 */
if( $attributes['textColor'] ) {
    if ( isset( $textColor_variants[ $attributes['textColor'] ] ) ) {
        $navigation_container_classes[] = $textColor_variants[ $attributes['textColor'] ];
    }
}

if( $attributes['navigation'] ) {
    if( $attributes['navigationPosition'] ) {
        if ( isset( $navigationPosition_variants[ $attributes['navigationPosition'] ] ) ) {
            $navigation_container_classes[] = $navigationPosition_variants[ $attributes['navigationPosition'] ];
        }
    }

    if( $attributes['navigationMargin'] ) {
        if ( isset( $navigationMargin_variants[ $attributes['navigationMargin'] ] ) ) {
            $navigation_container_classes[] = $navigationMargin_variants[ $attributes['navigationMargin'] ];
        }
    }
}

/**
 * Navigation classes
 */
if( $attributes['navigation'] ) {
    if( $attributes['navigation'] === 'dotnav' ) {
        $navigation_classes[] = 'uk-dotnav';
    } elseif( $attributes['navigation'] === 'dotnav' ) {
        $navigation_classes[] = 'uk-thumbnav';
    }
}

/**
 * Filters slideshow block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_slideshow_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-slideshow="' . esc_attr( implode( '; ', $wrapper_slideshow_data ) ) . '"';

/**
 * Slideshow items attributes
 */
if ( $slideshow_items_classes ) {
    $slideshow_items_attrs[] = 'class="' . esc_attr( implode( ' ', $slideshow_items_classes ) ) . '"';
}

if ( $slideshow_height_viewport_data ) {
    $slideshow_items_attrs[] = 'data-uk-height-viewport="' . esc_attr( implode( '; ', $slideshow_height_viewport_data ) ) . '"';
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
$slidenav_left_attrs[] = 'data-uk-slideshow-item="previous"';

/**
 * Slidenav right attributes
 */
$slidenav_right_attrs[] = 'href="#"';

if ( $slidenav_right_classes ) {
    $slidenav_right_attrs[] = 'class="' . esc_attr( implode( ' ', $slidenav_right_classes ) ) . '"';
}

$slidenav_right_attrs[] = 'data-uk-slidenav-' . ( ! is_rtl() ? 'next' : 'previous' );
$slidenav_right_attrs[] = 'data-uk-slideshow-item="next"';

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
        <div <?php echo implode( ' ', $slideshow_items_attrs ); ?>>
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </div>
        <?php if( $attributes['slidenavPosition'] ) : ?>
        <div <?php echo implode( ' ', $slidenav_attrs ); ?>>
            <a <?php echo implode( ' ', $slidenav_left_attrs ); ?>></a>
            <a <?php echo implode( ' ', $slidenav_right_attrs ); ?>></a>
        </div>
        <?php endif; ?>
        <?php if( $attributes['navigation'] ) : ?>
        <div <?php echo implode( ' ', $navigation_container_attrs ); ?>>
            <ul <?php echo implode( ' ', $navigation_attrs ); ?>></ul>
        </div>
        <?php endif; ?>
    </div>
</div>