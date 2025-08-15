<?php
/**
 * Template for uikit-editor-blocks/grid
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/grid.php.
 *
 * @package uikit-editor-blocks/templates/grid
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = ['uk-grid'];

$columnGap_variants = [
    'small'  => 'uk-grid-column-small',
    'medium' => 'uk-grid-column-medium',
    'large'  => 'uk-grid-column-large',
    'none'   => 'uk-grid-column-collapse',
];

$rowGap_variants = [
    'small'  => 'uk-grid-row-small',
    'medium' => 'uk-grid-row-medium',
    'large'  => 'uk-grid-row-large',
    'none'   => 'uk-grid-row-collapse',
];

/**
 * Wrapper classes
 */
if ( $attributes['columnGap'] ) {
    if ( isset( $columnGap_variants[ $attributes['columnGap'] ] ) ) {
        $wrapper_classes[] = $columnGap_variants[ $attributes['columnGap'] ];
    }
}

if ( $attributes['rowGap'] ) {
    if ( isset( $rowGap_variants[ $attributes['rowGap'] ] ) ) {
        $wrapper_classes[] = $rowGap_variants[ $attributes['rowGap'] ];
    }
}

if ( $attributes['columnMatch'] ) {
    $wrapper_classes[] = 'uk-grid-match';
}

if ( $attributes['divider'] ) {
    $wrapper_classes[] = 'uk-grid-divider';
}

if ( $attributes['centerColumns'] ) {
    $wrapper_classes[] = 'uk-flex-center';
}

if ( $attributes['centerRows'] ) {
    $wrapper_classes[] = 'uk-flex-middle';
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters grid block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_grid_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-grid=""';
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>