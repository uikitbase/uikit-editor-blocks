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
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  InnerBlocks,
} = BlockEditor || Editor;

class UikitContainerEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      hasChildBlocks,
      clientId,
    } = this.props;

    const {
      blockId,
      size,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Container', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'Size', 'uikit-editor-blocks' ) }
              value={ size }
              options={
                [
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'X-Small', 'uikit-editor-blocks' ), value: 'xsmall' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                  { label: __( 'Expand', 'uikit-editor-blocks' ), value: 'expand' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( {
                  size: value,
                } );
              } }
            />
          </PanelBody>
        </InspectorControls>
        <div className={ className }>
          <InnerBlocks
            renderAppender={
              hasChildBlocks
                ? undefined
                : () => <InnerBlocks.ButtonBlockAppender />
            }
          />
        </div>
      </Fragment>
    );
  }
}

export default compose(
  withSelect( ( select, ownProps ) => {
    const { clientId } = ownProps;
    const { getBlockOrder } = select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

    return {
      hasChildBlocks: getBlockOrder( clientId ).length > 0,
    };
  } )
)( UikitContainerEdit );
