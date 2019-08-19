import React, { Component } from 'react';
import './App.css';

import { StaticData } from './images'

class Round extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 0,
    }
    this.round = this.props.round
    this.animals = StaticData.animal;
    this.objects = StaticData.object;
  }

  renderContent() {
    let element = [];
    switch (this.round) {
      case 1: element.push(<div className={"profile plyr1"} key="roundProfile">
        <div className="photo " >
          <i className={this.props.players[0]} /></div>
        <div className="name">
          Me
        </div>
      </div>)
        break;
      case 2: element.push(<div className={"profile plyr2"} key="roundProfile">
        <div className="photo" >
          <i className={this.props.players[1]} /></div>
        <div className="name">
          {this.props.players[1].slice(7)}
        </div>
      </div>)
        break;
      case 3: element.push(<div className={"profile plyr3"} key="roundProfile">
        <div className="photo" >
          <i className={this.props.players[2]} /></div>
        <div className="name">
          {this.props.players[2].slice(7)}
        </div>
      </div>)
        break;
      default:
    }
    return <div key="roundInfo">
      <div className="title round">Round {this.props.round}</div>
      <div className="profiles">
        {element} selects an image
        </div>
    </div>
  }
  componentDidMount() {
    window.setTimeout(function () {
      this.props.movetoNext(3)
    }.bind(this), 5000)

    if (this.round > 1) {
      let ranNum = (Math.floor(Math.random() * 2));
      let ranVisOrder = [0, 1, 2, 3, 4, 5, 6, 7];
      let ran1, ran2, ranTemp, answerSet, visSet;
      for (let i = 0; i < 10; i++) {
        ran1 = Math.floor(Math.random() * 8);
        ran2 = Math.floor(Math.random() * 8);

        ranTemp = ranVisOrder[ran1];
        ranVisOrder[ran1] = ranVisOrder[ran2]
        ranVisOrder[ran2] = ranTemp;
      }
      (ranNum % 2 === 0) ? answerSet = this.animals : answerSet = this.objects;
      visSet = answerSet[ran2].correctURLs.concat(answerSet[ran2].wrongVizURLs);
      this.props.setAnswer(answerSet[ran2]);
      this.props.setHint(visSet[ranVisOrder[0]], visSet[ranVisOrder[1]], visSet[ranVisOrder[2]], visSet[ranVisOrder[3]]);
      this.props.setHintVisUrl(ranVisOrder[0], ranVisOrder[1],ranVisOrder[2], ranVisOrder[3]);
    }
  }
  render() {

    return (
      <div className="App" style={{ width: "100%", height: "100%" }}>
        <div className="main vertCenter">
          <div className="matching" >

            {this.renderContent()}
          </div>
        </div>

      </div>
    );
  }
}

export default Round;