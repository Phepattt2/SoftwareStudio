import React, { Component } from 'react';
import '../style/CardStyle.css'
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import Counter from './counter';


class Card extends Component {
    
  render() {

    const { FoodType, FoodName, FoodInfo ,ImageUrl} = this.props;

    return (
      <div className="CardContainer">
        <div className="InfoArea">
          <div className="TextArea">
            <h2 className="FoodType" id="FoodType">
              {FoodType}
            </h2>
            <p className="FoodName" id="FoodName">
              {FoodName}
            </p>
            <p className="FoodInfo" id="FoodInfo">
              {FoodInfo}
            </p>
          </div>
          <div className="ImageArea">
            <img class="FoodImage" src={ImageUrl} alt="food image"></img>
          </div>
        </div>
        <div className="ReflectArea">
          <Counter/>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
    FoodType: PropTypes.string.isRequired,
    FoodName: PropTypes.string.isRequired,
    FoodInfo: PropTypes.string.isRequired,
    ImageUrl: PropTypes.string.isRequired,
  };

export default Card;
