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
  TextControl,
  TextareaControl,
  SelectControl,
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

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );

      if (!titleText && !contentText) {
        setAttributes({
          titleText: __( 'Title', 'uikit-editor-blocks' ),
          contentText: __( 'Content', 'uikit-editor-blocks' ),
        });
      }
    }

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        useGeneralBlockProps(attributes)?.className,
        'uk-card uk-card-body',
        {
          [`uk-card-${style}`]: style,
          [`uk-card-${size}`]: size,
        },
        className
      ),
    };

    // Define title element attributes
    const titleProps = {
      className: clsx(
        'uk-card-title',
      ),
    };

    // Determine the correct title tag
    const titleTag = titleElement || 'h3';

    // Create the title element
    const titleElm = titleText ? (
      createElement(
        titleTag,
        { className: titleProps.className },
        titleText
      )
    ) : null;

    // Determine the correct content tag
    const contentTag = contentElement || 'p';

    // Create the content element
    const contentElm = contentText ? (
      createElement(
        contentTag,
        null,
        contentText
      )
    ) : null;

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Block Content', 'uikit-editor-blocks' ) }>
            <TextControl
              label={ __( 'Title', 'uikit-editor-blocks' ) }
              value={ titleText }
              onChange={ ( value ) => setAttributes( { titleText: value } ) }
            />
            <TextareaControl
              label={ __( 'Content', 'uikit-editor-blocks' ) }
              value={ contentText }
              onChange={ ( value ) => setAttributes( { contentText: value } ) }
            />
          </PanelBody>
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
        </InspectorControls>
        <div className={blockProps.className}>
          {titleElm}
          {contentElm}
        </div>
      </Fragment>
    );
  }
}

export default UikitCardEdit;
