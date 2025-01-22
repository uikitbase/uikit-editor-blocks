<?php
/**
 * Template for uikit-editor-blocks/social-icons-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/social-icons-item.php.
 *
 * @package uikit-editor-blocks/templates/social-icons-item
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
$a_elm_classes     = [];

$linkStyle_classes = [
    'default'    => 'uk-icon-link',
    'button'     => 'uk-icon-button',
    'link-muted' => 'uk-link-muted',
    'link-text'  => 'uk-link-text',
    'link-reset' => 'uk-link-reset',
];

if ( ! empty( $block->context['uikit-editor-blocks/social-icons-linkStyle'] ) ) {
    if ( isset( $linkStyle_classes[ $block->context['uikit-editor-blocks/social-icons-linkStyle'] ] ) ) {
        $a_elm_classes[] = $linkStyle_classes[ $block->context['uikit-editor-blocks/social-icons-linkStyle'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters social-icons-item block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_social_icons_item_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <a
        <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
            href="<?php echo esc_attr( $attributes['linkUrl'] ); ?>"
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
        <?php if ( ! empty( $a_elm_classes ) ) : ?>
            class="<?php echo esc_attr( implode( ' ', $a_elm_classes ) ); ?>"
        <?php endif; ?>
    >
        <span
            <?php if ( ! empty( $attributes['icon'] ) ) : ?>
                data-uk-icon="icon: <?php echo esc_attr( $attributes['icon'] ); ?>;"
            <?php endif; ?>
        >
        </span>
    </a>
</div>
