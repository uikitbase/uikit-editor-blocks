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
  ToggleControl,
  SelectControl,
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

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = ['uk-alert'];

    const wrapper_link_attrs   = [];
    const wrapper_link_classes = ['uk-link-reset'];

    const title_attrs   = [];
    const title_classes = [];

    const content_attrs   = [];
    const content_classes = ['uk-panel'];

    const styleVariants = {
      primary: 'uk-alert-primary',
      success: 'uk-alert-success',
      warning: 'uk-alert-warning',
      danger: 'uk-alert-danger',
    };

    const titleStyleVariants = {
      'text-bold': 'uk-text-bold',
      'heading-small': 'uk-heading-small',
      h1: 'uk-h1',
      h2: 'uk-h2',
      h3: 'uk-h3',
      h4: 'uk-h4',
      h5: 'uk-h5',
      h6: 'uk-h6',
    };

    const contentStyleVariants = {
      lead: 'uk-text-lead',
      meta: 'uk-text-meta',
    };

    const contentTopMarginVariants = {
      default: 'uk-margin-top',
      small: 'uk-margin-small-top',
      medium: 'uk-margin-medium-top',
      large: 'uk-margin-large-top',
      xlarge: 'uk-margin-xlarge-top',
    };

    if ( style && styleVariants[style] ) {
      wrapper_classes.push( styleVariants[style] );
    }

    if ( largerPadding ) {
      wrapper_classes.push( 'uk-padding' );
    }

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( className ) {
      wrapper_classes.push( className );
    }

    if ( titleStyle && titleStyleVariants[titleStyle] ) {
      title_classes.push( titleStyleVariants[titleStyle] );
    }

    if ( contentStyle && contentStyleVariants[contentStyle] ) {
      content_classes.push( contentStyleVariants[contentStyle] );
    }

    if ( contentTopMargin && contentTopMarginVariants[contentTopMargin] ) {
      content_classes.push( contentTopMarginVariants[contentTopMargin] );
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
      wrapper_link_attrs.href = linkUrl;
    }

    if ( linkTarget ) {
      wrapper_link_attrs.target = linkTarget;
    }

    if ( linkTitle ) {
      wrapper_link_attrs.title = linkTitle;
    }

    if ( linkRel ) {
      wrapper_link_attrs.rel = linkRel;
    }

    if ( linkAriaLabel ) {
      wrapper_link_attrs['aria-label'] = linkAriaLabel;
    }

    if ( wrapper_link_classes.length ) {
      wrapper_link_attrs.className = wrapper_link_classes.join(' ');
    }

    if ( title_classes.length ) {
      title_attrs.className = title_classes.join(' ');
    }

    if ( content_classes.length ) {
      content_attrs.className = content_classes.join(' ');
    }

    const TitleTag = titleElement || 'div';

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
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div {...wrapper_attrs} >
          { linkUrl ? (
            <a
              {...wrapper_link_attrs}
              onClick={ ( event ) => event.preventDefault() }
            >
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
                tagName='p'
                value={ contentText || '' }
                onChange={ ( value ) => setAttributes( { contentText: value } ) }
                placeholder={ __( 'Enter content...', 'uikit-editor-blocks' ) }
                allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
                keepPlaceholderOnFocus
                {...content_attrs}
              />
            </a>
          ) : (
            <>
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
              tagName='div'
              value={ contentText || '' }
              onChange={ ( value ) => setAttributes( { contentText: value } ) }
              placeholder={ __( 'Enter content...', 'uikit-editor-blocks' ) }
              allowedFormats={ [ 'core/bold', 'core/italic', 'core/link' ] }
              keepPlaceholderOnFocus
              {...content_attrs}
            />
            </>
          )}
        </div>
      </Fragment>
    );
  }
}

export default UikitAlertEdit;
