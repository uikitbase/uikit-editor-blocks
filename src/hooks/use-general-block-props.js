const useGeneralBlockProps = (attributes = {}) => {
  const output = [];

  const general_classes = [];
  const general_scrollspy_attr = [];
  const general_parallax_attr = [];

  const margin_variants = {
    default: 'uk-margin',
    small: 'uk-margin-small',
    medium: 'uk-margin-medium',
    large: 'uk-margin-large',
    xlarge: 'uk-margin-xlarge',
  };

  const textAlignment_variants = {
    left: 'uk-text-left',
    center: 'uk-text-center',
    right: 'uk-text-right',
    justify: 'uk-text-justify',
  };

  const textAlignmentBreakpoint_variants = {
    small: '@s',
    medium: '@m',
    large: '@l',
    xlarge: '@xl',
  };

  const textAlignmentFallback_variants = {
    left: 'uk-text-left',
    center: 'uk-text-center',
    right: 'uk-text-right',
    justify: 'uk-text-justify',
  };

  const maxWidth_variants = {
    small: 'uk-width-small',
    medium: 'uk-width-medium',
    large: 'uk-width-large',
    xlarge: 'uk-width-xlarge',
    '2xlarge': 'uk-width-2xlarge',
  };

  const maxWidthBreakpoint_variants = {
    small: '@s',
    medium: '@m',
    large: '@l',
    xlarge: '@xl',
  };

  const blockAlignment_variants = {
    left: 'uk-margin-auto-right',
    center: 'uk-margin-auto',
    right: 'uk-margin-auto-left',
  };

  const blockAlignmentBreakpoint_variants = {
    small: '@s',
    medium: '@m',
    large: '@l',
    xlarge: '@xl',
  };

  const blockAlignmentFallback_variants = {
    left: 'uk-margin-auto-right',
    center: 'uk-margin-auto',
    right: 'uk-margin-auto-left',
  };

  const visibility_variants = {
    'visible-small': 'uk-visible@s',
    'visible-medium': 'uk-visible@m',
    'visible-large': 'uk-visible@l',
    'visible-xlarge': 'uk-visible@xl',
    'hidden-small': 'uk-hidden@s',
    'hidden-medium': 'uk-hidden@m',
    'hidden-large': 'uk-hidden@l',
    'hidden-xlarge': 'uk-hidden@xl',
  };

  const animation_variants = {
    fade: 'uk-animation-fade',
    'scale-up': 'uk-animation-scale-up',
    'scale-down': 'uk-animation-scale-down',
    'slide-top-small': 'uk-animation-slide-top-small',
    'slide-bottom-small': 'uk-animation-slide-bottom-small',
    'slide-left-small': 'uk-animation-slide-left-small',
    'slide-right-small': 'uk-animation-slide-right-small',
    'slide-top-medium': 'uk-animation-slide-top-medium',
    'slide-bottom-medium': 'uk-animation-slide-bottom-medium',
    'slide-left-medium': 'uk-animation-slide-left-medium',
    'slide-right-medium': 'uk-animation-slide-right-medium',
    'slide-top': 'uk-animation-slide-top',
    'slide-bottom': 'uk-animation-slide-bottom',
    'slide-left': 'uk-animation-slide-left',
    'slide-right': 'uk-animation-slide-right',
  };
  
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

  if (generalMargin) {
    if (margin_variants[generalMargin]) {
      general_classes.push(margin_variants[generalMargin]);
    }

    if (generalRemoveTopMargin) {
      general_classes.push('uk-margin-remove-top');
    }

    if (generalRemoveBottomMargin) {
      general_classes.push('uk-margin-remove-bottom');
    }
  }

  if (generalTextAlignment) {
    if (!generalTextAlignmentBreakpoint) {
      if (textAlignment_variants[generalTextAlignment]) {
        general_classes.push(textAlignment_variants[generalTextAlignment]);
      }
    } else {
      if (textAlignment_variants[generalTextAlignment] && textAlignmentBreakpoint_variants[generalTextAlignmentBreakpoint]) {
        general_classes.push(textAlignment_variants[generalTextAlignment] + textAlignmentBreakpoint_variants[generalTextAlignmentBreakpoint]);
      }
    }

    if (generalTextAlignmentFallback) {
      if (textAlignmentFallback_variants[generalTextAlignmentFallback]) {
        general_classes.push(textAlignmentFallback_variants[generalTextAlignmentFallback]);
      }
    }
  }

  if (generalMaxWidth) {
    if (generalMaxWidthBreakpoint) {
      if (maxWidth_variants[generalMaxWidth] && maxWidthBreakpoint_variants[generalMaxWidthBreakpoint]) {
        general_classes.push(maxWidth_variants[generalMaxWidth] + maxWidthBreakpoint_variants[generalMaxWidthBreakpoint]);
      }
    } else {
      if (maxWidth_variants[generalMaxWidth]) {
        general_classes.push(maxWidth_variants[generalMaxWidth]);
      }
    }

    if (generalBlockAlignment) {
      if (generalBlockAlignmentBreakpoint) {
        if (blockAlignment_variants[generalBlockAlignment] && blockAlignmentBreakpoint_variants[generalBlockAlignmentBreakpoint]) {
          general_classes.push(blockAlignment_variants[generalBlockAlignment] + blockAlignmentBreakpoint_variants[generalBlockAlignmentBreakpoint]);
        }

        if (generalBlockAlignmentFallback) {
          if (blockAlignmentFallback_variants[generalBlockAlignmentFallback]) {
            general_classes.push(blockAlignmentFallback_variants[generalBlockAlignmentFallback]);
          }
        }
      } else {
        if (blockAlignment_variants[generalBlockAlignment]) {
          general_classes.push(blockAlignment_variants[generalBlockAlignment]);
        }
      }
    }
  }

  if (generalAnimation) {
    if (generalAnimation !== 'parallax') {
      if (animation_variants[generalAnimation]) {
        general_scrollspy_attr.push(`cls: ${animation_variants[generalAnimation]}`);
      }

      if (generalAnimationDelay) {
        general_scrollspy_attr.push(`delay: ${generalAnimationDelay}`);
      }
    } else {
      const parallax_horizontal_start = generalParallaxHorizontalStart ?? 0;
      const parallax_horizontal_end = generalParallaxHorizontalEnd ?? 0;
      const parallax_vertical_start = generalParallaxVerticalStart ?? 0;
      const parallax_vertical_end = generalParallaxVerticalEnd ?? 0;
      const parallax_scale_start = generalParallaxScaleStart ?? 1;
      const parallax_scale_end = generalParallaxScaleEnd ?? 1;
      const parallax_rotate_start = generalParallaxRotateStart ?? 0;
      const parallax_rotate_end = generalParallaxRotateEnd ?? 0;
      const parallax_opacity_start = generalParallaxOpacityStart ?? 1;
      const parallax_opacity_end = generalParallaxOpacityEnd ?? 1;

      general_parallax_attr.push(`x: ${parallax_horizontal_start}, ${parallax_horizontal_end}`);
      general_parallax_attr.push(`y: ${parallax_vertical_start}, ${parallax_vertical_end}`);
      general_parallax_attr.push(`scale: ${parallax_scale_start}, ${parallax_scale_end}`);
      general_parallax_attr.push(`rotate: ${parallax_rotate_start}, ${parallax_rotate_end}`);
      general_parallax_attr.push(`opacity: ${parallax_opacity_start}, ${parallax_opacity_end}`);
    }
  }

  if (general_classes.length > 0) {
    output.class = general_classes;
  }
  
  const data_attrs = {};
  if (general_scrollspy_attr.length > 0) {
    data_attrs['data-uk-scrollspy'] = general_scrollspy_attr;
  }

  if (general_parallax_attr.length > 0) {
    data_attrs['data-uk-parallax'] = general_parallax_attr;
  }
  
  if (Object.keys(data_attrs).length > 0) {
      output.data_attrs = data_attrs;
  }

  return output;
};

export default useGeneralBlockProps;