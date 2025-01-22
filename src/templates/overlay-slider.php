<?php
/**
 * Template for uikit-editor-blocks/overlay-slider
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/overlay-slider.php.
 *
 * @package uikit-editor-blocks/templates/overlay-slider
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

$slider_elm_attr              = [];
$height_viewport_data         = [];
$block_elm_classes            = [];
$ul_classes                   = [ 'uk-slider-items', 'uk-grid' ];
$navigation_container_classes = [];
$navigation_classes           = [ 'uk-slider-nav', 'uk-dotnav' ];
$slidenav_classes             = [];
$slidenav_left_classes        = [];
$slidenav_right_classes       = [];

$sliderGap_classes = [
    'small'  => 'uk-grid-column-small',
    'medium' => 'uk-grid-column-medium',
    'large'  => 'uk-grid-column-large',
    'none'   => 'uk-grid-column-collapse',
];

$navigationPosition_classes = [
    'left'   => 'uk-flex-left',
    'center' => 'uk-flex-center',
    'right'  => 'uk-flex-right',
];

$navigationMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
];

$navigationBreakpoint_classes = [
    'small'  => 'visible@s',
    'medium' => 'visible@m',
    'large'  => 'visible@l',
    'xlarge' => 'visible@xl',
];

$navigationColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$slidenavPosition_classes = [
    'top-left'      => 'uk-position-top-left',
    'top-right'     => 'uk-position-top-right',
    'center-left'   => 'uk-position-center-left',
    'center-right'  => 'uk-position-center-right',
    'bottom-left'   => 'uk-position-bottom-left',
    'bottom-center' => 'uk-position-bottom-center',
    'bottom-right'  => 'uk-position-bottom-right',
];

$slidenavMargin_classes = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
];

$slidenavBreakpoint_classes = [
    'small'  => 'visible@s',
    'medium' => 'visible@m',
    'large'  => 'visible@l',
    'xlarge' => 'visible@xl',
];

$slidenavColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

if( ! empty( $attributes['sliderWidth'] ) && $attributes['sliderWidth'] == 'fixed' ) {
    if( ! empty( $attributes['sliderHeight'] ) ) {
        $height_viewport_data[] = 'offset-top: true';
        $height_viewport_data[] = sprintf( 'minHeight: %s', $attributes['sliderMinHeight'] );
    }
}

if ( ! empty( $attributes['sliderGap'] ) ) {
    if ( isset( $sliderGap_classes[ $attributes['sliderGap'] ] ) ) {
        $ul_classes[] = $sliderGap_classes[ $attributes['sliderGap'] ];
    }
}

if ( ! empty( $attributes['sliderDivider'] ) ) {
    $ul_classes[] = 'uk-grid-divider';
}

if ( ! empty( $attributes['sliderAutoplay'] ) ) {
    $slider_elm_attr[] = 'autoplay: 1';
}

if( ! empty( $attributes['navigation'] ) ) {
    if ( ! empty( $attributes['navigationPosition'] ) ) {
        if ( isset( $navigationPosition_classes[ $attributes['navigationPosition'] ] ) ) {
            $navigation_classes[] = $navigationPosition_classes[ $attributes['navigationPosition'] ];
        }
    }
    
    if ( ! empty( $attributes['navigationMargin'] ) ) {
        if ( isset( $navigationMargin_classes[ $attributes['navigationMargin'] ] ) ) {
            $navigation_container_classes[] = $navigationMargin_classes[ $attributes['navigationMargin'] ];
        }
    }
    
    if ( ! empty( $attributes['navigationBreakpoint'] ) ) {
        if ( isset( $navigationBreakpoint_classes[ $attributes['navigationBreakpoint'] ] ) ) {
            $navigation_classes[] = $navigationBreakpoint_classes[ $attributes['navigationBreakpoint'] ];
        }
    }
    
    if ( ! empty( $attributes['navigationColor'] ) ) {
        if ( isset( $navigationColor_classes[ $attributes['navigationColor'] ] ) ) {
            $navigation_container_classes[] = $navigationColor_classes[ $attributes['navigationColor'] ];
        }
    }
}

if( ! empty( $attributes['slidenavPosition'] ) ) {
    if( $attributes['slidenavPosition'] != 'default' ) {
        if ( isset( $slidenavPosition_classes[ $attributes['slidenavPosition'] ] ) ) {
            $slidenav_classes[] = $slidenavPosition_classes[ $attributes['slidenavPosition'] ];
        }
        if ( isset( $slidenavMargin_classes[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_classes[] = $slidenavMargin_classes[ $attributes['slidenavMargin'] ];
        }
        $slidenav_classes[] = 'uk-slidenav-container';
    } else {
        if ( isset( $slidenavPosition_classes[ $attributes['slidenavPosition'] ] ) ) {
            $slidenav_left_classes[] = $slidenavPosition_classes[ $attributes['slidenavPosition'] ];
        }
        if ( isset( $slidenavMargin_classes[ $attributes['slidenavMargin'] ] ) ) {
            $slidenav_right_classes[] = $slidenavMargin_classes[ $attributes['slidenavMargin'] ];
        }
    }
    
    if ( ! empty( $attributes['slidenavBreakpoint'] ) ) {
        if ( isset( $slidenavBreakpoint_classes[ $attributes['slidenavBreakpoint'] ] ) ) {
            $slidenav_classes[] = $slidenavBreakpoint_classes[ $attributes['slidenavBreakpoint'] ];
        }
    }
    
    if ( ! empty( $attributes['slidenavColor'] ) ) {
        if ( isset( $slidenavColor_classes[ $attributes['slidenavColor'] ] ) ) {
            $slidenav_classes[] = $slidenavColor_classes[ $attributes['slidenavColor'] ];
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
 * Filters overlay-slider block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_overlay_slider_classes', $block_elm_classes, $attributes );
?>
<div
    data-uk-slider="
        <?php if ( ! empty( $slider_elm_attr ) ) : ?>
            <?php echo esc_attr( implode( '; ', $slider_elm_attr ) ); ?>
        <?php endif; ?>
    "
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <div class="uk-position-relative">
        <ul class="<?php echo esc_attr( implode( ' ', $ul_classes ) ); ?>"
            <?php if( ! empty( $attributes['sliderWidth'] ) && $attributes['sliderWidth'] == 'fixed' ) : ?>
                <?php if( ! empty( $attributes['sliderHeight'] ) ) : ?>
                    data-uk-height-viewport="<?php echo esc_attr( implode( '; ', $height_viewport_data ) ); ?>"
                <?php endif; ?>
            <?php endif; ?>
        >
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </ul>
        <?php if( ! empty( $attributes['slidenavPosition'] ) ) : ?>
        <div class="<?php echo esc_attr( implode( ' ', $slidenav_classes ) ); ?>">
            <a href="#" data-uk-slidenav-previous data-uk-slider-item="previous"></a>
            <a href="#" data-uk-slidenav-next data-uk-slider-item="next"></a>
        </div>
        <?php endif; ?>
    </div>
    <?php if( ! empty( $attributes['navigation'] ) ) : ?>
    <div class="<?php echo esc_attr( implode( ' ', $navigation_container_classes ) ); ?>">
        <ul class="<?php echo esc_attr( implode( ' ', $navigation_classes ) ); ?>" data-uk-margin></ul>
    </div>
    <?php endif; ?>
</div>
