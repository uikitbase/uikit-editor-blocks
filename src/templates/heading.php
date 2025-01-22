<?php
/**
 * Template for uikit-editor-blocks/heading
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/heading.php.
 *
 * @package uikit-editor-blocks/templates/heading
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

$decoration_classes = [
    'divider' => 'uk-heading-divider',
    'bullet'  => 'uk-heading-bullet',
    'line'    => 'uk-heading-line',
];

$color_classes = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

if ( ! empty( $attributes['style'] ) ) {
    if ( isset( $style_classes[ $attributes['style'] ] ) ) {
        $block_elm_classes[] = $style_classes[ $attributes['style'] ];
    }
}

if ( ! empty( $attributes['decoration'] ) ) {
    if ( isset( $decoration_classes[ $attributes['decoration'] ] ) ) {
        $block_elm_classes[] = $decoration_classes[ $attributes['decoration'] ];
    }
}

if ( ! empty( $attributes['color'] ) ) {
    if ( isset( $color_classes[ $attributes['color'] ] ) ) {
        $block_elm_classes[] = $color_classes[ $attributes['color'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters heading block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_heading_classes', $block_elm_classes, $attributes );
?>
<<?php echo esc_html( $attributes['element'] ); ?>
    <?php if( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>>
<?php if( $attributes['decoration'] == 'line' ) : ?>
    <span>
<?php endif; ?>
<?php echo esc_html( $attributes['text'] ); ?>
<?php if( $attributes['decoration'] == 'line' ) : ?>
    </span>
<?php endif; ?>
</<?php echo esc_html( $attributes['element'] ); ?>>
