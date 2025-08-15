<?php
/**
 * Template for uikit-editor-blocks/text
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/text.php.
 *
 * @package uikit-editor-blocks/templates/text
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$style_variants = [
    'lead' => 'uk-text-lead',
    'meta' => 'uk-text-meta',
];

$color_variants = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

$size_variants = [
    'small' => 'uk-text-small',
    'large' => 'uk-text-large',
];

$alignment_variants = [
    'left'   => 'uk-text-left',
    'center' => 'uk-text-center',
    'right'  => 'uk-text-right',
];

/**
 * Wrapper classes
 */
if ( $attributes['dropCap'] ) {
    $wrapper_classes[] = 'uk-dropcap';
}

if ( $attributes['style'] ) {
    if ( isset( $style_variants[ $attributes['style'] ] ) ) {
        $wrapper_classes[] = $style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['color'] ) {
    if ( isset( $color_variants[ $attributes['color'] ] ) ) {
        $wrapper_classes[] = $color_variants[ $attributes['color'] ];
    }
}

if ( $attributes['size'] ) {
    if ( isset( $size_variants[ $attributes['size'] ] ) ) {
        $wrapper_classes[] = $size_variants[ $attributes['size'] ];
    }
}

if ( $attributes['element'] === 'div' ) {
    $wrapper_classes[] = 'uk-panel';
}

if ( $attributes['alignment'] ) {
    if ( isset( $alignment_variants[ $attributes['alignment'] ] ) ) {
        $wrapper_classes[] = $alignment_variants[ $attributes['alignment'] ];
    }
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters text block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_text_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}
?>
<<?php echo tag_escape( $attributes['element'] ); ?> <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo wp_kses_post( $attributes['text'] ); ?>
</<?php echo tag_escape( $attributes['element'] ); ?>>