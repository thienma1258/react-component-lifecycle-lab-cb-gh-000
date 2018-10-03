import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }
  componentWillMount()
  {
    var tweets=this.props.newTweets;
    this.setState({tweets:tweets});
  }
componentWillReceiveProps(nextProps){
  var listTweets=this.state.tweets.concat(nextProps.newTweets);
  this.setState({tweets:listTweets});

}
  // TODO: componentWillMount()
  // TODO: shouldComponentUpdate()
  // TODO: componentWillReceiveProps()

  render() {
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
