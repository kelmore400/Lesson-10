import React, { Fragment } from 'react';
import { ModalConsumer } from '../context/modal';
import { MarkList } from '../components/MarksList';
import { Button } from '../components/Button';
import { Modal1, Modal2 } from '../components/Modal/index';
import { Theme } from '../homework/theme';

const style = { width: '100%' };

export const Home = () => {
  return (
    <div style={style}>
      <MarkList />
      <div>
        <ModalConsumer>
          {({ showModal }) => (
            <Fragment>
              <Button 
                onClick={() => showModal(Modal1)}
              >
                First Modal
              </Button>
              <Button
                onClick={() => showModal(Modal2, { additionalValue: 'some additional text' })}
              >
                Second Modal
              </Button>
            </Fragment>
          )}
        </ModalConsumer>
      </div>
      <Theme />
    </div>
  )
}