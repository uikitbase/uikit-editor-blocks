<?php
/**
 * Template for uikit-editor-blocks/accordion-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/accordion-item.php.
 *
 * @package uikit-editor-blocks/templates/accordion-item
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$content_attrs   = [];
$content_classes = ['uk-panel'];

$parent_contentStyle_variants = [
    'meta' => 'uk-text-meta',
    'lead' => 'uk-text-lead',
];

$parent_contentTopMargin_variants = [
    'small'   => 'uk-margin-small-top',
    'default' => 'uk-margin-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Content classes
 */
if ( $block->context['uikit-editor-blocks/accordion-contentStyle'] ) {
    if ( isset( $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/accordion-contentStyle'] ] ) ) {
        $content_classes[] = $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/accordion-contentStyle'] ];
    }
}

if ( $block->context['uikit-editor-blocks/accordion-contentTopMargin'] ) {
    if ( isset( $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/accordion-contentTopMargin'] ] ) ) {
        $content_classes[] = $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/accordion-contentTopMargin'] ];
    }
}

/**
 * Filters accordion-item block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_accordion_item_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Content attributes
 */
if ( $content_classes ) {
    $content_attrs[] = 'class="' . esc_attr( implode( ' ', $content_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <a class="uk-accordion-title" href>
        <?php echo esc_html( $attributes['titleText'] ); ?>
    </a>
    <div class="uk-accordion-content">
        <div <?php echo implode( ' ', $content_attrs ); ?>>
            <?php echo wpautop( wp_kses_post( $attributes['contentText'] ) ); ?>
        </div>
    </div>
</div>