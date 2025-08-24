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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = ['uk-container'];

    const size_variants = {
      xsmall: 'uk-container-xsmall',
      small: 'uk-container-small',
      large: 'uk-container-large',
      xlarge: 'uk-container-xlarge',
      expand: 'uk-container-expand',
    };

    if ( size && size_variants[size] ) {
      wrapper_classes.push( size_variants[size] );
    }

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs} >
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
