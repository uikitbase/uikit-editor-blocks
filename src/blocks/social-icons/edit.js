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
  Button,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  dispatch,
  withDispatch,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InnerBlocks,
  InspectorControls,
  useInnerBlocksProps,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/social-icons-item' ];

const SocialIconsInner = ( { attributes, className } ) => {
    const {
      grid,
      gridBreakpoint,
      gridGap,
    } = attributes;

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs       = [];
    const wrapper_classes     = ['uk-child-width-auto', 'uk-flex-inline'];
    const wrapper_toggle_data = [];

    const grid_variants = {
      vertical: 'uk-flex-column',
    };

    const gridBreakpoint_variants = {
      small: '@s',
      medium: '@m',
      large: '@l',
      xlarge: '@xl',
    };

    const gridGap_variants = {
      small: 'uk-grid-small',
      medium: 'uk-grid-medium',
      large: 'uk-grid-large',
    };

    if ( grid && grid_variants[ grid ] ) {
      wrapper_classes.push( grid_variants[ grid ] );
    }

    if ( gridGap && gridGap_variants[ gridGap ] ) {
      wrapper_classes.push( gridGap_variants[ gridGap ] );
    }

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( grid === 'vertical' && gridBreakpoint !== '' ) {
      wrapper_toggle_data.push( 'cls: uk-flex-column' );
      wrapper_toggle_data.push( 'mode: media' );
      wrapper_toggle_data.push( 'media: ' + gridBreakpoint_variants[ gridBreakpoint ] );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    wrapper_attrs['data-uk-grid'] = '';

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( wrapper_toggle_data.length ) {
      wrapper_attrs['data-uk-toggle'] = wrapper_toggle_data.join( '; ' );
    }

    const innerBlocksProps = useInnerBlocksProps( wrapper_attrs, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: false,
    } );

    return (
      <div {...innerBlocksProps}>
        {innerBlocksProps.children}
      </div>
    );
}

class UikitSocialIconsEdit extends Component {
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
      linkStyle,
      grid,
      gridBreakpoint,
      gridGap,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Social Icons', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ linkStyle }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Button', 'uikit-editor-blocks' ), value: 'button' },
                { label: __( 'Link', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Link Muted', 'uikit-editor-blocks' ), value: 'link-muted' },
                { label: __( 'Link Text', 'uikit-editor-blocks' ), value: 'link-text' },
                { label: __( 'Link Reset', 'uikit-editor-blocks' ), value: 'link-reset' },
              ]}
              onChange={( value ) => {
                setAttributes( { linkStyle: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Grid', 'uikit-editor-blocks' ) }
              value={ grid }
              options={[
                { label: __( 'Horizontal', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Vertical', 'uikit-editor-blocks' ), value: 'vertical' },
              ]}
              onChange={( value ) => {
                setAttributes( { grid: value } );
              }}
            />
            { grid == 'vertical' &&
              <SelectControl 
                label={ __( 'Grid Breakpoint', 'uikit-editor-blocks' ) }
                value={ gridBreakpoint }
                options={[
                  { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                ]}
                onChange={( value ) => {
                  setAttributes( { gridBreakpoint: value } );
                }}
              />
            }
            <SelectControl 
              label={ __( 'Grid Gap', 'uikit-editor-blocks' ) }
              value={ gridGap }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={( value ) => {
                setAttributes( { gridGap: value } );
              }}
            />
          </PanelBody>
        </InspectorControls>
        <SocialIconsInner
          attributes={ attributes }
          className={ className }
        />
        <Button
          onClick={() => {
            const newBlock = createBlock('uikit-editor-blocks/social-icons-item'); 
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
)( UikitSocialIconsEdit );
