<?php
/**
 * Template for uikit-editor-blocks/dropdown-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/dropdown-item.php.
 *
 * @package uikit-editor-blocks/templates/dropdown-item
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters dropdown-item block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_dropdown_item_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}
?>
<li <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <a href="#"><?php echo esc_html( $attributes['titleText'] ); ?></a>
</li>