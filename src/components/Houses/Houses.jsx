import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllHouses } from "../../redux/actions";
import HouseCard from "../HouseCard/HouseCard";
export class Houses extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllHouses();
  }
render() {
    return (
      <div>
        <h1>Game of Thrones</h1>
        <img src="main-image-cp2.jpg" alt="main-img" />
        <h3>Houses</h3>

        {this.props.houses?.map((house, index) => (
          <HouseCard
            characters={house.characters}
            key={index}
            name={house.name}
            region={house.region}
            words={house.words}
            id={house.id}
          />
        ))}
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    houses: state.houses,
  };
};

export const mapDispatchToProps = {
  getAllHouses,
};
export default connect(mapStateToProps, mapDispatchToProps)(Houses);
