import React, { Component } from "react";
import Menu from "./MenuComponent";
import Dishdetail from "./DishdetailComponent";
import { DISHES } from "../shared/Dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header />
        <Menu
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <div className="container">
          {this.state.selectedDish != null && (
            <Dishdetail
              dish={
                this.state.dishes.filter(
                  (dish) => dish.id === this.state.selectedDish
                )[0]
              }
            />
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
