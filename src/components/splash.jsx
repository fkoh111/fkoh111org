import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

class Splash extends Component {
  render() {
    return (
      <ReactTypingEffect
        className="typingeffect"
        text={["frederik kok hansen"]}
        speed={100}
        eraseDelay={5000}
      />
    );
  }
}

export default Splash;
