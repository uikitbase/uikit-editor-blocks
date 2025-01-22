<?php
/**
 * Template for uikit-editor-blocks/container
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/container.php.
 *
 * @package uikit-editor-blocks/templates/container
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

$block_elm_classes = ['uk-container'];

$size_classes = [
    'xsmall' => 'uk-container-xsmall',
    'small'  => 'uk-container-small',
    'large'  => 'uk-container-large',
    'xlarge' => 'uk-container-xlarge',
    'expand' => 'uk-container-expand',
];

/*
 * Container options
 */
if ( ! empty( $attributes['size'] ) ) {
    if ( isset( $size_classes[ $attributes['size'] ] ) ) {
        $block_elm_classes[] = $size_classes[ $attributes['size'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters container block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_container_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
