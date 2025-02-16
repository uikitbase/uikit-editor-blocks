// WordPress dependencies

import * as BlockEditor from '@wordpress/block-editor';
import * as Editor from '@wordpress/editor';
import {
  Component,
  Fragment
} from '@wordpress/element';
import {
  SVG,
  Path,
  PanelBody,
  IconButton,
  CheckboxControl,
  SelectControl,
} from '@wordpress/components';
import { compose } from '@wordpress/compose';
import {
  withSelect,
  withDispatch,
} from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

// Fallback to deprecated '@wordpress/editor' for backwards compatibility
const {
  InspectorControls,
  InnerBlocks,
} =  BlockEditor || Editor;

export const CUSTOM_TEMPLATE_NAME = 'custom';

const ALLOWED_BLOCKS = [ 'uikit-editor-blocks/grid-column' ];

const addMissingTemplateIcons = ( templates ) => {
  return templates.map( ( template ) => {
    return {
    icon: (
      <SVG
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
        />
      </SVG>
    ), ...template
    };
  } );
};

let templates = [
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

templates = addMissingTemplateIcons( templates );

export const enableCustomTemplate = applyFilters(
  'uikitEditorBlocks.grid.enableCustomTemplate',
  true
);

if ( enableCustomTemplate ) {
  templates.push( {
    name: CUSTOM_TEMPLATE_NAME,
    title: __( 'Custom', 'uikit-editor-blocks' ),
    icon: (
      <SVG
        width="48"
        height="48"
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.58 26.28c0-.600003.1499985-1.099998.45-1.5.3000015-.400002.7433304-.8399976 1.33-1.32.5600028-.4533356.9833319-.8699981 1.27-1.25s.43-.8433306.43-1.39c0-.5466694-.1733316-1.0566643-.52-1.53s-.986662-.71-1.92-.71c-1.1066722 0-1.8533314.2766639-2.24.83-.3866686.5533361-.58 1.1766632-.58 1.87 0 .1466674.0033333.2666662.01.36.0066667.0933338.01.1533332.01.18h-1.78c-.0133334-.0533336-.0266666-.146666-.04-.28-.0133334-.133334-.02-.2733326-.02-.42 0-.7733372.1766649-1.4666636.53-2.08.3533351-.6133364.8899964-1.0999982 1.61-1.46.7200036-.3600018 1.5999948-.54 2.64-.54 1.2133394 0 2.2033295.3233301 2.97.97s1.15 1.5099946 1.15 2.59c0 .7066702-.1033323 1.3033309-.31 1.79-.2066677.4866691-.4533319.8799985-.74 1.18-.2866681.3000015-.6566644.6233316-1.11.97-.4800024.3866686-.8333322.7166653-1.06.99-.2266678.2733347-.34.6233312-.34 1.05v.82h-1.74zm-.14 2.56h2V31h-2zM39 12c1.1046 0 2 .8954 2 2v20c0 1.1046-.8954 2-2 2H9c-1.10457 0-2-.8954-2-2V14c0-1.1046.89543-2 2-2h30zm0 22V14H9v20h30z"
        />
      </SVG>
    ),
    templateLock: false,
    template: [ [ 'uikit-editor-blocks/grid-column' ] ],
  } );
}

let gapSizeOptions = [
  { label: __( 'Default', 'uikit-editor-blocks' ), value: '' },
  { label: __( 'Small', 'uikit-editor-blocks' ), value: 'small' },
  { label: __( 'Medium', 'uikit-editor-blocks' ), value: 'medium' },
  { label: __( 'Large', 'uikit-editor-blocks' ), value: 'large' },
  { label: __( 'None', 'uikit-editor-blocks' ), value: 'none' },
];

const getColumnsTemplate = ( templateName ) => {
  const template = templates.find( ( t ) => t.name === templateName );
  return template ? template.template : [];
};
const getColumnsTemplateLock = ( templateName ) => {
  const template = templates.find( ( t ) => t.name === templateName );
  return template ? template.templateLock : false;
};

class UikitGridEdit extends Component {
  render() {
    const {
      className,
      attributes,
      setAttributes,
      columns,
      updateBlockAttributes,
      clientId,
    } = this.props;

    const {
      blockId,
      layout: selectedTemplateName,
      columnGap,
      rowGap,
      columnMatch,
      divider,
      centerColumns,
      centerRows,
    } = attributes;

    if ( ! blockId ) {
      setAttributes( { blockId: clientId } );
    }

    const onTemplateChange = ( newSelectedTemplateName ) => {
      const template = templates.find(
        ( t ) => t.name === newSelectedTemplateName
      );

      if ( template ) {
        // Update sizes to fit with selected template
        columns.forEach( ( column, index ) => {
          if ( template.template.length > index ) {
            const newAttributes = template.template[ index ][ 1 ];
            updateBlockAttributes( column.clientId, newAttributes );
          }
        } );
        
        setAttributes( {
          layout: newSelectedTemplateName,
        } );
      }
    };

    return (
      <Fragment>
        <InspectorControls>
          <PanelBody title={ __( 'Layout', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <ul className="uikit-editor-blocks-template-selector-list">
              { templates.map( (
                template,
                index // eslint-disable-line no-shadow
              ) => (
                <li
                  className="uikit-editor-blocks-template-selector-button"
                  key={ index }
                >
                  <IconButton
                    label={ template.title }
                    icon={ template.icon }
                    onClick={ () => {
                      onTemplateChange( template.name );
                    } }
                    className={
                      selectedTemplateName ===
                      template.name
                        ? 'is-active'
                        : null
                    }
                  >
                    <div className="uikit-editor-blocks-template-selector-button-label">
                      { template.title }
                    </div>
                  </IconButton>
                </li>
              ) ) }
            </ul>
          </PanelBody>
          <PanelBody title={ __( 'Grid', 'uikit-editor-blocks' ) } initialOpen={ false }>
            <SelectControl
              label={ __( 'Column Gap', 'uikit-editor-blocks' ) }
              value={ columnGap }
              options={ gapSizeOptions }
              onChange={ ( value ) => {
                setAttributes( {
                  columnGap: value,
                } );
              } }
            />
            <SelectControl
              label={ __( 'Row Gap', 'uikit-editor-blocks' ) }
              value={ rowGap }
              options={ gapSizeOptions }
              onChange={ ( value ) => {
                setAttributes( {
                  rowGap: value,
                } );
              } }
            />
            <CheckboxControl
              label={ __( 'Column Equal Height', 'uikit-editor-blocks' ) }
              checked={ columnMatch }
              onChange={ ( isChecked ) =>
                setAttributes( { columnMatch: isChecked } )
              }
            />
            <CheckboxControl
              label={ __( 'Show Divider', 'uikit-editor-blocks' ) }
              checked={ divider }
              onChange={ ( isChecked ) =>
                setAttributes( { divider: isChecked } )
              }
            />
            <CheckboxControl
              label={ __( 'Center Columns', 'uikit-editor-blocks' ) }
              checked={ centerColumns }
              onChange={ ( isChecked ) =>
                setAttributes( { centerColumns: isChecked } )
              }
            />
            <CheckboxControl
              label={ __( 'Center Rows', 'uikit-editor-blocks' ) }
              checked={ centerRows }
              onChange={ ( isChecked ) =>
                setAttributes( { centerRows: isChecked } )
              }
            />
          </PanelBody>
        </InspectorControls>
        <div className={ className }>
          <InnerBlocks
            allowedBlocks={ ALLOWED_BLOCKS }
            template={ getColumnsTemplate( selectedTemplateName ) }
            templateLock={ getColumnsTemplateLock(
              selectedTemplateName
            ) }
            orientation="horizontal"
          />
        </div>
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

const applyWithDispatch = withDispatch( ( dispatch ) => {
  const { updateBlockAttributes } = dispatch( 'core/block-editor' ) || dispatch( 'core/editor' ); // Fallback to 'core/editor' for backwards compatibility

  return {
    updateBlockAttributes,
  };
} );

export default compose(
  applyWithSelect,
  applyWithDispatch
)( UikitGridEdit );
