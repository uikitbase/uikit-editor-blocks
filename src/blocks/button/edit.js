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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const button_attrs   = [];
    const button_classes = ['uk-button'];

    const style_variants = {
      default: 'uk-button-default',
      primary: 'uk-button-primary',
      secondary: 'uk-button-secondary',
      danger: 'uk-button-danger',
      text: 'uk-button-text',
      link: 'uk-button-link',
    };

    const size_variants = {
      small: 'uk-button-small',
      large: 'uk-button-large',
    };

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( style && style_variants[style] ) {
      button_classes.push( style_variants[style] );
    }

    if ( size && size_variants[size] ) {
      button_classes.push( size_variants[size] );
    }

    if ( fullWidth ) {
      button_classes.push( 'uk-width-1-1' );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( linkUrl ) {
      button_attrs.href = linkUrl;
    }

    if ( linkTarget ) {
      button_attrs.target = linkTarget;
    }

    if ( linkTitle ) {
      button_attrs.title = linkTitle;
    }

    if ( linkRel ) {
      button_attrs.rel = linkRel;
    }

    if ( linkAriaLabel ) {
      button_attrs['aria-label'] = linkAriaLabel;
    }

    if ( button_classes.length ) {
      button_attrs.className = button_classes.join(' ');
    }

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
        <div {...wrapper_attrs} >
          <RichText
            tagName='a'
            value={ text || '' }
            placeholder={ __( 'Add text...', 'uikit-editor-blocks' ) }
            onChange={ ( value ) => setAttributes( { text: value } ) }
            placeholder={ __( 'Enter text...', 'uikit-editor-blocks' ) }
            allowedFormats={ [] }
            keepPlaceholderOnFocus
            {...button_attrs}
          />
          <InspectorControls>
            <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
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

export default UikitButtonEdit;
