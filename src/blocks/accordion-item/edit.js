// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment,
} from '@wordpress/element';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  select,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';

const {
  RichText,
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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const parentContentStyle     = context?.['uikit-editor-blocks/accordion-contentStyle'] || '';
    const parentcontentTopMargin = context?.['uikit-editor-blocks/accordion-contentTopMargin'] || '';

    const content_attrs   = [];
    const content_classes = ['uk-panel'];

    const parentContentStyleVariants = {
      meta: 'uk-text-meta',
      lead: 'uk-text-lead',
    };

    const parentContentTopMarginVariants = {
      small: 'uk-margin-small-top',
      default: 'uk-margin-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    if ( parentContentStyle && parentContentStyleVariants[parentContentStyle] ) {
      content_classes.push( parentContentStyleVariants[parentContentStyle] );
    }

    if ( parentcontentTopMargin && parentContentTopMarginVariants[parentcontentTopMargin] ) {
      content_classes.push( parentContentTopMarginVariants[parentcontentTopMargin] );
    }

    if ( content_classes.length ) {
      content_attrs.className = content_classes.join(' ');
    }

    return (
      <Fragment>
        <RichText
          tagName='a'
          value={ titleText || '' }
          onChange={ ( value ) => setAttributes( { titleText: value } ) }
          placeholder={ __( 'Enter title...', 'uikit-editor-blocks' ) }
          allowedFormats={ [] }
          keepPlaceholderOnFocus
          className={ 'uk-accordion-title' }
          href="#"
        />
        <div className="uk-accordion-content">
          <RichText
            tagName='div'
            value={ contentText || '' }
            onChange={ ( value ) => setAttributes( { contentText: value } ) }
            placeholder={ __( 'Enter content...', 'uikit-editor-blocks' ) }
            allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
            keepPlaceholderOnFocus
            {...content_attrs}
          />
        </div>
      </Fragment>
    );
  }
}

export default UikitAccordionItemEdit;
