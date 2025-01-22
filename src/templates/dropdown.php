<?php
/**
 * Template for uikit-editor-blocks/dropdown
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/dropdown.php.
 *
 * @package uikit-editor-blocks/templates/dropdown
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

$block_elm_classes = ['uk-inline'];
$button_classes    = [];
$dropdown_attr     = [];

$buttonSize_classes = [
    'small' => 'uk-button-small',
    'large' => 'uk-button-large',
];

$buttonStyle_classes = [
    'default'   => 'uk-button-default',
    'primary'   => 'uk-button-primary',
    'secondary' => 'uk-button-secondary',
    'danger'    => 'uk-button-danger',
    'text'      => 'uk-button-text',
    'link'      => 'uk-button-link',
];

if ( ! empty( $attributes['buttonStyle'] ) ) {
    $button_classes[] = 'uk-button';

    if( isset( $buttonStyle_classes[ $attributes['buttonStyle'] ] ) ) {
        $button_classes[] = $buttonStyle_classes[ $attributes['buttonStyle'] ];
    }

    if ( ! empty( $attributes['buttonSize'] ) ) {
        if( isset( $buttonSize_classes[ $attributes['buttonSize'] ] ) ) {
            $button_classes[] = $buttonSize_classes[ $attributes['buttonSize'] ];
        }
    }
}

if ( ! empty( $attributes['position'] ) ) {
    $dropdown_attr[] = $attributes['position'];
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters dropdown block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_dropdown_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <a class="<?php echo esc_attr( implode( ' ', $button_classes ) ); ?>">
        <?php if( ! empty( $attributes['buttonIcon'] ) ) : ?>
            <span data-uk-icon="<?php echo esc_attr( $attributes['buttonIcon'] ); ?>" class="uk-margin-small-right"></span>
        <?php endif; ?>
        <?php echo esc_html( $attributes['titleText'] ); ?>
        <span data-uk-drop-parent-icon></span>
    </a>
    <div data-uk-dropdown="<?php echo esc_attr( implode( '; ', $dropdown_attr ) ); ?>">
        <ul class="uk-nav uk-dropdown-nav">
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </ul>
    </div>
</div>
