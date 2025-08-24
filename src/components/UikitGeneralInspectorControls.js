import {
  PanelBody,
  SelectControl,
  CheckboxControl,
  __experimentalNumberControl as NumberControl,
  RangeControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

export default function UikitGeneralInspectorControls({ attributes, setAttributes }) {
  const { 
    generalMargin,
    generalRemoveTopMargin,
    generalRemoveBottomMargin,
    generalTextAlignment,
    generalTextAlignmentBreakpoint,
    generalTextAlignmentFallback,
    generalMaxWidth,
    generalMaxWidthBreakpoint,
    generalBlockAlignment,
    generalBlockAlignmentBreakpoint,
    generalBlockAlignmentFallback,
    generalVisibility,
    generalAnimation,
    generalAnimationDelay,
    generalParallaxHorizontalStart,
    generalParallaxHorizontalEnd,
    generalParallaxVerticalStart,
    generalParallaxVerticalEnd,
    generalParallaxScaleStart,
    generalParallaxScaleEnd,
    generalParallaxRotateStart,
    generalParallaxRotateEnd,
    generalParallaxOpacityStart,
    generalParallaxOpacityEnd,
  } = attributes;

  return (
    <PanelBody title={ __( 'General (UIkit)', 'uikit-editor-blocks' ) } initialOpen={ false } >
      <SelectControl 
        label={ __( 'Margin', 'uikit-editor-blocks' ) }
        value={ generalMargin }
        options={[
          { label: __( 'Keep existing', 'uikit-editor-blocks' ), value: '' },
          { label: __( 'Default', 'uikit-editor-blocks' ), value: 'default' },
          { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
          { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
          { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
          { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
        ]}
        onChange={( value ) => {
          setAttributes( { generalMargin: value } );
        }}
      />
      { generalMargin != '' &&
        <CheckboxControl
          label={ __( 'Remove top margin', 'uikit-editor-blocks' ) }
          checked={ generalRemoveTopMargin }
          onChange={ ( isChecked ) =>
            setAttributes( { generalRemoveTopMargin: isChecked } )
          }
        />
      }
      { generalMargin != '' &&
        <CheckboxControl
          label={ __( 'Remove bottom margin', 'uikit-editor-blocks' ) }
          checked={ generalRemoveBottomMargin }
          onChange={ ( isChecked ) =>
            setAttributes( { generalRemoveBottomMargin: isChecked } )
          }
        />
      }
      <SelectControl 
        label={ __( 'Text alignment', 'uikit-editor-blocks' ) }
        value={ generalTextAlignment }
        options={[
        	{ label: __( 'None', 'uikit-editor-blocks' ), value: '' },
          { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
          { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
          { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
          { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
        ]}
        onChange={( value ) => {
          setAttributes( { generalTextAlignment: value } );
        }}
      />
      { generalTextAlignment != '' &&
        <SelectControl 
          label={ __( 'Text alignment breakpoint', 'uikit-editor-blocks' ) }
          value={ generalTextAlignmentBreakpoint }
          options={[
            { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
            { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
            { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
            { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
            { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
          ]}
          onChange={( value ) => {
            setAttributes( { generalTextAlignmentBreakpoint: value } );
          }}
        />
      }
      { generalTextAlignment != '' && generalTextAlignmentBreakpoint != '' &&
        <SelectControl 
          label={ __( 'Text alignment fallback', 'uikit-editor-blocks' ) }
          value={ generalTextAlignmentFallback }
          options={[
            { label: __( 'None', 'uikit-editor-blocks' ), value: '' },
            { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
            { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
            { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
            { label: __( 'Justify', 'uikit-editor-blocks' ), value: 'justify' },
          ]}
          onChange={( value ) => {
            setAttributes( { generalTextAlignmentFallback: value } );
          }}
        />
      }
      <SelectControl 
        label={ __( 'Max width', 'uikit-editor-blocks' ) }
        value={ generalMaxWidth }
        options={[
        	{ label: __( 'None', 'uikit-editor-blocks' ), value: '' },
          { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
          { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
          { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
          { label: __( 'X-Large', 'uikit-editor-blocks' ), value: 'xlarge' },
          { label: __( '2X-Large', 'uikit-editor-blocks' ), value: '2xlarge' },
        ]}
        onChange={( value ) => {
          setAttributes( { generalMaxWidth: value } );
        }}
      />
      { generalMaxWidth != '' &&
        <SelectControl 
          label={ __( 'Max width breakpoint', 'uikit-editor-blocks' ) }
          value={ generalMaxWidthBreakpoint }
          options={[
            { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
            { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
            { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
            { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
            { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
          ]}
          onChange={( value ) => {
            setAttributes( { generalMaxWidthBreakpoint: value } );
          }}
        />
        
      }
      { generalMaxWidth != '' &&
        <SelectControl 
          label={ __( 'Block alignment', 'uikit-editor-blocks' ) }
          value={ generalBlockAlignment }
          options={[
            { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
            { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
            { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
          ]}
          onChange={( value ) => {
            setAttributes( { generalBlockAlignment: value } );
          }}
        />
      }
      { ( generalMaxWidth != '' && generalBlockAlignment != '' ) &&
        <SelectControl 
          label={ __( 'Block Alignment Breakpoint', 'uikit-editor-blocks' ) }
          value={ generalBlockAlignmentBreakpoint }
          options={[
            { label: __( 'Always', 'uikit-editor-blocks' ), value: '' },
            { label: __( 'Small (Phone Landscape)', 'uikit-editor-blocks' ), value: 'small' },
            { label: __( 'Medium (Tablet Landscape)', 'uikit-editor-blocks' ), value: 'medium' },
            { label: __( 'Large (Desktop)', 'uikit-editor-blocks' ), value: 'large' },
            { label: __( 'X-Large (Large Screens)', 'uikit-editor-blocks' ), value: 'xlarge' },
          ]}
          onChange={( value ) => {
            setAttributes( { generalBlockAlignmentBreakpoint: value } );
          }}
        />
      }
      { ( generalMaxWidth != '' && generalBlockAlignmentBreakpoint != '' ) &&
        <SelectControl 
          label={ __( 'Block Alignment Fallback', 'uikit-editor-blocks' ) }
          value={ generalBlockAlignmentFallback }
          options={[
            { label: __( 'Left', 'uikit-editor-blocks' ), value: 'left' },
            { label: __( 'Center', 'uikit-editor-blocks' ), value: 'center' },
            { label: __( 'Right', 'uikit-editor-blocks' ), value: 'right' },
          ]}
          onChange={( value ) => {
            setAttributes( { generalBlockAlignmentFallback: value } );
          }}
        />
      }
      <SelectControl 
        label={ __( 'Visibility', 'uikit-editor-blocks' ) }
        value={ generalVisibility }
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
          setAttributes( { generalVisibility: value } );
        }}
      />
      <SelectControl
        label={ __( 'Animation', 'uikit-editor-blocks' ) }
        value={ generalAnimation }
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
            generalAnimation: value,
          } );
        } }
      />
      { ( generalAnimation != '' && generalAnimation != 'parallax' ) &&
        <NumberControl
          label={ __( 'Animation delay', 'uikit-editor-blocks' ) }
          value={ generalAnimationDelay }
          onChange={ ( value ) => setAttributes( { generalAnimationDelay: value } ) }
          help={ __( 'Delay the element animations in milliseconds, e.g. 100.', 'uikit-editor-blocks' ) }
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Horizontal start"
          value={ generalParallaxHorizontalStart }
          onChange={( value ) => {
            setAttributes( { generalParallaxHorizontalStart: value } );
          }}
          min={ -600 }
          max={ 600 }
          step={ 10 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Horizontal end"
          value={ generalParallaxHorizontalEnd }
          onChange={( value ) => {
            setAttributes( { generalParallaxHorizontalEnd: value } );
          }}
          min={ -600 }
          max={ 600 }
          step={ 10 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Vertical start"
          value={ generalParallaxVerticalStart }
          onChange={( value ) => {
            setAttributes( { generalParallaxVerticalStart: value } );
          }}
          min={ -600 }
          max={ 600 }
          step={ 10 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Vertical end"
          value={ generalParallaxVerticalEnd }
          onChange={( value ) => {
            setAttributes( { generalParallaxVerticalEnd: value } );
          }}
          min={ -600 }
          max={ 600 }
          step={ 10 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Scale start"
          value={ generalParallaxScaleStart }
          onChange={( value ) => {
            setAttributes( { generalParallaxScaleStart: value } );
          }}
          min={ 0.5 }
          max={ 2 }
          step={ 0.1 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Scale end"
          value={ generalParallaxScaleEnd }
          onChange={( value ) => {
            setAttributes( { generalParallaxScaleEnd: value } );
          }}
          min={ 0.5 }
          max={ 2 }
          step={ 0.1 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Rotate start"
          value={ generalParallaxRotateStart }
          onChange={( value ) => {
            setAttributes( { generalParallaxRotateStart: value } );
          }}
          min={ 0 }
          max={ 360 }
          step={ 10 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Rotate end"
          value={ generalParallaxRotateEnd }
          onChange={( value ) => {
            setAttributes( { generalParallaxRotateEnd: value } );
          }}
          min={ 0 }
          max={ 360 }
          step={ 10 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Opacity start"
          value={ generalParallaxOpacityStart }
          onChange={( value ) => {
            setAttributes( { generalParallaxOpacityStart: value } );
          }}
          min={ 0 }
          max={ 1 }
          step={ 0.1 } 
        />
      }
      { generalAnimation == 'parallax' &&
        <RangeControl
          label="Opacity end"
          value={ generalParallaxOpacityEnd }
          onChange={( value ) => {
            setAttributes( { generalParallaxOpacityEnd: value } );
          }}
          min={ 0 }
          max={ 1 }
          step={ 0.1 } 
        />
      }
    </PanelBody>
  );
}