<?php
/**
 * Template for uikit-editor-blocks/overlay-slider-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/overlay-slider-item.php.
 *
 * @package uikit-editor-blocks/templates/overlay-slider-item
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

$block_elm_classes         = [];
$overlay_container_styles  = [];
$overlay_container_classes = ['uk-cover-container'];
$overlay_cover_classes     = ['uk-position-cover'];
$overlay_content_classes   = [];
$overlay_div_classes       = ['uk-overlay', 'uk-margin-remove-first-child'];
$image_attr                = [];
$image_classes             = ['uk-transition-opaque'];
$image_styles              = [];
$title_elm_classes         = ['uk-margin-remove-bottom'];
$meta_elm_classes          = [];
$content_elm_classes       = ['uk-panel'];
$link_elm_classes          = [];
$link_classes              = [];

$parent_style_classes = [
    'overlay-default' => 'uk-overlay-default',
    'overlay-primary' => 'uk-overlay-primary',
    'tile-default'    => 'uk-tile-default',
    'tile-muted'      => 'uk-tile-muted',
    'tile-primary'    => 'uk-tile-primary',
    'tile-secondary'  => 'uk-tile-secondary',
];

$parent_textColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$parent_padding_classes = [
    'small' => 'uk-padding-small',
    'large' => 'uk-padding-large',
    'none'  => 'uk-padding-remove',
];

$parent_position_classes = [
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

$parent_margin_classes = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
];

$parent_maxWidth_classes = [
    'small'   => 'uk-width-small',
    'medium'  => 'uk-width-medium',
    'large'   => 'uk-width-large',
    'xlarge'  => 'uk-width-xlarge',
    '2xlarge' => 'uk-width-2xlarge',
];

$parent_titleStyle_classes = [
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

$parent_titleDecoration_classes = [
    'divider' => 'uk-heading-divider',
    'bullet'  => 'uk-heading-bullet',
    'line'    => 'uk-heading-line',
];

$parent_titleColor_classes = [
    'muted'      => 'uk-text-muted',
    'emphasis'   => 'uk-text-emphasis',
    'primary'    => 'uk-text-primary',
    'secondary'  => 'uk-text-secondary',
    'success'    => 'uk-text-success',
    'warning'    => 'uk-text-warning',
    'danger'     => 'uk-text-danger',
    'background' => 'uk-text-background',
];

$parent_titleTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$parent_metaStyle_classes = [
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

$parent_metaColor_classes = [
    'muted'      => 'uk-text-muted',
    'emphasis'   => 'uk-text-emphasis',
    'primary'    => 'uk-text-primary',
    'secondary'  => 'uk-text-secondary',
    'success'    => 'uk-text-success',
    'warning'    => 'uk-text-warning',
    'danger'     => 'uk-text-danger',
    'background' => 'uk-text-background',
];

$parent_metaTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$parent_contentStyle_classes = [
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

$parent_contentTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$parent_linkStyle_classes = [
    'button-default'   => 'uk-button uk-button-default',
    'button-primary'   => 'uk-button uk-button-primary',
    'button-secondary' => 'uk-button uk-button-secondary',
    'button-danger'    => 'uk-button uk-button-danger',
    'button-text'      => 'uk-button uk-button-text',
    'link'             => 'uk-link',
    'link-muted'       => 'uk-link-muted',
    'link-text'        => 'uk-link-text',
];

$parent_linkButtonSize_classes = [
    'small' => 'uk-button-small',
    'large' => 'uk-button-large',
];

$parent_linkTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] ) && $block->context['uikit-editor-blocks/overlay-slider-sliderWidth'] == 'fixed' ) {
    
    if( empty( $block->context['uikit-editor-blocks/overlay-slider-sliderHeight'] ) ) {
        if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderMinHeight'] ) ) {
            $overlay_container_styles[] = sprintf( 'min-height: %spx', $block->context['uikit-editor-blocks/overlay-slider-sliderMinHeight'] );
        }
    }
    
    if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderDefaultWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderDefaultWidth'];
    }

    if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderSmallWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderSmallWidth'] . '@s';
    }

    if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderMediumWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderMediumWidth'] . '@m';
    }

    if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderLargeWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderLargeWidth'] . '@l';
    }

    if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-sliderXlargeWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/overlay-slider-sliderXlargeWidth'] . '@xl';
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-overlayMode'] == 'cover' ) {
    if( $block->context['uikit-editor-blocks/overlay-slider-overlayHover'] ) {
        $overlay_cover_classes[] = 'uk-transition-fade';
    }

    if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ) ) {
        if ( isset( $parent_style_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ] ) ) {
            $overlay_cover_classes[] = $parent_style_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ];
        }
    }

    if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ) ) {
        if ( isset( $parent_margin_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ] ) ) {
            $overlay_cover_classes[] = $parent_margin_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ];
        }
    }
} elseif( $block->context['uikit-editor-blocks/overlay-slider-overlayMode'] == 'caption' ) {
    if( $block->context['uikit-editor-blocks/overlay-slider-overlayHover'] ) {
        $overlay_content_classes[] = 'uk-transition-fade';
    }

    if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ) ) {
        if ( isset( $parent_style_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ] ) ) {
            $overlay_content_classes[] = $parent_style_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayStyle'] ];
        }
    }
    
    if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ) ) {
        if ( isset( $parent_margin_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ] ) ) {
            $overlay_content_classes[] = $parent_margin_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayMargin'] ];
        }
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayTextColor'] ) ) {
    if ( isset( $parent_textColor_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayTextColor'] ] ) ) {
        $block_elm_classes[] = $parent_textColor_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayTextColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/overlay-slider-overlayHover'] ) {
    $overlay_container_classes[] = 'uk-transition-toggle';
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayPadding'] ) ) {
    if ( isset( $parent_padding_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayPadding'] ] ) ) {
        $overlay_content_classes[] = $parent_padding_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayPadding'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayPosition'] ) ) {
    if ( isset( $parent_position_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayPosition'] ] ) ) {
        $overlay_content_classes[] = $parent_position_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayPosition'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] ) ) {
    if ( isset( $parent_maxWidth_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] ] ) ) {
        $overlay_div_classes[] = $parent_maxWidth_classes[ $block->context['uikit-editor-blocks/overlay-slider-overlayMaxWidth'] ];
    }
}

if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) {
    $overlay_container_classes[] = 'uk-link-toggle';
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-titleStyle'] ) ) {
    if ( isset( $parent_titleStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleStyle'] ] ) ) {
        $title_elm_classes[] = $parent_titleStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-titleDecoration'] ) ) {
    if ( isset( $parent_titleDecoration_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleDecoration'] ] ) ) {
        $title_elm_classes[] = $parent_titleDecoration_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleDecoration'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-titleColor'] ) ) {
    if ( isset( $parent_titleColor_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleColor'] ] ) ) {
        $title_elm_classes[] = $parent_titleColor_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleColor'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-titleTopMargin'] ) ) {
    if ( isset( $parent_titleTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleTopMargin'] ] ) ) {
        $title_elm_classes[] = $parent_titleTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-titleTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-metaStyle'] ) ) {
    if ( isset( $parent_metaStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-metaStyle'] ] ) ) {
        $meta_elm_classes[] = $parent_metaStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-metaStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-metaColor'] ) ) {
    if ( isset( $parent_metaColor_classes[ $block->context['uikit-editor-blocks/overlay-slider-metaColor'] ] ) ) {
        $meta_elm_classes[] = $parent_metaColor_classes[ $block->context['uikit-editor-blocks/overlay-slider-metaColor'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-metaTopMargin'] ) ) {
    if ( isset( $parent_metaTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-metaTopMargin'] ] ) ) {
        $meta_elm_classes[] = $parent_metaTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-metaTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-contentStyle'] ) ) {
    if ( isset( $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-contentStyle'] ] ) ) {
        $content_elm_classes[] = $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-contentStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-contentTopMargin'] ) ) {
    if ( isset( $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-contentTopMargin'] ] ) ) {
        $content_elm_classes[] = $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-contentTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] ) ) {
    if ( isset( $parent_linkStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] ] ) ) {
        $link_classes[] = $parent_linkStyle_classes[ $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] == 'button-default' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] == 'button-primary' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] == 'button-secondary' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] == 'button-danger' || $block->context['uikit-editor-blocks/overlay-slider-linkStyle'] == 'button-text' ) {
        if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-linkButtonSize'] ) ) {
            if ( isset( $parent_linkButtonSize_classes[ $block->context['uikit-editor-blocks/overlay-slider-linkButtonSize'] ] ) ) {
                $link_classes[] = $parent_linkButtonSize_classes[ $block->context['uikit-editor-blocks/overlay-slider-linkButtonSize'] ];
            }
        }
    }
}

if( ! empty( $block->context['uikit-editor-blocks/overlay-slider-linkTopMargin'] ) ) {
    if ( isset( $parent_linkTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-linkTopMargin'] ] ) ) {
        $link_elm_classes[] = $parent_linkTopMargin_classes[ $block->context['uikit-editor-blocks/overlay-slider-linkTopMargin'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters overlay-slider-item block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_overlay_slider_item_classes', $block_elm_classes, $attributes );
?>
<li
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) : ?>
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
            <?php if ( ! empty( $link_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $overlay_container_classes ) ); ?>"
            <?php endif; ?>
        >
    <?php else: ?>
        <div
            <?php if ( ! empty( $overlay_container_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $overlay_container_classes ) ); ?>"
            <?php endif; ?>
        >
    <?php endif; ?>
            <?php
            if( ! empty( $attributes['imageMediaId'] ) ) {
                if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-imageWidth'] ) ) {
                    $image_styles[] = "width: " . esc_attr( $block->context['uikit-editor-blocks/overlay-slider-imageWidth'] ) . 'px';
                }

                if ( ! empty( $block->context['uikit-editor-blocks/overlay-slider-imageHeight'] ) ) {
                    $image_styles[] = "height: " . esc_attr( $block->context['uikit-editor-blocks/overlay-slider-imageHeight'] ) . 'px';
                }

                if ( ! empty( $attributes['imageAlt'] ) ) {
                    $image_attr['alt'] = esc_attr( $attributes['imageAlt'] );
                }

                if ( ! empty( $image_classes ) ) {
                    $image_attr['class'] = esc_attr( implode( ' ', $image_classes ) );
                }

                if ( ! empty( $image_styles ) ) {
                    $image_attr['style'] = esc_attr( implode( '; ', $image_styles ) );
                }

                echo wp_get_attachment_image( $attributes['imageMediaId'], 'full', false, $image_attr );
            }
            ?>
            <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayMode'] == 'cover' ) : ?>
                <div
                    <?php if ( ! empty( $overlay_cover_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $overlay_cover_classes ) ); ?>"
                    <?php endif; ?>
                >
                </div>
            <?php endif; ?>
            <div
                <?php if ( ! empty( $overlay_content_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $overlay_content_classes ) ); ?>"
                <?php endif; ?>
            >
                <div
                    <?php if ( ! empty( $overlay_div_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $overlay_div_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php if ( $block->context['uikit-editor-blocks/overlay-slider-metaAlignment'] == 'above-title' ) : ?>
                        <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
                            <<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>
                                <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                                    class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                                <?php endif; ?>
                            >
                                <?php echo esc_html( $attributes['metaText'] ); ?>
                            </<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>>
                        <?php endif; ?>
                    <?php endif; ?>
                    <?php if ( ! empty( $attributes['titleText'] ) ) : ?>
                        <<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-titleElement'] ); ?>
                            <?php if ( ! empty( $title_elm_classes ) ) : ?>
                                class="<?php echo esc_attr( implode( ' ', $title_elm_classes ) ); ?>"
                            <?php endif; ?>
                        >
                            <?php echo esc_html( $attributes['titleText'] ); ?>
                        </<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-titleElement'] ); ?>>
                    <?php endif; ?>
                    <?php if ( $block->context['uikit-editor-blocks/overlay-slider-metaAlignment'] == 'below-title' ) : ?>
                        <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
                            <<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>
                                <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                                    class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                                <?php endif; ?>
                            >
                                <?php echo esc_html( $attributes['metaText'] ); ?>
                            </<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>>
                        <?php endif; ?>
                    <?php endif; ?>
                    <?php if ( ! empty( $attributes['contentText'] ) ) : ?>
                        <div
                            <?php if ( ! empty( $content_elm_classes ) ) : ?>
                                class="<?php echo esc_attr( implode( ' ', $content_elm_classes ) ); ?>"
                            <?php endif; ?>
                        >
                            <p><?php echo esc_html( $attributes['contentText'] ); ?></p>
                        </div>
                    <?php endif; ?>
                    <?php if ( $block->context['uikit-editor-blocks/overlay-slider-metaAlignment'] == 'below-content' ) : ?>
                        <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
                            <<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>
                                <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                                    class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                                <?php endif; ?>
                            >
                                <?php echo esc_html( $attributes['metaText'] ); ?>
                            </<?php echo esc_html( $block->context['uikit-editor-blocks/overlay-slider-metaElement'] ); ?>>
                        <?php endif; ?>
                    <?php endif; ?>
                    <?php if ( ! empty( $attributes['linkText'] ) ) : ?>
                        <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
                            <div
                                <?php if ( ! empty( $link_elm_classes ) ) : ?>
                                    class="<?php echo esc_attr( implode( ' ', $link_elm_classes ) ); ?>"
                                <?php endif; ?>
                            >
                                <?php if ( $block->context['uikit-editor-blocks/overlay-slider-overlayLink'] ) : ?>
                                    <div
                                        <?php if ( ! empty( $link_classes ) ) : ?>
                                            class="<?php echo esc_attr( implode( ' ', $link_classes ) ); ?>"
                                        <?php endif; ?>
                                    >
                                        <?php echo esc_html( $attributes['linkText'] ); ?>
                                    </div>
                                <?php else : ?>
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
                                        <?php if ( ! empty( $link_classes ) ) : ?>
                                            class="<?php echo esc_attr( implode( ' ', $link_classes ) ); ?>"
                                        <?php endif; ?>
                                    >
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
</li>
