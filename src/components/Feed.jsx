import React, { Component } from "react";
import "./feed.css";

const inline = { display: "inline-block" };

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphics3d: [],
      graphics2d: [],
      web: [],
      sound: [],
      isCDchat: false,
    };
  }

  showCDchat = () => {
    if (this.state.isCDchat === false) {
      this.setState({
        isCDchat: true,
      });
    } else {
      this.setState({
        isCDchat: false,
      });
    }
  };

  render() {
    const { isCDchat } = this.state;
    return (
      <div className="feed">
        <div id="0" style={inline}>
          <div onMouseOver={this.showCDchat} onMouseOut={this.showCDchat}>
            <img className="CD" height="50px" src="/img/CD.svg" alt="CD" />
          </div>
          {isCDchat && (
            <iframe
              title="CDchat"
              id="CDchat"
              src="https://studionabla.com/CD/index.html"
            ></iframe>
          )}
        </div>
      </div>
    );
  }
}

export default Feed;
