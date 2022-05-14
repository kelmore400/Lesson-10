import React from 'react';
import { BaseModal } from './BaseModal';
import { Button } from '../Button';

export const Modal2 = ({ onRequestClose, additionalValue, ...otherProps }) => (
  <BaseModal onRequestClose={onRequestClose} {...otherProps}>
    <Button size="small" onClick={onRequestClose}>Close</Button>
    <div>I am a second modal {additionalValue}</div>
  </BaseModal>
);