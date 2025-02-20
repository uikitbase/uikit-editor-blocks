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
  ToggleControl,
  CheckboxControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  RichText,
} = BlockEditor || Editor;

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitButtonEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      isSelected,
      clientId,
    } = this.props;

    const {
      blockId,
      text,
      linkUrl,
      linkTarget,
      linkRel,
      linkTitle,
      linkAriaLabel,
      style,
      size,
      fullWidth,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        useGeneralBlockProps(attributes)?.className,
        'uk-button',
        {
          [`uk-button-${style}`]: style,
          [`uk-button-${size}`]: size,
          'uk-width-1-1': fullWidth,
        },
        className
      ),
    };

    // Open in new tab behavior from core/button (source: https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/button/edit.js)
    const onToggleOpenInNewTab = ( value ) => {
      const newLinkTarget = value ? '_blank' : undefined;

      let updatedRel = linkRel;
      if ( newLinkTarget && ! linkRel ) {
        updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
      } else if ( ! newLinkTarget && linkRel === NEW_TAB_REL_DEFAULT_VALUE ) {
        updatedRel = undefined;
      }

      setAttributes( {
        linkTarget: newLinkTarget,
        linkRel: updatedRel,
      } );
    };

    return (
      <Fragment>
        <div className={ blockProps.className }>
          <RichText
            placeholder={ __( 'Add text...', 'uikit-editor-blocks' ) }
            value={ text }
            onChange={ ( value ) =>
              setAttributes( { text: value } )
            }
            formattingControls={ [] }
            keepPlaceholderOnFocus
          />
          <InspectorControls>
            <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
              <TextControl
                label={ __( 'Text', 'uikit-editor-blocks' ) }
                value={ text }
                onChange={ ( value ) => setAttributes( { text: value } ) }
              />
              <TextControl
                label={ __( 'Link URL', 'uikit-editor-blocks' ) }
                value={ linkUrl }
                onChange={ ( value ) => setAttributes( { linkUrl: value } ) }
              />
              { linkUrl && (
                <>
                  <ToggleControl
                    label={ __( 'Open in New Tab', 'uikit-editor-blocks' ) }
                    onChange={ onToggleOpenInNewTab }
                    checked={ linkTarget === '_blank' }
                  />
                  <TextControl
                    label={ __( 'Link Rel', 'uikit-editor-blocks' ) }
                    value={ linkRel || '' }
                    onChange={ ( newRel ) => {
                      setAttributes( { linkRel: newRel } );
                    } }
                  />
                  <TextControl
                    label={ __( 'Link Title', 'uikit-editor-blocks' ) }
                    value={ linkTitle }
                    onChange={ ( value ) => {
                      setAttributes( {
                        linkTitle: value,
                      } );
                    } }
                  />
                  <TextControl
                    label={ __( 'Link Aria Label', 'uikit-editor-blocks' ) }
                    value={ linkAriaLabel }
                    onChange={ ( value ) => {
                      setAttributes( {
                        linkAriaLabel: value,
                      } );
                    } }
                  />
                </>
              )}
            </PanelBody>
            <PanelBody title={ __( 'Button', 'uikit-editor-blocks' ) } initialOpen={ false }>
              <SelectControl
                label={ __( 'Style', 'uikit-editor-blocks' ) }
                value={ style }
                options={
                  [
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                    { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                    { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
                    { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
                    { label: __( 'Text', 'uikit-editor-blocks' ), value: 'text' },
                    { label: __( 'Link', 'uikit-editor-blocks' ), value: 'link' },
                  ]
                }
                onChange={ ( selectedStyle ) => {
                  setAttributes( { style: selectedStyle } );
                } }
              />
              <SelectControl
                label={ __( 'Size', 'uikit-editor-blocks' ) }
                value={ size }
                options={
                  [
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { size: value } );
                } }
              />
              <CheckboxControl
                label={ __( 'Full Width', 'uikit-editor-blocks' ) }
                checked={ fullWidth }
                onChange={ ( isChecked ) =>
                  setAttributes( { fullWidth: isChecked } )
                }
              />
            </PanelBody>
          </InspectorControls>
        </div>
      </Fragment>
    );
  }
}

export default UikitButtonEdit;
