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
  ToggleControl,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
  RichText,
} = BlockEditor || Editor;

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitQuotationEdit extends Component {
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
      authorName,
      authorLinkUrl,
      authorLinkTarget,
      authorLinkRel,
      authorLinkTitle,
      authorLinkAriaLabel,
      footerText,
      linkStyle,
      alignment,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

		const onChangeAlignment = ( newAlignment ) => {
			let alignmentValue = ( newAlignment === undefined ) ? 'none' : newAlignment;
				setAttributes( { alignment: alignmentValue } )
		};

    // Open in new tab behavior from core/button (source: https://github.com/WordPress/gutenberg/blob/master/packages/block-library/src/button/edit.js)
    const onToggleOpenInNewTab = ( value ) => {
      const newLinkTarget = value ? '_blank' : undefined;

      let updatedRel = authorLinkRel;
      if ( newLinkTarget && ! authorLinkRel ) {
        updatedRel = NEW_TAB_REL_DEFAULT_VALUE;
      } else if ( ! newLinkTarget && authorLinkRel === NEW_TAB_REL_DEFAULT_VALUE ) {
        updatedRel = undefined;
      }

      setAttributes( {
        authorLinkTarget: newLinkTarget,
        authorLinkRel: updatedRel,
      } );
    };

    return (
      <Fragment>
        <div className={ className }>
          {
            <BlockControls>
              <AlignmentToolbar
                value={ alignment }
                onChange={ onChangeAlignment }
              />
            </BlockControls>
          }
          <RichText
            placeholder={ __( 'Enter text here...', 'uikit-editor-blocks' ) }
            value={ text }
            tagName="div"
            onChange={ ( value ) =>
              setAttributes( { text: value } )
            }
            keepPlaceholderOnFocus
          />
          <InspectorControls>
            <PanelBody title={ __( 'Quotation', 'uikit-editor-blocks' ) } initialOpen={ false }>
              <TextControl
                label={ __( 'Text', 'uikit-editor-blocks' ) }
                value={ text }
                onChange={ ( value ) => {
                  setAttributes( { text: value } );
                } }
              />
              <TextControl
                label={ __( 'Author', 'uikit-editor-blocks' ) }
                help={ __( 'Enter the author name.', 'uikit-editor-blocks' ) }
                value={ authorName }
                onChange={ ( value ) => {
                  setAttributes( { authorName: value } );
                } }
              />
              <TextControl
                label={ __( 'Author Link URL', 'uikit-editor-blocks' ) }
                value={ authorLinkUrl }
                onChange={ ( value ) => setAttributes( { authorLinkUrl: value } ) }
              />
              { authorLinkUrl && (
                <>
                  <ToggleControl
                    label={ __( 'Open in New Tab', 'uikit-editor-blocks' ) }
                    onChange={ onToggleOpenInNewTab }
                    checked={ authorLinkTarget === '_blank' }
                  />
                  <TextControl
                    label={ __( 'Link Rel', 'uikit-editor-blocks' ) }
                    value={ authorLinkRel || '' }
                    onChange={ ( newRel ) => {
                      setAttributes( { authorLinkRel: newRel } );
                    } }
                  />
                  <TextControl
                    label={ __( 'Link Title', 'uikit-editor-blocks' ) }
                    value={ authorLinkTitle }
                    onChange={ ( value ) => {
                      setAttributes( {
                        authorLinkTitle: value,
                      } );
                    } }
                  />
                  <TextControl
                    label={ __( 'Link Aria Label', 'uikit-editor-blocks' ) }
                    value={ authorLinkAriaLabel }
                    onChange={ ( value ) => {
                      setAttributes( {
                        authorLinkAriaLabel: value,
                      } );
                    } }
                  />
                </>
              )}
              <TextControl
                label={ __( 'Footer Text', 'uikit-editor-blocks' ) }
                help={ __( 'Enter an optional footer text.', 'uikit-editor-blocks' ) }
                value={ footerText }
                onChange={ ( value ) => {
                  setAttributes( { footerText: value } );
                } }
              />
              <SelectControl
                label={ __( 'Link Style', 'uikit-editor-blocks' ) }
                value={ linkStyle }
                options={
                  [
                    { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Muted', 'uikit-editor-blocks' ), value: 'muted' },
                    { label: __( 'Text', 'uikit-editor-blocks' ), value: 'text' },
                    { label: __( 'Reset', 'uikit-editor-blocks' ), value: 'reset' },
                  ]
                }
                onChange={ ( value ) => {
                  setAttributes( { linkStyle: value } );
                } }
              />
            </PanelBody>
          </InspectorControls>
        </div>
      </Fragment>
    );
  }
}

export default UikitQuotationEdit;
