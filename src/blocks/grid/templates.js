import { __ } from '@wordpress/i18n';

export const templates = [
  {
    name: '1-1',
    title: __( 'Whole', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-1',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-2+1-2',
    title: __( 'Halves', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 30 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-2',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-2',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-3+2-3',
    title: __( 'Thirds 1-2', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 20 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-3',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-3',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '2-3+1-3',
    title: __( 'Thirds 2-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 40 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-3',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-3',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-3+1-3+1-3',
    title: __( 'Thirds', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 20 0 V 30 M 40 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-3',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-3',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-3',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-4+3-4',
    title: __( 'Quarters 1-3', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 15 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '3-4',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '3-4+1-4',
    title: __( 'Quarters 3-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 45 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '3-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-4+1-4+2-4',
    title: __( 'Quarters 1-1-2', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 15 0 V 30 M 30 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-2',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '2-4+1-4+1-4',
    title: __( 'Quarters 2-1-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 30 0 V 30 M 45 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-2',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-4+2-4+1-4',
    title: __( 'Quarters 1-2-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 15 0 V 30 M 45 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-2',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-4+1-4+1-4+1-4',
    title: __( 'Quarters', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 15 0 V 30 M 30 0 V 30 M 45 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-4',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-5+4-5',
    title: __( 'Fifths 1-4', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 12 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '4-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '4-5+1-5',
    title: __( 'Fifths 4-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 48 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '4-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '2-5+3-5',
    title: __( 'Fifths 2-3', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 24 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '3-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '3-5+2-5',
    title: __( 'Fifths 3-2', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 36 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '3-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-5+1-5+3-5',
    title: __( 'Fifths 1-1-3', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 12 0 V 30 M 24 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '3-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '3-5+1-5+1-5',
    title: __( 'Fifths 3-1-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 36 0 V 30 M 48 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '3-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-5+1-5+1-5+1-5+1-5',
    title: __( 'Fifths', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 12 0 V 30 M 24 0 V 30 M 36 0 V 30 M 48 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-5',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '4-6+1-6+1-6',
    title: __( 'Sixths 4-1-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 30 0 V 30 M 40 0 V 30 M 50 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-3',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-6+1-6+4-6',
    title: __( 'Sixths 1-1-4', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 10 0 V 30 M 20 0 V 30 M 30 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-3',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-6+4-6+1-6',
    title: __( 'Sixths 1-4-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 10 0 V 30 M 50 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '2-3',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
    ],
  },
  {
    name: '1-6+1-6+1-6+1-6+1-6+1-6',
    title: __( 'Sixths 1-1-1-1-1-1', 'uikit-editor-blocks' ),
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 64 34">
        <path d="M 0 0 H 60 V 30 H 0 V 0 M 10 0 V 30 M 20 0 V 30 M 30 0 V 30 M 40 0 V 30 M 50 0 V 30" stroke="#000" stroke-width="2" fill="#fff"/>
      </svg>
    ),
    templateLock: 'all',
    template: [
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
      [
        'uikit-editor-blocks/grid-column',
        {
          defaultWidth: '1-1',
          smallWidth: '',
          mediumWidth: '',
          largeWidth: '1-6',
          xlargeWidth: '',
        },
      ],
    ],
  },
];
