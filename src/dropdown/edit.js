// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  TextControl,
  SelectControl,
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

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/dropdown-item' ];

class UikitDropdownEdit extends Component {
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
      titleText,
      position,
      buttonSize,
      buttonStyle,
      buttonIcon,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
            <TextControl
            label={ __( 'Title', 'uikit-editor-blocks' ) }
              value={ titleText }
              onChange={( value ) => {
                setAttributes( { titleText: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Dropdown', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Position', 'uikit-editor-blocks' ) }
              value={ position }
              options={[
                { label: __( 'top-left', 'uikit-editor-blocks' ), value: 'top-left' },
                { label: __( 'top-center', 'uikit-editor-blocks' ), value: 'top-center' },
                { label: __( 'top-right', 'uikit-editor-blocks' ), value: 'top-right' },
                { label: __( 'bottom-left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                { label: __( 'bottom-center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                { label: __( 'bottom-right', 'uikit-editor-blocks' ), value: 'bottom-right' },
                { label: __( 'left-top', 'uikit-editor-blocks' ), value: 'left-top' },
                { label: __( 'left-center', 'uikit-editor-blocks' ), value: 'left-center' },
                { label: __( 'left-bottom', 'uikit-editor-blocks' ), value: 'left-bottom' },
                { label: __( 'right-top', 'uikit-editor-blocks' ), value: 'right-top' },
                { label: __( 'right-center', 'uikit-editor-blocks' ), value: 'right-center' },
                { label: __( 'right-bottom', 'uikit-editor-blocks' ), value: 'right-bottom' },
              ]}
              onChange={( value ) => {
                setAttributes( { position: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Button', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Button Size', 'uikit-editor-blocks' ) }
              value={ buttonSize }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={( value ) => {
                setAttributes( { buttonSize: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Button Style', 'uikit-editor-blocks' ) }
              value={ buttonStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                { label: __( 'Text', 'uikit-editor-blocks' ), value: 'text' },
                { label: __( 'Link', 'uikit-editor-blocks' ), value: 'link' },
              ]}
              onChange={( value ) => {
                setAttributes( { buttonStyle: value } );
              }}
            />
            <TextControl
            label={ __( 'Button Icon', 'uikit-editor-blocks' ) }
              value={ buttonIcon }
              onChange={( value ) => {
                setAttributes( { buttonIcon: value } );
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
)( UikitDropdownEdit );
