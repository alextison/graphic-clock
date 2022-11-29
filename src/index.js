import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
  
  function HandType (props) {
    const type = props.type;
      if (type === 'hours') {
        return <div id="hours" style={props.style}></div>;
      } else if (type === 'minutes') {
        return <div id="minutes" style={props.style}></div>;
      } else{
        return <div id="seconds" style={props.style}></div>;
      }
  }

  class Hand extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            style: {
              transform: 'rotate(-90deg)',
            }
        }
    }

    handleChangeTime(type) {
      if (type === 'hours') {
        const value = new Date().getHours();
        this.setState({
          style: {
            transform: 'rotate('+ ((value * 15) - 90) +'deg)',
          }
        });
      } else if (type === 'minutes') {
        const value = new Date().getMinutes();
        this.setState({
          style: {
            transform: 'rotate('+ ((value * 6) - 90) +'deg)',
          }
        });
      }  else if (type === 'seconds') {
        const value = new Date().getSeconds();
        this.setState({
          style: {
            transform: 'rotate('+ ((value * 6) - 90) +'deg)',
          }
        });
      }
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.handleChangeTime(this.props.type),
        1000
      );
    }

    render (){
      return(
        <HandType
          type={this.props.type}
          style={this.state.style}
        />
      );
    }
  }

  class Clock extends React.Component {
    render() {
      return(
        <div className="container">
          <h1>Paris Time (GMT+2)</h1>
          <div id="clock">
            <Hand
              type="hours"
            />
            <Hand
              type="minutes"
            />
            <Hand
              type="seconds"
            />
          </div>
        </div>
      );
    }
  }
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Clock/>);