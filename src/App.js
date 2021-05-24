import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  state = {
    isLoading: true
  }

  // render() 된 이후 componentDidMount()를 실행시키니까(React가)
  // setTimeout()에서 this.setState()를 실행
  componentDidMount(){
    setTimeout(() => {
      this.setState((current) => ({isLoading: !current.isLoading}))
    }, 6000)
  }

  render() {
    const {isLoading} = this.state;
    return (
      <div>
        {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
