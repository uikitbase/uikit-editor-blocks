<?php
/**
 * Template for uikit-editor-blocks/grid-column
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/grid-column.php.
 *
 * @package uikit-editor-blocks/templates/grid-column
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$content_attrs         = [];
$content_classes       = [];
$content_styles        = [];
$content_parallax_data = [];

$orderFirst_variants = [
    'always' => 'uk-flex-first',
    'small'  => 'uk-flex-first@s',
    'medium' => 'uk-flex-first@m',
    'large'  => 'uk-flex-first@l',
    'xlarge' => 'uk-flex-first@xl',
];

$bgImageSize_variants = [
    'cover'       => 'uk-background-cover',
    'contain'     => 'uk-background-contain',
    'full-width'  => 'uk-background-width-1-1',
    'full-height' => 'uk-background-height-1-1',
];

$bgImagePosition_variants = [
    'top-left'      => 'uk-background-top-left',
    'top-center'    => 'uk-background-top-center',
    'top-right'     => 'uk-background-top-right',
    'center-left'   => 'uk-background-center-left',
    'center-center' => 'uk-background-center-center',
    'center-right'  => 'uk-background-center-right',
    'bottom-left'   => 'uk-background-bottom-left',
    'bottom-center' => 'uk-background-bottom-center',
    'bottom-right'  => 'uk-background-bottom-right',
];

$bgImageVisibility_variants = [
    'small'  => 'uk-background-image@s',
    'medium' => 'uk-background-image@m',
    'large'  => 'uk-background-image@l',
    'xlarge' => 'uk-background-image@xl',
];

$verticalAlignment_variants = [
    'middle' => 'uk-flex-middle',
    'bottom' => 'uk-flex-bottom',
];

$padding_variants = [
    'default' => 'uk-tile',
    'xsmall'  => 'uk-tile-xsmall',
    'small'   => 'uk-tile-small',
    'large'   => 'uk-tile-large',
    'xlarge'  => 'uk-tile-xlarge',
];

/**
 * Wrapper classes
 */
if ( $attributes['defaultWidth'] ) {
    $wrapper_classes[] = 'uk-width-' . $attributes['defaultWidth'];
}

if ( $attributes['smallWidth'] ) {
    $wrapper_classes[] = 'uk-width-' . $attributes['smallWidth'] . '@s';
}

if ( $attributes['mediumWidth'] ) {
    $wrapper_classes[] = 'uk-width-' . $attributes['mediumWidth'] . '@m';
}

if ( $attributes['largeWidth'] ) {
    $wrapper_classes[] = 'uk-width-' . $attributes['largeWidth'] . '@l';
}

if ( $attributes['xlargeWidth'] ) {
    $wrapper_classes[] = 'uk-width-' . $attributes['xlargeWidth'] . '@xl';
}

if ( $attributes['orderFirst'] ) {
    if( isset( $orderFirst_variants[ $attributes['orderFirst'] ] ) ) {
        $wrapper_classes[] = $orderFirst_variants[ $attributes['orderFirst'] ];
    }
}

if( $attributes['bgColor'] || $attributes['bgImageMediaId'] || $attributes['verticalAlignment'] ) {
    $wrapper_classes[] = 'uk-grid-item-match';
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Content classes
 */
if ( $attributes['bgImageMediaId'] ) {
    $content_classes[] = 'uk-background-norepeat';

    if ( $attributes['bgImageSize'] ) {
        if ( isset( $bgImageSize_variants[ $attributes['bgImageSize'] ] ) ) {
            $content_classes[] = $bgImageSize_variants[ $attributes['bgImageSize'] ];
        }
    }

    if ( $attributes['bgImagePosition'] ) {
        if( isset( $bgImagePosition_variants[ $attributes['bgImagePosition'] ] ) ) {
            $content_classes[] = $bgImagePosition_variants[ $attributes['bgImagePosition'] ];
        }
    }

    if ( $attributes['bgImageEffect'] === 'fixed' ) {
        $content_classes[] = 'uk-background-fixed';
    }

    if ( $attributes['bgImageVisibility'] ) {
        if( isset( $bgImageVisibility_variants[ $attributes['bgImageVisibility'] ] ) ) {
            $content_classes[] = $bgImageVisibility_variants[ $attributes['bgImageVisibility'] ];
        }
    }
}

if( $attributes['verticalAlignment'] ) {
    $content_classes[] = 'uk-flex';

    if( isset( $verticalAlignment_variants[ $attributes['verticalAlignment'] ] ) ) {
        $content_classes[] = $verticalAlignment_variants[ $attributes['verticalAlignment'] ];
    }
}

if ( $attributes['padding'] ) {
    if( $attributes['padding'] !== 'default' ) {
        $content_classes[] = 'uk-tile';
    }

    if( isset( $padding_variants[ $attributes['padding'] ] ) ) {
        $content_classes[] = $padding_variants[ $attributes['padding'] ];
    }
}

/**
 * Content styles
 */
if ( $attributes['bgColor'] ) {
    $content_styles[] = 'background-color: ' . $attributes['bgColor'];
}

if ( $attributes['bgImageMediaId'] ) {
    $image_src = wp_get_attachment_image_src( $attributes['bgImageMediaId'], 'full' );

    $content_styles[] = 'background-image: url(' . $image_src[0] . ')';

    if ( $attributes['bgImageOverlay'] ) {
        if ( $attributes['bgImageOverlayColor'] ) {
            $content_styles[] = 'background-color: ' . $attributes['bgImageOverlayColor'];
        }
    }
}

/**
 * Content parallax data
 */
if ( $attributes['bgImageMediaId'] && $attributes['bgImageEffect'] === 'parallax' ) {
    $content_parallax_data[] = 'bgx: ' . $attributes['bgImageParallaxHorizontalStart'] . ', ' . $attributes['bgImageParallaxHorizontalEnd'];
    $content_parallax_data[] = 'bgy: ' . $attributes['bgImageParallaxVerticalStart'] . ', ' . $attributes['bgImageParallaxVerticalEnd'];
}

/**
 * Filters grid-column block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_grid_column_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Content attributes
 */
if ( $content_classes ) {
    $content_attrs[] = 'class="' . esc_attr( implode( ' ', $content_classes ) ) . '"';
}

if ( $content_styles ) {
    $content_attrs[] = 'style="' . esc_attr( implode( '; ', $content_styles ) ) . '"';
}

if ( $content_parallax_data ) {
    $content_attrs[] = 'data-uk-parallax="' . esc_attr( implode( '; ', $content_parallax_data ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <div <?php echo implode( ' ', $content_attrs ); ?>>
        <?php if ( $attributes['verticalAlignment'] ) : ?>
        <div class="uk-panel">
        <?php endif; ?>
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        <?php if ( $attributes['verticalAlignment'] ) : ?>
        </div>
        <?php endif; ?>
    </div>
</div>