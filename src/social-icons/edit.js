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

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InnerBlocks,
  InspectorControls,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/social-icons-item' ];

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

    if ( ! blockId ) {
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
        <div className={ className }>
          <InnerBlocks
            allowedBlocks={ ALLOWED_BLOCKS }
            renderAppender={false}
          />
          <Button
            onClick={() => {
              const newBlock = createBlock('uikit-editor-blocks/social-icons-item'); 
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
)( UikitSocialIconsEdit );
