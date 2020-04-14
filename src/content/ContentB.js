import React from "react";


class ContentB extends React.Component {
  render() {
    return (
      <div className="parallax"id="skill">
        <br />
        <h1 className="h1-fx-2">SKILLS THAT I POSSESS</h1>

        <span className="p-fx">
          HTML & CSS
          <progress max="100" value="80" className="progress-bar"></progress>
        </span>
        <br />
        <br />
        <span className="p-fx">
          JavaScript
          <progress max="100" value="65" className="progress-bar"></progress>
        </span>
        <br />
        <br />
        <span className="p-fx">
          REACTJS
          <progress max="100" value="40" className="progress-bar"></progress>
        </span>
        <br />
        <br />
        <span className="p-fx">
          Leadership
          <progress max="100" value="90" className="progress-bar"></progress>
        </span>
        <br />
        <br />
        <span className="p-fx">
          Bootstrap
          <progress max="100" value="80" className="progress-bar"></progress>
        </span>
        <br />
        <br />
        <span className="p-fx">
          Foreign Language
          <progress max="100" value="90" className="progress-bar"></progress>
        </span>
        <br />
        <br />

      </div>
    );
  }
}
export default ContentB;
