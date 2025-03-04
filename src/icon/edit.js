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
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

import UIkitIconInput from '../uikit-icon-input';

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

      if (!icon) {
        setAttributes({
          icon: 'star',
        });
      }
    }

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        useGeneralBlockProps(attributes)?.className,
        'uk-icon',
        {
          [`uk-text-${color}`]: color,
        },
        className
      ),
    };

    // Set icon data attributes
    const iconDataAttribute = [
      icon ? `icon: ${icon}` : '',
      width ? `width: ${width}` : '',
      width ? `height: ${width}` : '',
    ].filter(Boolean).join('; ');

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Icon', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <UIkitIconInput
              label={ __( 'Icon', 'uikit-editor-blocks' ) }
              help={ __( 'Enter icon name from UIkit or select one.', 'uikit-editor-blocks' ) }
              value={ attributes.icon || '' }
              onChange={ ( value ) =>
                setAttributes( { icon: value } )
              }
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
        <span className={blockProps.className} data-uk-icon={iconDataAttribute}></span>
      </Fragment>
    );
  }
}

export default UikitIconEdit;
