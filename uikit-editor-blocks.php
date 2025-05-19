<?php
/**
 * Plugin Name: UIkit Editor Blocks
 * Plugin URI: https://github.com/uikitbase/uikit-editor-blocks
 * Description: UIkit Editor Blocks for WordPress. This plugin adds UIkit blocks to the WordPress Block Editor (Gutenberg).
 * Author: UIkitBase
 * Author URI: https://uikitbase.com/
 * Version: 1.0.5
 * License: GPL2+
 * License URI: https://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain: uikit-editor-blocks
 * Domain Path: /languages/
 *
 * @package uikit-editor-blocks
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

// Define UIKIT_EDITOR_BLOCKS_PLUGIN_FILE.
if ( ! defined( 'UIKIT_EDITOR_BLOCKS_PLUGIN_FILE' ) ) {
    define( 'UIKIT_EDITOR_BLOCKS_PLUGIN_FILE', __FILE__ );
}

if ( ! defined( 'UIKIT_EDITOR_BLOCKS_PLUGIN_URL' ) ) {
    define( 'UIKIT_EDITOR_BLOCKS_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

// Include the main Uikit_Editor_Blocks class.
if ( ! class_exists( \Uikit_Editor_Blocks\Uikit_Editor_Blocks::class ) ) {
    require_once plugin_dir_path( UIKIT_EDITOR_BLOCKS_PLUGIN_FILE ) . 'src/class-uikit-editor-blocks.php';
}

// Initialize plugin
\Uikit_Editor_Blocks\Uikit_Editor_Blocks::instance();