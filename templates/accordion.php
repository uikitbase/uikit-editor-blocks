<?php
/**
 * Template for uikit-editor-blocks/accordion
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/accordion.php.
 *
 * @package uikit-editor-blocks/templates/accordion
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$wrapper_attrs          = [];
$wrapper_classes        = [];
$wrapper_accordion_data = [];

/**
 * Wrapper classes
 */
if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Wrapper accordion-data
 */
if ( $attributes['multiple'] ) {
    $wrapper_accordion_data[] = 'multiple: 1';
}

if ( $attributes['collapsible'] ) {
    $wrapper_accordion_data[] = 'collapsible: true';
} else {
    $wrapper_accordion_data[] = 'collapsible: false';
}

/**
 * Filters accordion block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_accordion_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', array_unique( $wrapper_classes ) ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-accordion="' . esc_attr( implode( '; ', $wrapper_accordion_data ) ) . '"';

if( isset( $general_props['data_attrs'] ) ) {
    foreach( $general_props['data_attrs'] as $data_attr_key => $data_attr_value ) {
        $wrapper_attrs[] = $data_attr_key . '="' . esc_attr( implode( '; ', $data_attr_value ) ) . '"';
    }
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>