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
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  RichText,
  InspectorControls,
} = BlockEditor || Editor;

class UikitHeadingEdit extends Component {
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
      style,
      decoration,
      color,
      element,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <div className={ className }>
          <RichText
            placeholder={ __( 'Heading ', 'uikit-editor-blocks' ) }
            value={ text }
            onChange={ ( value ) =>
              setAttributes( { text: value } )
            }
            formattingControls={ [] }
            keepPlaceholderOnFocus
          />
          <InspectorControls>
            <PanelBody title={ __( 'Heading', 'uikit-editor-blocks' ) } initialOpen={ false }>
              <SelectControl
                label={ __( 'Style', 'uikit-editor-blocks' ) }
                value={ style }
                options={
                  [
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Heading 3X-Large', 'uikit-editor-blocks' ), value: 'heading-3xlarge' },
                    { label: __( 'Heading 2X-Large', 'uikit-editor-blocks' ), value: 'heading-2xlarge' },
                    { label: __( 'Heading X-Large', 'uikit-editor-blocks' ), value: 'heading-xlarge' },
                    { label: __( 'Heading Large', 'uikit-editor-blocks' ), value: 'heading-large' },
                    { label: __( 'Heading Medium', 'uikit-editor-blocks' ), value: 'heading-medium' },
                    { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                    { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                    { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                    { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                    { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                    { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                    { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
                    { label: __( 'Text Meta', 'uikit-editor-blocks' ), value: 'text-meta' },
                    { label: __( 'Text Lead', 'uikit-editor-blocks' ), value: 'text-lead' },
                    { label: __( 'Text Small', 'uikit-editor-blocks' ), value: 'text-small' },
                    { label: __( 'Text Large', 'uikit-editor-blocks' ), value: 'text-large' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { style: value } );
                } }
              />
              <SelectControl
                label={ __( 'Decoration', 'uikit-editor-blocks' ) }
                value={ decoration }
                options={
                  [
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Divider', 'uikit-editor-blocks' ), value: 'divider' },
                    { label: __( 'Bullet', 'uikit-editor-blocks' ), value: 'bullet' },
                    { label: __( 'Line', 'uikit-editor-blocks' ), value: 'line' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { decoration: value } );
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
                label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
                value={ element }
                options={
                  [
                    { label: __( 'H1', 'uikit-editor-blocks' ), value: 'h1' },
                    { label: __( 'H2', 'uikit-editor-blocks' ), value: 'h2' },
                    { label: __( 'H3', 'uikit-editor-blocks' ), value: 'h3' },
                    { label: __( 'H4', 'uikit-editor-blocks' ), value: 'h4' },
                    { label: __( 'H5', 'uikit-editor-blocks' ), value: 'h5' },
                    { label: __( 'H6', 'uikit-editor-blocks' ), value: 'h6' },
                    { label: __( 'div', 'uikit-editor-blocks' ), value: 'div' },
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

export default UikitHeadingEdit;
