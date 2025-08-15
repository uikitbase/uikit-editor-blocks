<?php
/**
 * Template for uikit-editor-blocks/social-icons
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/social-icons.php.
 *
 * @package uikit-editor-blocks/templates/social-icons
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs       = [];
$wrapper_classes     = ['uk-child-width-auto', 'uk-flex-inline'];
$wrapper_toggle_data = [];

$grid_variants = [
    'vertical' => 'uk-flex-column',
];

$gridBreakpoint_variants = [
    'small'  => '@s',
    'medium' => '@m',
    'large'  => '@l',
    'xlarge' => '@xl',
];

$gridGap_variants = [
    'small'  => 'uk-grid-small',
    'medium' => 'uk-grid-medium',
    'large'  => 'uk-grid-large',
];

/**
 * Wrapper classes
 */
if( $attributes['grid'] ) {
    if ( isset( $grid_variants[ $attributes['grid'] ] ) ) {
        $wrapper_classes[] = $grid_variants[ $attributes['grid'] ];
    }
}

if( $attributes['gridGap'] ) {
    if ( isset( $gridGap_variants[ $attributes['gridGap'] ] ) ) {
        $wrapper_classes[] = $gridGap_variants[ $attributes['gridGap'] ];
    }
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Wrapper toggle-data
 */
if( $attributes['grid'] === 'vertical' && $attributes['gridBreakpoint'] !== '' ) {
    $wrapper_toggle_data[] = 'cls: uk-flex-column';
    $wrapper_toggle_data[] = 'mode: media';
    $wrapper_toggle_data[] = 'media: ' . $gridBreakpoint_variants[ $attributes['gridBreakpoint'] ];
}

/**
 * Filters social-icons block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_social_icons_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

$wrapper_attrs[] = 'data-uk-grid=""';

if ( $wrapper_toggle_data ) {
    $wrapper_attrs[] = 'data-uk-toggle="' . esc_attr( implode( '; ', $wrapper_toggle_data ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>