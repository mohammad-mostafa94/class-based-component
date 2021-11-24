import React, { Component } from 'react'

export default class SingleUser extends Component {

    render() {
        return (
            <div style={{ border: '1px solid red', margin: '10px', borderRadius: '20px' }}>
                <h4>Name : {this.props.user.name}</h4>
                <p>Email : {this.props.user.email}</p>
                <button onClick={e => this.props.handleAddToCart(this.props.user)}>Add to Cart</button>
            </div>
        )
    }
}
