<?php
/**
 * Template for uikit-editor-blocks/icon
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/icon.php.
 *
 * @package uikit-editor-blocks/templates/icon
 * @version 1.0.2
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

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$block_elm_classes = [];
$icon_elm_classes  = [];

$color_classes = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

if ( ! empty( $attributes['color'] ) ) {
    if ( isset( $color_classes[ $attributes['color'] ] ) ) {
        $icon_elm_classes[] = $color_classes[ $attributes['color'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters icon block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_icon_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <span
        <?php if ( ! empty( $icon_elm_classes ) ) : ?>
            class="<?php echo esc_attr( implode( ' ', $icon_elm_classes ) ); ?>"
        <?php endif; ?>
        data-uk-icon="
        <?php if ( ! empty( $attributes['icon'] ) ) : ?>
            icon: <?php echo esc_attr( $attributes['icon'] ); ?>;
        <?php endif; ?>
        <?php if ( ! empty( $attributes['width'] ) ) : ?>
            width: <?php echo esc_attr( $attributes['width'] ); ?>;
            height: <?php echo esc_attr( $attributes['width'] ); ?>;
        <?php endif; ?>
    "></span>
</div>
