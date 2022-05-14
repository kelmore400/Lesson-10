// import React from "react";


// class MyComponent extends React.Component {
//     constructor(props){
//         super(props);
//         this.myRef = React.createRef();
//     }
//     render() {
//         const node = this.myRef.current;
//         return <div ref={this.myRef}/>
//     }
// }

// function MyFunctionComponent () {
//     return <input />
// }

// class Parent extends React.Component {
//     constructor(props){
//         super(props);
//         this.textInput = React.createRef();
//     }
//     render() {
//         // Данный код не будет работать!
//         return (
//            <MyFunctionComponent re={this.textInput} /> 
//         );
//     }
// }

// const FancyButton = React.forwardRef(function Name(props, ref) {
//     return (
//     <button ref={ref} className="FancyButton">
//         {props.children}
//     </button>
//     )
// });

// // Теперь реф будет указывать непосредственно на DOM-узел button:
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;