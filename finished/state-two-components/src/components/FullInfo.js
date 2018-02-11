import React from 'react'

export default class FullInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div>
          {this.props.data}
        </div>
    );
  }
}



