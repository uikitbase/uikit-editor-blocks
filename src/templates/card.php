<?php
/**
 * Template for uikit-editor-blocks/card
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/card.php.
 *
 * @package uikit-editor-blocks/templates/card
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = ['uk-card', 'uk-card-body'];

$title_attrs   = [];
$title_classes = ['uk-card-title'];

$style_variants = [
    'default'   => 'uk-card-default',
    'primary'   => 'uk-card-primary',
    'secondary' => 'uk-card-secondary',
];

$size_variants = [
    'small' => 'uk-card-small',
    'large' => 'uk-card-large',
];

/**
 * Wrapper classes
 */
if ( $attributes['style'] ) {
    if ( isset( $style_variants[ $attributes['style'] ] ) ) {
        $wrapper_classes[] = $style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['size'] ) {
    if ( isset( $size_variants[ $attributes['size'] ] ) ) {
        $wrapper_classes[] = $size_variants[ $attributes['size'] ];
    }
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters card block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the wrapper block of the button.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_card_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Title attributes
 */
if ( $title_classes ) {
    $title_attrs[] = 'class="' . esc_attr( implode( ' ', $title_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <<?php echo tag_escape( $attributes['titleElement'] ); ?> <?php echo implode( ' ', $title_attrs ); ?>>
    <?php echo esc_html( $attributes['titleText'] ); ?>
    </<?php echo tag_escape( $attributes['titleElement'] ); ?>>
    <<?php echo tag_escape( $attributes['contentElement'] ); ?>>
    <?php echo wp_kses_post( $attributes['contentText'] ); ?>
    </<?php echo tag_escape( $attributes['contentElement'] ); ?>>
</div>