<?php
/**
 * Template for uikit-editor-blocks/button
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/button.php.
 *
 * @package uikit-editor-blocks/templates/button
 * @version 1.0.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$wrapper_attrs   = [];
$wrapper_classes = [];

$button_attrs   = [];
$button_classes = ['uk-button'];

$style_variants = [
    'default'   => 'uk-button-default',
    'primary'   => 'uk-button-primary',
    'secondary' => 'uk-button-secondary',
    'danger'    => 'uk-button-danger',
    'text'      => 'uk-button-text',
    'link'      => 'uk-button-link',
];

$size_variants = [
    'small' => 'uk-button-small',
    'large' => 'uk-button-large',
];

/**
 * Wrapper classes
 */
if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Button classes
 */
if ( $attributes['style'] ) {
    if ( isset( $style_variants[ $attributes['style'] ] ) ) {
        $button_classes[] = $style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['size'] ) {
    if ( isset( $size_variants[ $attributes['size'] ] ) ) {
        $button_classes[] = $size_variants[ $attributes['size'] ];
    }
}

if ( $attributes['fullWidth'] ) {
    $button_classes[] = 'uk-width-1-1';
}

/**
 * Filters button block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the wrapper block of the button.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_button_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', array_unique( $wrapper_classes ) ) ) . '"';
}

if( isset( $general_props['data_attrs'] ) ) {
    foreach( $general_props['data_attrs'] as $data_attr_key => $data_attr_value ) {
        $wrapper_attrs[] = $data_attr_key . '="' . esc_attr( implode( '; ', $data_attr_value ) ) . '"';
    }
}

/**
 * Button attributes
 */
if ( $attributes['linkUrl'] ) {
    $button_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
}

if ( $attributes['linkTarget'] ) {
    $button_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
}

if ( $attributes['linkTitle'] ) {
    $button_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
}

if ( $attributes['linkRel'] ) {
    $button_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
}

if ( $attributes['linkAriaLabel'] ) {
    $button_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
}

if ( $button_classes ) {
    $button_attrs[] = 'class="' . esc_attr( implode( ' ', $button_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <a <?php echo implode( ' ', $button_attrs ); ?>>
        <?php echo esc_html( $attributes['text'] ); ?>
    </a>
</div>