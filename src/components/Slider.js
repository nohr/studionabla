import React, { Component } from "react";
import "./slider.css";
import data from "../data.json";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphics3d: [],
      graphics2d: [],
      web: [],
      sound: [],
      isGraphics3d: false,
      isGraphics2d: false,
      isWeb: false,
      isSound: false,
    };
  }

  getGraphics = () => {
    this.setState({
      graphics3d: data.graphics3d,
      graphics2d: data.graphics2d,
      web: data.web,
      sound: data.sound,
    });
  };

  componentDidMount() {
    this.getGraphics();
  }

  showGraphics3D = () => {
    if (this.state.isGraphics3d === false) {
      this.setState({
        isGraphics3d: true,
      });
    } else {
      this.setState({
        isGraphics3d: false,
      });
    }
  };

  showGraphics2D = () => {
    if (this.state.isGraphics2d === false) {
      this.setState({
        isGraphics2d: true,
      });
    } else {
      this.setState({
        isGraphics2d: false,
      });
    }
  };

  showWeb = () => {
    if (this.state.isWeb === false) {
      this.setState({
        isWeb: true,
      });
    } else {
      this.setState({
        isWeb: false,
      });
    }
  };

  showSound = () => {
    if (this.state.isSound === false) {
      this.setState({
        isSound: true,
      });
    } else {
      this.setState({
        isSound: false,
      });
    }
  };

  render() {
    const {
      graphics3d,
      graphics2d,
      web,
      sound,
      isGraphics3d,
      isGraphics2d,
      isWeb,
      isSound,
    } = this.state;

    const pathToImg = "/img/";

    const border = {
      border: "1px solid #f91a2a",
      borderRadius: "5px 5px 5px 5px",
    };

    const section = {
      display: "block",
    };

    return (
      <div className="slider">
        <div
          className="slide section"
          onClick={this.showGraphics3D}
          href="#3DGraphics"
          style={isGraphics3d ? border : null}
        >
          <p className="sectionTitle" style={isGraphics3d ? section : null}>
            3D Graphics
          </p>
          {!isGraphics3d ? (
            <img src="/img/slide-01.jpg" alt="3D Graphics" />
          ) : null}
        </div>

        {isGraphics3d && (
          <div>
            {graphics3d.map((unit) => (
              <div className="slide" id={unit.id} key={unit.id} data-tilt>
                <p className="slideTitle">{unit.name}</p>
                <a href={unit.id}>
                  <img src={pathToImg + unit.src} alt="" />
                </a>
              </div>
            ))}
          </div>
        )}

        <div
          className="slide section"
          data-tilt
          onClick={this.showGraphics2D}
          href="#2DGraphics"
          style={isGraphics2d ? border : null}
        >
          <p className="sectionTitle" style={isGraphics2d ? section : null}>
            2D Graphics
          </p>
          {!isGraphics2d ? (
            <img src="/img/slide-14.jpg" alt="2D Graphics" />
          ) : null}
        </div>

        {isGraphics2d && (
          <div>
            {graphics2d.map((unit) => (
              <div className="slide" id={unit.id} key={unit.id} data-tilt>
                <p className="slideTitle">{unit.name}</p>
                <a href={unit.id}>
                  <img src={pathToImg + unit.src} alt="" />
                </a>
              </div>
            ))}
          </div>
        )}

        <div
          className="slide section"
          data-tilt
          onClick={this.showWeb}
          href="#web"
          style={isWeb ? border : null}
        >
          <p className="sectionTitle" style={isWeb ? section : null}>
            Web Design
          </p>
          {!isWeb ? <img src="/img/slide-06.jpg" alt="Web Design" /> : null}
        </div>

        {isWeb && (
          <div>
            {web.map((unit) => (
              <div className="slide" id={unit.id} key={unit.id} data-tilt>
                <p className="slideTitle">{unit.name}</p>
                <a href={unit.id}>
                  <img src={pathToImg + unit.src} alt="" />
                </a>
              </div>
            ))}
          </div>
        )}

        <div
          className="slide section"
          data-tilt
          onClick={this.showSound}
          href="#sound"
          style={isSound ? border : null}
        >
          <p className="sectionTitle" style={isSound ? section : null}>
            Sound
          </p>
          {!isSound ? <img src="/img/slide-04.jpg" alt="Sound" /> : null}
        </div>

        {isSound && (
          <div>
            {sound.map((unit) => (
              <div className="slide" id={unit.id} key={unit.id} data-tilt>
                <p className="slideTitle">{unit.name}</p>
                <a href={unit.id}>
                  <img src={pathToImg + unit.src} alt="" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Slider;
