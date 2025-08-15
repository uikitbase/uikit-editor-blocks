<?php
/**
 * Template for uikit-editor-blocks/quotation
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/quotation.php.
 *
 * @package uikit-editor-blocks/templates/quotation
 * @version 1.0.3
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$author_link_attrs   = [];
$author_link_classes = [];

$linkStyle_variants = [
    'muted' => 'uk-link-muted',
    'text'  => 'uk-link-text',
    'reset' => 'uk-link-reset',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Author link classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}
if ( $attributes['linkStyle'] ) {
    if ( isset( $linkStyle_variants[ $attributes['linkStyle'] ] ) ) {
        $author_link_classes[] = $linkStyle_variants[ $attributes['linkStyle'] ];
    }
}

/**
 * Filters quotation block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_quotation_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Author link attributes
 */
if ( $attributes['authorLinkUrl'] ) {
    $author_link_attrs[] = 'href="' . esc_attr( $attributes['authorLinkUrl'] ) . '"';
}

if ( $attributes['authorLinkTarget'] ) {
    $author_link_attrs[] = 'target="' . esc_attr( $attributes['authorLinkTarget'] ) . '"';
}

if ( $attributes['authorLinkTitle'] ) {
    $author_link_attrs[] = 'title="' . esc_attr( $attributes['authorLinkTitle'] ) . '"';
}

if ( $attributes['authorLinkRel'] ) {
    $author_link_attrs[] = 'rel="' . esc_attr( $attributes['authorLinkRel'] ) . '"';
}

if ( $attributes['authorLinkAriaLabel'] ) {
    $author_link_attrs[] = 'aria-label="' . esc_attr( $attributes['authorLinkAriaLabel'] ) . '"';
}

if ( $author_link_classes ) {
    $author_link_attrs[] = 'class="' . esc_attr( implode( ' ', $author_link_classes ) ) . '"';
}
?>
<blockquote <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if ( $attributes['text'] ) : ?>
    <?php echo wpautop( wp_kses_post( $attributes['text'] ) ); ?>
    <?php endif; ?>
    <?php if ( $attributes['authorName'] || $attributes['footerText'] ) : ?>
        <footer>
            <?php if ( $attributes['footerText'] ) : ?>
            <?php echo esc_html( $attributes['footerText'] ); ?>
            <?php endif; ?>
            <?php if ( $attributes['authorName'] ) : ?>
                <cite>
                    <?php if ( $attributes['authorLinkUrl'] ) : ?>
                    <a <?php echo implode( ' ', $author_link_attrs ); ?>>
                    <?php endif; ?>
                    <?php echo esc_html( $attributes['authorName'] ); ?>
                    <?php if ( $attributes['authorLinkUrl'] ) : ?>
                    </a>
                    <?php endif; ?>
                </cite>
            <?php endif; ?>
        </footer>
    <?php endif; ?>
</blockquote>