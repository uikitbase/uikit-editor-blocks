// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  SelectControl,
  TextControl,
  BaseControl,
  __experimentalNumberControl as NumberControl,
  CheckboxControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
  dispatch,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  InnerBlocks,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/slideshow-item' ];

class UikitSlideshowEdit extends Component {
  render() {
    const {
      className,
      attributes,
      setAttributes,
      columns,
      updateBlockAttributes,
      clientId,
    } = this.props;

    const {
      blockId,
      height,
      heightViewport,
      ratio,
      minHeight,
      maxHeight,
      textColor,
      boxShadow,
      animation,
      autoplay,
      navigation,
      navigationPosition,
      navigationMargin,
      slidenavPosition,
      slidenavMargin,
      overlayContainerWidth,
      overlayContainerPadding,
      overlayMargin,
      overlayPosition,
      overlayStyle,
      overlayPadding,
      overlayWidth,
      overlayAnimation,
      titleStyle,
      titleDecoration,
      titleColor,
      titleElement,
      titleTopMargin,
      metaStyle,
      metaColor,
      metaAlignment,
      metaElement,
      metaTopMargin,
      contentStyle,
      contentTopMargin,
      linkStyle,
      linkButtonSize,
      linkTopMargin,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Slideshow', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Height', 'uikit-editor-blocks' ) }
              value={ height }
              options={[
                { label: __( 'Auto', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Viewport', 'uikit-editor-blocks' ), value: 'viewport' },
                //{ label: __( 'Viewport (Minus 20%)', 'uikit-editor-blocks' ), value: 'viewport-offset-bottom-20' },
              ]}
              onChange={( value ) => {
                setAttributes( { height: value } );
              }}
            />
            { height === 'viewport' &&
              <TextControl
                label={ __( 'Height Viewport', 'uikit-editor-blocks' ) }
                placeholder={ __( '100', 'uikit-editor-blocks' ) }
                value={ heightViewport }
                onChange={( value ) => {
                  setAttributes( { heightViewport: value } );
                }}
              />
            }
            { height === '' &&
              <TextControl
                label={ __( 'Ratio', 'uikit-editor-blocks' ) }
                placeholder={ __( '16:9', 'uikit-editor-blocks' ) }
                value={ ratio }
                onChange={( value ) => {
                  setAttributes( { ratio: value } );
                }}
              />
            }
            <BaseControl>
              <NumberControl
                label={ __( 'Min Height', 'uikit-editor-blocks' ) }
                value={ minHeight }
                onChange={ ( value ) => {
                  setAttributes( {
                    minHeight: value,
                  } );
                } }
              />
            </BaseControl>
            { height === '' &&
              <BaseControl>
                <NumberControl
                  label={ __( 'Max Height', 'uikit-editor-blocks' ) }
                  value={ maxHeight }
                  onChange={ ( value ) => {
                    setAttributes( {
                      maxHeight: value,
                    } );
                  } }
                />
              </BaseControl>
            }
            <SelectControl 
              label={ __( 'Text Color', 'uikit-editor-blocks' ) }
              value={ textColor }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Light', 'uikit-editor-blocks' ), value: 'light' },
                { label: __( 'Dark', 'uikit-editor-blocks' ), value: 'dark' },
              ]}
              onChange={( value ) => {
                setAttributes( { textColor: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Box Shadow', 'uikit-editor-blocks' ) }
              value={ boxShadow }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { boxShadow: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Animation', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Transition', 'uikit-editor-blocks' ) }
              value={ animation }
              options={[
                { label: __( 'Slide', 'uikit-editor-blocks' ), value: 'slide' },
                { label: __( 'Pull', 'uikit-editor-blocks' ), value: 'pull' },
                { label: __( 'Push', 'uikit-editor-blocks' ), value: 'push' },
                { label: __( 'Fade', 'uikit-editor-blocks' ), value: 'fade' },
                { label: __( 'Scale', 'uikit-editor-blocks' ), value: 'scale' },
              ]}
              onChange={( value ) => {
                setAttributes( { animation: value } );
              }}
            />
            <CheckboxControl
              label={ __( 'Autoplay', 'uikit-editor-blocks' ) }
              checked={ autoplay }
              onChange={ ( isChecked ) =>
                setAttributes( { autoplay: isChecked } )
              }
            />
          </PanelBody>
          <PanelBody title={ __( 'Navigation', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Navigation', 'uikit-editor-blocks' ) }
              value={ navigation }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Dotnav', 'uikit-editor-blocks' ), value: 'dotnav' },
              ]}
              onChange={( value ) => {
                setAttributes( { navigation: value } );
              }}
            />
            { navigation != '' && (
              <>
                <SelectControl 
                  label={ __( 'Position', 'uikit-editor-blocks' ) }
                  value={ navigationPosition }
                  options={[
                    { label: __( 'Top Left', 'uikit-editor-blocks' ), value: 'top-left' },
                    { label: __( 'Top Right', 'uikit-editor-blocks' ), value: 'top-right' },
                    { label: __( 'Center Left', 'uikit-editor-blocks' ), value: 'center-left' },
                    { label: __( 'Center Right', 'uikit-editor-blocks' ), value: 'center-right' },
                    { label: __( 'Bottom Left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                    { label: __( 'Bottom Center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                    { label: __( 'Bottom Right', 'uikit-editor-blocks' ), value: 'bottom-right' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationPosition: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Margin', 'uikit-editor-blocks' ) }
                  value={ navigationMargin }
                  options={[
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationMargin: value } );
                  }}
                />
              </>
            )}
          </PanelBody>
          <PanelBody title={ __( 'Slidenav', 'uikit-editor-blocks' ) } initialOpen={ false }>
              <SelectControl 
                label={ __( 'Position', 'uikit-editor-blocks' ) }
                value={ slidenavPosition }
                options={[
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                  { label: __( 'Top Left', 'uikit-editor-blocks' ), value: 'top-left' },
                  { label: __( 'Top Right', 'uikit-editor-blocks' ), value: 'top-right' },
                  { label: __( 'Center Left', 'uikit-editor-blocks' ), value: 'center-left' },
                  { label: __( 'Center Right', 'uikit-editor-blocks' ), value: 'center-right' },
                  { label: __( 'Bottom Left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                  { label: __( 'Bottom Center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                  { label: __( 'Bottom Right', 'uikit-editor-blocks' ), value: 'bottom-right' },
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                ]}
                onChange={( value ) => {
                  setAttributes( { slidenavPosition: value } );
                }}
              />
            { slidenavPosition != '' &&
              <SelectControl 
                label={ __( 'Margin', 'uikit-editor-blocks' ) }
                value={ slidenavMargin }
                options={[
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                ]}
                onChange={( value ) => {
                  setAttributes( { slidenavMargin: value } );
                }}
              />
            }
          </PanelBody>
          <PanelBody title={ __( 'Overlay', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Container Width', 'uikit-editor-blocks' ) }
              value={ overlayContainerWidth }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( 'Expand', 'uikit-editor-blocks' ), value: 'expand' },
              ]}
              onChange={( value ) => {
                setAttributes( { overlayContainerWidth: value } );
              }}
            />
            { overlayContainerWidth != '' &&
              <SelectControl 
                label={ __( 'Container Padding', 'uikit-editor-blocks' ) }
                value={ overlayContainerPadding }
                options={[
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                  { label: __( 'X-Small', 'uikit-editor-blocks' ), value: 'xsmall' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                ]}
                onChange={( value ) => {
                  setAttributes( { overlayContainerPadding: value } );
                }}
              />
            }
            { overlayContainerWidth == '' &&
              <SelectControl 
                label={ __( 'Margin', 'uikit-editor-blocks' ) }
                value={ overlayMargin }
                options={[
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                ]}
                onChange={( value ) => {
                  setAttributes( { overlayMargin: value } );
                }}
              />
            }
            <SelectControl 
              label={ __( 'Position', 'uikit-editor-blocks' ) }
              value={ overlayPosition }
              options={[
                { label: __( 'Top', 'uikit-editor-blocks' ), value: 'top' },
                { label: __( 'Bottom', 'uikit-editor-blocks' ), value: 'bottom' },
                { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                { label: __( 'Top Left', 'uikit-editor-blocks' ), value: 'top-left' },
                { label: __( 'Top Center', 'uikit-editor-blocks' ), value: 'top-center' },
                { label: __( 'Top Right', 'uikit-editor-blocks' ), value: 'top-right' },
                { label: __( 'Center Left', 'uikit-editor-blocks' ), value: 'center-left' },
                { label: __( 'Center Center', 'uikit-editor-blocks' ), value: 'center-center' },
                { label: __( 'Center Right', 'uikit-editor-blocks' ), value: 'center-right' },
                { label: __( 'Bottom Left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                { label: __( 'Bottom Center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                { label: __( 'Bottom Right', 'uikit-editor-blocks' ), value: 'bottom-right' },
              ]}
              onChange={( value ) => {
                setAttributes( { overlayPosition: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ overlayStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Overlay Default', 'uikit-editor-blocks' ), value: 'overlay-default' },
                { label: __( 'Overlay Primary', 'uikit-editor-blocks' ), value: 'overlay-primary' },
                { label: __( 'Tile Default', 'uikit-editor-blocks' ), value: 'tile-default' },
                { label: __( 'Tile Muted', 'uikit-editor-blocks' ), value: 'tile-muted' },
                { label: __( 'Tile Primary', 'uikit-editor-blocks' ), value: 'tile-primary' },
                { label: __( 'Tile Secondary', 'uikit-editor-blocks' ), value: 'tile-secondary' },
              ]}
              onChange={( value ) => {
                setAttributes( { overlayStyle: value } );
              }}
            />
            { overlayStyle != '' &&
              <SelectControl 
                label={ __( 'Padding', 'uikit-editor-blocks' ) }
                value={ overlayPadding }
                options={[
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                ]}
                onChange={( value ) => {
                  setAttributes( { overlayPadding: value } );
                }}
              />
            }
            <SelectControl 
              label={ __( 'Width', 'uikit-editor-blocks' ) }
              value={ overlayWidth }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( '2X-Large', 'uikit-editor-blocks' ), value: '2xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { overlayWidth: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Animation', 'uikit-editor-blocks' ) }
              value={ overlayAnimation }
              options={[
                { label: __( 'Fade', 'uikit-editor-blocks' ), value: 'fade' },
                { label: __( 'Scale Up', 'uikit-editor-blocks' ), value: 'scale-up' },
                { label: __( 'Scale Down', 'uikit-editor-blocks' ), value: 'scale-down' },
                { label: __( 'Slide Top Small', 'uikit-editor-blocks' ), value: 'slide-top-small' },
                { label: __( 'Slide Bottom Small', 'uikit-editor-blocks' ), value: 'slide-bottom-small' },
                { label: __( 'Slide Left Small', 'uikit-editor-blocks' ), value: 'slide-left-small' },
                { label: __( 'Slide Right Small', 'uikit-editor-blocks' ), value: 'slide-right-small' },
                { label: __( 'Slide Top Medium', 'uikit-editor-blocks' ), value: 'slide-top-medium' },
                { label: __( 'Slide Bottom Medium', 'uikit-editor-blocks' ), value: 'slide-bottom-medium' },
                { label: __( 'Slide Left Medium', 'uikit-editor-blocks' ), value: 'slide-left-medium' },
                { label: __( 'Slide Right Medium', 'uikit-editor-blocks' ), value: 'slide-right-medium' },
                { label: __( 'Slide Top 100%', 'uikit-editor-blocks' ), value: 'slide-top' },
                { label: __( 'Slide Bottom 100%', 'uikit-editor-blocks' ), value: 'slide-bottom' },
                { label: __( 'Slide Left 100%', 'uikit-editor-blocks' ), value: 'slide-left' },
                { label: __( 'Slide Right 100%', 'uikit-editor-blocks' ), value: 'slide-right' },
              ]}
              onChange={( value ) => {
                setAttributes( { overlayAnimation: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Title', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ titleStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Decoration', 'uikit-editor-blocks' ) }
              value={ titleDecoration }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Divider', 'uikit-editor-blocks' ), value: 'divider' },
                { label: __( 'Bullet', 'uikit-editor-blocks' ), value: 'bullet' },
                { label: __( 'Line', 'uikit-editor-blocks' ), value: 'line' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleDecoration: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Color', 'uikit-editor-blocks' ) }
              value={ titleColor }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                { label: __( 'Emphasis', 'uikit-editor-blocks' ), value: 'emphasis' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                { label: __( 'Success', 'uikit-editor-blocks' ), value: 'success' },
                { label: __( 'Warning', 'uikit-editor-blocks' ), value: 'warning' },
                { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                { label: __( 'Background', 'uikit-editor-blocks' ), value: 'background' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleColor: value } );
              }}
            />
            <SelectControl 
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ titleElement }
              options={[
                { label: __( 'H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Div', 'uikit-editor-blocks' ), value: 'div' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleElement: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ titleTopMargin }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleTopMargin: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Meta', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ metaStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Color', 'uikit-editor-blocks' ) }
              value={ metaColor }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                { label: __( 'Emphasis', 'uikit-editor-blocks' ), value: 'emphasis' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                { label: __( 'Success', 'uikit-editor-blocks' ), value: 'success' },
                { label: __( 'Warning', 'uikit-editor-blocks' ), value: 'warning' },
                { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                { label: __( 'Background', 'uikit-editor-blocks' ), value: 'background' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaColor: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Alignment', 'uikit-editor-blocks' ) }
              value={ metaAlignment }
              options={[
                { label: __( 'Above Title', 'uikit-editor-blocks' ), value: 'above-title' },
                { label: __( 'Below Title', 'uikit-editor-blocks' ), value: 'below-title' },
                { label: __( 'Below Content', 'uikit-editor-blocks' ), value: 'below-content' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaAlignment: value } );
              }}
            />
            <SelectControl 
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ metaElement }
              options={[
                { label: __( 'H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Div', 'uikit-editor-blocks' ), value: 'div' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaElement: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ metaTopMargin }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { metaTopMargin: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Content', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ contentStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
              ]}
              onChange={( value ) => {
                setAttributes( { contentStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ contentTopMargin }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { contentTopMargin: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Link', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ linkStyle }
              options={[
                { label: __( 'Button Default', 'uikit-editor-blocks' ), value: 'button-default' },
                { label: __( 'Button Primary', 'uikit-editor-blocks' ), value: 'button-primary' },
                { label: __( 'Button Secondary', 'uikit-editor-blocks' ), value: 'button-secondary' },
                { label: __( 'Button Danger', 'uikit-editor-blocks' ), value: 'button-danger' },
                { label: __( 'Button Text', 'uikit-editor-blocks' ), value: 'button-text' },
                { label: __( 'Link', 'uikit-editor-blocks' ), value: 'link' },
                { label: __( 'Link Muted', 'uikit-editor-blocks' ), value: 'link-muted' },
                { label: __( 'Link Text', 'uikit-editor-blocks' ), value: 'link-text' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkStyle: value } );
              }}
            />
            { ( linkStyle == 'button-default' || linkStyle == 'button-primary' || linkStyle == 'button-secondary' || linkStyle == 'button-danger' || linkStyle == 'button-text' ) &&
            <SelectControl 
              label={ __( 'Button Size', 'uikit-editor-blocks' ) }
              value={ linkButtonSize }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkButtonSize: value } );
              }}
            />
            }
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ linkTopMargin }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkTopMargin: value } );
              }}
            />
          </PanelBody>
        </InspectorControls>
        <div className={ className }>
          <InnerBlocks
            allowedBlocks={ ALLOWED_BLOCKS }
          />
        </div>
      </Fragment>
    );
  }
}

const applyWithSelect = withSelect( ( select, { clientId } ) => {
  const { getBlocksByClientId } = select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  const columns = getBlocksByClientId( clientId )[ 0 ]
    ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
    : [];

  return {
    columns,
  };
} );

const applyWithDispatch = withDispatch( ( dispatch ) => {
  const { updateBlockAttributes } = dispatch( 'core/block-editor' ) || dispatch( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  return {
    updateBlockAttributes,
  };
} );

export default compose(
  applyWithSelect,
  applyWithDispatch
)( UikitSlideshowEdit );
