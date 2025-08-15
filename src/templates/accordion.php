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

$wrapper_attrs          = [];
$wrapper_classes        = [];
$wrapper_accordion_data = [];

/**
 * Wrapper classes
 */
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
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-accordion="' . esc_attr( implode( '; ', $wrapper_accordion_data ) ) . '"';
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>