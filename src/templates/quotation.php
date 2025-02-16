<?php
/**
 * Template for uikit-editor-blocks/quotation
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/quotation.php.
 *
 * @package uikit-editor-blocks/templates/quotation
 * @version 1.0.2
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

$block_elm_classes       = [];
$author_link_elm_classes = [];

$linkStyle_classes = [
    'muted' => 'uk-link-muted',
    'text'  => 'uk-link-text',
    'reset' => 'uk-link-reset',
];

if ( ! empty( $attributes['linkStyle'] ) ) {
    if ( isset( $linkStyle_classes[ $attributes['linkStyle'] ] ) ) {
        $author_link_elm_classes[] = $linkStyle_classes[ $attributes['linkStyle'] ];
    }
}

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/**
 * Filters quotation block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_quotation_classes', $block_elm_classes, $attributes );
?>
<blockquote
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php if ( ! empty( $attributes['text'] ) ) : ?>
        <p>
            <?php echo wp_kses_post( $attributes['text'] ); ?>
        </p>
    <?php endif; ?>
    <?php if ( ! empty( $attributes['authorName'] ) || ! empty( $attributes['footerText'] ) ) : ?>
        <footer>
            <?php if ( ! empty( $attributes['footerText'] ) ) : ?>
                <?php echo esc_html( $attributes['footerText'] ); ?>
            <?php endif; ?>
            <?php if ( ! empty( $attributes['authorName'] ) ) : ?>
                <cite>
                    <?php if ( ! empty( $attributes['authorLinkUrl'] ) ) : ?>
                        <a
                            href="<?php echo esc_url( $attributes['authorLinkUrl'] ); ?>"
                            <?php if ( ! empty( $attributes['authorLinkTarget'] ) ) : ?>
                                target="<?php echo esc_attr( $attributes['authorLinkTarget'] ); ?>"
                            <?php endif; ?>
                            <?php if ( ! empty( $attributes['authorLinkTitle'] ) ) : ?>
                                title="<?php echo esc_attr( $attributes['authorLinkTitle'] ); ?>"
                            <?php endif; ?>
                            <?php if ( ! empty( $attributes['authorLinkRel'] ) ) : ?>
                                rel="<?php echo esc_attr( $attributes['authorLinkRel'] ); ?>"
                            <?php endif; ?>
                            <?php if ( ! empty( $attributes['authorLinkAriaLabel'] ) ) : ?>
                                aria-label="<?php echo esc_attr( $attributes['authorLinkAriaLabel'] ); ?>"
                            <?php endif; ?>
                            <?php if ( ! empty( $author_link_elm_classes ) ) : ?>
                                class="<?php echo esc_attr( implode( ' ', $author_link_elm_classes ) ); ?>"
                            <?php endif; ?>
                        >
                    <?php endif; ?>
                        <?php echo esc_html( $attributes['authorName'] ); ?>
                    <?php if ( ! empty( $attributes['authorLinkUrl'] ) ) : ?>
                        </a>
                    <?php endif; ?>
                </cite>
            <?php endif; ?>
        </footer>
    <?php endif; ?>
</blockquote>