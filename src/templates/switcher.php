<?php
/**
 * Template for uikit-editor-blocks/switcher
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/switcher.php.
 *
 * @package uikit-editor-blocks/templates/switcher
 * @version 1.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

$wrapper_attrs   = [];
$wrapper_classes = [];

$navigation_attrs         = [];
$navigation_classes       = [];
$navigation_tab_data      = [];
$navigation_switcher_data = [];

$switcher_content_attrs = [];

$nav_grid_attrs          = [];
$navigation_grid_classes = ['uk-grid', 'uk-child-width-expand'];

$navigation_grid_column_attrs   = [];
$navigation_grid_column_classes = [];

$navigationAlignment_variants = [
    'left'    => 'uk-flex-left',
    'right'   => 'uk-flex-right',
    'center'  => 'uk-flex-center',
    'justify' => 'uk-child-width-expand',
];

$navigationMargin_variants = [
    'small'   => 'uk-margin-small',
    'medium'  => 'uk-margin-medium',
    'large'   => 'uk-margin-large',
    'xlarge'  => 'uk-margin-xlarge',
    'default' => 'uk-margin',
];

$navigationGridWidth_variants = [
    'auto'   => 'uk-width-auto',
    '1-2'    => 'uk-width-1-2',
    '1-3'    => 'uk-width-1-3',
    '1-4'    => 'uk-width-1-4',
    '1-5'    => 'uk-width-1-5',
    'small'  => 'uk-width-small',
    'medium' => 'uk-width-medium',
    'large'  => 'uk-width-large',
];

$navigationGridColumnGap_variants = [
    'small'  => 'uk-grid-column-small',
    'medium' => 'uk-grid-column-medium',
    'large'  => 'uk-grid-column-large',
    'none'   => 'uk-grid-column-collapse',
];

$navigationGridRowGap_variants = [
    'small'  => 'uk-grid-row-small',
    'medium' => 'uk-grid-row-medium',
    'large'  => 'uk-grid-row-large',
    'none'   => 'uk-grid-row-collapse',
];

$navigationGridBreakpoint_variants = [
    'small'  => '@s',
    'medium' => '@m',
    'large'  => '@l',
    'xlarge' => '@xl',
];

/**
 * Wrapper classes
 */
if ( isset( $attributes['className'] ) ) {
    $wrapper_classes[] = $attributes['className'];
}

/**
 * Navigation classes
 */
if( $attributes['navigation'] ) {
    if( $attributes['navigation'] === 'tabs' ) {
        $navigation_classes[] = 'uk-tabs';

        if( $attributes['navigationPosition'] === 'left' ) {
            $navigation_classes[] = 'uk-tab-left';
        } elseif( $attributes['navigationPosition'] === 'right' ) {
            $navigation_classes[] = 'uk-tab-right';
        }
    } elseif( $attributes['navigation'] === 'subnav-pill' ) {
        $navigation_classes[] = 'uk-subnav uk-subnav-pill';
    } elseif( $attributes['navigation'] === 'subnav-divider' ) {
        $navigation_classes[] = 'uk-subnav uk-subnav-divider';
    } elseif( $attributes['navigation'] === 'subnav' ) {
        $navigation_classes[] = 'uk-subnav';
    }

    if( $attributes['navigationPosition'] === 'top' || $attributes['navigationPosition'] === 'bottom' ) {
        if( $attributes['navigationAlignment'] ) {
            if ( isset( $navigationAlignment_variants[ $attributes['navigationAlignment'] ] ) ) {
                $navigation_classes[] = $navigationAlignment_variants[ $attributes['navigationAlignment'] ];
            }
        }
        if( $attributes['navigationMargin'] ) {
            if ( isset( $navigationMargin_variants[ $attributes['navigationMargin'] ] ) ) {
                $navigation_classes[] = $navigationMargin_variants[ $attributes['navigationMargin'] ];
            }
        }
    }
}

/**
 * Navigation tab-data
 */
if ( $attributes['navigation'] === 'tabs' ) {
    $navigation_tab_data[] = 'connect: #js-' . $attributes['blockId'];

    if ( $attributes['animation'] ) {
        $navigation_tab_data[] = 'animation: ' . $attributes['animation'];
    }
}

/**
 * Navigation switcher-data
 */
if ( $attributes['navigation'] !== 'tabs' ) {
    $navigation_switcher_data[] = 'connect: #js-' . $attributes['blockId'];

    if ( $attributes['animation'] ) {
        $navigation_switcher_data[] = 'animation: ' . $attributes['animation'];
    }
}

/**
 * Navigation grid class
 */
if( $attributes['navigationPosition'] === 'left' || $attributes['navigationPosition'] === 'right' ) {
    if( $attributes['navigationGridColumnGap'] ) {
        if ( isset( $navigationGridColumnGap_variants[ $attributes['navigationGridColumnGap'] ] ) ) {
            $navigation_grid_classes[] = $navigationGridColumnGap_variants[ $attributes['navigationGridColumnGap'] ];
        }
    }
    if( $attributes['navigationGridRowGap'] ) {
        if ( isset( $navigationGridRowGap_variants[ $attributes['navigationGridRowGap'] ] ) ) {
            $navigation_grid_classes[] = $navigationGridRowGap_variants[ $attributes['navigationGridRowGap'] ];
        }
    }
    if( $attributes['navigationVerticalAlignment'] ) {
        $navigation_grid_classes[] = 'uk-flex-middle';
    }
} 

/**
 * Navigation grid column class
 */
if( $attributes['navigationPosition'] === 'left' || $attributes['navigationPosition'] === 'right' ) {
    if( $attributes['navigationGridWidth'] && $attributes['navigationGridBreakpoint'] ) {
        if ( isset( $navigationGridWidth_variants[ $attributes['navigationGridWidth'] ] ) && isset( $navigationGridBreakpoint_variants[ $attributes['navigationGridBreakpoint'] ] ) ) {
            $navigation_grid_column_classes[] = $navigationGridWidth_variants[ $attributes['navigationGridWidth'] ] . $navigationGridBreakpoint_variants[ $attributes['navigationGridBreakpoint'] ];
        }
    }
} 

/**
 * Filters switcher block classes.
 *
 * @param array $wrapper_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$wrapper_classes = apply_filters( 'uikit_editor_blocks_switcher_classes', $wrapper_classes, $attributes );

/**
 * Wrapper attributes
 */
if ( $wrapper_classes ) {
    $wrapper_attrs[] = 'class="' . esc_attr( implode( ' ', $wrapper_classes ) ) . '"';
}

/**
 * Navigation attributes
 */
if ( $navigation_classes ) {
    $navigation_attrs[] = 'class="' . esc_attr( implode( ' ', $navigation_classes ) ) . '"';
}

if ( $navigation_tab_data ) {
    $navigation_attrs[] = 'data-uk-tab="' . esc_attr( implode( '; ', $navigation_tab_data ) ) . '"';
}

if ( $navigation_switcher_data ) {
    $navigation_attrs[] = 'data-uk-switcher="' . esc_attr( implode( '; ', $navigation_switcher_data ) ) . '"';
}

/**
 * Content attributes
 */
$switcher_content_attrs[] = 'id="js-' . esc_attr( $attributes['blockId'] ) . '"';
$switcher_content_attrs[] = 'class="uk-switcher"';

/**
 * Navigation grid attributes
 */
if ( $navigation_grid_classes ) {
    $navigation_grid_attrs[] = 'class="' . esc_attr( implode( ' ', $navigation_grid_classes ) ) . '"';
}

$navigation_grid_attrs[] = 'data-uk-grid=""';

/**
 * Navigation grid attributes
 */
if ( $navigation_grid_classes ) {
    $navigation_grid_attrs[] = 'class="' . esc_attr( implode( ' ', $navigation_grid_classes ) ) . '"';
}

/**
 * Navigation grid column attributes
 */
if ( $navigation_grid_column_classes ) {
    $navigation_grid_column_attrs[] = 'class="' . esc_attr( implode( ' ', $navigation_grid_column_classes ) ) . '"';
}
?>
<div <?php echo implode( ' ', $wrapper_attrs ); ?>>
    <?php if ( $attributes['navigationPosition'] === 'top' || $attributes['navigationPosition'] === 'bottom' ) : ?>
        <?php if ( $attributes['navigationPosition'] === 'top' ) : ?>
            <ul <?php echo implode( ' ', $navigation_attrs ); ?>>
                <?php
                foreach ( $block->inner_blocks as $inner_block ) {
                    echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                }
                ?>
            </ul>
        <?php endif; ?>
        <div <?php echo implode( ' ', $switcher_content_attrs ); ?>>
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </div>
        <?php if ( $attributes['navigationPosition'] === 'bottom' ) : ?>
            <ul <?php echo implode( ' ', $navigation_attrs ); ?>>
                <?php
                foreach ( $block->inner_blocks as $inner_block ) {
                    echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                }
                ?>
            </ul>
        <?php endif; ?>
    <?php else : ?>
    <div <?php echo implode( ' ', $navigation_grid_attrs ); ?>>
        <?php if ( $attributes['navigationPosition'] === 'left' ) : ?>
        <div <?php echo implode( ' ', $navigation_grid_column_attrs ); ?>>
            <ul <?php echo implode( ' ', $navigation_attrs ); ?>>
                <?php
                foreach ( $block->inner_blocks as $inner_block ) {
                    echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                }
                ?>
            </ul>
        </div>
        <div>
            <div <?php echo implode( ' ', $switcher_content_attrs ); ?>>
                <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </div>
        </div>
        <?php elseif( $attributes['navigationPosition'] === 'right' ) : ?>
        <div>
            <div <?php echo implode( ' ', $switcher_content_attrs ); ?>>
                <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
            </div>
        </div>
        <div <?php echo implode( ' ', $navigation_grid_column_attrs ); ?>>
            <ul <?php echo implode( ' ', $navigation_attrs ); ?>>
                <?php
                foreach ( $block->inner_blocks as $inner_block ) {
                    echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                }
                ?>
            </ul>
        </div>
        <?php endif; ?>
    </div>
    <?php endif; ?>
</div>