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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

  const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const style_variants = {
      'heading-3xlarge': 'uk-heading-3xlarge',
      'heading-2xlarge': 'uk-heading-2xlarge',
      'heading-xlarge': 'uk-heading-xlarge',
      'heading-large': 'uk-heading-large',
      'heading-medium': 'uk-heading-medium',
      'heading-small': 'uk-heading-small',
      'h1': 'uk-h1',
      'h2': 'uk-h2',
      'h3': 'uk-h3',
      'h4': 'uk-h4',
      'h5': 'uk-h5',
      'h6': 'uk-h6',
      'text-meta': 'uk-text-meta',
      'text-lead': 'uk-text-lead',
      'text-small': 'uk-text-small',
      'text-large': 'uk-text-large',
    };

    const decoration_variants = {
      divider: 'uk-heading-divider',
      bullet: 'uk-heading-bullet',
      line: 'uk-heading-line',
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

    if ( style && style_variants[style] ) {
      wrapper_classes.push( style_variants[style] );
    }

    if ( decoration && decoration_variants[decoration] ) {
      wrapper_classes.push( decoration_variants[decoration] );
    }

    if ( color && color_variants[color] ) {
      wrapper_classes.push( color_variants[color] );
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

    const Tag = element || 'div';

    return (
      <Fragment>
        { decoration === 'line' ? (
          <Tag {...wrapper_attrs}>
            <RichText
              tagName="span"
              value={ text || '' }
              onChange={ ( value ) => setAttributes( { text: value } ) }
              placeholder={ __( 'Enter text...', 'uikit-editor-blocks' ) }
              allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
              keepPlaceholderOnFocus
            />
          </Tag>
        ) : (
          <RichText
            tagName={ Tag }
            value={ text || '' }
            onChange={ ( value ) => setAttributes( { text: value } ) }
            placeholder={ __( 'Enter text...', 'uikit-editor-blocks' ) }
            allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
            keepPlaceholderOnFocus
            { ...wrapper_attrs }
          />
        ) }
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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
      </Fragment>
    );
  }
}

export default UikitHeadingEdit;
