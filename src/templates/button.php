<?php
/**
 * Template for uikit-editor-blocks/button
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/button.php.
 *
 * @package uikit-editor-blocks/templates/button
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

$block_elm_classes = ['uk-button'];

$style_classes = [
    'default'   => 'uk-button-default',
    'primary'   => 'uk-button-primary',
    'secondary' => 'uk-button-secondary',
    'danger'    => 'uk-button-danger',
    'text'      => 'uk-button-text',
    'link'      => 'uk-button-link',
];

$size_classes = [
    'small' => 'uk-button-small',
    'large' => 'uk-button-large',
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
 * Filters button block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the wrapper block of the button.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_button_classes', $block_elm_classes, $attributes );
?>
<a
    <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
        href="<?php echo esc_url( $attributes['linkUrl'] ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $attributes['linkTarget'] ) ) : ?>
        target="<?php echo esc_attr( $attributes['linkTarget'] ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $attributes['linkTitle'] ) ) : ?>
        title="<?php echo esc_attr( $attributes['linkTitle'] ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $attributes['linkRel'] ) ) : ?>
        rel="<?php echo esc_attr( $attributes['linkRel'] ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $attributes['linkAriaLabel'] ) ) : ?>
        aria-label="<?php echo esc_attr( $attributes['linkAriaLabel'] ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php echo esc_html( $attributes['text'] ); ?>
</a>
