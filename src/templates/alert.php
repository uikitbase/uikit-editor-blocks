<?php
/**
 * Template for uikit-editor-blocks/alert
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/alert.php.
 *
 * @package uikit-editor-blocks/templates/alert
 * @version 1.0.3
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

$block_elm_classes   = ['uk-alert'];
$link_elm_classes    = ['uk-link-reset'];
$title_elm_classes   = [];
$content_elm_classes = ['uk-panel'];

$style_classes = [
    'primary' => 'uk-alert-primary',
    'success' => 'uk-alert-success',
    'warning' => 'uk-alert-warning',
    'danger'  => 'uk-alert-danger',
];

$titleStyle_classes = [
    'text-bold'     => 'uk-text-bold',
    'heading-small' => 'uk-heading-small',
    'h1'            => 'uk-h1',
    'h2'            => 'uk-h2',
    'h3'            => 'uk-h3',
    'h4'            => 'uk-h4',
    'h5'            => 'uk-h5',
    'h6'            => 'uk-h6',
];

$contentStyle_classes = [
    'lead' => 'uk-text-lead',
    'meta' => 'uk-text-meta',
];

$contentTopMargin_classes = [
    'default' => 'uk-margin-top',
    'small'   => 'uk-margin-small-top',
    'medium'  => 'uk-margin-medium-top',
    'large'   => 'uk-margin-large-top',
    'xlarge'  => 'uk-margin-xlarge-top',
];

if ( ! empty( $attributes['style'] ) ) {
    if( isset( $style_classes[ $attributes['style'] ] ) ) {
        $block_elm_classes[] = $style_classes[ $attributes['style'] ];
    }
}

if ( ! empty( $attributes['largerPadding'] ) ) {
    $block_elm_classes[] = 'uk-padding';
}

if( ! empty( $attributes['titleStyle'] ) ) {
    if ( isset( $titleStyle_classes[ $attributes['titleStyle'] ] ) ) {
        $title_elm_classes[] = $titleStyle_classes[ $attributes['titleStyle'] ];
    }
}

if( ! empty( $attributes['contentStyle'] ) ) {
    if ( isset( $contentStyle_classes[ $attributes['contentStyle'] ] ) ) {
        $content_elm_classes[] = $contentStyle_classes[ $attributes['contentStyle'] ];
    }
}

if( ! empty( $attributes['contentTopMargin'] ) ) {
    if ( isset( $contentTopMargin_classes[ $attributes['contentTopMargin'] ] ) ) {
        $content_elm_classes[] = $contentTopMargin_classes[ $attributes['contentTopMargin'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters alert block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_alert_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
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
            <?php if ( ! empty( $link_elm_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $link_elm_classes ) ); ?>"
            <?php endif; ?>
        >
    <?php endif; ?>
        <?php if ( ! empty( $attributes['titleText'] ) ) : ?>
            <<?php echo esc_html( $attributes['titleElement'] ); ?>
                <?php if ( ! empty( $title_elm_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $title_elm_classes ) ); ?>"
                <?php endif; ?>
            >
                <?php echo esc_html( $attributes['titleText'] ); ?>
            </<?php echo esc_html( $attributes['titleElement'] ); ?>>
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
    <?php if ( ! empty( $attributes['linkUrl'] ) ) : ?>
        <?php echo '</a>' ?>
    <?php endif; ?>
</div>