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
  Button,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

import UIkitIconInput from '../../components/UIkitIconInput.js';

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InspectorControls,
  InnerBlocks,
  useInnerBlocksProps,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/dropdown-item' ];

const DropdownInner = () => {
    const classes = ['uk-nav', 'uk-dropdown-nav'];

    const innerBlocksProps = useInnerBlocksProps( { className: classes }, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: false,
    } );

    return (
      <ul {...innerBlocksProps}>
        {innerBlocksProps.children}
      </ul>
    );
}

class UikitDropdownEdit extends Component {
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
      titleText,
      position,
      buttonSize,
      buttonStyle,
      buttonIcon,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = ['uk-inline'];

    const button_attrs   = [];
    const button_classes = [];

    const icon_attrs = [];

    const dropdown_attrs         = [];
    const dropdown_dropdown_data = [];

    const buttonSize_variants = {
      small: 'uk-button-small',
      large: 'uk-button-large',
    };

    const buttonStyle_variants = {
      default: 'uk-button-default',
      primary: 'uk-button-primary',
      secondary: 'uk-button-secondary',
      danger: 'uk-button-danger',
      text: 'uk-button-text',
      link: 'uk-button-link',
    };

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( buttonStyle ) {
      button_classes.push('uk-button');

      if ( buttonStyle_variants[buttonStyle] ) {
        button_classes.push( buttonStyle_variants[buttonStyle] );
      }

      if ( buttonSize && buttonSize_variants[buttonSize] ) {
        button_classes.push( buttonSize_variants[buttonSize] );
      }
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( button_classes.length ) {
      button_attrs.className = button_classes.join(' ');
    }

    if ( buttonIcon ) {
      icon_attrs['data-uk-icon'] = buttonIcon;
      icon_attrs.className = 'uk-margin-small-right';
    }

    if ( position ) {
      dropdown_attrs['data-uk-dropdown'] = position;
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
                { label: __( 'Top Left', 'uikit-editor-blocks' ), value: 'top-left' },
                { label: __( 'Top Center', 'uikit-editor-blocks' ), value: 'top-center' },
                { label: __( 'Top Right', 'uikit-editor-blocks' ), value: 'top-right' },
                { label: __( 'Bottom Left', 'uikit-editor-blocks' ), value: 'bottom-left' },
                { label: __( 'Bottom Center', 'uikit-editor-blocks' ), value: 'bottom-center' },
                { label: __( 'Bottom Right', 'uikit-editor-blocks' ), value: 'bottom-right' },
                { label: __( 'Left Top', 'uikit-editor-blocks' ), value: 'left-top' },
                { label: __( 'Left Center', 'uikit-editor-blocks' ), value: 'left-center' },
                { label: __( 'Left Bottom', 'uikit-editor-blocks' ), value: 'left-bottom' },
                { label: __( 'Right Top', 'uikit-editor-blocks' ), value: 'right-top' },
                { label: __( 'Right Center', 'uikit-editor-blocks' ), value: 'right-center' },
                { label: __( 'Right Bottom', 'uikit-editor-blocks' ), value: 'right-bottom' },
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
            <UIkitIconInput
              label={ __( 'Button Icon', 'uikit-editor-blocks' ) }
              help={ __( 'Enter icon name from UIkit or select one.', 'uikit-editor-blocks' ) }
              value={ buttonIcon || '' }
              onChange={ ( value ) =>
                setAttributes( { buttonIcon: value } )
              }
            />
          </PanelBody>
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs}>
          <a {...button_attrs}>
            { buttonIcon ? <span {...icon_attrs}></span> : null }
            { titleText }
            <span data-uk-drop-parent-icon></span>
          </a>
          <div {...dropdown_attrs}>
            <DropdownInner />
          </div>
        </div>
        <Button
          onClick={() => {
            const newBlock = createBlock('uikit-editor-blocks/dropdown-item'); 
            this.props.insertBlock(newBlock);
          }}
          className="uk-width-1-1 uk-flex uk-flex-center uk-margin"
        >
          <span data-uk-icon="plus" className="uk-icon-button"></span>
        </Button>
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
)( UikitDropdownEdit );
