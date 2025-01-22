<?php
/**
 * Template for uikit-editor-blocks/accordion
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/accordion.php.
 *
 * @package uikit-editor-blocks/templates/accordion
 * @version 1.0.0
 */

/**
 * Block attributes.
 * Defined in uikit_editor_blocks_get_template() which requires this template.
 *
 * The following attributes are available:
 *
 * @var $attributes array(
 *   'className' (string) => Additional class names which should be added to block.
 * )
 */

/**
 * Block content.
 * Defined in uikit_editor_blocks_get_template() which requires this template.
 *
 * @var $content string
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$block_elm_classes = [];
$block_elm_data    = [];

if ( $attributes['multiple'] ) {
    $block_elm_data[] = 'multiple: 1';
}

if( $attributes['collapsible'] ) {
    $block_elm_data[] = 'collapsible: true';
} else {
    $block_elm_data[] = 'collapsible: false';
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters accordion block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_accordion_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
    data-uk-accordion="<?php echo ! empty( $block_elm_data ) ? esc_attr( implode( '; ', $block_elm_data ) ) : ''; ?>"
>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
