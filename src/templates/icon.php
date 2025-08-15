<?php
/**
 * Template for uikit-editor-blocks/icon
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/icon.php.
 *
 * @package uikit-editor-blocks/templates/icon
 * @version 1.0.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$icon_attrs     = [];
$icon_classes   = [];
$icon_icon_data = [];

$color_variants = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Icon classes
 */
if ( $attributes['color'] ) {
    if ( isset( $color_variants[ $attributes['color'] ] ) ) {
        $icon_classes[] = $color_variants[ $attributes['color'] ];
    }
}

/**
 * Icon icon-data
 */
if ( $attributes['icon'] ) {
    $icon_icon_data[] = 'icon: ' . $attributes['icon'];
}

if ( $attributes['width'] ) {
    $icon_icon_data[] = 'width: ' . $attributes['width'];
    $icon_icon_data[] = 'height: ' . $attributes['width'];
}

/**
 * Filters icon block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_icon_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Icon attributes
 */
if ( $icon_classes ) {
    $icon_attrs[] = 'class="' . esc_attr( implode( ' ', $icon_classes ) ) . '"';
}

if ( $icon_icon_data ) {
    $icon_attrs[] = 'data-uk-icon="' . esc_attr( implode( '; ', $icon_icon_data ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <span <?php echo implode( ' ', $icon_attrs ); ?>></span>
</div>