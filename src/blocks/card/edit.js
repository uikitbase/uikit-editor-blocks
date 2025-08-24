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
  InspectorControls,
  RichText,
} = BlockEditor || Editor;

class UikitCardEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      clientId,
    } = this.props;

    const {
      blockId,
      titleText,
      contentText,
      style,
      size,
      titleElement,
      contentElement,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = ['uk-card', 'uk-card-body'];

    const title_attrs   = [];
    const title_classes = ['uk-card-title'];

    const style_variants = {
      default: 'uk-card-default',
      primary: 'uk-card-primary',
      secondary: 'uk-card-secondary',
    };

    const size_variants = {
      small: 'uk-card-small',
      large: 'uk-card-large',
    };

    if ( style && style_variants[style] ) {
      wrapper_classes.push( style_variants[style] );
    }

    if ( size && size_variants[size] ) {
      wrapper_classes.push( size_variants[size] );
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

    if ( title_classes.length ) {
      title_attrs.className = title_classes.join(' ');
    }

    const TitleTag = titleElement || 'h3';

    const ContentTag = contentElement || 'p';

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Card', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ style }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Secondary', 'uikit-editor-blocks' ), value: 'secondary' },
              ]}
              onChange={ ( value ) => {
                setAttributes( { style: value } );
              } }
            />
            <SelectControl
              label={ __( 'Size', 'uikit-editor-blocks' ) }
              value={ size }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
              ]}
              onChange={ ( value ) => {
                setAttributes( { size: value } );
              } }
            />
          </PanelBody>
          <PanelBody title={ __( 'Title', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ titleElement }
              options={[
                { label: __( 'H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'H6', 'uikit-editor-blocks' ), value: 'h6' },
                { label: __( 'div', 'uikit-editor-blocks' ), value: 'div' },
              ]}
              onChange={ ( value ) => {
                setAttributes( { titleElement: value } );
              } }
            />
          </PanelBody>
          <PanelBody title={ __( 'Content', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ contentElement }
              options={[
                { label: __( 'p', 'uikit-editor-blocks' ), value: 'p' },
                { label: __( 'div', 'uikit-editor-blocks' ), value: 'div' },
              ]}
              onChange={ ( value ) => {
                setAttributes( { contentElement: value } );
              } }
            />
          </PanelBody>
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs} >
          <RichText
            tagName={ TitleTag }
            value={ titleText || '' }
            onChange={ ( value ) => setAttributes( { titleText: value } ) }
            placeholder={ __( 'Enter title...', 'uikit-editor-blocks' ) }
            allowedFormats={ [] }
            keepPlaceholderOnFocus
            {...title_attrs}
          />
          <RichText
            tagName={ ContentTag }
            value={ contentText || '' }
            onChange={ ( value ) => setAttributes( { contentText: value } ) }
            placeholder={ __( 'Enter content...', 'uikit-editor-blocks' ) }
            allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
            keepPlaceholderOnFocus
          />
        </div>
      </Fragment>
    );
  }
}

export default UikitCardEdit;
