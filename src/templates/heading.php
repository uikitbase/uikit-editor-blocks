<?php
/**
 * Template for uikit-editor-blocks/heading
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/heading.php.
 *
 * @package uikit-editor-blocks/templates/heading
 * @version 1.0.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$style_variants = [
    'heading-3xlarge' => 'uk-heading-3xlarge',
    'heading-2xlarge' => 'uk-heading-2xlarge',
    'heading-xlarge'  => 'uk-heading-xlarge',
    'heading-large'   => 'uk-heading-large',
    'heading-medium'  => 'uk-heading-medium',
    'heading-small'   => 'uk-heading-small',
    'h1'              => 'uk-h1',
    'h2'              => 'uk-h2',
    'h3'              => 'uk-h3',
    'h4'              => 'uk-h4',
    'h5'              => 'uk-h5',
    'h6'              => 'uk-h6',
    'text-meta'       => 'uk-text-meta',
    'text-lead'       => 'uk-text-lead',
    'text-small'      => 'uk-text-small',
    'text-large'      => 'uk-text-large',
];

$decoration_variants = [
    'divider' => 'uk-heading-divider',
    'bullet'  => 'uk-heading-bullet',
    'line'    => 'uk-heading-line',
];

$color_variants = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

/**
 * Wrapper classes
 */
if ( $attributes['style'] ) {
    if ( isset( $style_variants[ $attributes['style'] ] ) ) {
        $wrapper_classes[] = $style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['decoration'] ) {
    if ( isset( $decoration_variants[ $attributes['decoration'] ] ) ) {
        $wrapper_classes[] = $decoration_variants[ $attributes['decoration'] ];
    }
}

if ( $attributes['color'] ) {
    if ( isset( $color_variants[ $attributes['color'] ] ) ) {
        $wrapper_classes[] = $color_variants[ $attributes['color'] ];
    }
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Filters heading block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_heading_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}
?>
<<?php echo tag_escape( $attributes['element'] ); ?> <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if( $attributes['decoration'] === 'line' ) : ?>
    <span>
    <?php endif; ?>
    <?php echo wp_kses_data( $attributes['text'] ); ?>
    <?php if( $attributes['decoration'] === 'line' ) : ?>
    </span>
    <?php endif; ?>
</<?php echo tag_escape( $attributes['element'] ); ?>>