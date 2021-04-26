import React from "react";
import ReactDOM from "react-dom";
import scriptLoader from "react-async-script-loader";
import Car from "./imgs/benz.jpg";
import Spinner from "./Spinner";

 const CLIENT = {
   sandbox:
     "ASDQvR1LRCqMYFtRpu6m59RxBqj5LlZjVfnWUSGG7TDfgsJmUX28eO3TyBe6fgD5-aysHVHV__Pd6GXK",
   production:
     "ASDQvR1LRCqMYFtRpu6m59RxBqj5LlZjVfnWUSGG7TDfgsJmUX28eO3TyBe6fgD5-aysHVHV__Pd6GXK"
 };

 const CLIENT_ID =
   process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;
//create button here
let PayPalButton = null;

// next create the class and Bind React and ReactDom to window
//as we will be needing them later

class PaypalButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showButtons: false,
      loading: true,
      paid: false
    };

    window.React = React;
    window.ReactDOM = ReactDOM;
  }
  //...
 }

 export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);
