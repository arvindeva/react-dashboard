import React from 'react';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

class AboutPage extends React.Component {
  state = {
    readMe: ''
  };

  async componentDidMount() {
    const readMeResponse = await axios.get(
      'https://raw.githubusercontent.com/arvindeva/react-dashboard/master/README.md'
    );
    this.setState({ readMe: readMeResponse.data });
  }

  render() {
    return <ReactMarkdown source={this.state.readMe} />
  }
}

export default AboutPage;
