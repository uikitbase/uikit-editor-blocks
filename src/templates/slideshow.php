<?php
/**
 * Template for uikit-editor-blocks/slideshow
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/slideshow.php.
 *
 * @package uikit-editor-blocks/templates/slideshow
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

$block_elm_classes         = [];
$slideshow_data            = [];
$slideshow_items_classes   = ['uk-slideshow-items'];
$height_viewport_data      = [];
$navigation_classes        = [];
$navigation_ul_classes     = ['uk-slideshow-nav'];
$slidenav_classes          = [];
$slidenav_previous_classes = [];
$slidenav_next_classes     = [];

$textColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$boxShadow_classes = [
    'small' => 'uk-box-shadow-small',
    'medium'  => 'uk-box-shadow-medium',
    'large'  => 'uk-box-shadow-large',
    'xlarge'  => 'uk-box-shadow-xlarge',
];

$navigationPosition_classes = [
    'top-left'      => 'uk-position-top-left',
    'top-right'     => 'uk-position-top-right',
    'center-left'   => 'uk-position-center-left',
    'center-right'  => 'uk-position-center-right',
    'bottom-left'   => 'uk-position-bottom-left',
    'bottom-center' => 'uk-position-bottom-center',
    'bottom-right'  => 'uk-position-bottom-right',
];

$navigationMargin_classes = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
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

if( ! empty( $attributes['textColor'] ) ) {
    if ( isset( $textColor_classes[ $attributes['textColor'] ] ) ) {
        $slidenav_classes[] = $textColor_classes[ $attributes['textColor'] ];
        $navigation_classes[] = $textColor_classes[ $attributes['textColor'] ];
    }
}

if( ! empty( $attributes['boxShadow'] ) ) {
    if ( isset( $boxShadow_classes[ $attributes['boxShadow'] ] ) ) {
        $slideshow_items_classes[] = $boxShadow_classes[ $attributes['boxShadow'] ];
    }
}

if( ! empty( $attributes['height'] ) ) {
    $slideshow_data[] = 'ratio: false';
    
    $height_viewport_data[] = 'offset-top: true';
    $height_viewport_data[] = sprintf( 'minHeight: %s', $attributes['minHeight'] );
    
    if( $attributes['height'] == 'viewport' ) {
        if( ! empty( $attributes['heightViewport'] ) ) {
            $height_viewport_data[] = sprintf( 'offset-bottom: %s', 100 - $attributes['heightViewport'] );
        }
    }
} else {
    if( ! empty( $attributes['ratio'] ) ) {
        $slideshow_data[] = sprintf( 'ratio: %s', $attributes['ratio'] );
    }
    
    if( ! empty( $attributes['minHeight'] ) ) {
        $slideshow_data[] = sprintf( 'minHeight: %s', $attributes['minHeight'] );
    }
    
    if( ! empty( $attributes['maxHeight'] ) ) {
        $slideshow_data[] = sprintf( 'maxHeight: %s', $attributes['maxHeight'] );
    }
}

if ( $attributes['autoplay'] ) {
    $slideshow_data[] = 'autoplay: true';
}

if( ! empty( $attributes['animation'] ) ) {
    $slideshow_data[] = sprintf( 'animation: %s', $attributes['animation'] );
}

if( ! empty( $attributes['navigation'] ) ) {
    if( $attributes['navigation'] == 'dotnav' ) {
        $navigation_ul_classes[] = 'uk-dotnav';
    } elseif( $attributes['navigation'] == 'dotnav' ) {
        $navigation_ul_classes[] = 'uk-thumbnav';
    }
    
    if( ! empty( $attributes['navigationPosition'] ) ) {
        if ( isset( $navigationPosition_classes[ $attributes['navigationPosition'] ] ) ) {
            $navigation_classes[] = $navigationPosition_classes[ $attributes['navigationPosition'] ];
        }
    }
    
    if( ! empty( $attributes['navigationMargin'] ) ) {
        if ( isset( $navigationMargin_classes[ $attributes['navigationMargin'] ] ) ) {
            $navigation_classes[] = $navigationMargin_classes[ $attributes['navigationMargin'] ];
        }
    }
}

if( ! empty( $attributes['slidenavPosition'] ) ) {
    if ( $attributes['slidenavPosition']  == 'default' ) {
        $slidenav_previous_classes[] = 'uk-position-center-left';
        $slidenav_next_classes[]     = 'uk-position-center-right';

        if( ! empty( $attributes['slidenavMargin'] ) ) {
            if ( isset( $slidenavMargin_classes[ $attributes['slidenavMargin'] ] ) ) {
                $slidenav_previous_classes[] = $slidenavMargin_classes[ $attributes['slidenavMargin'] ];
                $slidenav_next_classes[] = $slidenavMargin_classes[ $attributes['slidenavMargin'] ];
            }
        }
    } else {
        if ( isset( $slidenavPosition_classes[ $attributes['slidenavPosition'] ] ) ) {
            $slidenav_classes[] = $slidenavPosition_classes[ $attributes['slidenavPosition'] ];
        }

        if( ! empty( $attributes['slidenavMargin'] ) ) {
            if ( isset( $slidenavMargin_classes[ $attributes['slidenavMargin'] ] ) ) {
                $slidenav_classes[] = $slidenavMargin_classes[ $attributes['slidenavMargin'] ];
            }
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
 * Filters slideshow block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_slideshow_classes', $block_elm_classes, $attributes );
?>
<div
    data-uk-slideshow="<?php echo esc_attr( implode( '; ', $slideshow_data ) ); ?>"
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <div class="uk-position-relative">
        <ul class="<?php echo esc_attr( implode( ' ', $slideshow_items_classes ) ); ?>"
            <?php if( ! empty( $attributes['height'] ) ) : ?>
                data-uk-height-viewport="<?php echo esc_attr( implode( '; ', $height_viewport_data ) ); ?>"
            <?php endif; ?>
        >
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </ul>
        <?php if( ! empty( $attributes['slidenavPosition'] ) ) : ?>
            <div
                <?php if ( ! empty( $slidenav_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $slidenav_classes ) ); ?>"
                <?php endif; ?>
            >
                <a href="#" data-uk-slidenav-<?php echo ( ! is_rtl() ? 'previous' : 'next' ); ?> data-uk-slideshow-item="previous"
                    <?php if ( ! empty( $slidenav_previous_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $slidenav_previous_classes ) ); ?>"
                    <?php endif; ?>
                >
                </a>
                <a href="#" data-uk-slidenav-<?php echo ( ! is_rtl() ? 'next' : 'previous' ); ?> data-uk-slideshow-item="next"
                    <?php if ( ! empty( $slidenav_next_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $slidenav_next_classes ) ); ?>"
                    <?php endif; ?>
                >
                </a>
            </div>
        <?php endif; ?>
        <?php if( ! empty( $attributes['navigation'] ) ) : ?>
        <div
            <?php if ( ! empty( $navigation_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $navigation_classes ) ); ?>"
            <?php endif; ?>
        >
            <ul
                <?php if ( ! empty( $navigation_ul_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $navigation_ul_classes ) ); ?>"
                <?php endif; ?>
            >
            </ul>
        </div>
        <?php endif; ?>
    </div>
</div>
