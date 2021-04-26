import React from "react";
import benz from "./imgs/benz.jpg";
import PaypalButtons from "./PaypalButton";
import { Button, AppBar, Typography } from "@material-ui/core";

import "./App.css";

class App extends React.Component {
  state = {
    showPaypal: false,
  };

  showPaypalButtons = () => {
    this.setState({ showPaypal: true });
  };

  render() {
    const { showPaypal } = this.state;
    if (showPaypal) {
      return <PaypalButtons />;
    } else {
      return (
        <div className="outer-wrap">
          <div className="xxx" style={{ borderColor: "5px solid black" }}>
            <AppBar className="appBar" position="static" color="inherit">
              <Typography variant="h3" align="center">
                Buy this Mercedes at a giveaway price (Super Cheap)
              </Typography>
            </AppBar>
            <h2 style={{ borderColor: "5px solid black" }}> </h2>
            <img alt="Mercedes G-Wagon" height="400px" src={benz} />
            <h3 style={{ borderColor: "5px solid black" }}>
              <b>$1.00</b>
            </h3>
            <Button
              onClick={this.showPaypalButtons}
              variant="contained"
              color="primary"
              size="large"
            >
              Buy with PayPal
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default App;
