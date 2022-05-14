import React from 'react';
import styles from './BaseModal.module.scss';

export class BaseModal extends React.Component {
  constructor(props){
    super(props);
    this.containerRef = React.createRef();
  }

  onClose = event => {
    if(event.target === this.containerRef.current){
      this.props.onRequestClose();
    }
  }

  render(){
    const { onRequestClose, children, ...restProps } = this.props;
    return (
      <div 
          className={styles.container} 
          {...restProps}
          onClick={this.onClose}
          ref={this.containerRef}
        >
        <div className={styles.content}>
          {children}
        </div>
      </div>
    );
  }
}
