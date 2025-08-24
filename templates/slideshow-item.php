<?php
/**
 * Template for uikit-editor-blocks/slideshow-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/slideshow-item.php.
 *
 * @package uikit-editor-blocks/templates/slideshow-item
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$placeholder_image_src = UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/images/image-placeholder.png';

$wrapper_attrs   = [];
$wrapper_classes = [];

$image_attrs = [];

$cover_attrs   = [];
$cover_classes = ['uk-position-cover', 'uk-flex'];

$overlay_attrs   = [];
$overlay_classes = ['uk-margin-remove-first-child'];

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

$textColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$parent_textColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$parent_overlayContainerWidth_variants = [
    'default' => 'uk-container',
    'small'   => 'uk-container uk-container-small',
    'large'   => 'uk-container uk-container-large',
    'xlarge'  => 'uk-container uk-container-xlarge',
    'expand'  => 'uk-container uk-container-expand',
];

$parent_overlayContainerPadding_variants = [
    'default' => 'uk-section',
    'xsmall'  => 'uk-section-xsmall',
    'small'   => 'uk-section-small',
    'large'   => 'uk-section-large',
    'xlarge'  => 'uk-section-xlarge',
];

$parent_overlayMargin_variants = [
    'default' => 'uk-padding',
    'small'   => 'uk-padding-small',
    'large'   => 'uk-padding-large',
];

$parent_overlayPosition_variants = [
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

$parent_overlayStyle_variants = [
    'overlay-default' => 'uk-overlay-default',
    'overlay-primary' => 'uk-overlay-primary',
    'tile-default'    => 'uk-tile-default',
    'tile-muted'      => 'uk-tile-muted',
    'tile-primary'    => 'uk-tile-primary',
    'tile-secondary'  => 'uk-tile-secondary',
];

$parent_overlayPadding_variants = [
    'small' => 'uk-padding-small',
    'large' => 'uk-padding-large',
];

$parent_overlayWidth_variants = [
    'small'   => 'uk-width-small',
    'medium'  => 'uk-width-medium',
    'large'   => 'uk-width-large',
    'xlarge'  => 'uk-width-xlarge',
    '2xlarge' => 'uk-width-2xlarge',
];

$parent_overlayAnimation_variants = [
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

$linkStyle_variants = [
    'button-default'   => 'uk-button uk-button-default',
    'button-primary'   => 'uk-button uk-button-primary',
    'button-secondary' => 'uk-button uk-button-secondary',
    'button-danger'    => 'uk-button uk-button-danger',
    'button-text'      => 'uk-button uk-button-text',
    'link'             => 'uk-link',
    'link-muted'       => 'uk-link-muted',
    'link-text'        => 'uk-link-text',
];

$linkButtonSize_variants = [
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
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Cover classes
 */
if( $block->context['uikit-editor-blocks/slideshow-overlayContainerWidth'] ) {
    if ( isset( $parent_overlayContainerWidth_variants[ $block->context['uikit-editor-blocks/slideshow-overlayContainerWidth'] ] ) ) {
        $cover_classes[] = $parent_overlayContainerWidth_variants[ $block->context['uikit-editor-blocks/slideshow-overlayContainerWidth'] ];
    }

    if( $block->context['uikit-editor-blocks/slideshow-overlayContainerPadding'] ) {
        if ( isset( $parent_overlayContainerPadding[ $block->context['uikit-editor-blocks/slideshow-overlayContainerPadding'] ] ) ) {
            $cover_classes[] = $parent_overlayContainerPadding[ $block->context['uikit-editor-blocks/slideshow-overlayContainerPadding'] ];
        }
    }
} else {
    if( $block->context['uikit-editor-blocks/slideshow-overlayMargin'] ) {
        if ( isset( $parent_overlayMargin_variants[ $block->context['uikit-editor-blocks/slideshow-overlayMargin'] ] ) ) {
            $cover_classes[] = $parent_overlayMargin_variants[ $block->context['uikit-editor-blocks/slideshow-overlayMargin'] ];
        }
    }
}

if( $block->context['uikit-editor-blocks/slideshow-overlayPosition'] ) {
    if ( isset( $parent_overlayPosition_variants[ $block->context['uikit-editor-blocks/slideshow-overlayPosition'] ] ) ) {
        $cover_classes[] = $parent_overlayPosition_variants[ $block->context['uikit-editor-blocks/slideshow-overlayPosition'] ];
    }
}

/**
 * Overlay classes
 */
if( $attributes['textColor'] ) {
    if ( isset( $textColor_variants[ $attributes['textColor'] ] ) ) {
        $overlay_classes[] = $textColor_variants[ $attributes['textColor'] ];
    }
} else {
    if ( $block->context['uikit-editor-blocks/slideshow-textColor'] ) {
        if ( isset( $parent_textColor_variants[ $block->context['uikit-editor-blocks/slideshow-textColor'] ] ) ) {
            $overlay_classes[] = $parent_textColor_variants[ $block->context['uikit-editor-blocks/slideshow-textColor'] ];
        }
    }
}

if( $block->context['uikit-editor-blocks/slideshow-overlayStyle'] ) {
    if ( isset( $parent_overlayStyle_variants[ $block->context['uikit-editor-blocks/slideshow-overlayStyle'] ] ) ) {
        $overlay_classes[] = $parent_overlayStyle_variants[ $block->context['uikit-editor-blocks/slideshow-overlayStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/slideshow-overlayPadding'] ) {
        if ( isset( $parent_overlayPadding_variants[ $block->context['uikit-editor-blocks/slideshow-overlayPadding'] ] ) ) {
            $overlay_classes[] = $parent_overlayPadding_variants[ $block->context['uikit-editor-blocks/slideshow-overlayPadding'] ];
        }
    }
} else {
    $overlay_classes[] = 'uk-panel';
}

if( $block->context['uikit-editor-blocks/slideshow-overlayWidth'] ) {
    if ( isset( $parent_overlayWidth_variants[ $block->context['uikit-editor-blocks/slideshow-overlayWidth'] ] ) ) {
        $overlay_classes[] = $parent_overlayWidth_variants[ $block->context['uikit-editor-blocks/slideshow-overlayWidth'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-overlayAnimation'] ) {
    if ( isset( $parent_overlayAnimation_variants[ $block->context['uikit-editor-blocks/slideshow-overlayAnimation'] ] ) ) {
        $overlay_classes[] = $parent_overlayAnimation_variants[ $block->context['uikit-editor-blocks/slideshow-overlayAnimation'] ];
    }
}

/**
 * Meta classes
 */
if( $block->context['uikit-editor-blocks/slideshow-metaStyle'] ) {
    if ( isset( $parent_metaStyle_variants[ $block->context['uikit-editor-blocks/slideshow-metaStyle'] ] ) ) {
        $meta_classes[] = $parent_metaStyle_variants[ $block->context['uikit-editor-blocks/slideshow-metaStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-metaColor'] ) {
    if ( isset( $parent_metaColor_variants[ $block->context['uikit-editor-blocks/slideshow-metaColor'] ] ) ) {
        $meta_classes[] = $parent_metaColor_variants[ $block->context['uikit-editor-blocks/slideshow-metaColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-metaTopMargin'] ) {
    if ( isset( $parent_metaTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-metaTopMargin'] ] ) ) {
        $meta_classes[] = $parent_metaTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-metaTopMargin'] ];
    }
}

/**
 * Title classes
 */
if( $block->context['uikit-editor-blocks/slideshow-titleStyle'] ) {
    if ( isset( $parent_titleStyle_variants[ $block->context['uikit-editor-blocks/slideshow-titleStyle'] ] ) ) {
        $title_classes[] = $parent_titleStyle_variants[ $block->context['uikit-editor-blocks/slideshow-titleStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-titleDecoration'] ) {
    if ( isset( $parent_titleDecoration_variants[ $block->context['uikit-editor-blocks/slideshow-titleDecoration'] ] ) ) {
        $title_classes[] = $parent_titleDecoration_variants[ $block->context['uikit-editor-blocks/slideshow-titleDecoration'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-titleColor'] ) {
    if ( isset( $parent_titleColor_variants[ $block->context['uikit-editor-blocks/slideshow-titleColor'] ] ) ) {
        $title_classes[] = $parent_titleColor_variants[ $block->context['uikit-editor-blocks/slideshow-titleColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-titleTopMargin'] ) {
    if ( isset( $parent_titleTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-titleTopMargin'] ] ) ) {
        $title_classes[] = $parent_titleTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-titleTopMargin'] ];
    }
}

/**
 * Content classes
 */
if( $block->context['uikit-editor-blocks/slideshow-contentStyle'] ) {
    if ( isset( $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/slideshow-contentStyle'] ] ) ) {
        $content_classes[] = $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/slideshow-contentStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/slideshow-contentTopMargin'] ) {
    if ( isset( $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-contentTopMargin'] ] ) ) {
        $content_classes[] = $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-contentTopMargin'] ];
    }
}

/**
 * Link container classes
 */
if( $block->context['uikit-editor-blocks/slideshow-linkTopMargin'] ) {
    if ( isset( $parent_linkTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-linkTopMargin'] ] ) ) {
        $link_container_classes[] = $parent_linkTopMargin_variants[ $block->context['uikit-editor-blocks/slideshow-linkTopMargin'] ];
    }
}

/**
 * Link text classes
 */
if( $block->context['uikit-editor-blocks/slideshow-linkStyle'] ) {
    if ( isset( $linkStyle_variants[ $block->context['uikit-editor-blocks/slideshow-linkStyle'] ] ) ) {
        $link_text_classes[] = $linkStyle_variants[ $block->context['uikit-editor-blocks/slideshow-linkStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/slideshow-linkStyle'] === 'button-default' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] === 'button-primary' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] === 'button-secondary' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] === 'button-danger' || $block->context['uikit-editor-blocks/slideshow-linkStyle'] === 'button-text' ) {
        if( $block->context['uikit-editor-blocks/slideshow-linkButtonSize'] ) {
            if ( isset( $linkButtonSize_variants[ $block->context['uikit-editor-blocks/slideshow-linkButtonSize'] ] ) ) {
                $link_text_classes[] = $linkButtonSize_variants[ $block->context['uikit-editor-blocks/slideshow-linkButtonSize'] ];
            }
        }
    }
}

/**
 * Filters slideshow-item block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_slideshow_item_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
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

$image_attrs[] = 'data-uk-cover=""';

/**
 * Cover attributes
 */
if ( $cover_classes ) {
    $cover_attrs[] = 'class="' . esc_attr( implode( ' ', $cover_classes ) ) . '"';
}

/**
 * Overlay attributes
 */
if ( $overlay_classes ) {
    $overlay_attrs[] = 'class="' . esc_attr( implode( ' ', $overlay_classes ) ) . '"';
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

if ( $link_text_classes ) {
    $link_text_attrs[] = 'class="' . esc_attr( implode( ' ', $link_text_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <img <?php echo implode( ' ', $image_attrs ); ?>>
    <div <?php echo implode( ' ', $cover_attrs ); ?>>
        <div <?php echo implode( ' ', $overlay_attrs ); ?>>
            <?php if ( $block->context['uikit-editor-blocks/slideshow-metaAlignment'] === 'above-title' ) : ?>
                <?php if ( $attributes['metaText'] ) : ?>
                <<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                    <?php echo esc_html( $attributes['metaText'] ); ?>
                </<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>>
                <?php endif; ?>
            <?php endif; ?>
            <?php if ( $attributes['titleText'] ) : ?>
            <<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-titleElement'] ); ?> <?php echo implode( ' ', $title_attrs ); ?>>
                <?php echo esc_html( $attributes['titleText'] ); ?>
            </<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-titleElement'] ); ?>>
            <?php endif; ?>
            <?php if ( $block->context['uikit-editor-blocks/slideshow-metaAlignment'] === 'below-title' ) : ?>
                <?php if ( $attributes['metaText'] ) : ?>
                <<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                    <?php echo esc_html( $attributes['metaText'] ); ?>
                </<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>>
                <?php endif; ?>
            <?php endif; ?>
            <?php if ( $attributes['contentText'] ) : ?>
            <div <?php echo implode( ' ', $content_attrs ); ?>>
                <?php echo wp_kses_post( $attributes['contentText'] ); ?>
            </div>
            <?php endif; ?>
            <?php if ( $block->context['uikit-editor-blocks/slideshow-metaAlignment'] === 'below-content' ) : ?>
                <?php if ( $attributes['metaText'] ) : ?>
                <<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                    <?php echo esc_html( $attributes['metaText'] ); ?>
                </<?php echo tag_escape( $block->context['uikit-editor-blocks/slideshow-metaElement'] ); ?>>
                <?php endif; ?>
            <?php endif; ?>
            <?php if ( $attributes['linkUrl'] ) : ?>
            <div <?php echo implode( ' ', $link_container_attrs ); ?>>
                <a <?php echo implode( ' ', $link_text_attrs ); ?>>
                    <?php echo esc_html( $attributes['linkText'] ); ?>
                </a>
            </div>
            <?php endif; ?>
        </div>
    </div>
</div>