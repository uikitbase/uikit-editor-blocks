/**
 * WordPress Imports.
 */

import { InspectorControls } from '@wordpress/block-editor';
import {
  Panel,
  PanelBody,
  __experimentalRadio as Radio,
  __experimentalRadioGroup as RadioGroup,
  SelectControl,
  CheckboxControl,
  __experimentalNumberControl as NumberControl,
  RangeControl,
} from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default createHigherOrderComponent((BlockEdit) => {
  return (props) => {
    /**
     * Extract Props
     */
    const { attributes, setAttributes } = props;

    const { ueb_margin, ueb_removeTopMargin, ueb_removeBottomMargin, ueb_textAlignment, ueb_textAlignmentBreakpoint, ueb_textAlignmentFallback, ueb_maxWidth, ueb_maxWidthBreakpoint, ueb_blockAlignment, ueb_blockAlignmentBreakpoint, ueb_blockAlignmentFallback, ueb_visibility, ueb_animation, ueb_animationDelay, ueb_parallaxHorizontalStart, ueb_parallaxHorizontalEnd, ueb_parallaxVerticalStart, ueb_parallaxVerticalEnd, ueb_parallaxScaleStart, ueb_parallaxScaleEnd, ueb_parallaxRotateStart, ueb_parallaxRotateEnd, ueb_parallaxOpacityStart, ueb_parallaxOpacityEnd, ueb_disableBlock } = attributes;

    return (
      <Fragment>
        <BlockEdit {...props} />
        <InspectorControls key="InspectorControls">
          <PanelBody title={ __( 'General (UIkit)', 'uikit-editor-blocks' ) } initialOpen={ false } >
            <SelectControl 
              label={ __( 'Margin', 'uikit-editor-blocks' ) }
              value={ ueb_margin }
              options={[
                { label: __( 'Keep existing', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { ueb_margin: value } );
              }}
            />
            { ueb_margin != '' &&
              <CheckboxControl
                label={ __( 'Remove top margin', 'uikit-editor-blocks' ) }
                checked={ ueb_removeTopMargin }
                onChange={ ( isChecked ) =>
                  setAttributes( { ueb_removeTopMargin: isChecked } )
                }
              />
            }
            { ueb_margin != '' &&
              <CheckboxControl
                label={ __( 'Remove bottom margin', 'uikit-editor-blocks' ) }
                checked={ ueb_removeBottomMargin }
                onChange={ ( isChecked ) =>
                  setAttributes( { ueb_removeBottomMargin: isChecked } )
                }
              />
            }
            <SelectControl 
              label={ __( 'Text alignment', 'uikit-editor-blocks' ) }
              value={ ueb_textAlignment }
              options={[
              	{ label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
              ]}
              onChange={( value ) => {
                setAttributes( { ueb_textAlignment: value } );
              }}
            />
            { ueb_textAlignment != '' &&
              <SelectControl 
                label={ __( 'Text alignment breakpoint', 'uikit-editor-blocks' ) }
                value={ ueb_textAlignmentBreakpoint }
                options={[
                  { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                ]}
                onChange={( value ) => {
                  setAttributes( { ueb_textAlignmentBreakpoint: value } );
                }}
              />
            }
            { ueb_textAlignment != '' && ueb_textAlignmentBreakpoint != '' &&
              <SelectControl 
                label={ __( 'Text alignment fallback', 'uikit-editor-blocks' ) }
                value={ ueb_textAlignmentFallback }
                options={[
                  { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                  { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                  { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                  { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
                ]}
                onChange={( value ) => {
                  setAttributes( { ueb_textAlignmentFallback: value } );
                }}
              />
            }
            <SelectControl 
              label={ __( 'Max width', 'uikit-editor-blocks' ) }
              value={ ueb_maxWidth }
              options={[
              	{ label: __( 'None', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
                { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
                { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
                { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
                { label: __( '2X-Large', 'uikit-editor-blocks' ), value: '2xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { ueb_maxWidth: value } );
              }}
            />
            { ueb_maxWidth != '' &&
              <SelectControl 
                label={ __( 'Max width breakpoint', 'uikit-editor-blocks' ) }
                value={ ueb_maxWidthBreakpoint }
                options={[
                  { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                ]}
                onChange={( value ) => {
                  setAttributes( { ueb_maxWidthBreakpoint: value } );
                }}
              />
              
            }
            { ueb_maxWidth != '' &&
              <SelectControl 
                label={ __( 'Block alignment', 'uikit-editor-blocks' ) }
                value={ ueb_blockAlignment }
                options={[
                  { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                  { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                  { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                ]}
                onChange={( value ) => {
                  setAttributes( { ueb_blockAlignment: value } );
                }}
              />
            }
            { ( ueb_maxWidth != '' && ueb_blockAlignment != '' ) &&
              <SelectControl 
                label={ __( 'Block Alignment Breakpoint', 'uikit-editor-blocks' ) }
                value={ ueb_blockAlignmentBreakpoint }
                options={[
                  { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                  { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
                  { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
                  { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
                  { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
                ]}
                onChange={( value ) => {
                  setAttributes( { ueb_blockAlignmentBreakpoint: value } );
                }}
              />
            }
            { ( ueb_maxWidth != '' && ueb_blockAlignmentBreakpoint != '' ) &&
              <SelectControl 
                label={ __( 'Block Alignment Fallback', 'uikit-editor-blocks' ) }
                value={ ueb_blockAlignmentFallback }
                options={[
                  { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
                  { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
                  { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
                ]}
                onChange={( value ) => {
                  setAttributes( { ueb_blockAlignmentFallback: value } );
                }}
              />
            }
            <SelectControl 
              label={ __( 'Visibility', 'uikit-editor-blocks' ) }
              value={ ueb_visibility }
              options={[
                { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
                { label: __( 'Visible Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'visible-small' },
                { label: __( 'Visible Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'visible-medium' },
                { label: __( 'Visible Large (Desktop)', 'uikit-editor-blocks' ), value: 'visible-large' },
                { label: __( 'Visible X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'visible-xlarge' },
                { label: __( 'Hidden Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'hidden-small' },
                { label: __( 'Hidden Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'hidden-medium' },
                { label: __( 'Hidden Large (Desktop)', 'uikit-editor-blocks' ), value: 'hidden-large' },
                { label: __( 'Hidden X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'hidden-xlarge' },
              ]}
              onChange={( value ) => {
                setAttributes( { ueb_visibility: value } );
              }}
            />
            <SelectControl
              label={ __( 'Animation', 'uikit-editor-blocks' ) }
              value={ ueb_animation }
              options={
                [
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
                  { label: __( 'Parallax', 'uikit-editor-blocks' ), value: 'parallax' },
                ]
              }
              onChange={ ( value ) => {
                setAttributes( {
                  ueb_animation: value,
                } );
              } }
            />
            { ( ueb_animation != '' && ueb_animation != 'parallax' ) &&
              <NumberControl
                label={ __( 'Animation delay', 'uikit-editor-blocks' ) }
                value={ ueb_animationDelay }
                onChange={ ( value ) => setAttributes( { ueb_animationDelay: value } ) }
                help={ __( 'Delay the element animations in milliseconds, e.g. 100.', 'uikit-editor-blocks' ) }
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Horizontal start"
                value={ ueb_parallaxHorizontalStart }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxHorizontalStart: value } );
                }}
                min={ -600 }
                max={ 600 }
                step={ 10 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Horizontal end"
                value={ ueb_parallaxHorizontalEnd }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxHorizontalEnd: value } );
                }}
                min={ -600 }
                max={ 600 }
                step={ 10 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Vertical start"
                value={ ueb_parallaxVerticalStart }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxVerticalStart: value } );
                }}
                min={ -600 }
                max={ 600 }
                step={ 10 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Vertical end"
                value={ ueb_parallaxVerticalEnd }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxVerticalEnd: value } );
                }}
                min={ -600 }
                max={ 600 }
                step={ 10 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Scale start"
                value={ ueb_parallaxScaleStart }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxScaleStart: value } );
                }}
                min={ 0.5 }
                max={ 2 }
                step={ 0.1 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Scale end"
                value={ ueb_parallaxScaleEnd }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxScaleEnd: value } );
                }}
                min={ 0.5 }
                max={ 2 }
                step={ 0.1 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Rotate start"
                value={ ueb_parallaxRotateStart }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxRotateStart: value } );
                }}
                min={ 0 }
                max={ 360 }
                step={ 10 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Rotate end"
                value={ ueb_parallaxRotateEnd }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxRotateEnd: value } );
                }}
                min={ 0 }
                max={ 360 }
                step={ 10 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Opacity start"
                value={ ueb_parallaxOpacityStart }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxOpacityStart: value } );
                }}
                min={ 0 }
                max={ 1 }
                step={ 0.1 } 
              />
            }
            { ueb_animation == 'parallax' &&
              <RangeControl
                label="Opacity end"
                value={ ueb_parallaxOpacityEnd }
                onChange={( value ) => {
                  setAttributes( { ueb_parallaxOpacityEnd: value } );
                }}
                min={ 0 }
                max={ 1 }
                step={ 0.1 } 
              />
            }
            <CheckboxControl
              label={ __( 'Disable Block', 'uikit-editor-blocks' ) }
              checked={ ueb_disableBlock }
              onChange={ ( value ) =>
                setAttributes( { ueb_disableBlock: value } )
              }
            />
          </PanelBody>
        </InspectorControls>
      </Fragment>
    );
  };
}, 'uikitGeneralInspectorControls');
