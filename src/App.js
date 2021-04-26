import React from 'react'
import benz from './imgs/benz.jpg'
import PaypalButtons from './PaypalButton';

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
            <img alt="Mercedes G-Wagon" height="200px"src={benz} />
            <h3>
              <b>$1.00</b>
            </h3>
            <button onClick={this.showPaypalButtons}> Pay </button>
          </div>
        );
      }
    }
  }
  
  export default App;