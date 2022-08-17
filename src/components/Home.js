import React, { Component } from 'react';
import Item from './Item';

class Home extends Component {

    render() {
    
        return this.props.storeData.map(item => (
            <Item shouldDiscount={this.props.sholdDiscount} itemData={item} />
          ))
        }

    }


export default Home