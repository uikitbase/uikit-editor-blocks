<?php
/**
 * Template for uikit-editor-blocks/slideshow-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/slideshow-item.php.
 *
 * @package uikit-editor-blocks/templates/slideshow-item
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

$block_elm_classes   = [];
$cover_classes       = ['uk-position-cover', 'uk-flex'];
$overlay_classes     = ['uk-margin-remove-first-child'];
$title_elm_classes   = ['uk-margin-remove-bottom'];
$meta_elm_classes    = [];
$content_elm_classes = ['uk-panel'];
$link_elm_classes    = [];
$link_classes        = [];

$textColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$parent_textColor_classes = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$parent_overlayContainerWidth_classes = [
    'default' => 'uk-container',
    'small'   => 'uk-container uk-container-small',
    'large'   => 'uk-container uk-container-large',
    'xlarge'  => 'uk-container uk-container-xlarge',
    'expand'  => 'uk-container uk-container-expand',
];

$parent_overlayContainerPadding_classes = [
    'default' => 'uk-section',
    'xsmall'  => 'uk-section-xsmall',
    'small'   => 'uk-section-small',
    'large'   => 'uk-section-large',
    'xlarge'  => 'uk-section-xlarge',
];

$parent_overlayMargin_classes = [
    'default' => 'uk-padding',
    'small'   => 'uk-padding-small',
    'large'   => 'uk-padding-large',
];

$parent_overlayPosition_classes = [
    'top'           => 'uk-flex-top',
    'bottom'        => 'uk-flex-bottom',
    'left'          => 'uk-flex-left',
    'right'         => 'uk-flex-right',
    'top-left'      => 'uk-flex-top uk-flex-left',
    'top-center'    => 'uk-flex-top uk-flex-center',
    'top-right'     => 'uk-flex-top uk-flex-right',
    'center-left'   => 'uk-flex-middle uk-flex-left',
    'center-center' => 'uk-flex-middle uk-flex-center',
    'center-right'  => 'uk-flex-middle uk-flex-right',
    'bottom-left'   => 'uk-flex-bottom uk-flex-left',
    'bottom-center' => 'uk-flex-bottom uk-flex-center',
    'bottom-right'  => 'uk-flex-bottom uk-flex-right',
];

$parent_overlayStyle_classes = [
    'overlay-default' => 'uk-overlay-default',
    'overlay-primary' => 'uk-overlay-primary',
    'tile-default'    => 'uk-tile-default',
    'tile-muted'      => 'uk-tile-muted',
    'tile-primary'    => 'uk-tile-primary',
    'tile-secondary'  => 'uk-tile-secondary',
];

$parent_overlayPadding_classes = [
    'small' => 'uk-padding-small',
    'large' => 'uk-padding-large',
];

$parent_overlayWidth_classes = [
    'small'   => 'uk-width-small',
    'medium'  => 'uk-width-medium',
    'large'   => 'uk-width-large',
    'xlarge'  => 'uk-width-xlarge',
    '2xlarge' => 'uk-width-2xlarge',
];

$parent_overlayAnimation_classes = [
    'fade'                => 'uk-transition-fade',
    'scale-up'            => 'uk-transition-scale-up',
    'scale-down'          => 'uk-transition-scale-down',
    'slide-top-small'     => 'uk-transition-slide-top-small',
    'slide-bottom-small'  => 'uk-transition-slide-bottom-small',
    'slide-left-small'    => 'uk-transition-slide-left-small',
    'slide-right-small'   => 'uk-transition-slide-right-small',
    'slide-top-medium'    => 'uk-transition-slide-top-medium',
    'slide-bottom-medium' => 'uk-transition-slide-bottom-medium',
    'slide-left-medium'   => 'uk-transition-slide-left-medium',
    'slide-right-medium'  => 'uk-transition-slide-right-medium',
    'slide-top'           => 'uk-transition-slide-top',
    'slide-bottom'        => 'uk-transition-slide-bottom',
    'slide-left'          => 'uk-transition-slide-left',
    'slide-right'         => 'uk-transition-slide-right',
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

$linkStyle_classes = [
    'button-default'   => 'uk-button uk-button-default',
    'button-primary'   => 'uk-button uk-button-primary',
    'button-secondary' => 'uk-button uk-button-secondary',
    'button-danger'    => 'uk-button uk-button-danger',
    'button-text'      => 'uk-button uk-button-text',
    'link'             => 'uk-link',
    'link-muted'       => 'uk-link-muted',
    'link-text'        => 'uk-link-text',
];

$linkButtonSize_classes = [
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

if( ! empty( $attributes['textColor'] ) ) {
    if ( isset( $textColor_classes[ $attributes['textColor'] ] ) ) {
        $overlay_classes[] = $textColor_classes[ $attributes['textColor'] ];
    }
} else {
    if ( ! empty( $block->context['uikit-editor-blocks/slideshow-textColor'] ) ) {
        if ( isset( $parent_textColor_classes[ $block->context['uikit-editor-blocks/slideshow-textColor'] ] ) ) {
            $overlay_classes[] = $parent_textColor_classes[ $block->context['uikit-editor-blocks/slideshow-textColor'] ];
        }
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayContainerWidth'] ) ) {
    if ( isset( $parent_overlayContainerWidth_classes[ $block->context['uikit-editor-blocks/slideshow-overlayContainerWidth'] ] ) ) {
        $cover_classes[] = $parent_overlayContainerWidth_classes[ $block->context['uikit-editor-blocks/slideshow-overlayContainerWidth'] ];
    }
    
    if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayContainerPadding'] ) ) {
        if ( isset( $parent_overlayContainerPadding[ $block->context['uikit-editor-blocks/slideshow-overlayContainerPadding'] ] ) ) {
            $cover_classes[] = $parent_overlayContainerPadding[ $block->context['uikit-editor-blocks/slideshow-overlayContainerPadding'] ];
        }
    }
} else {
    if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayMargin'] ) ) {
        if ( isset( $parent_overlayMargin_classes[ $block->context['uikit-editor-blocks/slideshow-overlayMargin'] ] ) ) {
            $cover_classes[] = $parent_overlayMargin_classes[ $block->context['uikit-editor-blocks/slideshow-overlayMargin'] ];
        }
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayPosition'] ) ) {
    if ( isset( $parent_overlayPosition_classes[ $block->context['uikit-editor-blocks/slideshow-overlayPosition'] ] ) ) {
        $cover_classes[] = $parent_overlayPosition_classes[ $block->context['uikit-editor-blocks/slideshow-overlayPosition'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayStyle'] ) ) {
    if ( isset( $parent_overlayStyle_classes[ $block->context['uikit-editor-blocks/slideshow-overlayStyle'] ] ) ) {
        $overlay_classes[] = $parent_overlayStyle_classes[ $block->context['uikit-editor-blocks/slideshow-overlayStyle'] ];
    }

    if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayPadding'] ) ) {
        if ( isset( $parent_overlayPadding_classes[ $block->context['uikit-editor-blocks/slideshow-overlayPadding'] ] ) ) {
            $overlay_classes[] = $parent_overlayPadding_classes[ $block->context['uikit-editor-blocks/slideshow-overlayPadding'] ];
        }
    }
} else {
    $overlay_classes[] = 'uk-panel';
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayWidth'] ) ) {
    if ( isset( $parent_overlayWidth_classes[ $block->context['uikit-editor-blocks/slideshow-overlayWidth'] ] ) ) {
        $overlay_classes[] = $parent_overlayWidth_classes[ $block->context['uikit-editor-blocks/slideshow-overlayWidth'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-overlayAnimation'] ) ) {
    if ( isset( $parent_overlayAnimation_classes[ $block->context['uikit-editor-blocks/slideshow-overlayAnimation'] ] ) ) {
        $overlay_classes[] = $parent_overlayAnimation_classes[ $block->context['uikit-editor-blocks/slideshow-overlayAnimation'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-titleStyle'] ) ) {
    if ( isset( $parent_titleStyle_classes[ $block->context['uikit-editor-blocks/slideshow-titleStyle'] ] ) ) {
        $title_elm_classes[] = $parent_titleStyle_classes[ $block->context['uikit-editor-blocks/slideshow-titleStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-titleDecoration'] ) ) {
    if ( isset( $parent_titleDecoration_classes[ $block->context['uikit-editor-blocks/slideshow-titleDecoration'] ] ) ) {
        $title_elm_classes[] = $parent_titleDecoration_classes[ $block->context['uikit-editor-blocks/slideshow-titleDecoration'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-titleColor'] ) ) {
    if ( isset( $parent_titleColor_classes[ $block->context['uikit-editor-blocks/slideshow-titleColor'] ] ) ) {
        $title_elm_classes[] = $parent_titleColor_classes[ $block->context['uikit-editor-blocks/slideshow-titleColor'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-titleTopMargin'] ) ) {
    if ( isset( $parent_titleTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-titleTopMargin'] ] ) ) {
        $title_elm_classes[] = $parent_titleTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-titleTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-metaStyle'] ) ) {
    if ( isset( $parent_metaStyle_classes[ $block->context['uikit-editor-blocks/slideshow-metaStyle'] ] ) ) {
        $meta_elm_classes[] = $parent_metaStyle_classes[ $block->context['uikit-editor-blocks/slideshow-metaStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-metaColor'] ) ) {
    if ( isset( $parent_metaColor_classes[ $block->context['uikit-editor-blocks/slideshow-metaColor'] ] ) ) {
        $meta_elm_classes[] = $parent_metaColor_classes[ $block->context['uikit-editor-blocks/slideshow-metaColor'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-metaTopMargin'] ) ) {
    if ( isset( $parent_metaTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-metaTopMargin'] ] ) ) {
        $meta_elm_classes[] = $parent_metaTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-metaTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-contentStyle'] ) ) {
    if ( isset( $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/slideshow-contentStyle'] ] ) ) {
        $content_elm_classes[] = $parent_contentStyle_classes[ $block->context['uikit-editor-blocks/slideshow-contentStyle'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-contentTopMargin'] ) ) {
    if ( isset( $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-contentTopMargin'] ] ) ) {
        $content_elm_classes[] = $parent_contentTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-contentTopMargin'] ];
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-linkStyle'] ) ) {
    if ( isset( $linkStyle_classes[ $block->context['uikit-editor-blocks/slideshow-linkStyle'] ] ) ) {
        $link_classes[] = $linkStyle_classes[ $block->context['uikit-editor-blocks/slideshow-linkStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/slideshow-linkStyle'] == 'button-default' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] == 'button-primary' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] == 'button-secondary' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] == 'button-danger' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] == 'button-text' ) {
        if( ! empty( $block->context['uikit-editor-blocks/slideshow-linkButtonSize'] ) ) {
            if ( isset( $linkButtonSize_classes[ $block->context['uikit-editor-blocks/slideshow-linkButtonSize'] ] ) ) {
                $link_classes[] = $linkButtonSize_classes[ $block->context['uikit-editor-blocks/slideshow-linkButtonSize'] ];
            }
        }
    }
}

if( ! empty( $block->context['uikit-editor-blocks/slideshow-linkTopMargin'] ) ) {
    if ( isset( $parent_linkTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-linkTopMargin'] ] ) ) {
        $link_elm_classes[] = $parent_linkTopMargin_classes[ $block->context['uikit-editor-blocks/slideshow-linkTopMargin'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters slideshow-item block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_slideshow_item_classes', $block_elm_classes, $attributes );

$image_src = wp_get_attachment_image_src( $attributes['imageMediaId'], 'full' );
?>
<li
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <img
        <?php if ( ! empty( $image_src[0] ) ) : ?>
            src="<?php echo esc_attr( $image_src[0] ); ?>"
        <?php endif; ?>
        <?php if ( ! empty( $attributes['imageAlt'] ) ) : ?>
            alt="<?php echo esc_attr( $attributes['imageAlt'] ); ?>"
        <?php endif; ?>
        data-uk-cover
    >
    <div
        <?php if ( ! empty( $cover_classes ) ) : ?>
            class="<?php echo esc_attr( implode( ' ', $cover_classes ) ); ?>"
        <?php endif; ?>
    >
        <div
            <?php if ( ! empty( $overlay_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $overlay_classes ) ); ?>"
            <?php endif; ?>
        >
            <?php if ( $block->context['uikit-editor-blocks/slideshow-metaAlignment'] == 'above-title' ) : ?>
                <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
                    <<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>
                        <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                            class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                        <?php endif; ?>
                    >
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>>
                <?php endif; ?>
            <?php endif; ?>
            <?php if ( ! empty( $attributes['titleText'] ) ) : ?>
                <<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-titleElement'] ); ?>
                    <?php if ( ! empty( $title_elm_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $title_elm_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php echo esc_html( $attributes['titleText'] ); ?>
                </<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-titleElement'] ); ?>>
            <?php endif; ?>
            <?php if ( $block->context['uikit-editor-blocks/slideshow-metaAlignment'] == 'below-title' ) : ?>
                <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
                    <<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>
                        <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                            class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                        <?php endif; ?>
                    >
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>>
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
            <?php if ( $block->context['uikit-editor-blocks/slideshow-metaAlignment'] == 'below-content' ) : ?>
                <?php if ( ! empty( $attributes['metaText'] ) ) : ?>
                    <<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>
                        <?php if ( ! empty( $meta_elm_classes ) ) : ?>
                            class="<?php echo esc_attr( implode( ' ', $meta_elm_classes ) ); ?>"
                        <?php endif; ?>
                    >
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo esc_html( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>>
                <?php endif; ?>
            <?php endif; ?>
            <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
                <div
                    <?php if ( ! empty( $link_elm_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $link_elm_classes ) ); ?>"
                    <?php endif; ?>
                >
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
                </div>
            <?php endif; ?>
        </div>
    </div>
</li>
