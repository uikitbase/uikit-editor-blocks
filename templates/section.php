<?php
/**
 * Template for uikit-editor-blocks/section
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/section.php.
 *
 * @package uikit-editor-blocks/templates/section
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$wrapper_attrs         = [];
$wrapper_classes       = ['uk-section'];
$wrapper_styles        = [];
$wrapper_parallax_data = [];

$cover_attrs   = [];
$cover_classes = ['uk-position-cover'];
$cover_styles  = [];

$container_attrs   = [];
$container_classes = [];

$style_variants = [
    'default'   => 'uk-section-default',
    'muted'     => 'uk-section-muted',
    'primary'   => 'uk-section-primary',
    'secondary' => 'uk-section-secondary',
];

$textColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$padding_variants = [
    'xsmall' => 'uk-section-xsmall',
    'small'  => 'uk-section-small',
    'large'  => 'uk-section-large',
    'xlarge' => 'uk-section-xlarge',
    'none'   => 'uk-padding-remove',
];

$container_variants = [
    'default' => 'uk-container',
    'xsmall'  => 'uk-container uk-container-xsmall',
    'small'   => 'uk-container uk-container-small',
    'large'   => 'uk-container uk-container-large',
    'xlarge'  => 'uk-container uk-container-xlarge',
    'expand'  => 'uk-container uk-container-expand',
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

/**
 * Wrapper classes
 */
if ( $attributes['style'] ) {
    if( isset( $style_variants[ $attributes['style'] ] ) ) {
        $wrapper_classes[] = $style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['textColor'] ) {
    if( isset( $textColor_variants[ $attributes['textColor'] ] ) ) {
        $wrapper_classes[] = $textColor_variants[ $attributes['textColor'] ];
    }
}

if ( $attributes['padding'] ) {
    if( isset( $padding_variants[ $attributes['padding'] ] ) ) {
        $wrapper_classes[] = $padding_variants[ $attributes['padding'] ];
    }
}

if( $attributes['padding'] !== 'none' ) {
    if ( $attributes['removeTopPadding'] ) {
        $wrapper_classes[] = 'uk-padding-remove-top';
    }

    if ( $attributes['removeBottomPadding'] ) {
        $wrapper_classes[] = 'uk-padding-remove-bottom';
    }
}

if ( $attributes['bgImageMediaId'] ) {
    $wrapper_classes[] = 'uk-background-norepeat';

    if ( $attributes['bgImageSize'] ) {
        if( isset( $bgImageSize_variants[ $attributes['bgImageSize'] ] ) ) {
            $wrapper_classes[] = $bgImageSize_variants[ $attributes['bgImageSize'] ];
        }
    }

    if ( $attributes['bgImagePosition'] ) {
        if( isset( $bgImagePosition_variants[ $attributes['bgImagePosition'] ] ) ) {
            $wrapper_classes[] = $bgImagePosition_variants[ $attributes['bgImagePosition'] ];
        }
    }

    if ( $attributes['bgImageEffect'] === 'fixed' ) {
        $wrapper_classes[] = 'uk-background-fixed';
    }

    if ( $attributes['bgImageVisibility'] ) {
        if( isset( $bgImageVisibility_variants[ $attributes['bgImageVisibility'] ] ) ) {
            $wrapper_classes[] = $bgImageVisibility_variants[ $attributes['bgImageVisibility'] ];
        }
    }

    if ( $attributes['bgImageOverlay'] ) {
        $wrapper_classes[] = 'uk-position-relative';
    }
}

if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Wrapper styles
 */
if ( $attributes['bgColor'] ) {
    $wrapper_styles[] = 'background-color: ' . $attributes['bgColor'];
}

if ( $attributes['bgImageMediaId'] ) {
    $image_src = wp_get_attachment_image_src( $attributes['bgImageMediaId'], 'full' );

    $wrapper_styles[] = 'background-image: url(' . $image_src[0] . ')';
}

/**
 * Wrapper parallax data
 */
if ( $attributes['bgImageMediaId'] && $attributes['bgImageEffect'] === 'parallax' ) {
    $wrapper_parallax_data[] = 'bgx: ' . $attributes['bgImageParallaxHorizontalStart'] . ', ' . $attributes['bgImageParallaxHorizontalEnd'];
    $wrapper_parallax_data[] = 'bgy: ' . $attributes['bgImageParallaxVerticalStart'] . ', ' . $attributes['bgImageParallaxVerticalEnd'];
}

/**
 * Cover styles
 */
if ( $attributes['bgImageOverlayColor'] ) {
    $cover_styles[] = 'background-color: ' . $attributes['bgImageOverlayColor'];
}

/**
 * Container classes
 */
if ( $attributes['container'] ) {
    if( isset( $container_variants[ $attributes['container'] ] ) ) {
        $container_classes[] = $container_variants[ $attributes['container'] ];
    }
}

/**
 * Filters section block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_section_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', array_unique( $wrapper_classes ) ) ) . '"';
}

if ( $wrapper_styles ) {
    $wrapper_attrs[] = 'style="' . esc_attr( implode( '; ', $wrapper_styles ) ) . '"';
}

if ( $wrapper_parallax_data ) {
    $wrapper_attrs[] = 'data-uk-parallax="' . esc_attr( implode( '; ', $wrapper_parallax_data ) ) . '"';
}

if( isset( $general_props['data_attrs'] ) ) {
    foreach( $general_props['data_attrs'] as $data_attr_key => $data_attr_value ) {
        $wrapper_attrs[] = $data_attr_key . '="' . esc_attr( implode( '; ', $data_attr_value ) ) . '"';
    }
}

/**
 * Cover attributes
 */
if ( $cover_classes ) {
    $cover_attrs[] = 'class="' . esc_attr( implode( ' ', $cover_classes ) ) . '"';
}

if ( $cover_styles ) {
    $cover_attrs[] = 'style="' . esc_attr( implode( '; ', $cover_styles ) ) . '"';
}

/**
 * Container attributes
 */
if ( $container_classes ) {
    $container_attrs[] = 'class="' . esc_attr( implode( ' ', $container_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if ( $attributes['bgImageMediaId'] ) : ?>
        <?php if ( $attributes['bgImageOverlay'] ) : ?>
            <?php if ( $attributes['bgImageOverlayColor'] ) : ?>
            <div <?php echo implode( ' ', $cover_attrs ); ?>></div>
            <div class="uk-position-relative">
            <?php endif; ?>
        <?php endif; ?>
    <?php endif; ?>
    <?php if ( $attributes['container'] ) : ?>
    <div <?php echo implode( ' ', $container_attrs ); ?>>
        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    </div>
    <?php else : ?>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    <?php endif; ?>
    <?php if ( $attributes['bgImageMediaId'] ) : ?>
        <?php if ( $attributes['bgImageOverlay'] ) : ?>
            <?php if ( $attributes['bgImageOverlayColor'] ) : ?>
            </div>
            <?php endif; ?>
        <?php endif; ?>
    <?php endif; ?>
</div>