import clsx from 'clsx';

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

const useGeneralBlockProps = (attributes) => {
  const {
    ueb_margin,
    ueb_removeTopMargin,
    ueb_removeBottomMargin,
    ueb_textAlignment,
    ueb_textAlignmentBreakpoint,
    ueb_textAlignmentFallback,
    ueb_maxWidth,
    ueb_maxWidthBreakpoint,
    ueb_blockAlignment,
    ueb_blockAlignmentBreakpoint,
    ueb_blockAlignmentFallback,
    ueb_visibility,
    ueb_animation,
    ueb_animationDelay,
  } = attributes;

  return {
    className: clsx({
      // Margin
      [`uk-margin-${ueb_margin}`]: ueb_margin && ueb_margin !== 'default',
      'uk-margin': ueb_margin === 'default',
      'uk-margin-remove-top': ueb_removeTopMargin,
      'uk-margin-remove-bottom': ueb_removeBottomMargin,

      // Text Alignment
      [`uk-text-${ueb_textAlignment}${ueb_textAlignmentBreakpoint ? `@${ueb_textAlignmentBreakpoint}` : ''}`]: ueb_textAlignment,
      [`uk-text-${ueb_textAlignmentFallback}`]: ueb_textAlignmentFallback,

      // Max Width
      [`uk-width-${ueb_maxWidth}${ueb_maxWidthBreakpoint ? `@${ueb_maxWidthBreakpoint}` : ''}`]: ueb_maxWidth,

      // Block Alignment
      [`uk-margin-auto${ueb_blockAlignment === 'center' ? '' : `-${ueb_blockAlignment}`}${ueb_blockAlignmentBreakpoint ? `@${ueb_blockAlignmentBreakpoint}` : ''}`]: ueb_maxWidth && ueb_blockAlignment,

      // Visibility
      [visibilityClasses[ueb_visibility]]: ueb_visibility in visibilityClasses,

      // Animation
      [`uk-animation-${ueb_animation}`]: ueb_animation && ueb_animation !== 'parallax',
      [`uk-animation-delay-${ueb_animationDelay}`]: ueb_animationDelay && ueb_animation !== 'parallax',
    }),
  };
};

export default useGeneralBlockProps;
