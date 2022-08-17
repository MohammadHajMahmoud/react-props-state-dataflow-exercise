import React, { Component } from 'react';

class Landing extends Component {


    render() {
        return (
            <div>
              <h1>Hello {this.props.username}</h1>
              <p>
                The hottest item is {this.props.hItem[0].item} for $
                {this.props.hItem[0].price}
              </p>
            </div>
          )

    }
}

export default Landing