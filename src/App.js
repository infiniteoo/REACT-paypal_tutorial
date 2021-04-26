import React from 'react'
import benz from './imgs/benz.jpg'

class App extends React.Component {
    state = {
      showPaypal: false
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
          <div className="main">
            <h2> Buy this Mercedes at a giveaway price (Super Cheap) </h2>
            <img alt="Mercedes G-Wagon" src={benz} />
            <h3>
              <b>$200</b>
            </h3>
            <button onClick={this.showPaypalButtons}> Pay </button>
          </div>
        );
      }
    }
  }
  
  export default App;