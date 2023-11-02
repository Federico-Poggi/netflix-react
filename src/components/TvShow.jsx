import { Component } from "react";

class TvShow extends Component {
  getTv = async () => {
    try {
      const response = await fetch(
        "http://www.omdbapi.com/?apikey=e65f3c96&i=tt0241527"
      );
      if (response.ok) {
        const data = response.json();
        return data;
      }
    } catch (Err) {
      throw new Error(Err);
    }
  };

  render() {
    return;
  }
}

export default TvShow;
