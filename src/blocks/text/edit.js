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
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  BlockControls,
  AlignmentToolbar,
  RichText,
  InspectorControls,
} = BlockEditor || Editor;

class UikitTextEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      clientId,
    } = this.props;

    const {
      blockId,
      text,
      dropCap,
      style,
      color,
      size,
      element,
      alignment,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const style_variants = {
      lead: 'uk-text-lead',
      meta: 'uk-text-meta',
    };

    const color_variants = {
      muted: 'uk-text-muted',
      emphasis: 'uk-text-emphasis',
      primary: 'uk-text-primary',
      secondary: 'uk-text-secondary',
      success: 'uk-text-success',
      warning: 'uk-text-warning',
      danger: 'uk-text-danger',
    };

    const size_variants = {
      small: 'uk-text-small',
      large: 'uk-text-large',
    };

    const alignment_variants = {
      left: 'uk-text-left',
      center: 'uk-text-center',
      right: 'uk-text-right',
    };

    if ( dropCap ) {
      wrapper_classes.push( 'uk-dropcap' );
    }

    if ( style && style_variants[ style ] ) {
      wrapper_classes.push( style_variants[ style ] );
    }

    if ( color && color_variants[ color ] ) {
      wrapper_classes.push( color_variants[ color ] );
    }

    if ( size && size_variants[ size ] ) {
      wrapper_classes.push( size_variants[ size ] );
    }

    if ( (element || 'p') === 'div' ) {
      wrapper_classes.push( 'uk-panel' );
    }

    if ( alignment && alignment_variants[ alignment ] ) {
      wrapper_classes.push( alignment_variants[ alignment ] );
    }

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

		const onChangeAlignment = ( newAlignment ) => {
			let alignmentValue = ( newAlignment === undefined ) ? 'none' : newAlignment;
				setAttributes( { alignment: alignmentValue } )
		};

    return (
      <Fragment>
        <div>
          {
            <BlockControls>
              <AlignmentToolbar
                value={ alignment }
                onChange={ onChangeAlignment }
              />
            </BlockControls>
          }
          <RichText
            tagName={ element || 'p' }
            value={ text }
            onChange={ ( value ) => setAttributes( { text: value } ) }
            placeholder={ __( 'Enter text...', 'uikit-editor-blocks' ) }
            allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
            keepPlaceholderOnFocus
            {...wrapper_attrs}
          />
          <InspectorControls>
            <PanelBody title={ __( 'Text', 'uikit-editor-blocks' ) } initialOpen={ false }>
              <CheckboxControl
                label={ __( 'Drop Cap', 'uikit-editor-blocks' ) }
                checked={ dropCap }
                onChange={ ( isChecked ) =>
                  setAttributes( { dropCap: isChecked } )
                }
              />
              <SelectControl
                label={ __( 'Style', 'uikit-editor-blocks' ) }
                value={ style }
                options={
                  [
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Lead', 'uikit-editor-blocks' ), value: 'lead' },
                    { label: __( 'Meta', 'uikit-editor-blocks' ), value: 'meta' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { style: value } );
                } }
              />
              <SelectControl
                label={ __( 'Color', 'uikit-editor-blocks' ) }
                value={ color }
                options={
                  [
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                    { label: __( 'Emphasis', 'uikit-editor-blocks' ), value: 'emphasis' },
                    { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                    { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                    { label: __( 'Success', 'uikit-editor-blocks' ), value: 'success' },
                    { label: __( 'Warning', 'uikit-editor-blocks' ), value: 'warning' },
                    { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { color: value } );
                } }
              />
              <SelectControl
                label={ __( 'Size', 'uikit-editor-blocks' ) }
                value={ size }
                options={
                  [
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { size: value } );
                } }
              />
              <SelectControl
                label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
                value={ element }
                options={
                  [
                    { label: __( 'P', 'uikit-editor-blocks' ), value: 'p' },
                    { label: __( 'Div', 'uikit-editor-blocks' ), value: 'div' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { element: value } );
                } }
              />
            </PanelBody>
            <UikitGeneralInspectorControls 
              attributes={attributes}
              setAttributes={setAttributes}
            />
          </InspectorControls>
        </div>
      </Fragment>
    );
  }
}

export default UikitTextEdit;
