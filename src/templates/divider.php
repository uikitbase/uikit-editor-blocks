<?php
/**
 * Template for uikit-editor-blocks/divider
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/divider.php.
 *
 * @package uikit-editor-blocks/templates/divider
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

$style_classes = [
    'icon'     => 'uk-divider-icon',
    'small'    => 'uk-divider-small',
    'vertical' => 'uk-divider-vertical',
];

$alignment_classes = [
    'left'   => 'uk-text-left',
    'center' => 'uk-text-center',
    'right'  => 'uk-text-right',
];

$alignmentBreakpoint_classes = [
    'small'  => '@s',
    'medium' => '@m',
    'large'  => '@l',
    'xlarge' => '@xl',
];

$alignmentFallback_classes = [
    'left'    => 'uk-text-left',
    'center'  => 'uk-text-center',
    'right'   => 'uk-text-right',
    'justify' => 'uk-text-justify',
];

if ( ! empty( $attributes['style'] ) ) {
    if ( isset( $style_classes[ $attributes['style'] ] ) ) {
        $block_elm_classes[] =$style_classes[ $attributes['style'] ];
    }
}

if ( ! empty( $attributes['alignment'] ) ) {
    if( empty( $attributes['alignmentBreakpoint'] ) ) {
        if ( isset( $alignment_classes[ $attributes['alignment'] ] ) ) {
            $block_elm_classes[] = $alignment_classes[ $attributes['alignment'] ];
        }
    } else {
        if ( isset( $alignment_classes[ $attributes['alignment'] ] ) && isset( $alignmentBreakpoint_classes[ $attributes['alignmentBreakpoint'] ] ) ) {
            $block_elm_classes[] = $alignment_classes[ $attributes['alignment'] ] . $alignmentBreakpoint_classes[ $attributes['alignmentBreakpoint'] ];
        }
    }

    if ( ! empty( $attributes['alignmentFallback'] ) ) {
        if ( isset( $alignmentFallback_classes[ $attributes['alignmentFallback'] ] ) ) {
            $block_elm_classes[] = $alignmentFallback_classes[ $attributes['alignmentFallback'] ];
        }
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters divider block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_divider_classes', $block_elm_classes, $attributes );
?>

<<?php echo esc_html( $attributes['element'] ); ?>
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
<?php if ( $attributes['element'] != 'hr' ) : ?>
    </<?php echo esc_html( $attributes['element'] ); ?>>
<?php endif; ?>