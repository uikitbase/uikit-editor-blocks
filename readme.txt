=== UIkit Editor Blocks ===
Tags: uikit, block-editor, blocks
Requires at least: 6.0
Tested up to: 6.7.2
Requires PHP: 7.4
Stable tag: 1.0.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

UIkit Editor Blocks for WordPress. This plugin adds UIkit blocks to the WordPress Block Editor (Gutenberg).

== Description ==

UIkit Editor Blocks for WordPress. This plugin adds UIkit blocks to the WordPress Block Editor (Gutenberg).

= Features =

* Supports UIkit v3
* Support for CSS grid (experimental)
* Fully customizable with filters
* Configuration via option page or programmatically with constants
* Block templates can be overwritten in your theme

= Available Blocks =

**Accordion**
**Alert**
**Button**
**Card**
**Container**
**Divider**
**Dropdown**
**Grid**
**Heading**
**Icon**
**Image**
**Overlay**
**Overlay Slider**
**Panel**
**Panel Slider**
**Quotation**
**Section**
**Slideshow**
**Social Icons**
**Switcher**
**Text**

= Requirements =

* WordPress >= 6.0
* PHP >= 7.4

= Further Information =

* Documentation: [https://github.com/uikitbase/uikit-editor-blocks#readme](https://github.com/uikitbase/uikit-editor-blocks#readme)
* WordPress Plugin: [https://wordpress.org/plugins/uikit-editor-blocks/](https://wordpress.org/plugins/uikit-editor-blocks/)
* GitHub Repository: [https://github.com/uikitbase/uikit-editor-blocks](https://github.com/uikitbase/uikit-editor-blocks)
* Changelog: [https://github.com/uikitbase/uikit-editor-blocks/tags](https://github.com/uikitbase/uikit-editor-blocks/tags)
* Issue tracker: [https://github.com/uikitbase/uikit-editor-blocks/issues](https://github.com/uikitbase/uikit-editor-blocks/issues)

== Installation ==

1. Upload the `uikit-editor-blocks` directory into the `/wp-content/plugins/` directory
2. Activate the plugin through the `Plugins` menu in WordPress
3. Start adding blocks from the `UIkit Blocks` category

== External Services ==

This plugin utilizes external services to embed videos from YouTube and Vimeo. The integration is necessary to display video content in the plugin's features.

=== What services are used and why? ===
1. **YouTube**: 
 The plugin embeds YouTube videos by creating an iframe using the YouTube Embed API. This is used to display YouTube videos directly within the plugin's interface.

2. **Vimeo**:
 The plugin embeds Vimeo videos by fetching video metadata through Vimeo's oEmbed API. This is used to dynamically adjust the video dimensions and display Vimeo content within the plugin.

=== What data is sent and when? ===
1. **YouTube**:
 - The video ID (e.g., `https://www.youtube.com/watch?v=XYZ123` sends the `XYZ123` part) is sent as part of the iframe source URL.
 - No additional user data is sent from your website to YouTube during this process.

2. **Vimeo**:
 - A request is sent to the Vimeo oEmbed API (`https://vimeo.com/api/oembed.json`) to fetch metadata such as video width and height.
 - The video URL (e.g., `https://vimeo.com/123456789`) is included in this request.
 - No personal user data is included in the API request.

=== Links to terms of use and privacy policies: ===
- YouTube:
 - [Terms of Service](https://www.youtube.com/t/terms)
 - [Privacy Policy](https://policies.google.com/privacy)

- Vimeo:
 - [Terms of Service](https://vimeo.com/terms)
 - [Privacy Policy](https://vimeo.com/privacy)

By using this plugin, users agree to the terms and conditions of YouTube and Vimeo for any embedded video content.

== Screenshots ==

1. UIkit blocks.
2. UIkit blocks settings page.

== Changelog ==

= 1.0.4 =
* Added: "Icon Picker" for easy selection and integration of UIkit icons.
* Fixed: Accordion block now supports live preview in the Gutenberg editor.
* Fixed: Container block now supports live preview in the Gutenberg editor.
* Fixed: Icon block now supports live preview in the Gutenberg editor.
* Fixed: Section block now supports live preview in the Gutenberg editor.
* Improved: Enhanced styling for blocks that currently do not support live preview.

= 1.0.3 =
* Updated: UIkit framework to version 3.23.1.
* Fixed: Updated templates for Heading block.
* Added: UIkit now loads in the block editor for real-time styling.
* Added: New Alert block with live preview support.
* Fixed: Button block now supports live preview in the Gutenberg editor.
* Fixed: Card block now supports live preview in the Gutenberg editor.
* Fixed: Divider block now supports live preview in the Gutenberg editor.
* Fixed: Heading block now supports live preview in the Gutenberg editor.
* Fixed: Image block now supports live preview in the Gutenberg editor.
* Fixed: Text block now supports live preview in the Gutenberg editor.

= 1.0.2 =
* Fixed: Updated templates for Button and Image blocks.
* Fixed: Updated icons for blocks.
* Added: "Full Width" checkbox option to the Button block.
* Added: New Icon block.
* Added: New Quotation block.

= 1.0.1 =
* Fixed: UIkit CSS loading issue when settings are unsaved.

= 1.0.0 =
* Initial release.