<?php
/**
 * Template for uikit-editor-blocks/grid
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/grid.php.
 *
 * @package uikit-editor-blocks/templates/grid
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

$block_elm_classes = ['uk-grid'];

$columnGap_classes = [
    'small'  => 'uk-grid-column-small',
    'medium' => 'uk-grid-column-medium',
    'large'  => 'uk-grid-column-large',
    'none'   => 'uk-grid-column-collapse',
];

$rowGap_classes = [
    'small'  => 'uk-grid-row-small',
    'medium' => 'uk-grid-row-medium',
    'large'  => 'uk-grid-row-large',
    'none'   => 'uk-grid-row-collapse',
];

if ( ! empty( $attributes['columnGap'] ) ) {
    if ( isset( $columnGap_classes[ $attributes['columnGap'] ] ) ) {
        $block_elm_classes[] = $columnGap_classes[ $attributes['columnGap'] ];
    }
}

if ( ! empty( $attributes['rowGap'] ) ) {
    if ( isset( $rowGap_classes[ $attributes['rowGap'] ] ) ) {
        $block_elm_classes[] = $rowGap_classes[ $attributes['rowGap'] ];
    }
}

if ( ! empty( $attributes['columnMatch'] ) ) {
    $block_elm_classes[] = 'uk-grid-match';
}

if ( ! empty( $attributes['divider'] ) ) {
    $block_elm_classes[] = 'uk-grid-divider';
}

if ( ! empty( $attributes['centerColumns'] ) ) {
    $block_elm_classes[] = 'uk-flex-center';
}

if ( ! empty( $attributes['centerRows'] ) ) {
    $block_elm_classes[] = 'uk-flex-middle';
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters grid block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_grid_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
    data-uk-grid
>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
