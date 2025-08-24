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

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

import UIkitIconInput from '../../components/UIkitIconInput.js';

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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const icon_attrs     = [];
    const icon_classes   = [];
    const icon_icon_data = [];

    const color_variants = {
      muted: 'uk-text-muted',
      emphasis: 'uk-text-emphasis',
      primary: 'uk-text-primary',
      secondary: 'uk-text-secondary',
      success: 'uk-text-success',
      warning: 'uk-text-warning',
      danger: 'uk-text-danger',
    };

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( color && color_variants[color] ) {
      icon_classes.push( color_variants[color] );
    }

    if ( icon ) {
      icon_icon_data.push( `icon: ${icon}` );
    }

    if ( width ) {
      icon_icon_data.push( `width: ${width}` );
      icon_icon_data.push( `height: ${width}` );
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( icon_classes.length ) {
      icon_attrs.className = icon_classes.join(' ');
    }

    if ( icon_icon_data.length ) {
      icon_attrs['data-uk-icon'] = icon_icon_data.join('; ');
    }

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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs}>
          <span {...icon_attrs}></span>
        </div>
      </Fragment>
    );
  }
}

export default UikitIconEdit;
