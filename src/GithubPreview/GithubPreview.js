import React, { Component } from 'react';
import './GithubPreview.css';

class GithubPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
    fetch("https://api.github.com/users/lorddz/received_events")
      .then(res => res.json())
      .then(
        (result) => {
            console.log("result: ", result);
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }
  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <div className="section background-img bg-tortoise">
          <div>
              <p></p>
              <h2 className="content-center">In progress..</h2>
            <ul className="githubList whiteframe">
              {items.map(item => (
                item.payload.commits ?
                <li key={item.id}>
                    <p></p>
                    <div>{item.created_at.substr(0, 10)}: {item.actor.login}</div>
                    <div>
                        {item.payload.commits.map(commit => (
                            <div><a href={commit.url}>{commit.message}</a></div>
                        ))}
                    </div>
                </li>
                  :
                  <div></div>
              ))}
            </ul>
          </div>
      </div>
      );
    }
  }
}

export default GithubPreview;
