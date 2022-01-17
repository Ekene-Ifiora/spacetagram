import React from "react";
import "./App.css";
import Post from "./Post";

/**
 * App
 *
 * Simple react js fetch example
 */
class App extends React.Component {
  /**
   * constructor
   *
   * @object  @props  parent props
   * @object  @state  component state
   */
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      isLiked: false,
    };

    this.click = this.click.bind(this);
  }

  /**
   * componentDidMount
   *
   * Fetch json array of objects from given url and update state.
   */
  componentDidMount() {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=SUBSMb94xDm04dUluhjYexxSucp2VPwvZTnHGQe8&count=5"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          isLoaded: true,
        });
        console.log(this.items);
      })
      .catch((err) => {
        console.log(err);
      });

    window.addEventListener("scroll", () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
        // Show loading spinner and make fetch request to api
        fetch(
          "https://api.nasa.gov/planetary/apod?api_key=SUBSMb94xDm04dUluhjYexxSucp2VPwvZTnHGQe8&count=5"
        )
          .then((res) => res.json())
          .then((json) => {
            this.addItems(json);
            console.log(this.items);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  }

  addItems(newItems) {
    this.setState({
      items: this.state.items.concat(newItems),
      isLoaded: true,
    });
  }

  click() {
    this.setState({
      isLiked: !this.state.isLiked,
    });
    console.log(this.state.isLiked);
  }

  /**
   * render
   *
   * Render UI
   */
  render() {
    const { isLoaded, items } = this.state;

    // return (isLoaded)? <h1>Hello</h1>:<h1>Loading....</h1>
    if (!isLoaded) {
      return <div>asd</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map((item) => (
              <Post item={item}/>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
