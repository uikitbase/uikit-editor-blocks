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
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>