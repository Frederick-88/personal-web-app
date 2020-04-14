import React from 'react'
import logo from '../component/asset/img/logo.png'


class Content extends React.Component {
    render() {
        return (
            <div className="flex-fx">
                <img className="img-fx" src={logo} alt=""/>
                <br/>
                <h1 className="h1-fx">Welcome To My Website, <br/>
                    made with ReactJS.
                    <br/>
                    <br/>
                    Look Downside for More ...</h1>

            </div>
        )
    }
}
export default Content;