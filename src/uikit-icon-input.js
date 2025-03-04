import { __ } from '@wordpress/i18n';

import { useState } from '@wordpress/element';

import {
  useBaseControlProps,
  Button,
  Modal,
  BaseControl,
  SearchControl,
  Flex,
  FlexBlock,
  FlexItem,
} from '@wordpress/components';

import { search } from '@wordpress/icons';

import clsx from 'clsx';

import icons from './uikit-icons';

export default function UIkitIconInput( props ) {
  const { label, help, value, onChange, allowedIcons } = props;

  const [ isModalOpen, setIsModalOpen ] = useState( false );
  const [ searchInput, setSearchInput ] = useState( '' );

  const openModal = () => {
    setIsModalOpen( true );
    setSearchInput( '' );
  };
  const closeModal = () => {
    setIsModalOpen( false );
  };

  const filteredIcons = icons.filter( ( icon ) =>
    ( !allowedIcons || allowedIcons.includes( icon ) ) &&
    icon.toLowerCase().includes( searchInput.toLowerCase() )
  );

  const { baseControlProps, controlProps } = useBaseControlProps( {
    label,
    help,
  } );

  return (
    <>
      { isModalOpen && (
        <Modal
          title={ __( 'Icons', 'uikit-editor-blocks' ) }
          size="large"
          onRequestClose={ closeModal }
        >
          <SearchControl
            label={ __( 'Search icon', 'uikit-editor-blocks' ) }
            value={ searchInput }
            onChange={ setSearchInput }
          />

          <Flex wrap={ true } style={ { justifyContent: 'flex-start' } }>
            { filteredIcons.map( ( icon ) => (
              <FlexItem
                key={ icon }
                onClick={ () => {
                  onChange( icon );
                  closeModal();
                } }
                style={ { cursor: 'pointer' } }
                role="button"
                tabIndex="0"
              >
                <div
                  className="uk-padding-small"
                  style={ { width: '100px' } }
                >
                  <span
                      data-uk-icon={ clsx(
                        `icon: ${ icon };`,
                        'width: 40;',
                        'height: 40;'
                      ) }
                  ></span>
                  <div>{ icon }</div>
                </div>
              </FlexItem>
            ) ) }
          </Flex>
        </Modal>
      ) }
      <BaseControl { ...baseControlProps }>
        <Flex>
          <FlexBlock>
            <input
              className="components-text-control__input"
              value={ value }
              placeholder={ __( 'Icon name…', 'uikit-editor-blocks' ) }
              onChange={ ( event ) =>
                onChange( event.target.value )
              }
              { ...controlProps }
            />
          </FlexBlock>
          <FlexItem>
            <Button
              size="compact"
              icon={ search }
              onClick={ openModal }
              variant="secondary"
            ></Button>
          </FlexItem>
        </Flex>
      </BaseControl>
    </>
  );
}