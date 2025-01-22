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
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
} from '@wordpress/data';
import { templateIconMissing} from '../icons';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  InnerBlocks,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/switcher-item' ];

class UikitSwitcherEdit extends Component {
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
      animation,
      navigation,
      navigationPosition,
      navigationAlignment,
      navigationMargin,
      navigationGridWidth,
      navigationGridColumnGap,
      navigationGridRowGap,
      navigationGridBreakpoint,
      navigationVerticalAlignment,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Switcher', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Animation', 'uikit-editor-blocks' ) }
              value={ animation }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
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
                setAttributes( { animation: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Navigation', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Navigation', 'uikit-editor-blocks' ) }
              value={ navigation }
              options={[
                { label: __( 'Tabs', 'uikit-editor-blocks' ), value: 'tabs' },
                { label: __( 'Subnav Pill (Nav)', 'uikit-editor-blocks' ), value: 'subnav-pill' },
                { label: __( 'Subnav Divider (Nav)', 'uikit-editor-blocks' ), value: 'subnav-divider' },
                { label: __( 'Subnav (Nav)', 'uikit-editor-blocks' ), value: 'subnav' },
              ]}
              onChange={( value ) => {
                setAttributes( { navigation: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Position', 'uikit-editor-blocks' ) }
              value={ navigationPosition }
              options={[
                { label: __( 'Top', 'uikit-editor-blocks' ), value: 'top' },
                { label: __( 'Bottom', 'uikit-editor-blocks' ), value: 'bottom' },
                { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
              ]}
              onChange={( value ) => {
                setAttributes( { navigationPosition: value } );
              }}
            />
            { ( navigationPosition == 'top' || navigationPosition == 'bottom' ) &&
              <SelectControl 
                label={ __( 'Alignment', 'uikit-editor-blocks' ) }
                value={ navigationAlignment }
                options={[
                  { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                  { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                  { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                  { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
                ]}
                onChange={( value ) => {
                  setAttributes( { navigationAlignment: value } );
                }}
              />
            }
            { ( navigationPosition == 'top' || navigationPosition == 'bottom' ) &&
              <SelectControl 
                label={ __( 'Margin', 'uikit-editor-blocks' ) }
                value={ navigationMargin }
                options={[
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                ]}
                onChange={( value ) => {
                  setAttributes( { navigationMargin: value } );
                }}
              />
            }
            { ( navigationPosition == 'left' || navigationPosition == 'right' ) && (
              <>
                <SelectControl 
                  label={ __( 'Grid Width', 'uikit-editor-blocks' ) }
                  value={ navigationGridWidth }
                  options={[
                    { label: __( 'Auto', 'uikit-editor-blocks' ), value: 'auto' },
                    { label: __( '50%', 'uikit-editor-blocks' ), value: '1-2' },
                    { label: __( '33%', 'uikit-editor-blocks' ), value: '1-3' },
                    { label: __( '25%', 'uikit-editor-blocks' ), value: '1-4' },
                    { label: __( '20%', 'uikit-editor-blocks' ), value: '1-5' },
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridWidth: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Grid Column Gap', 'uikit-editor-blocks' ) }
                  value={ navigationGridColumnGap }
                  options={[
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridColumnGap: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Grid Row Gap', 'uikit-editor-blocks' ) }
                  value={ navigationGridRowGap }
                  options={[
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridRowGap: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Grid Breakpoint', 'uikit-editor-blocks' ) }
                  value={ navigationGridBreakpoint }
                  options={[
                    { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridBreakpoint: value } );
                  }}
                />
                <CheckboxControl
                  label={ __( 'Vertical Alignment', 'uikit-editor-blocks' ) }
                  checked={ navigationVerticalAlignment }
                  onChange={ ( isChecked ) =>
                    setAttributes( { navigationVerticalAlignment: isChecked } )
                  }
                />
              </>
            )}
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
)( UikitSwitcherEdit );
