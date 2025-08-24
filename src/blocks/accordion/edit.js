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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InnerBlocks,
  InspectorControls,
  useInnerBlocksProps,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/accordion-item' ];

const AccordionInner = ( { attributes, className } ) => {
    const {
      multiple,
      collapsible,
    } = attributes;

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs          = [];
    const wrapper_classes        = [];
    const wrapper_accordion_data = [];

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( multiple ) {
      wrapper_accordion_data.push( 'multiple: 1' );
    }

    if ( collapsible ) {
      wrapper_accordion_data.push( 'collapsible: true' );
    } else {
      wrapper_accordion_data.push( 'collapsible: false' );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    wrapper_attrs['data-uk-accordion'] = wrapper_accordion_data.join( '; ' );

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <AccordionInner
          attributes={ attributes }
          className={ className }
        />
        <Button
          onClick={() => {
            const newBlock = createBlock('uikit-editor-blocks/accordion-item'); 
            this.props.insertBlock(newBlock);
            this.props.clearSelectedBlock();
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

  const { updateBlockAttributes, insertBlock, clearSelectedBlock } = dispatch( 'core/block-editor' ) || dispatch( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  return {
    updateBlockAttributes,
    insertBlock: (block) => insertBlock(block, undefined, clientId),
    clearSelectedBlock,
  };
} );

export default compose(
  applyWithSelect,
  applyWithDispatch
)( UikitAccordionEdit );
