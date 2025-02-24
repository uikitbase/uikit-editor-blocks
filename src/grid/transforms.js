import {
  createBlock,
  createBlocksFromInnerBlocksTemplate,
} from '@wordpress/blocks';
import { CUSTOM_TEMPLATE_NAME, enableCustomTemplate } from './edit';

const MIN_COLUMN_SIZE = 3;

const transforms =
  enableCustomTemplate && createBlocksFromInnerBlocksTemplate
    ? {
        from: [
          {
            type: 'block',
            isMultiBlock: true,
            blocks: [ '*' ],
            __experimentalConvert: ( blocks ) => {
              const columnSize = Math.max(
                Math.round( 12 / blocks.length ),
                MIN_COLUMN_SIZE
              );
              const innerBlocksTemplate = blocks.map(
                ( { name, attributes, innerBlocks } ) => [
                  'uikit-editor-blocks/grid-column',
                  {
                    sizeMd: columnSize,
                  },
                  [
                    [
                      name,
                      { ...attributes },
                      innerBlocks,
                    ],
                  ],
                ]
              );
              return createBlock(
                'uikit-editor-blocks/grid',
                { template: CUSTOM_TEMPLATE_NAME },
                createBlocksFromInnerBlocksTemplate(
                  innerBlocksTemplate
                )
              );
            },
          },
        ],
      }
    : {};

export default transforms;
