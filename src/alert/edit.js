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
  ToggleControl,
  SelectControl,
  CheckboxControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
} = BlockEditor || Editor;

const NEW_TAB_REL_DEFAULT_VALUE = 'noreferrer noopener';

class UikitAlertEdit extends Component {
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
      linkUrl,
      linkTarget,
      linkRel,
      linkTitle,
      linkAriaLabel,
      style,
      largerPadding,
      titleStyle,
      titleElement,
      contentStyle,
      contentTopMargin,
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

    const general = useGeneralBlockProps(attributes);
    const { className: generalClassName, ...generalDataAttrs } = general;

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        generalClassName,
        'uk-alert',
        {
          [`uk-alert-${style}`]: style,
          'uk-padding': largerPadding,
        },
        className
      ),
    };

    // Define title element attributes
    const titleProps = {
      className: clsx({
        [`uk-${titleStyle}`]: titleStyle,
      }),
    };

    // Determine the correct title tag
    const titleTag = titleElement || 'div';

    // Create the title element
    const titleElm = titleText ? (
      createElement(
        titleTag,
        { className: titleProps.className },
        titleText
      )
    ) : null;

    // Define content element attributes
    const contentProps = {
      className: clsx(
        'uk-panel',
        {
          [`uk-text-${contentStyle}`]: contentStyle,
          'uk-margin-top': contentTopMargin === 'default',
          [`uk-margin-${contentTopMargin}-top`]:
              contentTopMargin && contentTopMargin !== 'default',
        }
      ),
    };

    // Create the content element
    const contentElm = contentText ? (
      <div {...contentProps}>
        <p>{contentText}</p>
      </div>
    ) : null;

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
          <PanelBody title={ __( 'Alert', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ style }
              options={[
                { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Primary', 'uikit-editor-blocks' ), value: 'primary' },
                { label: __( 'Success', 'uikit-editor-blocks' ), value: 'success' },
                { label: __( 'Warning', 'uikit-editor-blocks' ), value: 'warning' },
                { label: __( 'Danger', 'uikit-editor-blocks' ), value: 'danger' },
              ]}
              onChange={ ( value ) => {
                setAttributes( { style: value } );
              } }
            />
            <CheckboxControl
              label={ __( 'Larger Padding', 'uikit-editor-blocks' ) }
              checked={ largerPadding }
              onChange={ ( isChecked ) =>
                setAttributes( { largerPadding: isChecked } )
              }
            />
          </PanelBody>
          <PanelBody title={ __( 'Title', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ titleStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Text Bold', 'uikit-editor-blocks' ), value: 'text-bold' },
                { label: __( 'Heading Small', 'uikit-editor-blocks' ), value: 'heading-small' },
                { label: __( 'Heading H1', 'uikit-editor-blocks' ), value: 'h1' },
                { label: __( 'Heading H2', 'uikit-editor-blocks' ), value: 'h2' },
                { label: __( 'Heading H3', 'uikit-editor-blocks' ), value: 'h3' },
                { label: __( 'Heading H4', 'uikit-editor-blocks' ), value: 'h4' },
                { label: __( 'Heading H5', 'uikit-editor-blocks' ), value: 'h5' },
                { label: __( 'Heading H6', 'uikit-editor-blocks' ), value: 'h6' },
              ]}
              onChange={( value ) => {
                setAttributes( { titleStyle: value } );
              }}
            />
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
              label={ __( 'Style', 'uikit-editor-blocks' ) }
              value={ contentStyle }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Lead', 'uikit-editor-blocks' ), value: 'lead' },
                { label: __( 'Meta', 'uikit-editor-blocks' ), value: 'meta' },
              ]}
              onChange={ ( value ) => {
                setAttributes( { contentStyle: value } );
              } }
            />
            <SelectControl 
              label={ __( 'Margin Top', 'uikit-editor-blocks' ) }
              value={ contentTopMargin }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { contentTopMargin: value } );
              }}
            />
          </PanelBody>
        </InspectorControls>
        <div className={blockProps.className} {...generalDataAttrs} >
          {titleElm}
          {contentElm}
        </div>
      </Fragment>
    );
  }
}

export default UikitAlertEdit;
