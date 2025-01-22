<?php
/**
 * Template for uikit-editor-blocks/panel-slider-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/panel-slider-item.php.
 *
 * @package uikit-editor-blocks/templates/panel-slider-item
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
$panel_classes = [];
$title_elm_classes      = ['uk-margin-remove-bottom'];
$meta_elm_classes       = [];
$content_elm_classes    = ['uk-panel'];
$image_attr    = [];
$image_styles  = [];
$image_classes = [];
$link_elm_classes          = [];
$link_classes              = [];

$parent_panelStyle_classes = [
    'none'           => 'uk-panel',
    'card-default'   => 'uk-card uk-card-default',
    'card-primary'   => 'uk-card uk-card-primary',
    'card-secondary' => 'uk-card uk-card-secondary',
    'card-hover'     => 'uk-card uk-card-hover',
    'tile-default'   => 'uk-panel uk-tile-default',
    'tile-muted'     => 'uk-panel uk-tile-muted',
    'tile-primary'   => 'uk-panel uk-tile-primary',
    'tile-secondary' => 'uk-panel uk-tile-secondary',
];

$parent_panelPadding_classes = [
    'default' => 'uk-padding',
    'small'   => 'uk-padding-small',
    'large'   => 'uk-padding-large',
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

if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-sliderWidth'] ) && $block->context['uikit-editor-blocks/panel-slider-sliderWidth'] == 'fixed' ) {
    
    if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-sliderDefaultWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderDefaultWidth'];
    }

    if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-sliderSmallWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderSmallWidth'] . '@s';
    }

    if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-sliderMediumWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderMediumWidth'] . '@m';
    }

    if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-sliderLargeWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderLargeWidth'] . '@l';
    }

    if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-sliderXlargeWidth'] ) ) {
        $block_elm_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderXlargeWidth'] . '@xl';
    }
}

if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-panelStyle'] ) ) {
    if ( isset( $parent_panelStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-panelStyle'] ] ) ) {
        $panel_classes[] = $parent_panelStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-panelStyle'] ];
    }
}

if ( ! empty( $block->context['uikit-editor-blocks/panel-slider-panelPadding'] ) ) {
    if ( isset( $parent_panelPadding_classes[ $block->context['uikit-editor-blocks/panel-slider-panelPadding'] ] ) ) {
        $panel_classes[] = $parent_panelPadding_classes[ $block->context['uikit-editor-blocks/panel-slider-panelPadding'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-panelLink'] && ! empty( $attributes['linkUrl'] ) ) {
    $panel_classes[] = 'uk-link-toggle uk-display-block';
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-titleStyle'] ) ) {
    if ( isset( $parent_titleStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-titleStyle'] ] ) ) {
        $title_elm_classes[] = $parent_titleStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-titleStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-titleDecoration'] ) ) {
    if ( isset( $parent_titleDecoration_classes[ $block->context['uikit-editor-blocks/panel-slider-titleDecoration'] ] ) ) {
        $title_elm_classes[] = $parent_titleDecoration_classes[ $block->context['uikit-editor-blocks/panel-slider-titleDecoration'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-titleColor'] ) ) {
    if ( isset( $parent_titleColor_classes[ $block->context['uikit-editor-blocks/panel-slider-titleColor'] ] ) ) {
        $title_elm_classes[] = $parent_titleColor_classes[ $block->context['uikit-editor-blocks/panel-slider-titleColor'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-titleTopMargin'] ) ) {
    if ( isset( $parent_titleTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-titleTopMargin'] ] ) ) {
        $title_elm_classes[] = $parent_titleTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-titleTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-metaStyle'] ) ) {
    if ( isset( $parent_metaStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-metaStyle'] ] ) ) {
        $meta_elm_classes[] = $parent_metaStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-metaStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-metaColor'] ) ) {
    if ( isset( $parent_metaColor_classes[ $block->context['uikit-editor-blocks/panel-slider-metaColor'] ] ) ) {
        $meta_elm_classes[] = $parent_metaColor_classes[ $block->context['uikit-editor-blocks/panel-slider-metaColor'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-metaTopMargin'] ) ) {
    if ( isset( $parent_metaTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-metaTopMargin'] ] ) ) {
        $meta_elm_classes[] = $parent_metaTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-metaTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-contentStyle'] ) ) {
    if ( isset( $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-contentStyle'] ] ) ) {
        $content_elm_classes[] = $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-contentStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-contentTopMargin'] ) ) {
    if ( isset( $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-contentTopMargin'] ] ) ) {
        $content_elm_classes[] = $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-contentTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-linkStyle'] ) ) {
    if ( isset( $parent_linkStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-linkStyle'] ] ) ) {
        $link_classes[] = $parent_linkStyle_classes[ $block->context['uikit-editor-blocks/panel-slider-linkStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/panel-slider-linkStyle'] == 'button-default' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] == 'button-primary' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] == 'button-secondary' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] == 'button-danger' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] == 'button-text' ) {
        if( ! empty( $block->context['uikit-editor-blocks/panel-slider-linkButtonSize'] ) ) {
            if ( isset( $parent_linkButtonSize_classes[ $block->context['uikit-editor-blocks/panel-slider-linkButtonSize'] ] ) ) {
                $link_classes[] = $parent_linkButtonSize_classes[ $block->context['uikit-editor-blocks/panel-slider-linkButtonSize'] ];
            }
        }
    }
}

if( ! empty( $block->context['uikit-editor-blocks/panel-slider-linkTopMargin'] ) ) {
    if ( isset( $parent_linkTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-linkTopMargin'] ] ) ) {
        $link_elm_classes[] = $parent_linkTopMargin_classes[ $block->context['uikit-editor-blocks/panel-slider-linkTopMargin'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters panel-slider-item block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_panel_slider_item_classes', $block_elm_classes, $attributes );
?>
<li
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php if( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) : ?>
        <?php if( ! empty( $attributes['linkUrl'] ) ) : ?>
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
                <?php if ( ! empty( $panel_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $panel_classes ) ); ?>"
                <?php endif; ?>
            >
        <?php endif; ?>
    <?php else : ?>
        <div class="<?php echo esc_attr( implode( ' ', $panel_classes ) ); ?>">
    <?php endif; ?>
        <?php
        if( ! empty( $attributes['imageMediaId'] ) ) {
            if ( ! empty( $attributes['imageWidth'] ) ) {
                $image_styles[] = "width: " . esc_attr( $attributes['imageWidth'] ) . 'px';
            }

            if ( ! empty( $attributes['imageHeight'] ) ) {
                $image_styles[] = "height: " . esc_attr( $attributes['imageHeight'] ) . 'px';
            }

            if ( ! empty( $attributes['imageAlt'] ) ) {
                $image_attr['alt'] = esc_attr( $attributes['imageAlt'] );
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

            echo wp_get_attachment_image( $attributes['imageMediaId'], 'full', false, $image_attr );
        }
        ?>
        <?php if ( ! empty( $attributes['titleText'] ) ) : ?>
            <<?php echo esc_html( $block->context['uikit-editor-blocks/panel-slider-titleElement'] ); ?>
                <?php if ( ! empty( $title_elm_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $title_elm_classes ) ); ?>"
                <?php endif; ?>
            >
                <?php echo esc_html( $attributes['titleText'] ); ?>
            </<?php echo esc_html( $block->context['uikit-editor-blocks/panel-slider-titleElement'] ); ?>>
        <?php endif; ?>
        <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
            <<?php echo esc_html( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?>
                <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                <?php endif; ?>
            >
                <?php echo esc_html( $attributes['metaText'] ); ?>
            </<?php echo esc_html( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?>>
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
        <?php if ( ! empty( $attributes['linkText'] ) ) : ?>
            <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
                <div
                    <?php if ( ! empty( $link_elm_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $link_elm_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php if ( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) : ?>
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
    <?php if( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) : ?>
        </a>
    <?php else : ?>
        </div>
    <?php endif; ?>
</li>
