<?php
/**
 * Template for uikit-editor-blocks/overlay-slider-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/overlay-slider-item.php.
 *
 * @package uikit-editor-blocks/templates/overlay-slider-item
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$placeholder_image_src = UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/images/image-placeholder.png';

$wrapper_attrs   = [];
$wrapper_classes = [];

$overlay_attrs   = [];
$overlay_classes = ['uk-cover-container'];
$overlay_styles  = [];

$image_attrs   = [];
$image_classes = ['uk-transition-opaque'];
$image_styles  = [];

$invisible_image_attrs   = [];
$invisible_image_classes = ['uk-invisible'];
$invisible_image_show    = false;

$cover_attrs   = [];
$cover_classes = ['uk-position-cover'];

$overlay_inner_attrs   = [];
$overlay_inner_classes = [];

$overlay_container_attrs   = [];
$overlay_container_classes = ['uk-overlay', 'uk-margin-remove-first-child'];

$meta_attrs   = [];
$meta_classes = [];

$title_attrs   = [];
$title_classes = ['uk-margin-remove-bottom'];

$content_attrs   = [];
$content_classes = ['uk-panel'];

$link_container_attrs   = [];
$link_container_classes = [];

$link_text_attrs   = [];
$link_text_classes = [];

$parent_style_variants = [
    'overlay-default' => 'uk-overlay-default',
    'overlay-primary' => 'uk-overlay-primary',
    'tile-default'    => 'uk-tile-default',
    'tile-muted'      => 'uk-tile-muted',
    'tile-primary'    => 'uk-tile-primary',
    'tile-secondary'  => 'uk-tile-secondary',
];

$parent_textColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$parent_padding_variants = [
    'small' => 'uk-padding-small',
    'large' => 'uk-padding-large',
    'none'  => 'uk-padding-remove',
];

$parent_position_variants = [
    'top'           => 'uk-position-top',
    'bottom'        => 'uk-position-bottom',
    'left'          => 'uk-position-left',
    'right'         => 'uk-position-right',
    'top-left'      => 'uk-position-top-left',
    'top-center'    => 'uk-position-top-center',
    'top-right'     => 'uk-position-top-right',
    'bottom-left'   => 'uk-position-bottom-left',
    'bottom-center' => 'uk-position-bottom-center',
    'bottom-right'  => 'uk-position-bottom-right',
    'center'        => 'uk-position-center',
    'center-left'   => 'uk-position-center-left',
    'center-right'  => 'uk-position-center-right',
];

$parent_margin_variants = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
];

$parent_maxWidth_variants = [
    'small'   => 'uk-width-small',
    'medium'  => 'uk-width-medium',
    'large'   => 'uk-width-large',
    'xlarge'  => 'uk-width-xlarge',
    '2xlarge' => 'uk-width-2xlarge',
];

$parent_titleStyle_variants = [
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

$parent_titleDecoration_variants = [
    'divider' => 'uk-heading-divider',
    'bullet'  => 'uk-heading-bullet',
    'line'    => 'uk-heading-line',
];

$parent_titleColor_variants = [
    'muted'      => 'uk-text-muted',
    'emphasis'   => 'uk-text-emphasis',
    'primary'    => 'uk-text-primary',
    'secondary'  => 'uk-text-secondary',
    'success'    => 'uk-text-success',
    'warning'    => 'uk-text-warning',
    'danger'     => 'uk-text-danger',
    'background' => 'uk-text-background',
];

$parent_titleTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$parent_metaStyle_variants = [
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

$parent_metaColor_variants = [
    'muted'      => 'uk-text-muted',
    'emphasis'   => 'uk-text-emphasis',
    'primary'    => 'uk-text-primary',
    'secondary'  => 'uk-text-secondary',
    'success'    => 'uk-text-success',
    'warning'    => 'uk-text-warning',
    'danger'     => 'uk-text-danger',
    'background' => 'uk-text-background',
];

$parent_metaTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$parent_contentStyle_variants = [
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

$parent_contentTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$parent_linkStyle_variants = [
    'button-default'   => 'uk-button uk-button-default',
    'button-primary'   => 'uk-button uk-button-primary',
    'button-secondary' => 'uk-button uk-button-secondary',
    'button-danger'    => 'uk-button uk-button-danger',
    'button-text'      => 'uk-button uk-button-text',
    'link'             => 'uk-link',
    'link-muted'       => 'uk-link-muted',
    'link-text'        => 'uk-link-text',
];

$parent_linkButtonSize_variants = [
    'small' => 'uk-button-small',
    'large' => 'uk-button-large',
];

$parent_linkTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

/**
 * Wrapper classes
 */
if ( $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] === 'fixed' ) {
    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderDefaultWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderDefaultWidth'];
    }

    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderSmallWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderSmallWidth'] . '@s';
    }

    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderMediumWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderMediumWidth'] . '@m';
    }

    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderLargeWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderLargeWidth'] . '@l';
    }

    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderXlargeWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderXlargeWidth'] . '@xl';
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-overlayTextColor'] ) {
    if ( isset( $parent_textColor_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayTextColor'] ] ) ) {
        $wrapper_classes[] = $parent_textColor_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayTextColor'] ];
    }
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Overlay classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-overlayHover'] ) {
    $overlay_classes[] = 'uk-transition-toggle';
}

if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) {
    $overlay_classes[] = 'uk-link-toggle';
}

/**
 * Overlay styles
 */
if ( $block->context['uikit-editor-blocks/overlay-slider-sliderMinHeight'] ) {
    if ( ! $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] || ( $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] === 'fixed' && $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] !== 'viewport' ) ) {
        $overlay_styles[] = 'min-height: ' . $block->context['uikit-editor-blocks/overlay-slider-sliderMinHeight'] . 'px';
    }
}

/**
 * Image styles
 */
if ( $attributes['imageMediaId'] && $block->context['uikit-editor-blocks/overlay-slider-imageWidth'] ) {
    $image_styles[] = 'width: ' . $block->context['uikit-editor-blocks/overlay-slider-imageWidth'] . 'px';
}

if ( $attributes['imageMediaId'] && $block->context['uikit-editor-blocks/overlay-slider-imageHeight'] ) {
    $image_styles[] = 'height: ' . $block->context['uikit-editor-blocks/overlay-slider-imageHeight'] . 'px';
}

/**
 * Invisible image show
 */
if ( $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] === 'fixed' ) {
    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderHeight'] === '' ) {
        if ( $block->context['uikit-editor-blocks/overlay-slider-sliderMinHeight'] ) {
            $invisible_image_show = true;
        }
    }
} elseif( ! $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] ) {
    $invisible_image_show = true;
}

/**
 * Cover classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-overlayMode'] === 'cover' ) {
    if( $block->context['uikit-editor-blocks/overlay-slider-overlayHover'] ) {
        $cover_classes[] = 'uk-transition-fade';
    }

    if( $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ) {
        if ( isset( $parent_style_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ] ) ) {
            $cover_classes[] = $parent_style_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ];
        }
    }

    if( $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ) {
        if ( isset( $parent_margin_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ] ) ) {
            $cover_classes[] = $parent_margin_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ];
        }
    }
}

/**
 * Overlay inner classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-overlayMode'] === 'caption' ) {
    if( $block->context['uikit-editor-blocks/overlay-slider-overlayHover'] ) {
        $overlay_inner_classes[] = 'uk-transition-fade';
    }

    if( $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ) {
        if ( isset( $parent_style_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ] ) ) {
            $overlay_inner_classes[] = $parent_style_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ];
        }
    }

    if( $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ) {
        if ( isset( $parent_margin_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ] ) ) {
            $overlay_inner_classes[] = $parent_margin_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ];
        }
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-overlayPadding'] ) {
    if ( isset( $parent_padding_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayPadding'] ] ) ) {
        $overlay_inner_classes[] = $parent_padding_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayPadding'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-overlayPosition'] ) {
    if ( isset( $parent_position_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayPosition'] ] ) ) {
        $overlay_inner_classes[] = $parent_position_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayPosition'] ];
    }
}

/**
 * Overlay container classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] ) {
    if ( isset( $parent_maxWidth_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] ] ) ) {
        $overlay_container_classes[] = $parent_maxWidth_variants[ $block->context['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] ];
    }
}

/**
 * Meta classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-metaStyle'] ) {
    if ( isset( $parent_metaStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-metaStyle'] ] ) ) {
        $meta_classes[] = $parent_metaStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-metaStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-metaColor'] ) {
    if ( isset( $parent_metaColor_variants[ $block->context['uikit-editor-blocks/overlay-slider-metaColor'] ] ) ) {
        $meta_classes[] = $parent_metaColor_variants[ $block->context['uikit-editor-blocks/overlay-slider-metaColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-metaTopMargin'] ) {
    if ( isset( $parent_metaTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-metaTopMargin'] ] ) ) {
        $meta_classes[] = $parent_metaTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-metaTopMargin'] ];
    }
}

/**
 * Title classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-titleStyle'] ) {
    if ( isset( $parent_titleStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleStyle'] ] ) ) {
        $title_classes[] = $parent_titleStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-titleDecoration'] ) {
    if ( isset( $parent_titleDecoration_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleDecoration'] ] ) ) {
        $title_classes[] = $parent_titleDecoration_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleDecoration'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-titleColor'] ) {
    if ( isset( $parent_titleColor_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleColor'] ] ) ) {
        $title_classes[] = $parent_titleColor_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-titleTopMargin'] ) {
    if ( isset( $parent_titleTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleTopMargin'] ] ) ) {
        $title_classes[] = $parent_titleTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-titleTopMargin'] ];
    }
}

/**
 * Content classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-contentStyle'] ) {
    if ( isset( $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-contentStyle'] ] ) ) {
        $content_classes[] = $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-contentStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-contentTopMargin'] ) {
    if ( isset( $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-contentTopMargin'] ] ) ) {
        $content_classes[] = $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-contentTopMargin'] ];
    }
}

/**
 * Link container classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-linkTopMargin'] ) {
    if ( isset( $parent_linkTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-linkTopMargin'] ] ) ) {
        $link_container_classes[] = $parent_linkTopMargin_variants[ $block->context['uikit-editor-blocks/overlay-slider-linkTopMargin'] ];
    }
}

/**
 * Link text classes
 */
if( $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] ) {
    if ( isset( $parent_linkStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] ] ) ) {
        $link_text_classes[] = $parent_linkStyle_variants[ $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] === 'button-default' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] === 'button-primary' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] === 'button-secondary' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] === 'button-danger' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] === 'button-text' ) {
        if( $block->context['uikit-editor-blocks/overlay-slider-linkButtonSize'] ) {
            if ( isset( $parent_linkButtonSize_variants[ $block->context['uikit-editor-blocks/overlay-slider-linkButtonSize'] ] ) ) {
                $link_text_classes[] = $parent_linkButtonSize_variants[ $block->context['uikit-editor-blocks/overlay-slider-linkButtonSize'] ];
            }
        }
    }
}

/**
 * Filters overlay-slider-item block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_overlay_slider_item_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Overlay attributes
 */
if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) {
    if ( $attributes['linkUrl'] ) {
        $overlay_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
    }

    if ( $attributes['linkTarget'] ) {
        $overlay_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
    }

    if ( $attributes['linkTitle'] ) {
        $overlay_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
    }

    if ( $attributes['linkRel'] ) {
        $overlay_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
    }

    if ( $attributes['linkAriaLabel'] ) {
        $overlay_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
    }
}

if ( $overlay_classes ) {
    $overlay_attrs[] = 'class="' . esc_attr( implode( ' ', $overlay_classes ) ) . '"';
}

if ( $overlay_styles ) {
    $overlay_attrs[] = 'style="' . esc_attr( implode( '; ', $overlay_styles ) ) . '"';
}

/**
 * Image attributes
 */
if ( $attributes['imageMediaId'] ) {
    $image_src    = wp_get_attachment_image_src( $attributes['imageMediaId'], 'full' );
    $image_srcset = wp_get_attachment_image_srcset( $attributes['imageMediaId'], 'full' );
    $image_sizes  = wp_get_attachment_image_sizes( $attributes['imageMediaId'], 'full' );

    if ( isset( $image_src[0] ) ) {
        $image_attrs[] = 'src="' . $image_src[0] . '"';
    }

    if ( $attributes['imageAlt'] ) {
        $image_attrs[] = 'alt="' . esc_attr( $attributes['imageAlt'] ) . '"';
    }

    if( isset( $image_src[1] ) ) {
        $image_attrs[] = 'width="' . esc_attr( $image_src[1] ) . '"';
    }

    if( isset( $image_src[2] ) ) {
        $image_attrs[] = 'height="' . esc_attr( $image_src[2] ) . '"';
    }

    if( $image_srcset ) {
        $image_attrs[] = 'srcset="' . esc_attr( $image_srcset ) . '"';
    }

    if( $image_srcset && $image_sizes ) {
        $image_attrs[] = 'sizes="' . esc_attr( $image_sizes ) . '"';
    }
} else {
    $image_attrs[] = 'src="' . esc_url( $placeholder_image_src ) . '"';
}

if ( $image_classes ) {
    $image_attrs[] = 'class="' . esc_attr( implode( ' ', $image_classes ) ) . '"';
}

if ( $image_styles ) {
    $image_attrs[] = 'style="' . esc_attr( implode( '; ', $image_styles ) ) . '"';
}

if ( $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] === 'fixed' ) {
    if ( $block->context['uikit-editor-blocks/overlay-slider-sliderHeight'] === '' ) {
        if ( $block->context['uikit-editor-blocks/overlay-slider-sliderMinHeight'] ) {
            $image_attrs[] = 'data-uk-cover=""';
        }
    } elseif( $block->context['uikit-editor-blocks/overlay-slider-sliderHeight'] === 'viewport' ) {
        $image_attrs[] = 'data-uk-cover=""';
    }
} elseif( ! $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] ) {
    $image_attrs[] = 'data-uk-cover=""';
}

/**
 * Invisible image attributes
 */
if ( $attributes['imageMediaId'] ) {
    $invisible_image_src    = wp_get_attachment_image_src( $attributes['imageMediaId'], 'full' );
    $invisible_image_srcset = wp_get_attachment_image_srcset( $attributes['imageMediaId'], 'full' );
    $invisible_image_sizes  = wp_get_attachment_image_sizes( $attributes['imageMediaId'], 'full' );

    if ( isset( $invisible_image_src[0] ) ) {
        $invisible_image_attrs[] = 'src="' . $invisible_image_src[0] . '"';
    }

    if ( $attributes['imageAlt'] ) {
        $invisible_image_attrs[] = 'alt="' . esc_attr( $attributes['imageAlt'] ) . '"';
    }

    if( isset( $invisible_image_src[1] ) ) {
        $invisible_image_attrs[] = 'width="' . esc_attr( $invisible_image_src[1] ) . '"';
    }

    if( isset( $invisible_image_src[2] ) ) {
        $invisible_image_attrs[] = 'height="' . esc_attr( $invisible_image_src[2] ) . '"';
    }

    if( $invisible_image_srcset ) {
        $invisible_image_attrs[] = 'srcset="' . esc_attr( $invisible_image_srcset ) . '"';
    }

    if( $invisible_image_srcset && $invisible_image_sizes ) {
        $invisible_image_attrs[] = 'sizes="' . esc_attr( $invisible_image_sizes ) . '"';
    }
} else {
    $invisible_image_attrs[] = 'src="' . esc_url( $placeholder_image_src ) . '"';
}

if ( $image_classes ) {
    $invisible_image_attrs[] = 'class="' . esc_attr( implode( ' ', $invisible_image_classes ) ) . '"';
}

/**
 * Cover attributes
 */
if ( $cover_classes ) {
    $cover_attrs[] = 'class="' . esc_attr( implode( ' ', $cover_classes ) ) . '"';
}

/**
 * Overlay inner attributes
 */
if ( $overlay_inner_classes ) {
    $overlay_inner_attrs[] = 'class="' . esc_attr( implode( ' ', $overlay_inner_classes ) ) . '"';
}

/**
 * Overlay container attributes
 */
if ( $overlay_container_classes ) {
    $overlay_container_attrs[] = 'class="' . esc_attr( implode( ' ', $overlay_container_classes ) ) . '"';
}

/**
 * Meta attributes
 */
if ( $meta_classes ) {
    $meta_attrs[] = 'class="' . esc_attr( implode( ' ', $meta_classes ) ) . '"';
}

/**
 * Title attributes
 */
if ( $title_classes ) {
    $title_attrs[] = 'class="' . esc_attr( implode( ' ', $title_classes ) ) . '"';
}

/**
 * Content attributes
 */
if ( $content_classes ) {
    $content_attrs[] = 'class="' . esc_attr( implode( ' ', $content_classes ) ) . '"';
}

/**
 * Link container attributes
 */
if ( $link_container_classes ) {
    $link_container_attrs[] = 'class="' . esc_attr( implode( ' ', $link_container_classes ) ) . '"';
}

/**
 * Link text attributes
 */
if ( ! $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) {
    if ( $attributes['linkUrl'] ) {
        $link_text_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
    }

    if ( $attributes['linkTarget'] ) {
        $link_text_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
    }

    if ( $attributes['linkTitle'] ) {
        $link_text_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
    }

    if ( $attributes['linkRel'] ) {
        $link_text_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
    }

    if ( $attributes['linkAriaLabel'] ) {
        $link_text_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
    }
}

if ( $link_text_classes ) {
    $link_text_attrs[] = 'class="' . esc_attr( implode( ' ', $link_text_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) : ?>
    <a <?php echo implode( ' ', $overlay_attrs ); ?>>
    <?php else: ?>
        <div <?php echo implode( ' ', $overlay_attrs ); ?>>
    <?php endif; ?>
        <?php if ( $invisible_image_show ) : ?>
        <img <?php echo implode( ' ', $invisible_image_attrs ); ?>>
        <?php endif; ?>
        <img <?php echo implode( ' ', $image_attrs ); ?>>
        <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayMode'] === 'cover' ) : ?>
        <div <?php echo implode( ' ', $cover_attrs ); ?>></div>
        <?php endif; ?>
        <div <?php echo implode( ' ', $overlay_inner_attrs ); ?>>
            <div <?php echo implode( ' ', $overlay_container_attrs ); ?>>
                <?php if ( $block->context['uikit-editor-blocks/overlay-slider-metaAlignment'] === 'above-title' ) : ?>
                    <?php if ( $attributes['metaText'] ) : ?>
                    <<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ( $attributes['titleText'] ) : ?>
                    <<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-titleElement'] ); ?> <?php echo implode( ' ', $title_attrs ); ?>>
                        <?php echo esc_html( $attributes['titleText'] ); ?>
                    </<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-titleElement'] ); ?>>
                <?php endif; ?>
                <?php if ( $block->context['uikit-editor-blocks/overlay-slider-metaAlignment'] === 'below-title' ) : ?>
                    <?php if ( $attributes['metaText'] ) : ?>
                    <<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ( $attributes['contentText'] ) : ?>
                <div <?php echo implode( ' ', $content_attrs ); ?>>
                    <?php echo wp_kses_post( $attributes['contentText'] ); ?>
                </div>
                <?php endif; ?>
                <?php if ( $block->context['uikit-editor-blocks/overlay-slider-metaAlignment'] === 'below-content' ) : ?>
                    <?php if ( $attributes['metaText'] ) : ?>
                    <<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo tag_escape( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ( $attributes['linkText'] ) : ?>
                    <?php if ( $attributes['linkUrl'] ) : ?>
                    <div <?php echo implode( ' ', $link_container_attrs ); ?>>
                        <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) : ?>
                        <div <?php echo implode( ' ', $link_text_attrs ); ?>>
                            <?php echo esc_html( $attributes['linkText'] ); ?>
                        </div>
                        <?php else : ?>
                        <a <?php echo implode( ' ', $link_text_attrs ); ?>>
                            <?php echo esc_html( $attributes['linkText'] ); ?>
                        </a>
                        <?php endif; ?>
                    </div>
                    <?php endif; ?>
                <?php endif; ?>
            </div>
        </div>
    <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) : ?>
    </a>
    <?php else: ?>
    </div>
    <?php endif; ?>
</div>