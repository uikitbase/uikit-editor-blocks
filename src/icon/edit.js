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
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
} = BlockEditor || Editor;

class UikitIconEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      clientId,
    } = this.props;

    const {
      blockId,
      icon,
      color,
      width,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Icon', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <TextControl
              label={ __( 'Icon', 'uikit-editor-blocks' ) }
              help={ __( 'Enter icon name from UIkit', 'uikit-editor-blocks' ) }
              value={ icon }
              onChange={ ( value ) => {
                setAttributes( { icon: value } );
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
            <TextControl
              type="number"
              label={ __( 'Width', 'uikit-editor-blocks' ) }
              help={ __( 'Icon width size in px without unit.', 'uikit-editor-blocks' ) }
              value={ width }
              onChange={ ( value ) => {
                setAttributes( { width: value } );
              } }
            />
          </PanelBody>
        </InspectorControls>
        <div className={ className }>{icon}</div>
      </Fragment>
    );
  }
}

export default UikitIconEdit;
