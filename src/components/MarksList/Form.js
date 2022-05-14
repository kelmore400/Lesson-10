import React from 'react';
import { Button } from '../Button';
import { iconTypes } from '../../constants/icons';
import styles from './MarkList.module.scss';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  onSubmit = (event) => {
    event.preventDefault();
    const newItemValue = this.inputRef.current.value;

    if(!newItemValue) { return; }

    const trimValue = newItemValue.trim();
    if(trimValue.length){
      this.props.addItem({ value: newItemValue, uid: Date.now() });
      this.formRef.current.reset();
    }

  }

  render () {
    return (
      <form ref={this.formRef} onSubmit={this.onSubmit}>
        <div className={styles.formContent}>
          <input type="text" ref={this.inputRef} placeholder="add new mark" className={styles.inputField}/>
          <Button type="submit" iconType={iconTypes.plus} className={styles.submitBtn}>Add</Button>
        </div>
      </form>
    );
  }
}