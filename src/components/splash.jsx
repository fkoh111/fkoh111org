import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";

class Splash extends Component {
  render() {
    return (
      <div>
        ><span> </span>
        <ReactTypingEffect
          className="typingeffect"
          text={["frederik kok hansen"]}
          speed={100}
          eraseDelay={5000}
          cursor={"_"}
        />
      </div>
    );
  }
}

export default Splash;
