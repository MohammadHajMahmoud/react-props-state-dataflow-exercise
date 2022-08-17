import React, { Component } from 'react';

class Item extends Component {
    render() {
         return (
            <div>
              {this.props.itemData.item} | $
              {this.props.shouldDiscount
                ? this.props.itemData.price * (1 - this.props.itemData.discount)
                : this.props.itemData.price}
            </div>
          )

    }
}

export default Item