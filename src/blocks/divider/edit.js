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
} = BlockEditor || Editor;

class UikitDividerEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      clientId,
    } = this.props;

    const {
      blockId,
      style,
      element,
      alignment,
      alignmentBreakpoint,
      alignmentFallback,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const style_variants = {
      icon: 'uk-divider-icon',
      small: 'uk-divider-small',
      vertical: 'uk-divider-vertical',
    };

    const alignment_variants = {
      left: 'uk-text-left',
      center: 'uk-text-center',
      right: 'uk-text-right',
    };

    const alignmentBreakpoint_variants = {
      small: '@s',
      medium: '@m',
      large: '@l',
      xlarge: '@xl',
    };

    const alignmentFallback_variants = {
      left: 'uk-text-left',
      center: 'uk-text-center',
      right: 'uk-text-right',
      justify: 'uk-text-justify',
    };

    if ( style && style_variants[style] ) {
      wrapper_classes.push( style_variants[style] );
    }

    if ( alignment ) {
      if ( !alignmentBreakpoint ) {
        if ( alignment_variants[alignment] ) {
          wrapper_classes.push( alignment_variants[alignment] );
        }
      } else {
        if ( alignment_variants[alignment] && alignmentBreakpoint_variants[alignmentBreakpoint] ) {
          wrapper_classes.push( alignment_variants[alignment] + alignmentBreakpoint_variants[alignmentBreakpoint] );
        }
      }

      if ( alignmentFallback && alignmentFallback_variants[alignmentFallback] ) {
        wrapper_classes.push( alignmentFallback_variants[alignmentFallback] );
      }
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

    const Tag = element || 'hr';

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Divider', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ style }
              options={
                [
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Icon', 'uikit-editor-blocks' ), value: 'icon' },
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Vertical', 'uikit-editor-blocks' ), value: 'vertical' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( { style: value } );
              } }
            />
            <SelectControl
              label={ __( 'HTML Element', 'uikit-editor-blocks' ) }
              value={ element }
              options={
                [
                  { label: __( 'hr', 'uikit-editor-blocks' ), value: 'hr' },
                  { label: __( 'div', 'uikit-editor-blocks' ), value: 'div' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( { element: value } );
              } }
            />
            { style == 'small' && (
              <>
                <SelectControl
                  label={ __( 'Alignment', 'uikit-editor-blocks' ) }
                  value={ alignment }
                  options={
                    [
                      { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                      { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                      { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                      { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                    ]
                  }
                  onChange={ ( value ) => {
                    setAttributes( { alignment: value } );
                  } }
                />
                { alignment != '' && (
                  <>
                    <SelectControl 
                      label={ __( 'Alignment Breakpoint', 'uikit-editor-blocks' ) }
                      value={ alignmentBreakpoint }
                      options={[
                        { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                        { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                        { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                        { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                        { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                      ]}
                      onChange={( value ) => {
                        setAttributes( { alignmentBreakpoint: value } );
                      }}
                    />
                    { alignmentBreakpoint != '' &&
                      <SelectControl 
                        label={ __( 'Alignment Fallback', 'uikit-editor-blocks' ) }
                        value={ alignmentFallback }
                        options={[
                          { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                          { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                          { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                          { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
                          { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                        ]}
                        onChange={( value ) => {
                          setAttributes( { alignmentFallback: value } );
                        }}
                      />
                    }
                  </>
                )}
              </>
            )}
          </PanelBody>
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <Tag {...wrapper_attrs} />
      </Fragment>
    );
  }
}

export default UikitDividerEdit;
