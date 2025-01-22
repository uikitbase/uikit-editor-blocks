<?php
/**
 * Template for uikit-editor-blocks/accordion-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/accordion-item.php.
 *
 * @package uikit-editor-blocks/templates/accordion-item
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

$block_elm_classes   = [];
$content_elm_classes = ['uk-panel'];

$parent_contentStyle_classes = [
    'meta' => 'uk-text-meta',
    'lead' => 'uk-text-lead',
];

$parent_contentTopMargin_classes = [
    'small'   => 'uk-margin-small-top',
    'default' => 'uk-margin-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

if ( ! empty( $block->context['uikit-editor-blocks/accordion-contentStyle'] ) ) {
    if ( isset( $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/accordion-contentStyle'] ] ) ) {
        $content_elm_classes[] = $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/accordion-contentStyle'] ];
    }
}

if ( ! empty( $block->context['uikit-editor-blocks/accordion-contentTopMargin'] ) ) {
    if ( isset( $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/accordion-contentTopMargin'] ] ) ) {
        $content_elm_classes[] = $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/accordion-contentTopMargin'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters accordion-item block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_accordion_item_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <a class="uk-accordion-title" href>
        <?php echo esc_html( $attributes['titleText'] ); ?>
    </a>
    <div class="uk-accordion-content">
        <div
            <?php if ( ! empty( $content_elm_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $content_elm_classes ) ); ?>"
            <?php endif; ?>
        >
            <?php echo wp_kses_post (apply_filters( 'the_content', $attributes['contentText'] ) ); ?>
        </div>
    </div>
</div>
