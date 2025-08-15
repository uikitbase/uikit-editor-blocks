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
  CheckboxControl,
  TextControl,
  Button,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
  dispatch,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  InnerBlocks,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/panel-slider-item' ];

let gapSizeOptions = [
  { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
  { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
  { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
];

let ItemWidthSizeOptions = [
  { label: __( 'Inherit', 'uikit-editor-blocks' ), value: '' },
  { label: __( '100%', 'uikit-editor-blocks' ), value: '1-1' },
  { label: __( '83%', 'uikit-editor-blocks' ), value: '5-6' },
  { label: __( '80%', 'uikit-editor-blocks' ), value: '4-5' },
  { label: __( '60%', 'uikit-editor-blocks' ), value: '3-5' },
  { label: __( '50%', 'uikit-editor-blocks' ), value: '1-2' },
  { label: __( '33%', 'uikit-editor-blocks' ), value: '1-3' },
  { label: __( '25%', 'uikit-editor-blocks' ), value: '1-4' },
  { label: __( '20%', 'uikit-editor-blocks' ), value: '1-5' },
  { label: __( '16%', 'uikit-editor-blocks' ), value: '1-6' },
];

class UikitPanelSliderEdit extends Component {
  render() {
    const {
      className,
      attributes,
      setAttributes,
      columns,
      updateBlockAttributes,
      hasChildBlocks,
      clientId,
    } = this.props;

    const {
      blockId,
      sliderWidth,
      sliderGap,
      sliderDivider,
      sliderDefaultWidth,
      sliderSmallWidth,
      sliderMediumWidth,
      sliderLargeWidth,
      sliderXlargeWidth,
      sliderAutoplay,
      navigation,
      navigationPosition,
      navigationMargin,
      navigationBreakpoint,
      navigationColor,
      slidenavPosition,
      slidenavMargin,
      slidenavBreakpoint,
      slidenavColor,
      panelStyle,
      panelPadding,
      panelMatch,
      panelLink,
      imageWidth,
      imageHeight,
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

    const general = useGeneralBlockProps(attributes);
    const { className: generalClassName, ...generalDataAttrs } = general;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Slider', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Item Width Mode', 'uikit-editor-blocks' ) }
              value={ sliderWidth }
              options={[
                { label: __( 'Fixed', 'uikit-editor-blocks' ), value: 'fixed' },
                { label: __( 'Auto', 'uikit-editor-blocks' ), value: 'auto' },
              ]}
              onChange={( value ) => {
                setAttributes( { sliderWidth: value } );
              }}
            />
            <SelectControl
              label={ __( 'Column Gap', 'uikit-editor-blocks' ) }
              value={ sliderGap }
              options={ gapSizeOptions }
              onChange={ ( value ) => {
                setAttributes( {
                  sliderGap: value,
                } );
              } }
            />
            <CheckboxControl
              label={ __( 'Show Divider', 'uikit-editor-blocks' ) }
              checked={ sliderDivider }
              onChange={ ( isChecked ) =>
                setAttributes( { sliderDivider: isChecked } )
              }
            />
          </PanelBody>
          { sliderWidth != 'auto' &&
            <PanelBody title={ __( 'Items', 'uikit-editor-blocks' ) } initialOpen={ false }>
              <SelectControl 
                label={ __( 'Phone Portrait', 'uikit-editor-blocks' ) }
                value={ sliderDefaultWidth }
                options={ ItemWidthSizeOptions.filter((item) => item.value !== '') }
                onChange={( value ) => {
                  setAttributes( { sliderDefaultWidth: value } );
                }}
              />
              <SelectControl 
                label={ __( 'Phone Landscape', 'uikit-editor-blocks' ) }
                value={ sliderSmallWidth }
                options={ ItemWidthSizeOptions }
                onChange={( value ) => {
                  setAttributes( { sliderSmallWidth: value } );
                }}
              />
              <SelectControl 
                label={ __( 'Tablet Landscape', 'uikit-editor-blocks' ) }
                value={ sliderMediumWidth }
                options={ ItemWidthSizeOptions }
                onChange={( value ) => {
                  setAttributes( { sliderMediumWidth: value } );
                }}
              />
              <SelectControl 
                label={ __( 'Desktop', 'uikit-editor-blocks' ) }
                value={ sliderLargeWidth }
                options={ ItemWidthSizeOptions }
                onChange={( value ) => {
                  setAttributes( { sliderLargeWidth: value } );
                }}
              />
              <SelectControl 
                label={ __( 'Large Screens', 'uikit-editor-blocks' ) }
                value={ sliderXlargeWidth }
                options={ ItemWidthSizeOptions }
                onChange={( value ) => {
                  setAttributes( { sliderXlargeWidth: value } );
                }}
              />
            </PanelBody>
          }
          <PanelBody title={ __( 'Animation', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <CheckboxControl
              label={ __( 'Autoplay', 'uikit-editor-blocks' ) }
              checked={ sliderAutoplay }
              onChange={ ( isChecked ) =>
                setAttributes( { sliderAutoplay: isChecked } )
              }
            />
          </PanelBody>
          <PanelBody title={ __( 'Navigation', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Navigation Settings', 'uikit-editor-blocks' ) }
              value={ navigation }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Dotnav', 'uikit-editor-blocks' ), value: 'dotnav' },
                //{ label: __( 'Thumbnav', 'uikit-editor-blocks' ), value: 'thumbnav' },
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
                    { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                    { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                    { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationPosition: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Margin', 'uikit-editor-blocks' ) }
                  value={ navigationMargin }
                  options={[
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                    
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationMargin: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Breakpoint', 'uikit-editor-blocks' ) }
                  value={ navigationBreakpoint }
                  options={[
                    { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationBreakpoint: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Color', 'uikit-editor-blocks' ) }
                  value={ navigationColor }
                  options={[
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Light', 'uikit-editor-blocks' ), value: 'light' },
                    { label: __( 'Dark', 'uikit-editor-blocks' ), value: 'dark' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationColor: value } );
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
                  { label: __( 'Outsite', 'uikit-editor-blocks' ), value: 'outside' },
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                ]}
                onChange={( value ) => {
                  setAttributes( { slidenavPosition: value } );
                }}
              />
            { slidenavPosition != '' && (
              <>
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
                <SelectControl 
                  label={ __( 'Breakpoint', 'uikit-editor-blocks' ) }
                  value={ slidenavBreakpoint }
                  options={[
                    { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { slidenavBreakpoint: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Color', 'uikit-editor-blocks' ) }
                  value={ slidenavColor }
                  options={[
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Light', 'uikit-editor-blocks' ), value: 'light' },
                    { label: __( 'Dark', 'uikit-editor-blocks' ), value: 'dark' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { slidenavColor: value } );
                  }}
                />
              </>
            )}
          </PanelBody>
          <PanelBody title={ __( 'Panel', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ panelStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
                { label: __( 'Card Default', 'uikit-editor-blocks' ), value: 'card-default' },
                { label: __( 'Card Primary', 'uikit-editor-blocks' ), value: 'card-primary' },
                { label: __( 'Card Secondary', 'uikit-editor-blocks' ), value: 'card-secondary' },
                { label: __( 'Card Hover', 'uikit-editor-blocks' ), value: 'card-hover' },
                { label: __( 'Tile Default', 'uikit-editor-blocks' ), value: 'tile-default' },
                { label: __( 'Tile Muted', 'uikit-editor-blocks' ), value: 'tile-muted' },
                { label: __( 'Tile Primary', 'uikit-editor-blocks' ), value: 'tile-primary' },
                { label: __( 'Tile Secondary', 'uikit-editor-blocks' ), value: 'tile-secondary' },
              ]}
              onChange={( value ) => {
                setAttributes( { panelStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Padding', 'uikit-editor-blocks' ) }
              value={ panelPadding }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={( value ) => {
                setAttributes( { panelPadding: value } );
              }}
            />
            <CheckboxControl
              label={ __( 'Match Height', 'uikit-editor-blocks' ) }
              checked={ panelMatch }
              onChange={ ( isChecked ) =>
                setAttributes( { panelMatch: isChecked } )
              }
            />
            <CheckboxControl
              label={ __( 'Link Panel', 'uikit-editor-blocks' ) }
              checked={ panelLink }
              onChange={ ( isChecked ) => {
                setAttributes( { panelLink: isChecked } )
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Image', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <TextControl
              label={ __( 'Width', 'uikit-editor-blocks' ) }
              value={ imageWidth }
              placeholder= { __( 'Auto', 'uikit-editor-blocks' ) }
              onChange={ ( value ) => {
                setAttributes( {
                  imageWidth: value,
                } );
              } }
            />
            <TextControl
              label={ __( 'Height', 'uikit-editor-blocks' ) }
              value={ imageHeight }
              placeholder= { __( 'Auto', 'uikit-editor-blocks' ) }
              onChange={ ( value ) => {
                setAttributes( {
                  imageHeight: value,
                } );
              } }
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
            renderAppender={false}
          />
          <Button
            onClick={() => {
              const newBlock = createBlock('uikit-editor-blocks/panel-slider-item'); 
              this.props.insertBlock(newBlock);
            }}
            className="uk-width-1-1 uk-flex uk-flex-center"
          >
                <span data-uk-icon="plus" class="uk-icon-button"></span>
          </Button>
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

const applyWithDispatch = withDispatch( ( dispatch, ownProps ) => {
  const { clientId } = ownProps;

  const { updateBlockAttributes, insertBlock } = dispatch( 'core/block-editor' ) || dispatch( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  return {
    updateBlockAttributes,
    insertBlock: (block) => insertBlock(block, undefined, clientId),
  };
} );

export default compose(
  applyWithSelect,
  applyWithDispatch
)( UikitPanelSliderEdit );
