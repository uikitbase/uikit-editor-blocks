<?php
/**
 * Template for uikit-editor-blocks/card
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/card.php.
 *
 * @package uikit-editor-blocks/templates/card
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

$block_elm_classes = ['uk-card', 'uk-card-body'];
$title_elm_classes = ['uk-card-title'];

$style_classes = [
    'default'   => 'uk-card-default',
    'primary'   => 'uk-card-primary',
    'secondary' => 'uk-card-secondary',
];

$size_classes = [
    'small' => 'uk-card-small',
    'large' => 'uk-card-large',
];

if ( ! empty( $attributes['style'] ) ) {
    if ( isset( $style_classes[ $attributes['style'] ] ) ) {
        $block_elm_classes[] = $style_classes[ $attributes['style'] ];
    }
}

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
 * Filters card block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the wrapper block of the button.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_card_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <<?php echo esc_html( $attributes['titleElement'] ); ?>
        <?php if ( ! empty( $title_elm_classes ) ) : ?>
            class="<?php echo esc_attr( implode( ' ', $title_elm_classes ) ); ?>"
        <?php endif; ?>
    >
        <?php echo esc_html( $attributes['titleText'] ); ?>
    </<?php echo esc_html( $attributes['titleElement'] ); ?>>
    <<?php echo esc_html( $attributes['contentElement'] ); ?>>
        <?php echo esc_html( $attributes['contentText'] ); ?>
    </<?php echo esc_html( $attributes['contentElement'] ); ?>>
</div>
