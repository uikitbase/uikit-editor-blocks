<?php
/**
 * Template for uikit-editor-blocks/overlay
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/overlay.php.
 *
 * @package uikit-editor-blocks/templates/overlay
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$placeholder_image_src = UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/images/image-placeholder.png';

$wrapper_attrs   = [];
$wrapper_classes = [];

$overlay_attrs   = [];
$overlay_classes = ['uk-inline-clip'];

$image_attrs   = [];
$image_classes = ['uk-transition-opaque'];
$image_styles  = [];

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

$style_variants = [
    'overlay-default' => 'uk-overlay-default',
    'overlay-primary' => 'uk-overlay-primary',
    'tile-default'    => 'uk-tile-default',
    'tile-muted'      => 'uk-tile-muted',
    'tile-primary'    => 'uk-tile-primary',
    'tile-secondary'  => 'uk-tile-secondary',
];

$textColor_variants = [
    'light' => 'uk-light',
    'dark'  => 'uk-dark',
];

$padding_variants = [
    'small' => 'uk-padding-small',
    'large' => 'uk-padding-large',
    'none'  => 'uk-padding-remove',
];

$position_variants = [
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

$margin_variants = [
    'small'  => 'uk-position-small',
    'medium' => 'uk-position-medium',
    'large'  => 'uk-position-large',
];

$maxWidth_variants = [
    'small'   => 'uk-width-small',
    'medium'  => 'uk-width-medium',
    'large'   => 'uk-width-large',
    'xlarge'  => 'uk-width-xlarge',
    '2xlarge' => 'uk-width-2xlarge',
];

$titleStyle_variants = [
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

$titleDecoration_variants = [
    'divider' => 'uk-heading-divider',
    'bullet'  => 'uk-heading-bullet',
    'line'    => 'uk-heading-line',
];

$titleColor_variants = [
    'muted'      => 'uk-text-muted',
    'emphasis'   => 'uk-text-emphasis',
    'primary'    => 'uk-text-primary',
    'secondary'  => 'uk-text-secondary',
    'success'    => 'uk-text-success',
    'warning'    => 'uk-text-warning',
    'danger'     => 'uk-text-danger',
    'background' => 'uk-text-background',
];

$titleTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$metaStyle_variants = [
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

$metaColor_variants = [
    'muted'      => 'uk-text-muted',
    'emphasis'   => 'uk-text-emphasis',
    'primary'    => 'uk-text-primary',
    'secondary'  => 'uk-text-secondary',
    'success'    => 'uk-text-success',
    'warning'    => 'uk-text-warning',
    'danger'     => 'uk-text-danger',
    'background' => 'uk-text-background',
];

$metaTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$contentStyle_variants = [
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

$contentTopMargin_variants = [
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

$linkTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

/**
 * Wrapper classes
 */
if( $attributes['textColor'] ) {
    if ( isset( $textColor_variants[ $attributes['textColor'] ] ) ) {
        $wrapper_classes[] = $textColor_variants[ $attributes['textColor'] ];
    }
}

if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Overlay classes
 */
if( $attributes['hover'] ) {
    $overlay_classes[] = 'uk-transition-toggle';
}

if ( $attributes['link'] ) {
    $overlay_classes[] = 'uk-link-toggle';
}

/**
 * Image styles
 */
if ( $attributes['imageMediaId'] && $attributes['imageWidth'] ) {
    $image_styles[] = 'width: ' . $attributes['imageWidth'] . 'px';
}

if ( $attributes['imageMediaId'] && $attributes['imageHeight'] ) {
    $image_styles[] = 'height: ' . $attributes['imageHeight'] . 'px';
}

/**
 * Cover classes
 */
if( $attributes['mode'] === 'cover' ) {
    if( $attributes['hover'] ) {
        $cover_classes[] = 'uk-transition-fade';
    }

    if( $attributes['style'] ) {
        if ( isset( $style_variants[ $attributes['style'] ] ) ) {
            $cover_classes[] = $style_variants[ $attributes['style'] ];
        }
    }

    if( $attributes['margin'] ) {
        if ( isset( $margin_variants[ $attributes['margin'] ] ) ) {
            $cover_classes[] = $margin_variants[ $attributes['margin'] ];
        }
    }
}

/**
 * Overlay inner classes
 */
if( $attributes['mode'] === 'caption' ) {
    if( $attributes['hover'] ) {
        $overlay_inner_classes[] = 'uk-transition-fade';
    }

    if( $attributes['style'] ) {
        if ( isset( $style_variants[ $attributes['style'] ] ) ) {
            $overlay_inner_classes[] = $style_variants[ $attributes['style'] ];
        }
    }

    if( $attributes['margin'] ) {
        if ( isset( $margin_variants[ $attributes['margin'] ] ) ) {
            $overlay_inner_classes[] = $margin_variants[ $attributes['margin'] ];
        }
    }
}

if( $attributes['padding'] ) {
    if ( isset( $padding_variants[ $attributes['padding'] ] ) ) {
        $overlay_inner_classes[] = $padding_variants[ $attributes['padding'] ];
    }
}

if( $attributes['position'] ) {
    if ( isset( $position_variants[ $attributes['position'] ] ) ) {
        $overlay_inner_classes[] = $position_variants[ $attributes['position'] ];
    }
}

/**
 * Overlay container classes
 */
if( $attributes['maxWidth'] ) {
    if ( isset( $maxWidth_variants[ $attributes['maxWidth'] ] ) ) {
        $overlay_container_classes[] = $maxWidth_variants[ $attributes['maxWidth'] ];
    }
}

/**
 * Meta classes
 */
if( $attributes['metaStyle'] ) {
    if ( isset( $metaStyle_variants[ $attributes['metaStyle'] ] ) ) {
        $meta_classes[] = $metaStyle_variants[ $attributes['metaStyle'] ];
    }
}

if( $attributes['metaColor'] ) {
    if ( isset( $metaColor_variants[ $attributes['metaColor'] ] ) ) {
        $meta_classes[] = $metaColor_variants[ $attributes['metaColor'] ];
    }
}

if ( $attributes['metaTopMargin'] ) {
    if ( isset( $metaTopMargin_variants[ $attributes['metaTopMargin'] ] ) ) {
        $meta_classes[] = $metaTopMargin_variants[ $attributes['metaTopMargin'] ];
    }
}

/**
 * Title classes
 */
if( $attributes['titleStyle'] ) {
    if ( isset( $titleStyle_variants[ $attributes['titleStyle'] ] ) ) {
        $title_classes[] = $titleStyle_variants[ $attributes['titleStyle'] ];
    }
}

if( $attributes['titleDecoration'] ) {
    if ( isset( $titleDecoration_variants[ $attributes['titleDecoration'] ] ) ) {
        $title_classes[] = $titleDecoration_variants[ $attributes['titleDecoration'] ];
    }
}

if( $attributes['titleColor'] ) {
    if ( isset( $titleColor_variants[ $attributes['titleColor'] ] ) ) {
        $title_classes[] = $titleColor_variants[ $attributes['titleColor'] ];
    }
}

if ( $attributes['titleTopMargin'] ) {
    if ( isset( $titleTopMargin_variants[ $attributes['titleTopMargin'] ] ) ) {
        $title_classes[] = $titleTopMargin_variants[ $attributes['titleTopMargin'] ];
    }
}

/**
 * Content classes
 */
if ( $attributes['contentStyle'] ) {
    if ( isset( $contentStyle_variants[ $attributes['contentStyle'] ] ) ) {
        $content_classes[] = $contentStyle_variants[ $attributes['contentStyle'] ];
    }
}

if ( $attributes['contentTopMargin'] ) {
    if ( isset( $contentTopMargin_variants[ $attributes['contentTopMargin'] ] ) ) {
        $content_classes[] = $contentTopMargin_variants[ $attributes['contentTopMargin'] ];
    }
}

/**
 * Link container classes
 */
if( $attributes['linkTopMargin'] ) {
    if ( isset( $linkTopMargin_variants[ $attributes['linkTopMargin'] ] ) ) {
        $link_container_classes[] = $linkTopMargin_variants[ $attributes['linkTopMargin'] ];
    }
}

/**
 * Link text classes
 */
if( $attributes['linkStyle'] ) {
    if ( isset( $linkStyle_variants[ $attributes['linkStyle'] ] ) ) {
        $link_text_classes[] = $linkStyle_variants[ $attributes['linkStyle'] ];
    }

    if( $attributes['linkStyle'] === 'button-default' || $attributes['linkStyle'] === 'button-primary' || $attributes['linkStyle'] === 'button-secondary' || $attributes['linkStyle'] === 'button-danger' || $attributes['linkStyle'] === 'button-text' ) {
        if( $attributes['linkButtonSize'] ) {
            if ( isset( $linkButtonSize_variants[ $attributes['linkButtonSize'] ] ) ) {
                $link_text_classes[] = $linkButtonSize_variants[ $attributes['linkButtonSize'] ];
            }
        }
    }
}

/**
 * Filters overlay block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_overlay_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', array_unique( $wrapper_classes ) ) ) . '"';
}

if( isset( $general_props['data_attrs'] ) ) {
    foreach( $general_props['data_attrs'] as $data_attr_key => $data_attr_value ) {
        $wrapper_attrs[] = $data_attr_key . '="' . esc_attr( implode( '; ', $data_attr_value ) ) . '"';
    }
}

/**
 * Overlay attributes
 */
if ( $attributes['link'] ) {
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
if ( ! $attributes['link'] ) {
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
    <?php if ( $attributes['link'] ) : ?>
    <a <?php echo implode( ' ', $overlay_attrs ); ?>>
    <?php else: ?>
        <div <?php echo implode( ' ', $overlay_attrs ); ?>>
    <?php endif; ?>
        <img <?php echo implode( ' ', $image_attrs ); ?>>
        <?php if ( $attributes['mode'] === 'cover' ) : ?>
        <div <?php echo implode( ' ', $cover_attrs ); ?>></div>
        <?php endif; ?>
        <div <?php echo implode( ' ', $overlay_inner_attrs ); ?>>
            <div <?php echo implode( ' ', $overlay_container_attrs ); ?>>
                <?php if ( $attributes['metaAlignment'] === 'above-title' ) : ?>
                    <?php if ( $attributes['metaText'] ) : ?>
                    <<?php echo tag_escape( $attributes['metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo tag_escape( $attributes['metaElement'] ); ?>>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ( $attributes['titleText'] ) : ?>
                <<?php echo tag_escape( $attributes['titleElement'] ); ?> <?php echo implode( ' ', $title_attrs ); ?>>
                    <?php echo esc_html( $attributes['titleText'] ); ?>
                </<?php echo tag_escape( $attributes['titleElement'] ); ?>>
                <?php endif; ?>
                <?php if ( $attributes['metaAlignment'] === 'below-title' ) : ?>
                    <?php if ( $attributes['metaText'] ) : ?>
                    <<?php echo tag_escape( $attributes['metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo tag_escape( $attributes['metaElement'] ); ?>>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ( $attributes['contentText'] ) : ?>
                <div <?php echo implode( ' ', $content_attrs ); ?>>
                    <?php echo wp_kses_post( $attributes['contentText'] ); ?>
                </div>
                <?php endif; ?>
                <?php if ( $attributes['metaAlignment'] === 'below-content' ) : ?>
                    <?php if ( $attributes['metaText'] ) : ?>
                    <<?php echo tag_escape( $attributes['metaElement'] ); ?> <?php echo implode( ' ', $meta_attrs ); ?>>
                        <?php echo esc_html( $attributes['metaText'] ); ?>
                    </<?php echo tag_escape( $attributes['metaElement'] ); ?>>
                    <?php endif; ?>
                <?php endif; ?>
                <?php if ( $attributes['linkText'] ) : ?>
                    <?php if ( $attributes['linkUrl'] ) : ?>
                    <div <?php echo implode( ' ', $link_container_attrs ); ?>>
                        <?php if ( $attributes['link'] ) : ?>
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
    <?php if ( $attributes['link'] ) : ?>
    </a>
    <?php else: ?>
    </div>
    <?php endif; ?>
</div>