import React, { Component } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import '../style/CounterStyle.css';

class Counter extends Component {
  
    state = {
      voteCount: "MIN", // Initialize voteCount to 0
    };
  

  handleVote = () => {
    if (this.state.voteCount < 9) {
      this.setState((prevState) => ({
        voteCount: prevState.voteCount + 1,
      }));
    } else if (this.state.voteCount === "MIN") {
        this.setState((prevState) => ({
          voteCount: 1,
        }));
    } else if (this.state.voteCount === 9) {
        this.setState((prevState) => ({
          voteCount: "MAX",
        }));
    }else if (this.state.voteCount === "MAX") {
        window.alert("Cannot vote more")
    }
  };

  handleUnvote = () => {
    if (this.state.voteCount > 1) {
      this.setState((prevState) => ({
        voteCount: prevState.voteCount - 1,
      }));
    }else if (this.state.voteCount === "MAX") {
        this.setState((prevState) => ({
          voteCount: 9,
        }));
    } else if (this.state.voteCount === 1) {
        this.setState((prevState) => ({
          voteCount: "MIN",
        }));
    }else if (this.state.voteCount === "MIN") {
        window.alert("Cannot unvote")
    }
    
  };

  render() {
    return (
      <div className="AllContainer">
        <div className="VoteButtonContainer">
          <button className="button" onClick={this.handleVote}>
            Click to Vote
          </button>
        </div>
        <div className="CounterContainer">
          <h1 className="Text">{this.state.voteCount}</h1>
        </div>
        <div className="UnvoteButtonContainer">
          <button className="button" onClick={this.handleUnvote}>
            Click to Unvote
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
