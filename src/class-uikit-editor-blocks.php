<?php
/**
 * Main class
 *
 * @package uikit-editor-blocks
 */

namespace Uikit_Editor_Blocks;

use Uikit_Editor_Blocks\Accordion\Accordion_Block_Type;
use Uikit_Editor_Blocks\Accordion_Item\Accordion_Item_Block_Type;
use Uikit_Editor_Blocks\Button\Button_Block_Type;
use Uikit_Editor_Blocks\Card\Card_Block_Type;
use Uikit_Editor_Blocks\Container\Container_Block_Type;
use Uikit_Editor_Blocks\Divider\Divider_Block_Type;
use Uikit_Editor_Blocks\Dropdown\Dropdown_Block_Type;
use Uikit_Editor_Blocks\Dropdown_Item\Dropdown_Item_Block_Type;
use Uikit_Editor_Blocks\Grid\Grid_Block_Type;
use Uikit_Editor_Blocks\Grid_Column\Grid_Column_Block_Type;
use Uikit_Editor_Blocks\Heading\Heading_Block_Type;
use Uikit_Editor_Blocks\Image\Image_Block_Type;
use Uikit_Editor_Blocks\Overlay\Overlay_Block_Type;
use Uikit_Editor_Blocks\Overlay_Slider\Overlay_Slider_Block_Type;
use Uikit_Editor_Blocks\Overlay_Slider_Item\Overlay_Slider_Item_Block_Type;
use Uikit_Editor_Blocks\Panel\Panel_Block_Type;
use Uikit_Editor_Blocks\Panel_Slider\Panel_Slider_Block_Type;
use Uikit_Editor_Blocks\Panel_Slider_Item\Panel_Slider_Item_Block_Type;
use Uikit_Editor_Blocks\Section\Section_Block_Type;
use Uikit_Editor_Blocks\Slideshow\Slideshow_Block_Type;
use Uikit_Editor_Blocks\Slideshow_Item\Slideshow_Item_Block_Type;
use Uikit_Editor_Blocks\Social_Icons\Social_Icons_Block_Type;
use Uikit_Editor_Blocks\Social_Icons_Item\Social_Icons_Item_Block_Type;
use Uikit_Editor_Blocks\Switcher\Switcher_Block_Type;
use Uikit_Editor_Blocks\Switcher_Item\Switcher_Item_Block_Type;
use Uikit_Editor_Blocks\Text\Text_Block_Type;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

/**
 * Class Uikit_Editor_Blocks
 */
class Uikit_Editor_Blocks {

    /**
     * Uikit_Editor_Blocks instance.
     *
     * @var Uikit_Editor_Blocks
     */
    protected static $instance = null;

    /**
     * The plugin version number.
     *
     * @var string
     */
    public static $version = '1.0.1';

    /**
     * The plugin token.
     *
     * @var string
     */
    public $token = 'uikit-editor-blocks';

    /**
     * The plugin assets directory.
     *
     * @var string
     */
    public $assets_dir;

    /**
     * The plugin assets URL.
     *
     * @var string
     */
    public $assets_url;

    /**
     * The plugin languages directory.
     *
     * @var string
     */
    public $languages_dir;

    /**
     * The full path to the plugin languages directory.
     *
     * @var string
     */
    public $languages_dir_full;

    /**
     * Uikit_Editor_Blocks constructor.
     */
    public function __construct() {
        $this->define_constants();
        $this->init_plugin_environment();
        $this->includes();
        $this->init_hooks();
        $this->register_block_types();
        Settings::init( $this->assets_dir, $this->assets_url );
        General::init();
    }

    /**
     * Define plugin constants.
     */
    protected function define_constants() {
        if ( ! defined( 'UIKIT_EDITOR_BLOCKS_ABSPATH' ) ) {
            define( 'UIKIT_EDITOR_BLOCKS_ABSPATH', trailingslashit( dirname( UIKIT_EDITOR_BLOCKS_PLUGIN_FILE ) ) );
        }
    }

    /**
     * Initializes plugin environment variables
     */
    protected function init_plugin_environment() {
        // Load plugin environment variables
        $this->assets_dir = UIKIT_EDITOR_BLOCKS_ABSPATH . 'build/';
        $this->assets_url = esc_url( trailingslashit( plugins_url( '/build/', UIKIT_EDITOR_BLOCKS_PLUGIN_FILE ) ) );
        $this->languages_dir = dirname( plugin_basename( UIKIT_EDITOR_BLOCKS_PLUGIN_FILE ) ) . '/languages/';
        $this->languages_dir_full = plugin_dir_path( UIKIT_EDITOR_BLOCKS_PLUGIN_FILE ) . 'languages/';
    }

    /**
     * Include required core files.
     */
    public function includes() {
        // Load plugin class files
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/uikit-editor-blocks-functions.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/class-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/settings/class-settings.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/general/class-general.php';

        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/accordion/class-accordion-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/accordion-item/class-accordion-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/button/class-button-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/card/class-card-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/container/class-container-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/divider/class-divider-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/dropdown/class-dropdown-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/dropdown-item/class-dropdown-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/grid/class-grid-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/grid-column/class-grid-column-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/heading/class-heading-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/image/class-image-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/overlay/class-overlay-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/overlay-slider/class-overlay-slider-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/overlay-slider-item/class-overlay-slider-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/panel/class-panel-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/panel-slider/class-panel-slider-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/panel-slider-item/class-panel-slider-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/section/class-section-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/slideshow/class-slideshow-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/slideshow-item/class-slideshow-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/social-icons/class-social-icons-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/social-icons-item/class-social-icons-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/switcher/class-switcher-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/switcher-item/class-switcher-item-block-type.php';
        require_once UIKIT_EDITOR_BLOCKS_ABSPATH . 'src/text/class-text-block-type.php';
    }

    /**
     * Initializes hooks.
     */
    protected function init_hooks() {
        // Hook: Editor assets.
        add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_block_editor_assets' ), 99 );

        // Register custom block category
        if ( class_exists( 'WP_Block_Editor_Context' ) ) {
            // Class WP_Block_Editor_Context does only exist in WP >= 5.8
            add_filter( 'block_categories_all', array( $this, 'register_custom_block_category' ), 10, 2 );
        } else {
            add_filter( 'block_categories', array( $this, 'register_custom_block_category_old' ), 10, 2 );
        }

        // Initialize translations
        add_action( 'enqueue_block_editor_assets', array( $this, 'set_script_translations' ), 100 ); // this needs to be enqueued after enqueue_block_editor_assets (priority 100)

        // check version number on each request
        add_action( 'init', array( $this, 'check_version' ) );
        
        add_action( 'wp_enqueue_scripts', array( $this, 'wp_enqueue_scripts' ), 0 ); // 0 is important to overvide uikit css to theme
    }

    /**
     * Load editor block assets.
     */
    public function enqueue_block_editor_assets() {
        // Scripts.
        $index_path = $this->assets_dir . 'index.js';
        $index_url = esc_url( $this->assets_url ) . 'index.js';
        $index_asset_file = $this->assets_dir . 'index.asset.php';
        $index_asset = file_exists( $index_asset_file )
            ? require_once $index_asset_file
            : null;

        $index_dependencies = isset( $index_asset['dependencies'] ) ? $index_asset['dependencies'] : array();
        global $wp_version;
        $wp_editor_dependency_to_remove = version_compare( $wp_version, '5.2', '<' ) ? 'wp-block-editor' : 'wp-editor';
        $index_dependencies = array_filter(
            $index_dependencies,
            function ( $dependency ) use ( $wp_editor_dependency_to_remove ) {
                return $wp_editor_dependency_to_remove !== $dependency;
            }
        );

        $index_version = isset( $index_asset['version'] ) ? $index_asset['version'] : filemtime( $index_path );

        wp_enqueue_script(
            $this->token . '-js', // Handle.
            $index_url,
            $index_dependencies,
            $index_version,
            true // Enqueue the script in the footer.
        );
        
        // Styles.
        wp_enqueue_style(
            $this->token . '-editor-styles', // Handle.
            esc_url( $this->assets_url ) . 'index.css', // Block editor CSS.
            array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
            self::$version
        );
    }

    /**
     * Register custom block category
     *
     * @param array[]                  $block_categories     Array of categories for block types.
     * @param \WP_Block_Editor_Context $block_editor_context The current block editor context.
     *
     * @return array
     */
    public function register_custom_block_category( $block_categories, $block_editor_context ) {
        return $this->add_custom_block_category( $block_categories );
    }

    /**
     * Register custom block category (Pre WP 5.8)
     *
     * @param array    $categories List of all registered categories.
     * @param \WP_Post $post    Current post object.
     *
     * @return array
     */
    public function register_custom_block_category_old( $categories, $post ) {
        return $this->add_custom_block_category( $categories );
    }

    /**
     * Adds custom block category to given categories array
     *
     * @param array $block_categories List of all registered categories.
     *
     * @return array
     */
    protected function add_custom_block_category( $block_categories ) {
        return array_merge(
            $block_categories,
            array(
                array(
                    'slug' => 'uikit-editor-blocks',
                    'title' => __( 'Uikit Blocks', 'uikit-editor-blocks' ),
                ),
            )
        );
    }

    /**
     * Initialize plugin script translations
     */
    public function set_script_translations() {
        $domain = 'uikit-editor-blocks'; // textdomain can't be stored in class variable since it must be a single string literal
        wp_set_script_translations( $this->token . '-js', $domain, $this->languages_dir_full );
    }

    /**
     * Register block types
     */
    public function register_block_types() {
        new Accordion_Block_Type();
        new Accordion_Item_Block_Type();
        new Button_Block_Type();
        new Card_Block_Type();
        new Container_Block_Type();
        new Divider_Block_Type();
        new Dropdown_Block_Type();
        new Dropdown_Item_Block_Type();
        new Grid_Block_Type();
        new Grid_Column_Block_Type();
        new Heading_Block_Type();
        new Image_Block_Type();
        new Overlay_Block_Type();
        new Overlay_Slider_Block_Type();
        new Overlay_Slider_Item_Block_Type();
        new Panel_Block_Type();
        new Panel_Slider_Block_Type();
        new Panel_Slider_Item_Block_Type();
        new Section_Block_Type();
        new Slideshow_Block_Type();
        new Slideshow_Item_Block_Type();
        new Social_Icons_Block_Type();
        new Social_Icons_Item_Block_Type();
        new Switcher_Block_Type();
        new Switcher_Item_Block_Type();
        new Text_Block_Type();
    }

    /**
     * Main Uikit_Editor_Blocks Instance
     * Ensures only one instance of Uikit_Editor_Blocks is loaded or can be loaded.
     *
     * @return Uikit_Editor_Blocks Plugin instance
     */
    public static function instance() {
        if ( is_null( self::$instance ) ) {
            self::$instance = new self();
        }

        return self::$instance;
    }

    /**
     * Cloning is forbidden.
     */
    public function __clone() {
        _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'uikit-editor-blocks' ), esc_attr( self::$version ) );
    }

    /**
     * Unserializing instances of this class is forbidden.
     */
    public function __wakeup() {
        _doing_it_wrong( __FUNCTION__, esc_html__( 'Cheatin&#8217; huh?', 'uikit-editor-blocks' ), esc_attr( self::$version ) );
    }

    /**
     * Checks plugin version.
     *
     * This check is done on all requests and runs if the versions do not match.
     */
    public function check_version() {
        if ( defined( 'IFRAME_REQUEST' ) ) {
            return;
        }

        $transient_name = 'uikit_editor_blocks_version';

        $old_version = get_transient( $transient_name );
        if ( false === $old_version ) {
            $old_version = get_option( $this->token . '_version' );
            set_transient( $transient_name, $old_version, 5 * MINUTE_IN_SECONDS );
        }
        $new_version = self::$version;
        if ( $old_version !== $new_version ) {
            $this->log_version_number();
            delete_transient( $transient_name );

            /**
             * Fires when a new version of the plugin is used for the first time.
             *
             * @since 1.0.0
             *
             * @param string $new_version New version number.
             * @param string $old_version Old version number.
             */
            do_action( $this->token . '_updated', $new_version, $old_version );
        }
    }

    /**
     * Sets the current plugin version number in database.
     */
    protected function log_version_number() {
        delete_option( $this->token . '_version' );
        update_option( $this->token . '_version', self::$version );
    }
    
    public function wp_enqueue_scripts() {
        $uikit_theme = get_option( 'uikit-editor-blocks_uikit_theme' );
        $exclude_load_uikit_components = get_option( 'uikit-editor-blocks_exclude_load_uikit_components' );

        if( ! Settings::is_load_uikit_files_enabled() ) {
            return;
        }

        wp_enqueue_style( 'uikit', UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/css/' . ( $uikit_theme ? $uikit_theme : 'uikit' ) . ( is_rtl() ? '-rtl' : '' ) . '.css', array(), self::$version );

        if( ! Settings::is_exclude_load_uikit_icons_enabled() ) {
            wp_enqueue_script( 'uikit-icons', UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/js/uikit-icons.js', array( 'uikit' ), self::$version, false );
        }

        if( ! Settings::is_exclude_load_uikit_components_enabled() ) {
            wp_enqueue_script( 'uikit', UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/js/uikit.js', array(), self::$version, false );
        } else {
            wp_enqueue_script( 'uikit', UIKIT_EDITOR_BLOCKS_PLUGIN_URL . 'assets/js/uikit-core.js', array(), self::$version, false );

            $components = array(
                'countdown',
                'filter',
                'lightbox',
                'lightbox-panel',
                'notification',
                'parallax',
                'slider',
                'slider-parallax',
                'slideshow',
                'slideshow-parallax',
                'sortable',
                'tooltip',
                'upload',
            );

            foreach( $components as $component ) {
                if( ! in_array( $component, $exclude_load_uikit_components ) ) {
                    wp_enqueue_script( "uikit-$component", UIKIT_EDITOR_BLOCKS_PLUGIN_URL . "assets/js/components/$component.js", array( 'uikit' ), self::$version, false );
                }
            }
        }
    }
}