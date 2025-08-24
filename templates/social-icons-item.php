<?php
/**
 * Template for uikit-editor-blocks/social-icons-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/social-icons-item.php.
 *
 * @package uikit-editor-blocks/templates/social-icons-item
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$wrapper_link_attrs   = [];
$wrapper_link_classes = [];

$icon_attrs     = [];
$icon_icon_data = [];

$linkStyle_variants = [
    'default'    => 'uk-icon-link',
    'button'     => 'uk-icon-button',
    'link-muted' => 'uk-link-muted',
    'link-text'  => 'uk-link-text',
    'link-reset' => 'uk-link-reset',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Wrapper link classes
 */
if ( $block->context['uikit-editor-blocks/social-icons-linkStyle'] ) {
    if ( isset( $linkStyle_variants[ $block->context['uikit-editor-blocks/social-icons-linkStyle'] ] ) ) {
        $wrapper_link_classes[] = $linkStyle_variants[ $block->context['uikit-editor-blocks/social-icons-linkStyle'] ];
    }
}

/**
 * Icon icon-data
 */
if ( $attributes['icon'] ) {
    $icon_icon_data[] = $attributes['icon'];
}

/**
 * Filters social-icons-item block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_social_icons_item_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Wrapper link attributes
 */
if ( $attributes['linkUrl'] ) {
    $wrapper_link_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
}

if ( $attributes['linkTarget'] ) {
    $wrapper_link_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
}

if ( $attributes['linkTitle'] ) {
    $wrapper_link_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
}

if ( $attributes['linkRel'] ) {
    $wrapper_link_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
}

if ( $attributes['linkAriaLabel'] ) {
    $wrapper_link_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
}

if ( $wrapper_link_classes ) {
    $wrapper_link_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_link_classes ) ) . '"';
}

/**
 * Icon attributes
 */
if ( $icon_icon_data ) {
    $icon_attrs[] = 'data-uk-icon="' . esc_attr( implode( '; ', $icon_icon_data ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <a <?php echo implode( ' ', $wrapper_link_attrs ); ?>>
        <span <?php echo implode( ' ', $icon_attrs ); ?>></span>
    </a>
</div>