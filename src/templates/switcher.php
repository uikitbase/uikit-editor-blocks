<?php
/**
 * Template for uikit-editor-blocks/switcher
 *
 * This template can be overridden by copying it to theme/uikit-editor-blocks/switcher.php.
 *
 * @package uikit-editor-blocks/templates/switcher-item
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

$block_elm_classes           = [];
$nav_classes                 = [];
$nav_data                    = [];
$nav_grid_classes            = ['uk-grid', 'uk-child-width-expand'];
$nav_grid_nav_column_classes = [];

$navigationAlignment_classes = [
    'left'    => 'uk-flex-left',
    'right'   => 'uk-flex-right',
    'center'  => 'uk-flex-center',
    'justify' => 'uk-child-width-expand',
];

$navigationMargin_classes = [
    'small'   => 'uk-margin-small',
    'medium'  => 'uk-margin-medium',
    'large'   => 'uk-margin-large',
    'xlarge'  => 'uk-margin-xlarge',
    'default' => 'uk-margin',
];

$navigationGridWidth_classes = [
    'auto'   => 'uk-width-auto',
    '1-2'    => 'uk-width-1-2',
    '1-3'    => 'uk-width-1-3',
    '1-4'    => 'uk-width-1-4',
    '1-5'    => 'uk-width-1-5',
    'small'  => 'uk-width-small',
    'medium' => 'uk-width-medium',
    'large'  => 'uk-width-large',
];

$navigationGridColumnGap_classes = [
    'small'  => 'uk-grid-column-small',
    'medium' => 'uk-grid-column-medium',
    'large'  => 'uk-grid-column-large',
    'none'   => 'uk-grid-column-collapse',
];

$navigationGridRowGap_classes = [
    'small'  => 'uk-grid-row-small',
    'medium' => 'uk-grid-row-medium',
    'large'  => 'uk-grid-row-large',
    'none'   => 'uk-grid-row-collapse',
];

$navigationGridBreakpoint_classes = [
    'small'  => '@s',
    'medium' => '@m',
    'large'  => '@l',
    'xlarge' => '@xl',
];

/*
 * Custom classes
 */
if ( ! empty( $attributes['className'] ) ) {
    $block_elm_classes[] = $attributes['className'];
}

/*
 * Navigation classes
 */
if( ! empty( $attributes['navigation'] ) ) {
    if( $attributes['navigation'] == 'tabs' ) {
        $nav_classes[] = 'uk-tabs';
        
        if( $attributes['navigationPosition'] == 'left' ) {
            $nav_classes[] = 'uk-tab-left';
        } elseif( $attributes['navigationPosition'] == 'right' ) {
            $nav_classes[] = 'uk-tab-right';
        }
    } elseif( $attributes['navigation'] == 'subnav-pill' ) {
        $nav_classes[] = 'uk-subnav uk-subnav-pill';
    } elseif( $attributes['navigation'] == 'subnav-divider' ) {
        $nav_classes[] = 'uk-subnav uk-subnav-divider';
    } elseif( $attributes['navigation'] == 'subnav' ) {
        $nav_classes[] = 'uk-subnav';
    }

    if( $attributes['navigationPosition'] == 'top' || $attributes['navigationPosition'] == 'bottom' ) {
        if( ! empty( $attributes['navigationAlignment'] ) ) {
            if ( isset( $navigationAlignment_classes[ $attributes['navigationAlignment'] ] ) ) {
                $nav_classes[] = $navigationAlignment_classes[ $attributes['navigationAlignment'] ];
            }
        }
        if( ! empty( $attributes['navigationMargin'] ) ) {
            if ( isset( $navigationMargin_classes[ $attributes['navigationMargin'] ] ) ) {
                $nav_classes[] = $navigationMargin_classes[ $attributes['navigationMargin'] ];
            }
        }
    } else {
        
    }
}

/*
 * Navigation grid classes
 */
if( $attributes['navigationPosition'] == 'left' || $attributes['navigationPosition'] == 'right' ) {
    if( ! empty( $attributes['navigationGridColumnGap'] ) ) {
        if ( isset( $navigationGridColumnGap_classes[ $attributes['navigationGridColumnGap'] ] ) ) {
            $nav_grid_classes[] = $navigationGridColumnGap_classes[ $attributes['navigationGridColumnGap'] ];
        }
    }
    if( ! empty( $attributes['navigationGridRowGap'] ) ) {
        if ( isset( $navigationGridRowGap_classes[ $attributes['navigationGridRowGap'] ] ) ) {
            $nav_grid_classes[] = $navigationGridRowGap_classes[ $attributes['navigationGridRowGap'] ];
        }
    }
    if( ! empty( $attributes['navigationVerticalAlignment'] ) ) {
        $nav_grid_classes[] = 'uk-flex-middle';
    }
} 

/*
 * Navigation grid div classes
 */
if( $attributes['navigationPosition'] == 'left' || $attributes['navigationPosition'] == 'right' ) {
    if( ! empty( $attributes['navigationGridWidth'] ) && ! empty( $attributes['navigationGridBreakpoint'] ) ) {
        if ( isset( $navigationGridWidth_classes[ $attributes['navigationGridWidth'] ] ) && isset( $navigationGridBreakpoint_classes[ $attributes['navigationGridBreakpoint'] ] ) ) {
            $nav_grid_nav_column_classes[] = $navigationGridWidth_classes[ $attributes['navigationGridWidth'] ] . $navigationGridBreakpoint_classes[ $attributes['navigationGridBreakpoint'] ];
        }
    }
} 

$nav_data[] = 'connect: #js-' . esc_attr( $attributes['blockId'] );

if ( ! empty( $attributes['animation'] ) ) {
    $nav_data[] = 'animation: ' . esc_attr( $attributes['animation'] );
}

/**
 * Filters switcher block classes.
 *
 * @param array $block_elm_classes Classes which should be added to the block.
 * @param array $attributes Block attributes.
 */
$block_elm_classes = apply_filters( 'uikit_editor_blocks_switcher_classes', $block_elm_classes, $attributes );
?>
<div
    <?php if ( ! empty( $block_elm_classes ) ) : ?>
        class="<?php echo esc_attr( implode( ' ', $block_elm_classes ) ); ?>"
    <?php endif; ?>
>
    <?php if ( $attributes['navigationPosition'] == 'top' || $attributes['navigationPosition'] == 'bottom' ) : ?>
        <?php if ( $attributes['navigationPosition'] == 'top' ) : ?>
            <ul
                <?php if ( ! empty( $nav_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $nav_classes ) ); ?>"
                <?php endif; ?>
                <?php if ( $attributes['navigation'] == 'tabs' ) : ?>
                    data-uk-tab="
                    <?php if ( ! empty( $nav_data ) ) : ?>
                        <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                    <?php endif; ?>
                    "
                <?php else : ?>
                    data-uk-switcher="
                    <?php if ( ! empty( $nav_data ) ) : ?>
                        <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                    <?php endif; ?>
                    "
                <?php endif; ?>
            >
                <?php
                foreach ( $block->inner_blocks as $inner_block ) {
                    echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                }
                ?>
            </ul>
        <?php endif; ?>
        <div id="js-<?php echo esc_attr( $attributes['blockId'] ); ?>" class="uk-switcher">
            <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
        </div>
        <?php if ( $attributes['navigationPosition'] == 'bottom' ) : ?>
            <ul
                <?php if ( ! empty( $nav_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $nav_classes ) ); ?>"
                <?php endif; ?>
                <?php if ( $attributes['navigation'] == 'tabs' ) : ?>
                    data-uk-tab="
                    <?php if ( ! empty( $nav_data ) ) : ?>
                        <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                    <?php endif; ?>
                    "
                <?php else : ?>
                    data-uk-switcher="
                    <?php if ( ! empty( $nav_data ) ) : ?>
                        <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                    <?php endif; ?>
                    "
                <?php endif; ?>
            >
                <?php
                foreach ( $block->inner_blocks as $inner_block ) {
                    echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                }
                ?>
            </ul>
        <?php endif; ?>
    <?php else : ?>
        <div
            <?php if ( ! empty( $nav_grid_classes ) ) : ?>
                class="<?php echo esc_attr( implode( ' ', $nav_grid_classes ) ); ?>"
            <?php endif; ?>
            data-uk-grid
        >
            <?php if ( $attributes['navigationPosition'] == 'left' ) : ?>
            <div
                <?php if ( ! empty( $nav_grid_nav_column_classes ) ) : ?>
                    class="<?php echo esc_attr( implode( ' ', $nav_grid_nav_column_classes ) ); ?>"
                <?php endif; ?>
            >
                <ul
                    <?php if ( ! empty( $nav_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $nav_classes ) ); ?>"
                    <?php endif; ?>
                    <?php if ( $attributes['navigation'] == 'tabs' ) : ?>
                        data-uk-tab="
                        <?php if ( ! empty( $nav_data ) ) : ?>
                            <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                        <?php endif; ?>
                        "
                    <?php else : ?>
                        data-uk-switcher="
                        <?php if ( ! empty( $nav_data ) ) : ?>
                            <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                        <?php endif; ?>
                        "
                    <?php endif; ?>
                >
                    <?php
                    foreach ( $block->inner_blocks as $inner_block ) {
                        echo '<li><a href="#">' . esc_html( $inner_block->attributes['titleText'] ) . '</a></li>';
                    }
                    ?>
                </ul>
            </div>
            <div>
                <div id="js-<?php echo esc_attr( $attributes['blockId'] ); ?>" class="uk-switcher">
                    <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                </div>
            </div>
            <?php elseif( $attributes['navigationPosition'] == 'right' ) : ?>
                <div>
                    <div id="js-<?php echo esc_attr( $attributes['blockId'] ); ?>" class="uk-switcher">
                        <?php echo $content; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
                    </div>
                </div>
                <div
                    <?php if ( ! empty( $nav_grid_nav_column_classes ) ) : ?>
                        class="<?php echo esc_attr( implode( ' ', $nav_grid_nav_column_classes ) ); ?>"
                    <?php endif; ?>
                >
                    <ul
                        <?php if ( ! empty( $nav_classes ) ) : ?>
                            class="<?php echo esc_attr( implode( ' ', $nav_classes ) ); ?>"
                        <?php endif; ?>
                        <?php if ( $attributes['navigation'] == 'tabs' ) : ?>
                            data-uk-tab="
                            <?php if ( ! empty( $nav_data ) ) : ?>
                                <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                            <?php endif; ?>
                            "
                        <?php else : ?>
                            data-uk-switcher="
                            <?php if ( ! empty( $nav_data ) ) : ?>
                                <?php echo esc_attr( implode( '; ', $nav_data ) ); ?>
                            <?php endif; ?>
                            "
                        <?php endif; ?>
                    >
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
