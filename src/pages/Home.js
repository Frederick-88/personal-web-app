import React from 'react'
import Navbar from '../component/Navbar'
import Content from '../content/Content'
import ContentA from '../content/ContentA'
import ContentB from '../content/ContentB'
import ContentC from '../content/ContentC'
import Footer from '../component/Footer'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Content/>
                <ContentB/>
                <ContentA/>
                <ContentC/>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home;