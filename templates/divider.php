<?php
/**
 * Template for uikit-editor-blocks/divider
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/divider.php.
 *
 * @package uikit-editor-blocks/templates/divider
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$wrapper_attrs   = [];
$wrapper_classes = [];

$style_variants = [
    'icon'     => 'uk-divider-icon',
    'small'    => 'uk-divider-small',
    'vertical' => 'uk-divider-vertical',
];

$alignment_variants = [
    'left'   => 'uk-text-left',
    'center' => 'uk-text-center',
    'right'  => 'uk-text-right',
];

$alignmentBreakpoint_variants = [
    'small'  => '@s',
    'medium' => '@m',
    'large'  => '@l',
    'xlarge' => '@xl',
];

$alignmentFallback_variants = [
    'left'    => 'uk-text-left',
    'center'  => 'uk-text-center',
    'right'   => 'uk-text-right',
    'justify' => 'uk-text-justify',
];

/**
 * Wrapper classes
 */
if ( $attributes['style'] ) {
    if ( isset( $style_variants[ $attributes['style'] ] ) ) {
        $wrapper_classes[] =$style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['alignment'] ) {
    if( ! $attributes['alignmentBreakpoint'] ) {
        if ( isset( $alignment_variants[ $attributes['alignment'] ] ) ) {
            $wrapper_classes[] = $alignment_variants[ $attributes['alignment'] ];
        }
    } else {
        if ( isset( $alignment_variants[ $attributes['alignment'] ] ) && isset( $alignmentBreakpoint_variants[ $attributes['alignmentBreakpoint'] ] ) ) {
            $wrapper_classes[] = $alignment_variants[ $attributes['alignment'] ] . $alignmentBreakpoint_variants[ $attributes['alignmentBreakpoint'] ];
        }
    }

    if ( $attributes['alignmentFallback'] ) {
        if ( isset( $alignmentFallback_variants[ $attributes['alignmentFallback'] ] ) ) {
            $wrapper_classes[] = $alignmentFallback_variants[ $attributes['alignmentFallback'] ];
        }
    }
}

if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters divider block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_divider_classes', $wrapper_classes, $attributes );

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
?>

<<?php echo tag_escape( $attributes['element'] ); ?> <?php echo implode( ' ', $wrapper_attrs ); ?>>
<?php if ( $attributes['element'] !== 'hr' ) : ?>
</<?php echo tag_escape( $attributes['element'] ); ?>>
<?php endif; ?>