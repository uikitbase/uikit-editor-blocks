// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  CheckboxControl,
  SelectControl,
  Button,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
  dispatch,
  select
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InnerBlocks,
  InspectorControls,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/accordion-item' ];

class UikitAccordionEdit extends Component {
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
      multiple,
      collapsible,
      contentStyle,
      contentTopMargin,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    const general = useGeneralBlockProps(attributes);
    const { className: generalClassName, ...generalDataAttrs } = general;

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        generalClassName,
        className
      ),
    };

    // Set accordion data attributes
    const accordionDataAttribute = [
      multiple ? 'multiple: 1' : '',
      `collapsible: ${collapsible ? 'true' : 'false'}`,
    ].filter(Boolean).join('; ');

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Accordion', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <CheckboxControl
              label={ __( 'Allow Multiple Open Items', 'uikit-editor-blocks' ) }
              checked={ multiple }
              onChange={ ( isChecked ) =>
                setAttributes( { multiple: isChecked } )
              }
            />
            <CheckboxControl
              label={ __( 'Start With All Items Closed', 'uikit-editor-blocks' ) }
              checked={ collapsible }
              onChange={ ( isChecked ) =>
                setAttributes( { collapsible: isChecked } )
              }
            />
          </PanelBody>
          <PanelBody title={ __( 'Content', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ contentStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Meta', 'uikit-editor-blocks' ), value: 'meta' },
                { label: __( 'Lead', 'uikit-editor-blocks' ), value: 'lead' },
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
        </InspectorControls>
        <div className={blockProps.className} {...generalDataAttrs} data-uk-accordion={`targets: div[data-type='uikit-editor-blocks/accordion-item'] > div; ${accordionDataAttribute}`}>
          <InnerBlocks
            allowedBlocks={ ALLOWED_BLOCKS }
            renderAppender={false}
          />
          <Button
            onClick={() => {
              const newBlock = createBlock('uikit-editor-blocks/accordion-item'); 
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
)( UikitAccordionEdit );
