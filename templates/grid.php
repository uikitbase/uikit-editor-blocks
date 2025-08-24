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

$general_props = uikit_editor_blocks_get_general_props( $attributes );

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

if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
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
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', array_unique( $wrapper_classes ) ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-grid=""';

if( isset( $general_props['data_attrs'] ) ) {
    foreach( $general_props['data_attrs'] as $data_attr_key => $data_attr_value ) {
        $wrapper_attrs[] = $data_attr_key . '="' . esc_attr( implode( '; ', $data_attr_value ) ) . '"';
    }
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>