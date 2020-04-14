import React from "react";
import logo from "../component/asset/img/logo.png";
import logoTesla from "../component/asset/img/logoTesla.jpg";
import logoNetflix from '../component/asset/img/logoNetflix.jpg';
import logoAtlassian from '../component/asset/img/logoAtlassian.jpg'

class ContentC extends React.Component {
  render() {
    return (
      <div className="BG-C">

<div className="flex-fx-3">
        <img className="img-fx-3" src={logoAtlassian} alt="" />
        <br />
        <h1 className="h1-fx-3">
          ATLASSIAN'S OFFICIAL WEBSITE
          <br/>
          <br/>
          <a href="https://www.atlassian.com/" className="link-fx" target="blank">ATLASSIAN'S WEBSITE</a>
        </h1>
      </div>

      <div className="flex-fx-3">
        <img className="img-fx-3" src={logoTesla} alt="" />
        <br />
        <h1 className="h1-fx-3">
          TESLA'S OFFICIAL WEBSITE
          <br/>
          <br/>
          <a href="https://www.tesla.com/" className="link-fx" target="blank">TESLA'S WEBSITE</a>
        </h1>
      </div>

      <div className="flex-fx-3">
        <img className="img-fx-3" src={logoNetflix} alt="" />
        <br />
        <h1 className="h1-fx-3">
          NETFLIX'S OFFICIAL WEBSITE
          <br/>
          <br/>
          <a href="https://www.netflix.com/id-en/" className="link-fx" target="blank">NETFLIX'S WEBSITE</a>
        </h1>
      </div>

      </div>
    );
  }
}
export default ContentC;
