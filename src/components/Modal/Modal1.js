import React from 'react';
import { BaseModal } from './BaseModal';
import { Button } from '../Button';

export const Modal1 = ({ onRequestClose, ...otherProps }) => (
  <BaseModal onRequestClose={onRequestClose} {...otherProps}>
    <div>I am a First modal</div>
    <Button size="small" onClick={onRequestClose}>Close</Button>
  </BaseModal>
);
