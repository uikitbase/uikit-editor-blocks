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
  CheckboxControl,
  Button,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
} from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { createBlock } from '@wordpress/blocks';

import UikitGeneralInspectorControls from '../../components/UikitGeneralInspectorControls.js';
import useGeneralBlockProps from '../../hooks/use-general-block-props.js';

const {
  InspectorControls,
  InnerBlocks,
  useInnerBlocksProps,
} =  BlockEditor || Editor;

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/switcher-item' ];

const SwitcherInner = ( { attributes } ) => {
    const {
      blockId,
    } = attributes;

    const switcher_content_attrs = [];

    switcher_content_attrs.id = `js-${ blockId || '' }`;
    switcher_content_attrs.className = 'uk-switcher';

    const innerBlocksProps = useInnerBlocksProps( switcher_content_attrs, {
      allowedBlocks: ALLOWED_BLOCKS,
      renderAppender: false,
    } );

    return (
      <div {...innerBlocksProps}>
        {innerBlocksProps.children}
      </div>
    );
}

class UikitSwitcherEdit extends Component {
  render() {
    const {
      className,
      attributes,
      setAttributes,
      columns,
      updateBlockAttributes,
      hasChildBlocks,
      clientId,
    } = this.props;

    const {
      blockId,
      animation,
      navigation,
      navigationPosition,
      navigationAlignment,
      navigationMargin,
      navigationGridWidth,
      navigationGridColumnGap,
      navigationGridRowGap,
      navigationGridBreakpoint,
      navigationVerticalAlignment,
    } = attributes;

    if ( blockId !== clientId ) {
      setAttributes( { blockId: clientId } );
    }

    const general_props = useGeneralBlockProps(attributes);

    const wrapper_attrs   = [];
    const wrapper_classes = [];

    const navigation_attrs         = [];
    const navigation_classes       = [];
    const navigation_tab_data      = [];
    const navigation_switcher_data = [];

    const switcher_content_attrs = [];

    const nav_grid_attrs          = [];
    const navigation_grid_classes = ['uk-grid', 'uk-child-width-expand'];

    const navigation_grid_column_attrs   = {};
    const navigation_grid_column_classes = [];

    const navigationAlignment_variants = {
      left: 'uk-flex-left',
      right: 'uk-flex-right',
      center: 'uk-flex-center',
      justify: 'uk-child-width-expand',
    };

    const navigationMargin_variants = {
      small: 'uk-margin-small',
      medium: 'uk-margin-medium',
      large: 'uk-margin-large',
      xlarge: 'uk-margin-xlarge',
      default: 'uk-margin',
    };

    const navigationGridWidth_variants = {
      auto: 'uk-width-auto',
      '1-2': 'uk-width-1-2',
      '1-3': 'uk-width-1-3',
      '1-4': 'uk-width-1-4',
      '1-5': 'uk-width-1-5',
      small: 'uk-width-small',
      medium: 'uk-width-medium',
      large: 'uk-width-large',
    };

    const navigationGridColumnGap_variants = {
      small: 'uk-grid-column-small',
      medium: 'uk-grid-column-medium',
      large: 'uk-grid-column-large',
      none: 'uk-grid-column-collapse',
    };

    const navigationGridRowGap_variants = {
      small: 'uk-grid-row-small',
      medium: 'uk-grid-row-medium',
      large: 'uk-grid-row-large',
      none: 'uk-grid-row-collapse',
    };

    const navigationGridBreakpoint_variants = {
      small: '@s',
      medium: '@m',
      large: '@l',
      xlarge: '@xl',
    };

    if ( general_props.class && Array.isArray(general_props.class) ) {
      wrapper_classes.push(...general_props.class);
    }

    if ( attributes.className ) {
      wrapper_classes.push( attributes.className );
    }

    if ( navigation ) {
      if ( navigation === 'tabs' ) {
        navigation_classes.push( 'uk-tabs' );

        if ( navigationPosition === 'left' ) {
          navigation_classes.push( 'uk-tab-left' );
        } else if ( navigationPosition === 'right' ) {
          navigation_classes.push( 'uk-tab-right' );
        }
      } else if ( navigation === 'subnav-pill' ) {
        navigation_classes.push( 'uk-subnav', 'uk-subnav-pill' );
      } else if ( navigation === 'subnav-divider' ) {
        navigation_classes.push( 'uk-subnav', 'uk-subnav-divider' );
      } else if ( navigation === 'subnav' ) {
        navigation_classes.push( 'uk-subnav' );
      }

      if ( navigationPosition === 'top' || navigationPosition === 'bottom' ) {
        if ( navigationAlignment && navigationAlignment_variants[ navigationAlignment ] ) {
          navigation_classes.push( navigationAlignment_variants[ navigationAlignment ] );
        }
        if ( navigationMargin && navigationMargin_variants[ navigationMargin ] ) {
          navigation_classes.push( navigationMargin_variants[ navigationMargin ] );
        }
      }
    }

    if ( navigation === 'tabs' ) {
      navigation_tab_data.push( `connect: #js-${ blockId || '' }` );
      if ( animation ) {
        navigation_tab_data.push( `animation: ${ animation }` );
      }
    }

    if ( navigation !== 'tabs' ) {
      navigation_switcher_data.push( `connect: #js-${ blockId || '' }` );
      if ( animation ) {
        navigation_switcher_data.push( `animation: ${ animation }` );
      }
    }

    if ( navigationPosition === 'left' || navigationPosition === 'right' ) {
      if ( navigationGridColumnGap && navigationGridColumnGap_variants[ navigationGridColumnGap ] ) {
        navigation_grid_classes.push( navigationGridColumnGap_variants[ navigationGridColumnGap ] );
      }
      if ( navigationGridRowGap && navigationGridRowGap_variants[ navigationGridRowGap ] ) {
        navigation_grid_classes.push( navigationGridRowGap_variants[ navigationGridRowGap ] );
      }
      if ( navigationVerticalAlignment ) {
        navigation_grid_classes.push( 'uk-flex-middle' );
      }
    }

    if ( navigationPosition === 'left' || navigationPosition === 'right' ) {
      if ( navigationGridWidth && navigationGridBreakpoint && navigationGridWidth_variants[ navigationGridWidth ] && navigationGridBreakpoint_variants[ navigationGridBreakpoint ] ) {
        navigation_grid_column_classes.push( navigationGridWidth_variants[ navigationGridWidth ] + navigationGridBreakpoint_variants[ navigationGridBreakpoint ] );
      }
    }

    if ( wrapper_classes.length > 0 ) {
      wrapper_attrs.className = [...new Set(wrapper_classes)].join(' ');
    }

    if ( general_props.data_attrs ) {
        for (const data_attr_key in general_props.data_attrs) {
            wrapper_attrs[data_attr_key] = general_props.data_attrs[data_attr_key].join('; ');
        }
    }

    if ( navigation_classes.length ) {
      navigation_attrs.className = navigation_classes.join( ' ' );
    }

    if ( navigation_tab_data.length ) {
      navigation_attrs['data-uk-tab'] = navigation_tab_data.join( '; ' );
    }

    if ( navigation_switcher_data.length ) {
      navigation_attrs['data-uk-switcher'] = navigation_switcher_data.join( '; ' );
    }

    switcher_content_attrs.id = `js-${ blockId || '' }`;
    switcher_content_attrs.className = 'uk-switcher';

    if ( navigation_grid_classes.length ) {
      nav_grid_attrs.className = navigation_grid_classes.join( ' ' );
    }

    nav_grid_attrs['data-uk-grid'] = '';

    if ( navigation_grid_column_classes.length ) {
      navigation_grid_column_attrs.className = navigation_grid_column_classes.join( ' ' );
    }

    const navItems = (columns || []).map( ( blk ) => (
      <li key={ blk.clientId }><a href="#">{ (blk.attributes && blk.attributes.titleText) || '' }</a></li>
    ) );

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Switcher', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Animation', 'uikit-editor-blocks' ) }
              value={ animation }
              options={[
                { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Fade', 'uikit-editor-blocks' ), value: 'fade' },
                { label: __( 'Scale Up', 'uikit-editor-blocks' ), value: 'scale-up' },
                { label: __( 'Scale Down', 'uikit-editor-blocks' ), value: 'scale-down' },
                { label: __( 'Slide Top Small', 'uikit-editor-blocks' ), value: 'slide-top-small' },
                { label: __( 'Slide Bottom Small', 'uikit-editor-blocks' ), value: 'slide-bottom-small' },
                { label: __( 'Slide Left Small', 'uikit-editor-blocks' ), value: 'slide-left-small' },
                { label: __( 'Slide Right Small', 'uikit-editor-blocks' ), value: 'slide-right-small' },
                { label: __( 'Slide Top Medium', 'uikit-editor-blocks' ), value: 'slide-top-medium' },
                { label: __( 'Slide Bottom Medium', 'uikit-editor-blocks' ), value: 'slide-bottom-medium' },
                { label: __( 'Slide Left Medium', 'uikit-editor-blocks' ), value: 'slide-left-medium' },
                { label: __( 'Slide Right Medium', 'uikit-editor-blocks' ), value: 'slide-right-medium' },
                { label: __( 'Slide Top 100%', 'uikit-editor-blocks' ), value: 'slide-top' },
                { label: __( 'Slide Bottom 100%', 'uikit-editor-blocks' ), value: 'slide-bottom' },
                { label: __( 'Slide Left 100%', 'uikit-editor-blocks' ), value: 'slide-left' },
                { label: __( 'Slide Right 100%', 'uikit-editor-blocks' ), value: 'slide-right' },
              ]}
              onChange={( value ) => {
                setAttributes( { animation: value } );
              }}
            />
          </PanelBody>
          <PanelBody title={ __( 'Navigation', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl 
              label={ __( 'Navigation', 'uikit-editor-blocks' ) }
              value={ navigation }
              options={[
                { label: __( 'Tabs', 'uikit-editor-blocks' ), value: 'tabs' },
                { label: __( 'Subnav Pill (Nav)', 'uikit-editor-blocks' ), value: 'subnav-pill' },
                { label: __( 'Subnav Divider (Nav)', 'uikit-editor-blocks' ), value: 'subnav-divider' },
                { label: __( 'Subnav (Nav)', 'uikit-editor-blocks' ), value: 'subnav' },
              ]}
              onChange={( value ) => {
                setAttributes( { navigation: value } );
              }}
            />
            <SelectControl 
              label={ __( 'Position', 'uikit-editor-blocks' ) }
              value={ navigationPosition }
              options={[
                { label: __( 'Top', 'uikit-editor-blocks' ), value: 'top' },
                { label: __( 'Bottom', 'uikit-editor-blocks' ), value: 'bottom' },
                { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
              ]}
              onChange={( value ) => {
                setAttributes( { navigationPosition: value } );
              }}
            />
            { ( navigationPosition == 'top' || navigationPosition == 'bottom' ) &&
              <SelectControl 
                label={ __( 'Alignment', 'uikit-editor-blocks' ) }
                value={ navigationAlignment }
                options={[
                  { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                  { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                  { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                  { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
                ]}
                onChange={( value ) => {
                  setAttributes( { navigationAlignment: value } );
                }}
              />
            }
            { ( navigationPosition == 'top' || navigationPosition == 'bottom' ) &&
              <SelectControl 
                label={ __( 'Margin', 'uikit-editor-blocks' ) }
                value={ navigationMargin }
                options={[
                  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                  { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                ]}
                onChange={( value ) => {
                  setAttributes( { navigationMargin: value } );
                }}
              />
            }
            { ( navigationPosition == 'left' || navigationPosition == 'right' ) && (
              <>
                <SelectControl 
                  label={ __( 'Grid Width', 'uikit-editor-blocks' ) }
                  value={ navigationGridWidth }
                  options={[
                    { label: __( 'Auto', 'uikit-editor-blocks' ), value: 'auto' },
                    { label: __( '50%', 'uikit-editor-blocks' ), value: '1-2' },
                    { label: __( '33%', 'uikit-editor-blocks' ), value: '1-3' },
                    { label: __( '25%', 'uikit-editor-blocks' ), value: '1-4' },
                    { label: __( '20%', 'uikit-editor-blocks' ), value: '1-5' },
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridWidth: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Grid Column Gap', 'uikit-editor-blocks' ) }
                  value={ navigationGridColumnGap }
                  options={[
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridColumnGap: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Grid Row Gap', 'uikit-editor-blocks' ) }
                  value={ navigationGridRowGap }
                  options={[
                    { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
                    { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridRowGap: value } );
                  }}
                />
                <SelectControl 
                  label={ __( 'Grid Breakpoint', 'uikit-editor-blocks' ) }
                  value={ navigationGridBreakpoint }
                  options={[
                    { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                    { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                    { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                    { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                  ]}
                  onChange={( value ) => {
                    setAttributes( { navigationGridBreakpoint: value } );
                  }}
                />
                <CheckboxControl
                  label={ __( 'Vertical Alignment', 'uikit-editor-blocks' ) }
                  checked={ navigationVerticalAlignment }
                  onChange={ ( isChecked ) =>
                    setAttributes( { navigationVerticalAlignment: isChecked } )
                  }
                />
              </>
            )}
          </PanelBody>
          <UikitGeneralInspectorControls 
            attributes={attributes}
            setAttributes={setAttributes}
          />
        </InspectorControls>
        <div { ...wrapper_attrs }>
          { ( navigationPosition === 'top' || navigationPosition === 'bottom' ) ? (
            <>
              { navigationPosition === 'top' && (
                <ul { ...navigation_attrs }>{ navItems }</ul>
              ) }
              <SwitcherInner
                attributes={ attributes }
              />
              { navigationPosition === 'bottom' && (
                <ul { ...navigation_attrs }>{ navItems }</ul>
              ) }
            </>
          ) : (
            <div { ...nav_grid_attrs }>
              { navigationPosition === 'left' && (
                <>
                  <div { ...navigation_grid_column_attrs }>
                    <ul { ...navigation_attrs }>{ navItems }</ul>
                  </div>
                  <div>
                    <SwitcherInner
                      attributes={ attributes }
                    />
                  </div>
                </>
              ) }
              { navigationPosition === 'right' && (
                <>
                  <div>
                    <SwitcherInner
                      attributes={ attributes }
                    />
                  </div>
                  <div { ...navigation_grid_column_attrs }>
                    <ul { ...navigation_attrs }>{ navItems }</ul>
                  </div>
                </>
              ) }
            </div>
          ) }
        </div>
        <Button
          onClick={() => {
            const newBlock = createBlock('uikit-editor-blocks/switcher-item'); 
            this.props.insertBlock(newBlock);
          }}
          className="uk-width-1-1 uk-flex uk-flex-center uk-margin"
        >
          <span data-uk-icon="plus" className="uk-icon-button"></span>
        </Button>
      </Fragment>
    );
  }
}

const applyWithSelect = withSelect( ( select, { clientId } ) => {
  const { getBlocksByClientId } = select( 'core/block-editor' ) || select( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  const columns = getBlocksByClientId( clientId )[ 0 ]
    ? getBlocksByClientId( clientId )[ 0 ].innerBlocks
    : [];

  return {
    columns,
  };
} );

const applyWithDispatch = withDispatch( ( dispatch, ownProps ) => {
  const { clientId } = ownProps;

  const { updateBlockAttributes, insertBlock } = dispatch( 'core/block-editor' ) || dispatch( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  return {
    updateBlockAttributes,
    insertBlock: (block) => insertBlock(block, undefined, clientId),
  };
} );

export default compose(
  applyWithSelect,
  applyWithDispatch
)( UikitSwitcherEdit );
