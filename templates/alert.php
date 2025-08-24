<?php
/**
 * Template for uikit-editor-blocks/alert
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/alert.php.
 *
 * @package uikit-editor-blocks/templates/alert
 * @version 1.0.4
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$general_props = uikit_editor_blocks_get_general_props( $attributes );

$wrapper_attrs   = [];
$wrapper_classes = ['uk-alert'];

$wrapper_link_attrs   = [];
$wrapper_link_classes = ['uk-link-reset'];

$title_attrs   = [];
$title_classes = [];

$content_attrs   = [];
$content_classes = ['uk-panel'];

$style_variants = [
    'primary' => 'uk-alert-primary',
    'success' => 'uk-alert-success',
    'warning' => 'uk-alert-warning',
    'danger'  => 'uk-alert-danger',
];

$titleStyle_variants = [
    'text-bold'     => 'uk-text-bold',
    'heading-small' => 'uk-heading-small',
    'h1'            => 'uk-h1',
    'h2'            => 'uk-h2',
    'h3'            => 'uk-h3',
    'h4'            => 'uk-h4',
    'h5'            => 'uk-h5',
    'h6'            => 'uk-h6',
];

$contentStyle_variants = [
    'lead' => 'uk-text-lead',
    'meta' => 'uk-text-meta',
];

$contentTopMargin_variants = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

/**
 * Wrapper classes
 */
if ( $attributes['style'] ) {
    if( isset( $style_variants[ $attributes['style'] ] ) ) {
        $wrapper_classes[] = $style_variants[ $attributes['style'] ];
    }
}

if ( $attributes['largerPadding'] ) {
    $wrapper_classes[] = 'uk-padding';
}

if ( ! empty( $general_props['class'] ) && is_array( $general_props['class'] ) ) {
    $wrapper_classes = array_merge( $wrapper_classes, $general_props['class'] );
}

if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Title classes
 */
if( $attributes['titleStyle'] ) {
    if ( isset( $titleStyle_variants[ $attributes['titleStyle'] ] ) ) {
        $title_classes[] = $titleStyle_variants[ $attributes['titleStyle'] ];
    }
}

/**
 * Content classes
 */
if( $attributes['contentStyle'] ) {
    if ( isset( $contentStyle_variants[ $attributes['contentStyle'] ] ) ) {
        $content_classes[] = $contentStyle_variants[ $attributes['contentStyle'] ];
    }
}

if( $attributes['contentTopMargin'] ) {
    if ( isset( $contentTopMargin_variants[ $attributes['contentTopMargin'] ] ) ) {
        $content_classes[] = $contentTopMargin_variants[ $attributes['contentTopMargin'] ];
    }
}

/**
 * Filters alert block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_alert_classes', $wrapper_classes, $attributes );

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
 * Wrapper link attributes
 */
if ( $attributes['linkUrl'] ) {
    $wrapper_link_attrs[] = 'href="' . esc_attr( $attributes['linkUrl'] ) . '"';
}

if ( $attributes['linkTarget'] ) {
    $wrapper_link_attrs[] = 'target="' . esc_attr( $attributes['linkTarget'] ) . '"';
}

if ( $attributes['linkTitle'] ) {
    $wrapper_link_attrs[] = 'title="' . esc_attr( $attributes['linkTitle'] ) . '"';
}

if ( $attributes['linkRel'] ) {
    $wrapper_link_attrs[] = 'rel="' . esc_attr( $attributes['linkRel'] ) . '"';
}

if ( $attributes['linkAriaLabel'] ) {
    $wrapper_link_attrs[] = 'aria-label="' . esc_attr( $attributes['linkAriaLabel'] ) . '"';
}

if ( $wrapper_link_classes ) {
    $wrapper_link_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_link_classes ) ) . '"';
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
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if ( $attributes['linkUrl'] ) : ?>
    <a <?php echo implode( ' ', $wrapper_link_attrs ); ?>>
    <?php endif; ?>
        <?php if ( $attributes['titleText'] ) : ?>
        <<?php echo tag_escape( $attributes['titleElement'] ); ?> <?php echo implode( ' ', $title_attrs ); ?>>
            <?php echo esc_html( $attributes['titleText'] ); ?>
        </<?php echo tag_escape( $attributes['titleElement'] ); ?>>
        <?php endif; ?>
        <?php if ( $attributes['contentText'] ) : ?>
        <div <?php echo implode( ' ', $content_attrs ); ?>>
            <?php echo wp_kses_post( $attributes['contentText'] ); ?>
        </div>
        <?php endif; ?>
    <?php if ( $attributes['linkUrl'] ) : ?>
    <?php echo '</a>' ?>
    <?php endif; ?>
</div>