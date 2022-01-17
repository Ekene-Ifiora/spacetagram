import React, { Component } from "react";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";
import dateFormat, { masks } from "dateformat";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLiked: false,
    };

    this.click = this.click.bind(this);
  }

dateFormat(date){
    return dateFormat(date, "fullDate");
}

  click() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
    console.log(this.state.isLiked);
  }
  render() {
    const item = this.props.item;

    return (
      <li key={item.id} className="post">
        <img src={item.url} alt={`Image of ${item.title}`} className="pic" />

        <div
          style={{
            margin: "auto",
            display: "block",
            width: "fit-content",
          }}
        >
          {this.state.isLiked ? (
            <div onClick={this.click}>
              {" "}
              <Favorite style={{ color: "red" }} />
            </div>
          ) : (
            <div onClick={this.click}>
              <FavoriteBorder />
            </div>
          )}
        </div>

        <p style={{ fontWeight: "bold" }}>Name: {item.title}</p>
        <p>Explanation: {item.explanation}</p>

        <p style={{ fontWeight: "light" }}>Date Taken: {this.dateFormat(item.date)}</p>
      </li>
    );
  }
}
