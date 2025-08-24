<?php
/**
 * Template for uikit-editor-blocks/container
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/container.php.
 *
 * @package uikit-editor-blocks/templates/container
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$wrapper_attrs   = [];
$wrapper_classes = ['uk-container'];

$size_variants = [
    'xsmall' => 'uk-container-xsmall',
    'small'  => 'uk-container-small',
    'large'  => 'uk-container-large',
    'xlarge' => 'uk-container-xlarge',
    'expand' => 'uk-container-expand',
];

/**
 * Wrapper classes
 */
if ( $attributes['size'] ) {
    if ( isset( $size_variants[ $attributes['size'] ] ) ) {
        $wrapper_classes[] = $size_variants[ $attributes['size'] ];
    }
}

if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters container block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_container_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', array_unique( $wrapper_classes ) ) ) . '"';
}

if( isset( $general_props['data_attrs'] ) ) {
    foreach( $general_props['data_attrs'] as $data_attr_key => $data_attr_value ) {
        $wrapper_attrs[] = $data_attr_key . '="' . esc_attr( implode( '; ', $data_attr_value ) ) . '"';
    }
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>