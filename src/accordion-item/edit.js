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
  TextareaControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import clsx from 'clsx';

// Import the custom hook for applying general block settings
import useGeneralBlockProps from '../use-general-block-props';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
} =  BlockEditor || Editor;

class UikitAccordionItemEdit extends Component {
  render() {
    const {
      attributes,
      className,
      setAttributes,
      clientId,
      context,
    } = this.props;

    const {
      blockId,
      titleText,
      contentText,
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

    const parentContentStyle = context['uikit-editor-blocks/accordion-contentStyle'];
    const parentContentTopMargin = context['uikit-editor-blocks/accordion-contentTopMargin'];

    const parentContentTopMarginClasses = {
      'small': 'uk-margin-small-top',
      'default': 'uk-margin-top',
      'medium': 'uk-margin-medium-top',
      'large': 'uk-margin-large-top',
      'xlarge': 'uk-margin-xlarge-top',
    };

    // Define block-level attributes
    const blockProps = {
      className: clsx(
        useGeneralBlockProps(attributes)?.className,
        className
      ),
    };

    // Define content element attributes
    const contentProps = {
      className: clsx(
        'uk-panel',
        {
          [`uk-text-${parentContentStyle}`]: parentContentStyle,
          [parentContentTopMarginClasses[parentContentTopMargin]]: parentContentTopMargin,
        }
      ),
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
          </PanelBody>
        </InspectorControls>
        <div className={blockProps.className}>
          <a class="uk-accordion-title" href>
            { titleText }
          </a>
          <div class="uk-accordion-content">
            <div class={contentProps.className}>
              <p>{ contentText }</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UikitAccordionItemEdit;
