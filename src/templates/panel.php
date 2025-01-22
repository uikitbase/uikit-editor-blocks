<?php
/**
 * Template for uikit-editor-blocks/panel
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/panel.php.
 *
 * @package uikit-editor-blocks/templates/panel
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
$panel_classes     = [];
$title_classes     = [];
$meta_classes      = [];
$content_classes   = ['uk-panel'];
$image_attr    = [];
$image_styles  = [];
$image_classes = [];
$link_elm_classes          = [];
$link_classes              = [];

$style_classes = [
    'card-default'   => 'uk-card-default',
    'card-primary'   => 'uk-card-primary',
    'card-secondary' => 'uk-card-secondary',
    'card-hover'     => 'uk-card-hover',
    'tile-default'   => 'uk-tile-default',
    'tile-muted'     => 'uk-tile-muted',
    'tile-primary'   => 'uk-tile-primary',
    'tile-secondary' => 'uk-tile-secondary',
];

$padding_classes = [
    'default' => 'uk-padding',
    'small'   => 'uk-padding-small',
    'large'   => 'uk-padding-large',
];

$titleStyle_classes = [
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

$titleDecoration_classes = [
    'divider' => 'uk-heading-divider',
    'bullet'  => 'uk-heading-bullet',
    'line'    => 'uk-heading-line',
];

$titleColor_classes = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

$titleTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$metaStyle_classes = [
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

$metaColor_classes = [
    'muted'     => 'uk-text-muted',
    'emphasis'  => 'uk-text-emphasis',
    'primary'   => 'uk-text-primary',
    'secondary' => 'uk-text-secondary',
    'success'   => 'uk-text-success',
    'warning'   => 'uk-text-warning',
    'danger'    => 'uk-text-danger',
];

$metaTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

$contentStyle_classes = [
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

$contentTopMargin_classes = [
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

$linkTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

if( ! empty( $attributes['style'] ) ) {
    if ( isset( $style_classes[ $attributes['style'] ] ) ) {
        $panel_classes[] = $style_classes[ $attributes['style'] ];
    }
}

if( ! empty( $attributes['padding'] ) ) {
    if ( isset( $padding_classes[ $attributes['padding'] ] ) ) {
        $panel_classes[] = $padding_classes[ $attributes['padding'] ];
    }
}

if( $attributes['titleElement'] == 'h1' || $attributes['titleElement'] == 'h2' || $attributes['titleElement'] == 'h3' || $attributes['titleElement'] == 'h4' || $attributes['titleElement'] == 'h5' || $attributes['titleElement'] == 'h6' ) {
    $title_classes[] = 'uk-margin-remove-bottom';
}

if( ! empty( $attributes['titleStyle'] ) ) {
    if ( isset( $titleStyle_classes[ $attributes['titleStyle'] ] ) ) {
        $title_classes[] = $titleStyle_classes[ $attributes['titleStyle'] ];
    }
}

if( ! empty( $attributes['titleDecoration'] ) ) {
    if ( isset( $titleDecoration_classes[ $attributes['titleDecoration'] ] ) ) {
        $title_classes[] = $titleDecoration_classes[ $attributes['titleDecoration'] ];
    }
}

if( ! empty( $attributes['titleColor'] ) ) {
    if ( isset( $titleColor_classes[ $attributes['titleColor'] ] ) ) {
        $title_classes[] = $titleColor_classes[ $attributes['titleColor'] ];
    }
}

if( ! empty( $attributes['titleTopMargin'] ) ) {
    if ( isset( $titleTopMargin_classes[ $attributes['titleTopMargin'] ] ) ) {
        $title_classes[] = $titleTopMargin_classes[ $attributes['titleTopMargin'] ];
    }
}

if( $attributes['metaElement'] == 'h1' || $attributes['metaElement'] == 'h2' || $attributes['metaElement'] == 'h3' || $attributes['metaElement'] == 'h4' || $attributes['metaElement'] == 'h5' || $attributes['metaElement'] == 'h6' ) {
    $meta_classes[] = 'uk-margin-remove-bottom';
}

if( ! empty( $attributes['metaStyle'] ) ) {
    if ( isset( $metaStyle_classes[ $attributes['metaStyle'] ] ) ) {
        $meta_classes[] = $metaStyle_classes[ $attributes['metaStyle'] ];
    }
}

if( ! empty( $attributes['metaColor'] ) ) {
    if ( isset( $metaColor_classes[ $attributes['metaColor'] ] ) ) {
        $meta_classes[] = $metaColor_classes[ $attributes['metaColor'] ];
    }
}

if( ! empty( $attributes['metaTopMargin'] ) ) {
    if ( isset( $metaTopMargin_classes[ $attributes['metaTopMargin'] ] ) ) {
        $meta_classes[] = $metaTopMargin_classes[ $attributes['metaTopMargin'] ];
    }
}

if( ! empty( $attributes['contentStyle'] ) ) {
    if ( isset( $contentStyle_classes[ $attributes['contentStyle'] ] ) ) {
        $content_classes[] = $contentStyle_classes[ $attributes['contentStyle'] ];
    }
}

if( ! empty( $attributes['contentTopMargin'] ) ) {
    if ( isset( $contentTopMargin_classes[ $attributes['contentTopMargin'] ] ) ) {
        $content_classes[] = $contentTopMargin_classes[ $attributes['contentTopMargin'] ];
    }
}

if( ! empty( $attributes['linkStyle'] ) ) {
    if ( isset( $linkStyle_classes[ $attributes['linkStyle'] ] ) ) {
        $link_classes[] = $linkStyle_classes[ $attributes['linkStyle'] ];
    }
    
    if( $attributes['linkStyle'] == 'button-default' || $attributes['linkStyle'] == 'button-primary' || $attributes['linkStyle'] == 'button-secondary' || $attributes['linkStyle'] == 'button-danger' || $attributes['linkStyle'] == 'button-text' ) {
        if( ! empty( $attributes['linkButtonSize'] ) ) {
            if ( isset( $linkButtonSize_classes[ $attributes['linkButtonSize'] ] ) ) {
                $link_classes[] = $linkButtonSize_classes[ $attributes['linkButtonSize'] ];
            }
        }
    }
}

if( ! empty( $attributes['linkTopMargin'] ) ) {
    if ( isset( $linkTopMargin_classes[ $attributes['linkTopMargin'] ] ) ) {
        $link_elm_classes[] = $linkTopMargin_classes[ $attributes['linkTopMargin'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters panel block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_block_classes', $block_elm_classes, $attributes );
?>
<?php if( $attributes['link'] ) : ?>
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
        <?php if ( $attributes['metaAlignment'] == 'above-title' ) : ?>
            <?php if( ! empty ( $attributes['metaText'] ) ) : ?>
                <<?php echo esc_html( $attributes['metaElement'] ); ?>
                    <?php if ( ! empty( $meta_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $meta_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php echo esc_html( $attributes['metaText'] ); ?>
                </<?php echo esc_html( $attributes['metaElement'] ); ?>>
            <?php endif; ?>
        <?php endif; ?>
        <?php if( ! empty ( $attributes['titleText'] ) ) : ?>
            <<?php echo esc_html( $attributes['titleElement'] ); ?>
                <?php if ( ! empty( $title_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $title_classes ) ); ?>"
                <?php endif; ?>
            >
                <?php echo esc_html( $attributes['titleText'] ); ?>
            </<?php echo esc_html( $attributes['titleElement'] ); ?>>
        <?php endif; ?>
         <?php if ( $attributes['metaAlignment'] == 'below-title' ) : ?>
            <?php if( ! empty ( $attributes['metaText'] ) ) : ?>
                <<?php echo esc_html( $attributes['metaElement'] ); ?>
                    <?php if ( ! empty( $meta_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $meta_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php echo esc_html( $attributes['metaText'] ); ?>
                </<?php echo esc_html( $attributes['metaElement'] ); ?>>
            <?php endif; ?>
        <?php endif; ?>
        <?php if( ! empty( $attributes['contentText'] ) ) : ?>
            <div
                <?php if ( ! empty( $content_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $content_classes ) ); ?>"
                <?php endif; ?>
            >
                <?php echo wp_kses_post( apply_filters( 'the_content', $attributes['contentText'] ) ); ?>
            </div>
        <?php endif; ?>
        <?php if ( $attributes['metaAlignment'] == 'below-content' ) : ?>
            <?php if( ! empty ( $attributes['metaText'] ) ) : ?>
                <<?php echo esc_html( $attributes['metaElement'] ); ?>
                    <?php if ( ! empty( $meta_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $meta_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php echo esc_html( $attributes['metaText'] ); ?>
                </<?php echo esc_html( $attributes['metaElement'] ); ?>>
            <?php endif; ?>
        <?php endif; ?>
        <?php if ( ! empty( $attributes['linkText'] ) ) : ?>
            <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
                <div
                    <?php if ( ! empty( $link_elm_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $link_elm_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <?php if ( $attributes['link'] ) : ?>
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
<?php if( $attributes['link'] ) : ?>
    </a>
<?php else : ?>
    </div>
<?php endif; ?>
