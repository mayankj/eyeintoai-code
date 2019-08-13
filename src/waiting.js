import React, { Component } from 'react';
import './App.css';
import Profile from './profile.js'


class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    //profile loading
    componentDidMount() {
            this.props.movetoNext(1)
    }

    render() {

        return (
            <div id="hint" key="loading" >
                <div className="main vertCenter">
                    <div className="matching" >
                        <div className="title">Waiting for other players selecting images</div>
                    </div>
                    <Profile />
                </div>
            </div>

        );
    }
}

export default Loading;
