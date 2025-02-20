// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  createElement,
  Component,
  Fragment,
} from '@wordpress/element';
import {
  PanelBody,
  SelectControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
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

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    // Update className based on the element selected
    let elementClass = '';
    if (element === 'div') {
      elementClass = 'uk-hr'; // Apply uk-hr class if element is div
    }

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        useGeneralBlockProps(attributes)?.className,
        elementClass,
        {
          [`uk-divider-${style}`]: style,
          [`uk-text-${alignment}`]: alignment,
        },
        className
      ),
    };

    // Determine the correct block tag
    const blockTag = element || 'hr';

    // Create the block element
    const blockElm = (
      createElement(
        blockTag,
        { className: blockProps.className },
      )
    );

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
                      { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' }, // uk-text-left
                      { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' }, // uk-text-center
                      { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' }, // uk-text-right
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
                        { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' }, // @s
                        { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' }, // @m
                        { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' }, // @l
                        { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' }, // @xl
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
                          { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' }, // uk-text-left
                          { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' }, // uk-text-center
                          { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' }, // uk-text-right
                          { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' }, // uk-text-justify
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
        </InspectorControls>
        {blockElm}
      </Fragment>
    );
  }
}

export default UikitDividerEdit;
