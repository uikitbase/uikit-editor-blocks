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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InspectorControls,
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
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const author_link_attrs   = [];
    const author_link_classes = [];

    const linkStyle_variants = {
      muted: 'uk-link-muted',
      text: 'uk-link-text',
      reset: 'uk-link-reset',
    };

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( linkStyle && linkStyle_variants[ linkStyle ] ) {
      author_link_classes.push( linkStyle_variants[ linkStyle ] );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( authorLinkUrl ) {
      author_link_attrs.href = authorLinkUrl;
    }

    if ( authorLinkTarget ) {
      author_link_attrs.target = authorLinkTarget;
    }

    if ( authorLinkTitle ) {
      author_link_attrs.title = authorLinkTitle;
    }

    if ( authorLinkRel ) {
      author_link_attrs.rel = authorLinkRel;
    }

    if ( authorLinkAriaLabel ) {
      author_link_attrs['aria-label'] = authorLinkAriaLabel;
    }

    if ( author_link_classes.length ) {
      author_link_attrs.className = author_link_classes.join( ' ' );
    }

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
        <InspectorControls>
          <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) } initialOpen={ false }>
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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <blockquote { ...wrapper_attrs }>
          <RichText
            value={ text || '' }
            onChange={ ( value ) => setAttributes( { text: value } ) }
            placeholder={ __( 'Enter text...', 'uikit-editor-blocks' ) }
            allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
            keepPlaceholderOnFocus
          />
          <footer>
            <RichText
              value={ footerText || '' }
              onChange={ ( value ) => setAttributes( { footerText: value } ) }
              placeholder={ __( 'Footer text...', 'uikit-editor-blocks' ) }
              allowedFormats={ [] }
              keepPlaceholderOnFocus
            />
            <cite>
              { authorLinkUrl ? (
                <a { ...author_link_attrs }>
                  <RichText
                    value={ authorName || '' }
                    onChange={ ( value ) => setAttributes( { authorName: value } ) }
                    placeholder={ __( 'Author name...', 'uikit-editor-blocks' ) }
                    allowedFormats={ [] }
                    keepPlaceholderOnFocus
                  />
                </a>
              ) : (
                <RichText
                  value={ authorName || '' }
                  onChange={ ( value ) => setAttributes( { authorName: value } ) }
                  placeholder={ __( 'Author name...', 'uikit-editor-blocks' ) }
                  allowedFormats={ [] }
                  keepPlaceholderOnFocus
                />
              ) }
            </cite>
          </footer>
        </blockquote>
      </Fragment>
    );
  }
}

export default UikitQuotationEdit;
