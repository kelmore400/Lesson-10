import React from 'react';

export class ClickCounter extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      fetchData1: {
        value: 'value',
        data: ['some text', 'text']
      },
      fetchData2: [1,2,3]
    }
  }

  handleClick = (data) => (e) => {
    this.setState(function (state, props) { return { count: state.count + 1 } });
  };

  render(){
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick('data text')}>Increment</button>
      </div>
    )
  }
}
