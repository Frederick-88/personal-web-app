import React from 'react'
import logo from '../component/asset/img/logo.png'


class Content extends React.Component {
    render() {
        return (
            <div className="flex-fx">
                <img className="img-fx" src={logo} alt=""/>
                <br/>
                <h1 className="h1-fx">FD-TECHNOLOGIES <br/>
                <br/>
                    Together, Let's Create <br/>
                    Something Great for <br/>
                    The World!
                    </h1>

            </div>
        )
    }
}
export default Content;