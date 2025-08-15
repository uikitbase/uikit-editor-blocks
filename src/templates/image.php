<?php
/**
 * Template for uikit-editor-blocks/image
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/image.php.
 *
 * @package uikit-editor-blocks/templates/image
 * @version 1.0.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$image_attrs   = [];
$image_classes = [];
$image_styles  = [];

$border_variants = [
    'rounded' => 'uk-border-rounded',
    'circle'  => 'uk-border-circle',
    'pill'    => 'uk-border-pill',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Image classes
 */
if ( $attributes['border'] ) {
    if ( isset( $border_variants[ $attributes['border'] ] ) ) {
        $image_classes[] = $border_variants[ $attributes['border'] ];
    }
}

/**
 * Image styles
 */
if ( $attributes['width'] ) {
    $image_styles[] = 'width: ' . $attributes['width'] . 'px';
}

if ( $attributes['height'] ) {
    $image_styles[] = 'height: ' . $attributes['height'] . 'px';
}

/**
 * Filters image block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_image_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Wrapper link attributes
 */
if ( $attributes['linkUrl'] ) {
    $wrapper_link_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
}

if ( $attributes['linkTarget'] ) {
    $wrapper_link_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
}

if ( $attributes['linkTitle'] ) {
    $wrapper_link_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
}

if ( $attributes['linkRel'] ) {
    $wrapper_link_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
}

if ( $attributes['linkAriaLabel'] ) {
    $wrapper_link_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
}

/**
 * image attributes
 */
if ( $attributes['mediaId'] ) {
    $image_src    = wp_get_attachment_image_src( $attributes['mediaId'], 'full' );
    $image_srcset = wp_get_attachment_image_srcset( $attributes['mediaId'], 'full' );
    $image_sizes  = wp_get_attachment_image_sizes( $attributes['mediaId'], 'full' );

    if ( isset( $image_src[0] ) ) {
        $image_attrs[] = 'src="' . $image_src[0] . '"';
    }

    if ( $attributes['alt'] ) {
        $image_attrs[] = 'alt="' . esc_attr( $attributes['alt'] ) . '"';
    }

    if( isset( $image_src[1] ) ) {
        $image_attrs[] = 'width="' . esc_attr( $image_src[1] ) . '"';
    }

    if( isset( $image_src[2] ) ) {
        $image_attrs[] = 'height="' . esc_attr( $image_src[2] ) . '"';
    }

    if( $image_srcset ) {
        $image_attrs[] = 'srcset="' . esc_attr( $image_srcset ) . '"';
    }

    if( $image_srcset && $image_sizes ) {
        $image_attrs[] = 'sizes="' . esc_attr( $image_sizes ) . '"';
    }
}

if ( $image_classes ) {
    $image_attrs[] = 'class="' . esc_attr( implode( ' ', $image_classes ) ) . '"';
}

if ( $image_styles ) {
    $image_attrs[] = 'style="' . esc_attr( implode( '; ', $image_styles ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if ( $attributes['linkUrl'] ) : ?>
    <a <?php echo implode( ' ', $wrapper_link_attrs ); ?>>
    <?php endif; ?>
        <?php if( $attributes['mediaId'] ) : ?>
        <img <?php echo implode( ' ', $image_attrs ); ?>>
        <?php endif; ?>
    <?php if ( $attributes['linkUrl'] ) : ?>
    <?php echo '</a>' ?>
    <?php endif; ?>
</div>