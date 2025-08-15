<?php
/**
 * Template for uikit-editor-blocks/dropdown
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/dropdown.php.
 *
 * @package uikit-editor-blocks/templates/dropdown
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = ['uk-inline'];

$button_attrs   = [];
$button_classes = [];

$icon_attrs = [];

$dropdown_attrs         = [];
$dropdown_dropdown_data = [];

$buttonSize_variants = [
    'small' => 'uk-button-small',
    'large' => 'uk-button-large',
];

$buttonStyle_variants = [
    'default'   => 'uk-button-default',
    'primary'   => 'uk-button-primary',
    'secondary' => 'uk-button-secondary',
    'danger'    => 'uk-button-danger',
    'text'      => 'uk-button-text',
    'link'      => 'uk-button-link',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Button classes
 */
if ( $attributes['buttonStyle'] ) {
    $button_classes[] = 'uk-button';

    if( isset( $buttonStyle_variants[ $attributes['buttonStyle'] ] ) ) {
        $button_classes[] = $buttonStyle_variants[ $attributes['buttonStyle'] ];
    }

    if ( $attributes['buttonSize'] ) {
        if( isset( $buttonSize_variants[ $attributes['buttonSize'] ] ) ) {
            $button_classes[] = $buttonSize_variants[ $attributes['buttonSize'] ];
        }
    }
}

/**
 * Dropdown dropdown-data
 */
if ( $attributes['position'] ) {
    $dropdown_dropdown_data[] = $attributes['position'];
}

/**
 * Filters dropdown block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_dropdown_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Button attributes
 */
if ( $button_classes ) {
    $button_attrs[] = 'class="' . esc_attr( implode( ' ', $button_classes ) ) . '"';
}

/**
 * Icon attributes
 */
if ( $attributes['buttonIcon'] ) {
    $icon_attrs[] = 'data-uk-icon="' . esc_attr( $attributes['buttonIcon'] ) . '"';
    $icon_attrs[] = 'class="uk-margin-small-right"';
}

/**
 * Dropdown attributes
 */
$dropdown_attrs[] = 'data-uk-dropdown="' . esc_attr( implode( '; ', $dropdown_dropdown_data ) ) . '"';
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <a <?php echo implode( ' ', $button_attrs ); ?>>
        <?php if( $attributes['buttonIcon'] ) : ?>
        <span <?php echo implode( ' ', $icon_attrs ); ?>></span>
        <?php endif; ?>
        <?php echo esc_html( $attributes['titleText'] ); ?>
        <span data-uk-drop-parent-icon></span>
    </a>
    <div <?php echo implode( ' ', $dropdown_attrs ); ?>>
        <ul class="uk-nav uk-dropdown-nav">
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </ul>
    </div>
</div>