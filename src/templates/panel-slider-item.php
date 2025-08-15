<?php
/**
 * Template for uikit-editor-blocks/panel-slider-item
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/panel-slider-item.php.
 *
 * @package uikit-editor-blocks/templates/panel-slider-item
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$panel_attrs   = [];
$panel_classes = [];

$image_attrs   = [];
$image_styles  = [];
$image_classes = [];

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

$parent_panelStyle_variants = [
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

$parent_panelPadding_variants = [
    'default' => 'uk-padding',
    'small'   => 'uk-padding-small',
    'large'   => 'uk-padding-large',
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
if ( $block->context['uikit-editor-blocks/panel-slider-sliderWidth'] && $block->context['uikit-editor-blocks/panel-slider-sliderWidth'] === 'fixed' ) {
    if ( $block->context['uikit-editor-blocks/panel-slider-sliderDefaultWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderDefaultWidth'];
    }

    if ( $block->context['uikit-editor-blocks/panel-slider-sliderSmallWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderSmallWidth'] . '@s';
    }

    if ( $block->context['uikit-editor-blocks/panel-slider-sliderMediumWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderMediumWidth'] . '@m';
    }

    if ( $block->context['uikit-editor-blocks/panel-slider-sliderLargeWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderLargeWidth'] . '@l';
    }

    if ( $block->context['uikit-editor-blocks/panel-slider-sliderXlargeWidth'] ) {
        $wrapper_classes[] = 'uk-width-' . $block->context['uikit-editor-blocks/panel-slider-sliderXlargeWidth'] . '@xl';
    }
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Panel classes
 */
if ( $block->context['uikit-editor-blocks/panel-slider-panelStyle'] ) {
    if ( isset( $parent_panelStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-panelStyle'] ] ) ) {
        $panel_classes[] = $parent_panelStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-panelStyle'] ];
    }
}

if ( $block->context['uikit-editor-blocks/panel-slider-panelPadding'] ) {
    if ( isset( $parent_panelPadding_variants[ $block->context['uikit-editor-blocks/panel-slider-panelPadding'] ] ) ) {
        $panel_classes[] = $parent_panelPadding_variants[ $block->context['uikit-editor-blocks/panel-slider-panelPadding'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-panelLink'] && $attributes['linkUrl'] ) {
    $panel_classes[] = 'uk-link-toggle uk-display-block';
}

/**
 * Image styles
 */
if ( $block->context['uikit-editor-blocks/panel-slider-imageWidth'] ) {
    $image_styles[] = 'width: ' . $block->context['uikit-editor-blocks/panel-slider-imageWidth'] . 'px';
}

if ( $block->context['uikit-editor-blocks/panel-slider-imageHeight'] ) {
    $image_styles[] = 'height: ' . $block->context['uikit-editor-blocks/panel-slider-imageHeight'] . 'px';
}

/**
 * Meta classes
 */
if( $block->context['uikit-editor-blocks/panel-slider-metaStyle'] ) {
    if ( isset( $parent_metaStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-metaStyle'] ] ) ) {
        $meta_classes[] = $parent_metaStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-metaStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-metaColor'] ) {
    if ( isset( $parent_metaColor_variants[ $block->context['uikit-editor-blocks/panel-slider-metaColor'] ] ) ) {
        $meta_classes[] = $parent_metaColor_variants[ $block->context['uikit-editor-blocks/panel-slider-metaColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-metaTopMargin'] ) {
    if ( isset( $parent_metaTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-metaTopMargin'] ] ) ) {
        $meta_classes[] = $parent_metaTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-metaTopMargin'] ];
    }
}

/**
 * Title classes
 */
if( $block->context['uikit-editor-blocks/panel-slider-titleStyle'] ) {
    if ( isset( $parent_titleStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-titleStyle'] ] ) ) {
        $title_classes[] = $parent_titleStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-titleStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-titleDecoration'] ) {
    if ( isset( $parent_titleDecoration_variants[ $block->context['uikit-editor-blocks/panel-slider-titleDecoration'] ] ) ) {
        $title_classes[] = $parent_titleDecoration_variants[ $block->context['uikit-editor-blocks/panel-slider-titleDecoration'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-titleColor'] ) {
    if ( isset( $parent_titleColor_variants[ $block->context['uikit-editor-blocks/panel-slider-titleColor'] ] ) ) {
        $title_classes[] = $parent_titleColor_variants[ $block->context['uikit-editor-blocks/panel-slider-titleColor'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-titleTopMargin'] ) {
    if ( isset( $parent_titleTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-titleTopMargin'] ] ) ) {
        $title_classes[] = $parent_titleTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-titleTopMargin'] ];
    }
}

/**
 * Content classes
 */
if( $block->context['uikit-editor-blocks/panel-slider-contentStyle'] ) {
    if ( isset( $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-contentStyle'] ] ) ) {
        $content_classes[] = $parent_contentStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-contentStyle'] ];
    }
}

if( $block->context['uikit-editor-blocks/panel-slider-contentTopMargin'] ) {
    if ( isset( $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-contentTopMargin'] ] ) ) {
        $content_classes[] = $parent_contentTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-contentTopMargin'] ];
    }
}

/**
 * Link container classes
 */
if( $block->context['uikit-editor-blocks/panel-slider-linkTopMargin'] ) {
    if ( isset( $parent_linkTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-linkTopMargin'] ] ) ) {
        $link_container_classes[] = $parent_linkTopMargin_variants[ $block->context['uikit-editor-blocks/panel-slider-linkTopMargin'] ];
    }
}

/**
 * Link text classes
 */
if( $block->context['uikit-editor-blocks/panel-slider-linkStyle'] ) {
    if ( isset( $parent_linkStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-linkStyle'] ] ) ) {
        $link_text_classes[] = $parent_linkStyle_variants[ $block->context['uikit-editor-blocks/panel-slider-linkStyle'] ];
    }

    if( $block->context['uikit-editor-blocks/panel-slider-linkStyle'] === 'button-default' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] === 'button-primary' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] === 'button-secondary' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] === 'button-danger' || $block->context['uikit-editor-blocks/panel-slider-linkStyle'] === 'button-text' ) {
        if( $block->context['uikit-editor-blocks/panel-slider-linkButtonSize'] ) {
            if ( isset( $parent_linkButtonSize_variants[ $block->context['uikit-editor-blocks/panel-slider-linkButtonSize'] ] ) ) {
                $link_text_classes[] = $parent_linkButtonSize_variants[ $block->context['uikit-editor-blocks/panel-slider-linkButtonSize'] ];
            }
        }
    }
}

/**
 * Filters panel-slider-item block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_panel_slider_item_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Panel attributes
 */
if ( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) {
    if ( $attributes['linkUrl'] ) {
        $panel_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
    }

    if ( $attributes['linkTarget'] ) {
        $panel_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
    }

    if ( $attributes['linkTitle'] ) {
        $panel_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
    }

    if ( $attributes['linkRel'] ) {
        $panel_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
    }

    if ( $attributes['linkAriaLabel'] ) {
        $panel_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
    }
}

if ( $panel_classes ) {
    $panel_attrs[] = 'class="' . esc_attr( implode( ' ', $panel_classes ) ) . '"';
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
}

if ( $image_classes ) {
    $image_attrs[] = 'class="' . esc_attr( implode( ' ', $image_classes ) ) . '"';
}

if ( $image_styles ) {
    $image_attrs[] = 'style="' . esc_attr( implode( '; ', $image_styles ) ) . '"';
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
if ( ! $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) {
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
    <?php if( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) : ?>
    <div class="uk-grid-item-match"><a <?php echo implode( ' ', $panel_attrs ); ?>>
    <?php else : ?>
    <div <?php echo implode( ' ', $panel_attrs ); ?>>
    <?php endif; ?>
        <?php if( $attributes['imageMediaId'] ) : ?>
        <img <?php echo implode( ' ', $image_attrs ); ?>>
        <?php endif; ?>
        <?php if ( $block->context['uikit-editor-blocks/panel-slider-metaAlignment'] === 'above-title' ) : ?>
            <?php if ( $attributes['metaText'] ) : ?>
            <<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                <?php echo esc_html( $attributes['metaText'] ); ?>
            </<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?>>
            <?php endif; ?>
        <?php endif; ?>
        <?php if ( $attributes['titleText'] ) : ?>
        <<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-titleElement'] ); ?> <?php echo implode( ' ', $title_attrs ); ?>>
            <?php echo esc_html( $attributes['titleText'] ); ?>
        </<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-titleElement'] ); ?>>
        <?php endif; ?>
        <?php if ( $block->context['uikit-editor-blocks/panel-slider-metaAlignment'] === 'below-title' ) : ?>
            <?php if ( $attributes['metaText'] ) : ?>
            <<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                <?php echo esc_html( $attributes['metaText'] ); ?>
            </<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?>>
            <?php endif; ?>
        <?php endif; ?>
        <?php if ( $attributes['contentText'] ) : ?>
        <div <?php echo implode( ' ', $content_attrs ); ?>>
            <?php echo wpautop( wp_kses_post( $attributes['contentText'] ) ); ?>
        </div>
        <?php endif; ?>
        <?php if ( $block->context['uikit-editor-blocks/panel-slider-metaAlignment'] === 'below-content' ) : ?>
            <?php if ( $attributes['metaText'] ) : ?>
            <<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                <?php echo esc_html( $attributes['metaText'] ); ?>
            </<?php echo tag_escape( $block->context['uikit-editor-blocks/panel-slider-metaElement'] ); ?>>
            <?php endif; ?>
        <?php endif; ?>
        <?php if ( $attributes['linkText'] ) : ?>
            <?php if ( $attributes['linkUrl'] ) : ?>
                <div <?php echo implode( ' ', $link_container_attrs ); ?>>
                    <?php if ( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) : ?>
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
    <?php if( $block->context['uikit-editor-blocks/panel-slider-panelLink'] ) : ?>
    </a></div>
    <?php else : ?>
    </div>
    <?php endif; ?>
</div>