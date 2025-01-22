<?php
/**
 * Template for uikit-editor-blocks/grid-column
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/grid-column.php.
 *
 * @package uikit-editor-blocks/templates/grid-column
 * @version 1.0.0
 */

/**
 * Block attributes.
 * Defined in uikit_editor_blocks_get_template() which requires this template.
 *
 * The following attributes are available:
 *
 * @var $attributes array(
 *   'className' (string) => Additional class names which should be added to block.
 * )
 */

/**
 * Block content.
 * Defined in uikit_editor_blocks_get_template() which requires this template.
 *
 * @var $content string
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$block_elm_classes  = [];
$background_classes = [];
$styles             = [];

$orderFirst_classes = [
    'always' => 'uk-flex-first',
    'small'  => 'uk-flex-first@s',
    'medium' => 'uk-flex-first@m',
    'large'  => 'uk-flex-first@l',
    'xlarge' => 'uk-flex-first@xl',
];

$bgImageSize_classes = [
    'cover'       => 'uk-background-cover',
    'contain'     => 'uk-background-contain',
    'full-width'  => 'uk-background-width-1-1',
    'full-height' => 'uk-background-height-1-1',
];

$bgImagePosition_classes = [
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

$bgImageVisibility_classes = [
    'small'  => 'uk-background-image@s',
    'medium' => 'uk-background-image@m',
    'large'  => 'uk-background-image@l',
    'xlarge' => 'uk-background-image@xl',
];

if ( ! empty( $attributes['defaultWidth'] ) ) {
    $block_elm_classes[] = 'uk-width-' . $attributes['defaultWidth'];
}

if ( ! empty( $attributes['smallWidth'] ) ) {
    $block_elm_classes[] = 'uk-width-' . $attributes['smallWidth'] . '@s';
}

if ( ! empty( $attributes['mediumWidth'] ) ) {
    $block_elm_classes[] = 'uk-width-' . $attributes['mediumWidth'] . '@m';
}

if ( ! empty( $attributes['largeWidth'] ) ) {
    $block_elm_classes[] = 'uk-width-' . $attributes['largeWidth'] . '@l';
}

if ( ! empty( $attributes['xlargeWidth'] ) ) {
    $block_elm_classes[] = 'uk-width-' . $attributes['xlargeWidth'] . '@xl';
}

if ( ! empty( $attributes['orderFirst'] ) ) {
    if ( ! empty( $attributes['orderFirst'] ) ) {
        if( isset( $orderFirst_classes[ $attributes['orderFirst'] ] ) ) {
            $block_elm_classes[] = $orderFirst_classes[ $attributes['orderFirst'] ];
        }
    }
}

/*
 * Background color
 */
if ( ! empty( $attributes['bgColor'] ) ) {
    $styles[] = sprintf( 'background-color: %s', $attributes['bgColor'] );
}

/*
 * Background image
 */
if ( ! empty( $attributes['bgImageMediaId'] ) ) {
    $image_src = wp_get_attachment_image_src( $attributes['bgImageMediaId'], 'full' );

    $background_classes[] = 'uk-background-norepeat';
    $styles[] = sprintf( 'background-image: url(%s)', $image_src[0] );

    if ( ! empty( $attributes['bgImageSize'] ) ) {
        if ( ! empty( $attributes['bgImageSize'] ) ) {
            if ( isset( $bgImageSize_classes[ $attributes['bgImageSize'] ] ) ) {
                $background_classes[] = $bgImageSize_classes[ $attributes['bgImageSize'] ];
            }
        }
    }

    if ( ! empty( $attributes['bgImagePosition'] ) ) {
        if ( ! empty( $attributes['bgImagePosition'] ) ) {
            if( isset( $bgImagePosition_classes[ $attributes['bgImagePosition'] ] ) ) {
                $background_classes[] = $bgImagePosition_classes[ $attributes['bgImagePosition'] ];
            }
        }
    }

    if ( $attributes['bgImageEffect'] == 'fixed' ) {
        $background_classes[] = 'uk-background-fixed';
    }

    if ( ! empty( $attributes['bgImageVisibility'] ) ) {
        if ( ! empty( $attributes['bgImageVisibility'] ) ) {
            if( isset( $bgImageVisibility_classes[ $attributes['bgImageVisibility'] ] ) ) {
                $background_classes[] = $bgImageVisibility_classes[ $attributes['bgImageVisibility'] ];
            }
        }
    }

    if ( $attributes['bgImageOverlay'] ) {
        $background_classes[] = 'uk-position-relative';
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters grid-column block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_grid_column_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <div class="<?php echo esc_attr( implode( ' ', $background_classes ) ); ?>" style="<?php echo esc_attr( implode( ';', $styles ) ); ?>"
        <?php if ( ! empty( $attributes['bgImageMediaId'] ) && ( $attributes['bgImageEffect'] == 'parallax' ) ) : ?>
            data-uk-parallax="bgx: <?php echo esc_attr( $attributes['bgImageParallaxHorizontalStart'] ); ?>, <?php echo esc_attr( $attributes['bgImageParallaxHorizontalEnd'] ); ?>; bgy: <?php echo esc_attr( $attributes['bgImageParallaxVerticalStart'] ); ?>, <?php echo esc_attr( $attributes['bgImageParallaxVerticalEnd'] ); ?>;"
        <?php endif; ?>
    >
        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    </div>
</div>
