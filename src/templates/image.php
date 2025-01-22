<?php
/**
 * Template for uikit-editor-blocks/image
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/image.php.
 *
 * @package uikit-editor-blocks/templates/image
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

$border_classes = [
    'rounded' => 'uk-border-rounded',
    'circle'  => 'uk-border-circle',
    'pill'    => 'uk-border-pill',
];

$image_attr    = [];
$image_styles  = [];
$image_classes = [];

if ( ! empty( $attributes['border'] ) ) {
    if ( isset( $border_classes[ $attributes['border'] ] ) ) {
        $image_classes[] = $border_classes[ $attributes['border'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters image block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_image_classes', $block_elm_classes, $attributes );
?>
<?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
    <a
        href="<?php echo esc_url( $attributes['linkUrl'] ); ?>"
        <?php if ( ! empty( $attributes['linkTarget'] ) ) : ?>
            target="<?php echo esc_attr( $attributes['linkTarget'] ); ?>"
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
        <?php if ( ! empty( $block_elm_classes ) ) : ?>
            class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
        <?php endif; ?>
    >
<?php endif; ?>
    <?php
    if( ! empty( $attributes['mediaId'] ) ) {
        if ( ! empty( $attributes['width'] ) ) {
            $image_styles[] = "width: " . esc_attr( $attributes['width'] ) . 'px';
        }

        if ( ! empty( $attributes['height'] ) ) {
            $image_styles[] = "height: " . esc_attr( $attributes['height'] ) . 'px';
        }

        if ( ! empty( $attributes['alt'] ) ) {
            $image_attr['alt'] = esc_attr( $attributes['alt'] );
        }

        if ( ! empty( $image_classes ) ) {
            if( empty( $attributes['linkUrl'] ) ) {
                $image_classes = array_merge( $block_elm_classes, $image_classes );
            }

            $image_attr['class'] = esc_attr( implode( ' ', $image_classes ) );
        }

        if ( ! empty( $image_styles ) ) {
            $image_attr['style'] = esc_attr( implode( '; ', $image_styles ) );
        }

        echo wp_get_attachment_image( $attributes['mediaId'], 'full', false, $image_attr );
    }
    ?>
<?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
    <?php echo '</a>' ?>
<?php endif; ?>
