import React from 'react'

export default class Avatar extends React.Component {
  render() {
    return (
        <figure className="avatar">
          <img src={this.props.image} alt=""/>
          <figcaption>
            {this.props.name}
          </figcaption>
        </figure>
    );
  }
}

