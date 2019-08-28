import React, { Component } from 'react'
import Main from './home-components/Main'
import GetStarted from './home-components/GetStarted'
import News from './home-components/News'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Main />
                </div>
                <div>
                    <GetStarted />
                </div>
                <div>
                    <News />
                </div>
                <div>

                </div>
            </div>
        )
    }
}
