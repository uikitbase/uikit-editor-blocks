<?php
/**
 * Template for uikit-editor-blocks/text
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/text.php.
 *
 * @package uikit-editor-blocks/templates/text
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

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$block_elm_classes = [];

$style_classes = [
    'lead' => 'uk-text-lead',
    'meta' => 'uk-text-meta',
];

$color_classes = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

$size_classes = [
    'small' => 'uk-text-small',
    'large' => 'uk-text-large',
];

$alignment_classes = [
    'left'   => 'uk-text-left',
    'center' => 'uk-text-center',
    'right'  => 'uk-text-right',
];

if ( ! empty( $attributes['dropCap'] ) && $attributes['dropCap'] ) {
    $block_elm_classes[] = 'uk-dropcap';
}

if ( ! empty( $attributes['style'] ) ) {
    if ( isset( $style_classes[ $attributes['style'] ] ) ) {
        $block_elm_classes[] = $style_classes[ $attributes['style'] ];
    }
}

if ( ! empty( $attributes['color'] ) ) {
    if ( isset( $color_classes[ $attributes['color'] ] ) ) {
        $block_elm_classes[] = $color_classes[ $attributes['color'] ];
    }
}

if ( ! empty( $attributes['size'] ) ) {
    if ( isset( $size_classes[ $attributes['size'] ] ) ) {
        $block_elm_classes[] = $size_classes[ $attributes['size'] ];
    }
}

if ( $attributes['element'] == 'div' ) {
    $block_elm_classes[] = 'uk-panel';
}

if ( ! empty( $attributes['alignment'] ) ) {
    if ( isset( $alignment_classes[ $attributes['alignment'] ] ) ) {
        $block_elm_classes[] = $alignment_classes[ $attributes['alignment'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters text block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_text_classes', $block_elm_classes, $attributes );
?>
<<?php echo esc_html( $attributes['element'] ); ?>
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php echo wp_kses_post( $attributes['text'] ); ?>
</<?php echo esc_html( $attributes['element'] ); ?>>
