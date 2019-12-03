import React, { Component } from 'react';

import { CurrencyFormat } from './CurrencyFormat';

export default class CartOption extends Component {
    render() {
        return (
            <div className='cart__option' key={this.props.index}>
                <div className='cart__option__label'>{this.props.feature} </div>
                <div className='cart__option__value'>{this.props.value}</div>
                <div className='cart__option__cost'>
                    {CurrencyFormat.format(this.props.cost)}
                </div>
            </div>
        );
    }
}