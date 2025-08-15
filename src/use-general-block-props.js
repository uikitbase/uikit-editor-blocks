import clsx from 'clsx';

const marginClasses = {
  default: 'uk-margin',
  small: 'uk-margin-small',
  medium: 'uk-margin-medium',
  large: 'uk-margin-large',
  xlarge: 'uk-margin-xlarge',
};

const textAlignClasses = {
  left: 'uk-text-left',
  center: 'uk-text-center',
  right: 'uk-text-right',
  justify: 'uk-text-justify',
};
const bpSuffix = { small: '@s', medium: '@m', large: '@l', xlarge: '@xl' };

const maxWidthClasses = {
  small: 'uk-width-small',
  medium: 'uk-width-medium',
  large: 'uk-width-large',
  xlarge: 'uk-width-xlarge',
  '2xlarge': 'uk-width-2xlarge',
};

const blockAlignClasses = {
  left: 'uk-margin-auto-right',
  center: 'uk-margin-auto',
  right: 'uk-margin-auto-left',
};

const visibilityClasses = {
  'visible-small': 'uk-visible@s',
  'visible-medium': 'uk-visible@m',
  'visible-large': 'uk-visible@l',
  'visible-xlarge': 'uk-visible@xl',
  'hidden-small': 'uk-hidden@s',
  'hidden-medium': 'uk-hidden@m',
  'hidden-large': 'uk-hidden@l',
  'hidden-xlarge': 'uk-hidden@xl',
};

const animationClasses = {
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

const useGeneralBlockProps = (attributes = {}) => {
  const {
    // margins
    ueb_margin,
    ueb_removeTopMargin,
    ueb_removeBottomMargin,

    // text
    ueb_textAlignment,
    ueb_textAlignmentBreakpoint,
    ueb_textAlignmentFallback,

    // width + block align
    ueb_maxWidth,
    ueb_maxWidthBreakpoint,
    ueb_blockAlignment,
    ueb_blockAlignmentBreakpoint,
    ueb_blockAlignmentFallback,

    // visibility
    ueb_visibility,

    // animation
    ueb_animation,
    ueb_animationDelay,

    // parallax
    ueb_parallaxHorizontalStart = 0,
    ueb_parallaxHorizontalEnd = 0,
    ueb_parallaxVerticalStart = 0,
    ueb_parallaxVerticalEnd = 0,
    ueb_parallaxScaleStart = 1,
    ueb_parallaxScaleEnd = 1,
    ueb_parallaxRotateStart = 0,
    ueb_parallaxRotateEnd = 0,
    ueb_parallaxOpacityStart = 1,
    ueb_parallaxOpacityEnd = 1,

    // disable
    ueb_disableBlock,
  } = attributes;

  const classes = [];

  // --- Margin (mirror PHP exactly) ---
  if (ueb_margin) {
    if (marginClasses[ueb_margin]) classes.push(marginClasses[ueb_margin]);

    // add only when the checkbox is actually checked (true)
    if (ueb_removeTopMargin === true) classes.push('uk-margin-remove-top');
    if (ueb_removeBottomMargin === true) classes.push('uk-margin-remove-bottom');
  }

  // --- Text alignment (+ optional breakpoint + fallback) ---
  if (ueb_textAlignment) {
    const base = textAlignClasses[ueb_textAlignment];
    if (base) {
      if (!ueb_textAlignmentBreakpoint) {
        classes.push(base);
      } else if (bpSuffix[ueb_textAlignmentBreakpoint]) {
        classes.push(base + bpSuffix[ueb_textAlignmentBreakpoint]);
      }
    }
    if (ueb_textAlignmentFallback) {
      const fb = textAlignClasses[ueb_textAlignmentFallback];
      if (fb) classes.push(fb);
    }
  }

  // --- Max width (+ optional bp) ---
  if (ueb_maxWidth) {
    const mw = maxWidthClasses[ueb_maxWidth];
    if (mw) {
      if (ueb_maxWidthBreakpoint && bpSuffix[ueb_maxWidthBreakpoint]) {
        classes.push(mw + bpSuffix[ueb_maxWidthBreakpoint]);
      } else {
        classes.push(mw);
      }
    }

    // Block alignment only when maxWidth is set (like PHP)
    if (ueb_blockAlignment) {
      const al = blockAlignClasses[ueb_blockAlignment];
      if (al) {
        if (ueb_blockAlignmentBreakpoint && bpSuffix[ueb_blockAlignmentBreakpoint]) {
          classes.push(al + bpSuffix[ueb_blockAlignmentBreakpoint]);

          if (ueb_blockAlignmentFallback) {
            const fb = blockAlignClasses[ueb_blockAlignmentFallback];
            if (fb) classes.push(fb);
          }
        } else {
          classes.push(al);
        }
      }
    }
  }

  // --- Visibility ---
  if (ueb_visibility && visibilityClasses[ueb_visibility]) {
    classes.push(visibilityClasses[ueb_visibility]);
  }

  // --- Disable block in editor (approximate front-end `return ''`) ---
  if (ueb_disableBlock) {
    classes.push('uk-hidden');
  }

  // --- Animation / data attributes ---
  let dataAttrs = {};
  if (ueb_animation) {
    if (ueb_animation !== 'parallax') {
      const parts = [];
      const cls = animationClasses[ueb_animation];
      if (cls) parts.push(`cls: ${cls}`);
      if (ueb_animationDelay) parts.push(`delay: ${ueb_animationDelay}`);
      if (parts.length) dataAttrs['data-uk-scrollspy'] = parts.join('; ');
    } else {
      const parts = [];
      parts.push(`x: ${ueb_parallaxHorizontalStart},${ueb_parallaxHorizontalEnd}`);
      parts.push(`y: ${ueb_parallaxVerticalStart},${ueb_parallaxVerticalEnd}`);
      parts.push(`scale: ${ueb_parallaxScaleStart},${ueb_parallaxScaleEnd}`);
      parts.push(`rotate: ${ueb_parallaxRotateStart},${ueb_parallaxRotateEnd}`);
      parts.push(`opacity: ${ueb_parallaxOpacityStart},${ueb_parallaxOpacityEnd}`);
      dataAttrs['data-uk-parallax'] = parts.join('; ');
    }
  }

  return {
    className: clsx(classes),
    ...dataAttrs,
  };
};

export default useGeneralBlockProps;
