<?php
/**
 * Template for uikit-editor-blocks/section
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/section.php.
 *
 * @package uikit-editor-blocks/templates/section
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

$block_elm_classes     = ['uk-section'];
$block_elm_styles      = [];
$container_elm_classes = [];

$style_classes = [
    'default'   => 'uk-section-default',
    'muted'     => 'uk-section-muted',
    'primary'   => 'uk-section-primary',
    'secondary' => 'uk-section-secondary',
];

$textColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$padding_classes = [
    'xsmall' => 'uk-section-xsmall',
    'small'  => 'uk-section-small',
    'large'  => 'uk-section-large',
    'xlarge' => 'uk-section-xlarge',
    'none'   => 'uk-padding-remove',
];

$container_classes = [
    'default' => 'uk-container',
    'xsmall'  => 'uk-container uk-container-xsmall',
    'small'   => 'uk-container uk-container-small',
    'large'   => 'uk-container uk-container-large',
    'xlarge'  => 'uk-container uk-container-xlarge',
    'expand'  => 'uk-container uk-container-expand',
];

$bgImageSize_classes = [
    'cover'       => 'uk-background-cover',
    'contain'     => 'uk-background-contain',
    'full-width'  => 'uk-background-width-1-1',
    'full-height' => 'uk-background-height-1-1',
];

$bgImagePosition_classes = [
    'top-left'      => 'uk-background-top-left',
    'top-center'    => 'uk-background-top-center',
    'top-right'     => 'uk-background-top-right',
    'center-left'   => 'uk-background-center-left',
    'center-center' => 'uk-background-center-center',
    'center-right'  => 'uk-background-center-right',
    'bottom-left'   => 'uk-background-bottom-left',
    'bottom-center' => 'uk-background-bottom-center',
    'bottom-right'  => 'uk-background-bottom-right',
];

$bgImageVisibility_classes = [
    'small'  => 'uk-background-image@s',
    'medium' => 'uk-background-image@m',
    'large'  => 'uk-background-image@l',
    'xlarge' => 'uk-background-image@xl',
];

if ( ! empty( $attributes['style'] ) ) {
    if( isset( $style_classes[ $attributes['style'] ] ) ) {
        $block_elm_classes[] = $style_classes[ $attributes['style'] ];
    }
}

if ( ! empty( $attributes['textColor'] ) ) {
    if( isset( $textColor_classes[ $attributes['textColor'] ] ) ) {
        $block_elm_classes[] = $textColor_classes[ $attributes['textColor'] ];
    }
}

if ( ! empty( $attributes['padding'] ) ) {
    if( isset( $padding_classes[ $attributes['padding'] ] ) ) {
        $block_elm_classes[] = $padding_classes[ $attributes['padding'] ];
    }
}

if( $attributes['padding'] != 'none' ) {
    if ( ! empty( $attributes['removeTopPadding'] ) ) {
        $block_elm_classes[] = 'uk-padding-remove-top';
    }

    if ( ! empty( $attributes['removeBottomPadding'] ) ) {
        $block_elm_classes[] = 'uk-padding-remove-bottom';
    }
}

if ( ! empty( $attributes['container'] ) ) {
    if( isset( $container_classes[ $attributes['container'] ] ) ) {
        $container_elm_classes[] = $container_classes[ $attributes['container'] ];
    }
}

if ( ! empty( $attributes['bgColor'] ) ) {
    $block_elm_styles[] = sprintf( 'background-color: %s', $attributes['bgColor'] );
}

if ( ! empty( $attributes['bgImageMediaId'] ) ) {
    $image_src = wp_get_attachment_image_src( $attributes['bgImageMediaId'], 'full' );

    $block_elm_classes[] = 'uk-background-norepeat';
    $block_elm_styles[]  = sprintf( 'background-image: url(%s)', $image_src[0] );

    if ( ! empty( $attributes['bgImageSize'] ) ) {
        if( isset( $bgImageSize_classes[ $attributes['bgImageSize'] ] ) ) {
            $block_elm_classes[] = $bgImageSize_classes[ $attributes['bgImageSize'] ];
        }
    }

    if ( ! empty( $attributes['bgImagePosition'] ) ) {
        if( isset( $bgImagePosition_classes[ $attributes['bgImagePosition'] ] ) ) {
            $block_elm_classes[] = $bgImagePosition_classes[ $attributes['bgImagePosition'] ];
        }
    }

    if ( $attributes['bgImageEffect'] == 'fixed' ) {
        $block_elm_classes[] = 'uk-background-fixed';
    }

    if ( ! empty( $attributes['bgImageVisibility'] ) ) {
        if( isset( $bgImageVisibility_classes[ $attributes['bgImageVisibility'] ] ) ) {
            $block_elm_classes[] = $bgImageVisibility_classes[ $attributes['bgImageVisibility'] ];
        }
    }

    if ( ! empty( $attributes['bgImageOverlay'] ) ) {
        $block_elm_classes[] = 'uk-position-relative';
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters section block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_section_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $block_elm_styles ) ) : ?>
        style="<?php echo esc_attr( implode( ';', $block_elm_styles ) ); ?>"
    <?php endif; ?>
    <?php if ( ! empty( $attributes['bgImageMediaId'] ) && ( $attributes['bgImageEffect'] == 'parallax' ) ) : ?>
        data-uk-parallax="bgx: <?php echo esc_attr( $attributes['bgImageParallaxHorizontalStart'] ); ?>, <?php echo esc_attr( $attributes['bgImageParallaxHorizontalEnd'] ); ?>; bgy: <?php echo esc_attr( $attributes['bgImageParallaxVerticalStart'] ); ?>, <?php echo esc_attr( $attributes['bgImageParallaxVerticalEnd'] ); ?>;"
    <?php endif; ?>
>
    <?php if ( ! empty( $attributes['bgImageMediaId'] ) ) : ?>
        <?php if ( $attributes['bgImageOverlay'] ) : ?>
            <?php if ( ! empty( $attributes['bgImageOverlayColor'] ) ) : ?>
            <div class="uk-position-cover" style="background-color: <?php echo esc_attr( $attributes['bgImageOverlayColor'] ); ?>;"></div>
            <div class="uk-position-relative">
            <?php endif; ?>
        <?php endif; ?>
    <?php endif; ?>
    <?php if ( ! empty( $attributes['container'] ) ) : ?>
        <div class="<?php echo esc_attr( implode( ' ', $container_elm_classes ) ); ?>">
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </div>
    <?php else : ?>
        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
    <?php endif; ?>
    <?php if ( ! empty( $attributes['bgImageMediaId'] ) ) : ?>
        <?php if ( $attributes['bgImageOverlay'] ) : ?>
            <?php if ( ! empty( $attributes['bgImageOverlayColor'] ) ) : ?>
            </div>
            <?php endif; ?>
        <?php endif; ?>
    <?php endif; ?>
</div>
