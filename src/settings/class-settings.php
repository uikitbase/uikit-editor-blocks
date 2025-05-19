<?php
/**
 * Uikit_Editor_Blocks settings page
 *
 * @package uikit-editor-blocks
 */

namespace Uikit_Editor_Blocks;

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


if ( ! class_exists( '\Uikit_Editor_Blocks\Settings', false ) ) :
    /**
     * Class Settings
     */
    class Settings {

        /**
         * Prefix for plugin settings.
         *
         * @var string
         */
        const OPTION_PREFIX = 'uikit-editor-blocks_';

        /**
         * Menu slug.
         *
         * @var string
         */
        const MENU_SLUG = 'uikit-editor-blocks_settings';

        /**
         * Name of enable CSS grid constant.
         *
         * @var string
         */
        const LOAD_UIKIT_FILES_CONSTANT_NAME = 'UIKIT_EDITOR_BLOCKS_LOAD_UIKIT_FILES';
        const UIKIT_THEME_CONSTANT_NAME = 'UIKIT_EDITOR_BLOCKS_UIKIT_THEME';
        const EXCLUDE_LOAD_UIKIT_ICONS_CONSTANT_NAME = 'UIKIT_EDITOR_BLOCKS_EXCLUDE_LOAD_UIKIT_ICONS';
        const EXCLUDE_LOAD_UIKIT_COMPONENTS_CONSTANT_NAME = 'UIKIT_EDITOR_BLOCKS_EXCLUDE_LOAD_UIKIT_COMPONENTS';

        /**
         * Name of enable CSS grid option.
         *
         * @var string
         */
        const LOAD_UIKIT_FILES_OPTION_NAME = self::OPTION_PREFIX . 'load_uikit_files';
        const UIKIT_THEME_OPTION_NAME = self::OPTION_PREFIX . 'uikit_theme';
        const EXCLUDE_LOAD_UIKIT_ICONS_OPTION_NAME = self::OPTION_PREFIX . 'exclude_load_uikit_icons';
        const EXCLUDE_LOAD_UIKIT_COMPONENTS_OPTION_NAME = self::OPTION_PREFIX . 'exclude_load_uikit_components';

        /**
         * Default enable CSS grid value.
         *
         * @var boolean
         */
        const LOAD_UIKIT_FILES_DEFAULT_VALUE = true;
        const UIKIT_THEME_DEFAULT_VALUE = 'uikit';
        const EXCLUDE_LOAD_UIKIT_ICONS_DEFAULT_VALUE = false;
        const EXCLUDE_LOAD_UIKIT_COMPONENTS_DEFAULT_VALUE = array();

        /**
         * The plugin assets directory.
         *
         * @var string
         */
        public static $assets_dir = '';

        /**
         * The plugin assets URL.
         *
         * @var string
         */
        public static $assets_url = '';

        /**
         * True if settings are already initialized.
         *
         * @var bool
         */
        private static $initialized = false;

        /**
         * Settings constructor.
         *
         * @param string $assets_dir The plugin assets directory.
         * @param string $assets_url The plugin assets URL.
         */
        public static function init( $assets_dir, $assets_url ) {
            if ( ! self::$initialized ) {
                self::$assets_dir = $assets_dir;
                self::$assets_url = $assets_url;

                // Add settings page to menu
                add_action( 'admin_menu', array( __CLASS__, 'add_menu_item' ) );

                // Register plugin settings
                add_action( 'admin_init', array( __CLASS__, 'register_settings' ) );

                // Add settings link to plugin list table
                add_filter(
                    'plugin_action_links_' . plugin_basename( UIKIT_EDITOR_BLOCKS_PLUGIN_FILE ),
                    array(
                        __CLASS__,
                        'add_settings_link',
                    )
                );

                // Filter saving of enable css grid option
                add_filter( 'pre_update_option_' . self::LOAD_UIKIT_FILES_OPTION_NAME, array( __CLASS__, 'pre_update_option_load_uikit_files_enabled' ), 10, 2 );
                add_filter( 'pre_update_option_' . self::UIKIT_THEME_OPTION_NAME, array( __CLASS__, 'pre_update_option_uikit_theme_selected' ), 10, 2 );
                add_filter( 'pre_update_option_' . self::EXCLUDE_LOAD_UIKIT_ICONS_OPTION_NAME, array( __CLASS__, 'pre_update_option_exclude_load_uikit_icons_enabled' ), 10, 2 );
                add_filter( 'pre_update_option_' . self::EXCLUDE_LOAD_UIKIT_COMPONENTS_OPTION_NAME, array( __CLASS__, 'pre_update_option_exclude_load_uikit_components_selected' ), 10, 2 );
                // Enqueue settings stylesheet
                add_action( 'admin_enqueue_scripts', array( __CLASS__, 'enqueue_styles' ) );

                self::$initialized = true;
            }
        }

        /**
         * Enqueue settings specific styles.
         *
         * @param string $hook Hook of current screen.
         */
        public static function enqueue_styles( $hook ) {
            if ( 'settings_page_' . self::MENU_SLUG !== $hook ) {
                return;
            }

            $settings_styles_path = self::$assets_dir . 'settings.css';
            $settings_styles_url = esc_url( self::$assets_url ) . 'settings.css';
            $settings_asset_file = self::$assets_dir . 'settings.asset.php';
            $settings_asset = file_exists( $settings_asset_file )
                ? require_once $settings_asset_file
                : null;
            $settings_version = isset( $settings_asset['version'] ) ? $settings_asset['version'] : filemtime( $settings_styles_path );

            wp_register_style( self::MENU_SLUG . '_styles', $settings_styles_url, false, $settings_version );
            wp_enqueue_style( self::MENU_SLUG . '_styles' );
        }

        /**
         * Add settings page to admin menu.
         */
        public static function add_menu_item() {
            add_options_page( __( 'UIkit Blocks Settings', 'uikit-editor-blocks' ), __( 'UIkit Blocks', 'uikit-editor-blocks' ), 'manage_options', self::MENU_SLUG, array( __CLASS__, 'settings_page' ) );
        }

        /**
         * Add settings link to plugin list table.
         *
         * @param  array $links Existing links.
         *
         * @return array Modified links
         */
        public static function add_settings_link( $links ) {
            $settings_link = '<a href="' . esc_url( admin_url( 'options-general.php?page=' . self::MENU_SLUG ) ) . '">' . esc_html__( 'Settings', 'uikit-editor-blocks' ) . '</a>';
            // add settings link as first element
            array_unshift( $links, $settings_link );

            return $links;
        }

        /**
         * Register plugin settings.
         */
        public static function register_settings() {
            $section = 'default';

            $settings_fields = array(
                array(
                    'option_name' => self::LOAD_UIKIT_FILES_OPTION_NAME,
                    'label' => __( 'Load UIkit Files', 'uikit-editor-blocks' ),
                    'description' => __( 'Load UIkit CSS and JS files from this plugin in theme.', 'uikit-editor-blocks' ),
                    'type' => 'checkbox',
                    'default' => self::LOAD_UIKIT_FILES_DEFAULT_VALUE,
                    'constant_name' => self::LOAD_UIKIT_FILES_CONSTANT_NAME,
                    'disabled' => false,
                ),

                array(
                    'option_name' => self::UIKIT_THEME_OPTION_NAME,
                    'label' => __( 'UIkit Theme', 'uikit-editor-blocks' ),
                    'type' => 'select',
                    'default' => self::UIKIT_THEME_DEFAULT_VALUE,
                    'constant_name' => self::UIKIT_THEME_CONSTANT_NAME,
                    'disabled' => false,
                    'options' => array(
                        'uikit'           => 'UIkit',
                        'uikit-core'      => 'UIkit Core',
                        'uikit-uikitbase' => 'UIKitBase',
                    ),
                ),

                array(
                    'option_name' => self::EXCLUDE_LOAD_UIKIT_ICONS_OPTION_NAME,
                    'label' => __( 'Exclude Load UIkit Icons', 'uikit-editor-blocks' ),
                    'type' => 'checkbox',
                    'default' => self::EXCLUDE_LOAD_UIKIT_ICONS_DEFAULT_VALUE,
                    'constant_name' => self::EXCLUDE_LOAD_UIKIT_ICONS_CONSTANT_NAME,
                    'disabled' => false,
                ),
                array(
                    'option_name' => self::EXCLUDE_LOAD_UIKIT_COMPONENTS_OPTION_NAME,
                    'label' => __( 'Exclude Load UIkit Components', 'uikit-editor-blocks' ),
                    'type' => 'select-multiple',
                    'default' => self::EXCLUDE_LOAD_UIKIT_COMPONENTS_DEFAULT_VALUE,
                    'constant_name' => self::EXCLUDE_LOAD_UIKIT_COMPONENTS_CONSTANT_NAME,
                    'disabled' => false,
                    'options' => array(
                        'countdown'          => 'Countdown',
                        'filter'             => 'Filter',
                        'lightbox'           => 'Lightbox',
                        'lightbox-panel'     => 'Lightbox Panel',
                        'notification'       => 'Notification',
                        'parallax'           => 'Parallax',
                        'slider'             => 'Slider',
                        'slider-parallax'    => 'Slider Parallax',
                        'slideshow'          => 'Slideshow',
                        'slideshow-parallax' => 'Slideshow Parallax',
                        'sortable'           => 'Sortable',
                        'tooltip'            => 'Tooltip',
                        'upload'             => 'Upload',
                    ),
                ),
            );

            // Add section to page
            add_settings_section(
                $section,
                __( 'Main settings', 'uikit-editor-blocks' ),
                array(
                    __CLASS__,
                    'settings_section',
                ),
                self::MENU_SLUG
            );

            foreach ( $settings_fields as $field ) {
                // Register field with sanitize callback
                register_setting(
                    self::MENU_SLUG,
                    $field['option_name'],
                    function( $value ) use ( $field ) {
                        return self::sanitize_callback( $value, $field );
                    }
                );

                $field_args = array(
                    'field' => $field,
                );
                // add label_for argument to all fields which haven't an additional label
                if ( 'radio' !== $field['type'] ) {
                    $field_args['label_for'] = $field['option_name'];
                }

                // Add field to page
                add_settings_field(
                    $field['option_name'],
                    $field['label'],
                    array(
                        __CLASS__,
                        'display_field',
                    ),
                    self::MENU_SLUG,
                    $section,
                    $field_args
                );
            }
        }

        /**
         * Sanitize callback for settings fields.
         *
         * @param mixed $value The value to be sanitized.
         * @param array $field The field data.
         *
         * @return mixed The sanitized value.
         */
        public static function sanitize_callback( $value, $field ) {
            switch ( $field['type'] ) {
                case 'checkbox':
                    // For checkbox, return boolean value
                    return $value === '1' ? 1 : 0;

                case 'select-multiple':
                    // For select-multiple, sanitize each array element
                    return is_array( $value ) ? array_map( 'sanitize_text_field', $value ) : array();

                case 'text':
                case 'url':
                case 'email':
                case 'textarea':
                case 'select':
                case 'radio':
                    // For text, url, email, textarea, select, and radio, sanitize as text
                    return sanitize_text_field( $value );

                default:
                    // Fallback sanitization
                    return sanitize_text_field( $value );
            }
        }

        /**
         * Print settings section.
         *
         * @param array $section Settings section.
         */
        public static function settings_section( $section ) {
        }

        /**
         * Load settings page content.
         */
        public static function settings_page() {
            if ( ! current_user_can( 'manage_options' ) ) {
                wp_die( esc_html__( 'You do not have sufficient permissions to access this page.', 'uikit-editor-blocks' ) );
            }
            ?>
            <div class="wrap" id="<?php echo esc_attr( self::MENU_SLUG ); ?>">
                <h1><?php esc_html_e( 'UIkit Blocks Settings', 'uikit-editor-blocks' ); ?></h1>

                <form method="post" action="options.php" enctype="multipart/form-data">
                    <?php
                    // Get settings fields
                    settings_fields( self::MENU_SLUG );
                    do_settings_sections( self::MENU_SLUG );
                    submit_button();
                    ?>
                </form>

            </div><!--end #wrap -->
            <?php
        }

        /**
         * Generate HTML for displaying fields
         *
         * @param array $data Additional data which is added in add_settings_field() method.
         */
        public static function display_field( $data = array() ) {
            // Get field info
            if ( ! isset( $data['field'] ) ) {
                _doing_it_wrong( __FUNCTION__, esc_html__( 'Field data missing.', 'uikit-editor-blocks' ), esc_attr( Uikit_Editor_Blocks::$version ) );
            }

            $field = $data['field'];

            $is_option_constant_set = ! empty( $field['constant_name'] ) && defined( $field['constant_name'] );
            if ( $is_option_constant_set ) {
                $option_value = constant( $field['constant_name'] );
                $disabled = true;
            } else {
                if ( isset( $field['default'] ) ) {
                    $option_value = get_option( $field['option_name'], $field['default'] );
                } else {
                    $option_value = get_option( $field['option_name'], '' );
                }
                $disabled = array_key_exists( 'disabled', $field ) ? $field['disabled'] : false;
            }

            $placeholder = ( array_key_exists( 'placeholder', $field ) ? $field['placeholder'] : '' );
            $html = '';

            switch ( $field['type'] ) {
                case 'text':
                case 'url':
                case 'email':
                    $html .= '<input id="' . esc_attr( $field['option_name'] ) . '" type="text" name="' . esc_attr( $field['option_name'] ) . '" placeholder="' . esc_attr( $placeholder ) . '" value="' . esc_attr( $option_value ) . '" ' . disabled( $disabled, true, false ) . '/>' . "\n";
                    break;

                case 'textarea':
                    $html .= '<textarea id="' . esc_attr( $field['option_name'] ) . '" rows="5" cols="50" name="' . esc_attr( $field['option_name'] ) . '" placeholder="' . esc_attr( $placeholder ) . '" ' . disabled( $disabled, true, false ) . '>' . $option_value . '</textarea>' . "\n";
                    break;

                case 'checkbox':
                    $html .= '<input id="' . esc_attr( $field['option_name'] ) . '" type="checkbox" name="' . esc_attr( $field['option_name'] ) . '" value="1" ' . checked( '1', $option_value, false ) . ' ' . disabled( $disabled, true, false ) . '/>' . "\n";
                    break;

                case 'radio':
                    foreach ( $field['options'] as $k => $v ) {
                        $html .= '<p><label for="' . esc_attr( $field['option_name'] . '_' . $k ) . '"><input type="radio" id="' . esc_attr( $field['option_name'] . '_' . $k ) . '" name="' . esc_attr( $field['option_name'] ) . '" value="' . esc_attr( $k ) . '" ' . checked( strval( $k ), strval( $option_value ), false ) . ' ' . disabled( $disabled, true, false ) . ' /> ' . $v . '</label></p>' . "\n";
                    }
                    break;

                case 'select':
                    $html .= '<select name="' . esc_attr( $field['option_name'] ) . '" id="' . esc_attr( $field['option_name'] ) . '"' . disabled( $disabled, true, false ) . '>' . "\n";
                    foreach ( $field['options'] as $k => $v ) {
                        $html .= '<option ' . selected( strval( $k ), strval( $option_value ), false ) . ' value="' . esc_attr( $k ) . '">' . $v . '</option>' . "\n";
                    }
                    $html .= '</select>' . "\n";
                    break;

                case 'select-multiple':
                    $html .= '<select name="' . esc_attr( $field['option_name'] ) . '[]" id="' . esc_attr( $field['option_name'] ) . '[]"' . disabled( $disabled, true, false ) . ' multiple size=13>' . "\n";
                    foreach ( $field['options'] as $k => $v ) {
                        $html .= '<option ' . selected( is_array( $option_value ) && in_array( strval( $k ), $option_value ), true, false ) . ' value="' . esc_attr( $k ) . '">' . esc_html( $v ) . '</option>' . "\n";
                    }
                    $html .= '</select>' . "\n";
                    break;
            }

            if ( array_key_exists( 'description', $field ) ) {
                $html .= '<p class="description">' . esc_html( $field['description'] ) . '</p>' . "\n";
            }

            if ( $is_option_constant_set ) {
                $html .= '<p class="description constant-notice">' .
                    sprintf(
                        // translators: %s contains constant name
                        esc_html_x(
                            'Option is defined in the following constant: %s',
                            '%s contains constant name',
                            'uikit-editor-blocks'
                        ),
                        '<code>' . esc_html( $field['constant_name'] ) . '</code>'
                    ) . '</p>' . "\n";
            }

            // @codingStandardsIgnoreStart
            echo wp_kses( $html, array(
                'input' => array(
                    'id' => true,
                    'type' => true,
                    'name' => true,
                    'placeholder' => true,
                    'value' => true,
                    'disabled' => true,
                    'checked' => true,
                ),
                'textarea' => array(
                    'id' => true,
                    'rows' => true,
                    'cols' => true,
                    'name' => true,
                    'placeholder' => true,
                    'disabled' => true,
                ),
                'label' => array(
                    'for' => true,
                ),
                'p' => array(
                    'class' => true,
                ),
                'code' => array(),
                'select' => array(
                    'name' => true,
                    'id' => true,
                    'disabled' => true,
                    'multiple' => true,
                    'size' => true,
                ),
                'option' => array(
                    'selected' => true,
                    'value' => true,
                ),
            ) );
            // @codingStandardsIgnoreEnd
        }

        /**
         * Only enable CSS grid if uikit version is >= 5 and always use constant value if set.
         *
         * @param string $new_value The new, unserialized option value.
         * @param string $old_value The old option value.
         *
         * @return string
         */
        public static function pre_update_option_load_uikit_files_enabled( $new_value, $old_value ) {
            return defined( self::LOAD_UIKIT_FILES_CONSTANT_NAME ) ? boolval( constant( self::LOAD_UIKIT_FILES_CONSTANT_NAME ) ) : $new_value;
        }

        public static function pre_update_option_uikit_theme_selected( $new_value, $old_value ) {
            return defined( self::UIKIT_THEME_CONSTANT_NAME ) ? constant( self::UIKIT_THEME_CONSTANT_NAME ) : $new_value;
        }

        public static function pre_update_option_exclude_load_uikit_icons_enabled( $new_value, $old_value ) {
            return defined( self::EXCLUDE_LOAD_UIKIT_ICONS_CONSTANT_NAME ) ? boolval( constant( self::EXCLUDE_LOAD_UIKIT_ICONS_CONSTANT_NAME ) ) : $new_value;
        }

        public static function pre_update_option_exclude_load_uikit_components_selected( $new_value, $old_value ) {
            return defined( self::EXCLUDE_LOAD_UIKIT_COMPONENTS_CONSTANT_NAME ) ? boolval( constant( self::EXCLUDE_LOAD_UIKIT_COMPONENTS_CONSTANT_NAME ) ) : $new_value;
        }

        /**
         * Get enable CSS grid option.
         *
         * @return boolean Enable CSS grid value from options.
         */
        public static function is_load_uikit_files_enabled() {
            return boolval( self::get_option( self::LOAD_UIKIT_FILES_OPTION_NAME, self::LOAD_UIKIT_FILES_CONSTANT_NAME, self::LOAD_UIKIT_FILES_DEFAULT_VALUE ) );
        }

        public static function is_exclude_load_uikit_icons_enabled() {
            return boolval( self::get_option( self::EXCLUDE_LOAD_UIKIT_ICONS_OPTION_NAME, self::EXCLUDE_LOAD_UIKIT_ICONS_CONSTANT_NAME, self::EXCLUDE_LOAD_UIKIT_ICONS_DEFAULT_VALUE ) );
        }

        public static function is_exclude_load_uikit_components_enabled() {
            return boolval( self::get_option( self::EXCLUDE_LOAD_UIKIT_COMPONENTS_OPTION_NAME, self::EXCLUDE_LOAD_UIKIT_COMPONENTS_CONSTANT_NAME, self::EXCLUDE_LOAD_UIKIT_COMPONENTS_DEFAULT_VALUE ) );
        }

        /**
         * Get option value in the following order:
         * - from constant if defined
         * - from database
         * - default value
         *
         * @param string $option_name Name of option.
         * @param string $constant_name Name of constant.
         * @param mixed  $default_value Default value if option is not set.
         *
         * @return mixed
         */
        public static function get_option( $option_name, $constant_name, $default_value ) {
            return defined( $constant_name ) ? constant( $constant_name ) : get_option( $option_name, $default_value );
        }

    }
endif;
