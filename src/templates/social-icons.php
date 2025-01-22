<?php
/**
 * Template for uikit-editor-blocks/social-icons
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/social-icons.php.
 *
 * @package uikit-editor-blocks/templates/social-icons
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

$block_elm_classes = ['uk-child-width-auto', 'uk-flex-inline'];

$grid_classes = [
    'vertical' => 'uk-flex-column',
];

$gridBreakpoint_classes = [
    'small'  => '@s',
    'medium' => '@m',
    'large'  => '@l',
    'xlarge' => '@xl',
];

$gridGap_classes = [
    'small'  => 'uk-grid-small',
    'medium' => 'uk-grid-medium',
    'large'  => 'uk-grid-large',
];

if( ! empty( $attributes['grid'] ) ) {
    if ( isset( $grid_classes[ $attributes['grid'] ] ) ) {
        $block_elm_classes[] = $grid_classes[ $attributes['grid'] ];
    }
}

if( ! empty( $attributes['gridGap'] ) ) {
    if ( isset( $gridGap_classes[ $attributes['gridGap'] ] ) ) {
        $block_elm_classes[] = $gridGap_classes[ $attributes['gridGap'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters social-icons block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_social_icons_classes', $block_elm_classes, $attributes );
?>
<div
    data-uk-grid
    <?php if( $attributes['grid'] == 'vertical' && $attributes['gridBreakpoint'] != '' ) : ?>
        data-uk-toggle="cls: uk-flex-column; mode: media; media: <?php echo esc_attr( $gridBreakpoint_classes[ $attributes['gridBreakpoint'] ] ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>
