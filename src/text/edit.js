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
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
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

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    const general = useGeneralBlockProps(attributes);
    const { className: generalClassName, ...generalDataAttrs } = general;

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        generalClassName,
        {
          'uk-dropcap': dropCap,
          [`uk-text-${style}`]: style,
          [`uk-text-${color}`]: color,
          [`uk-text-${size}`]: size,
        },
        className
      ),
    };

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
            className={ blockProps.className }
            {...generalDataAttrs}
            placeholder={ __( 'Enter text here...', 'uikit-editor-blocks' ) }
            value={ text }
            onChange={ ( value ) =>
              setAttributes( { text: value } )
            }
            allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
            keepPlaceholderOnFocus
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
          </InspectorControls>
        </div>
      </Fragment>
    );
  }
}

export default UikitTextEdit;
