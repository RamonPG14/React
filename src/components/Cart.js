import React, { Component } from 'react';
import formatCurrency from "../util";

export default class Cart extends Component {
    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">No hay elementos en el carro</div>
                ) : (
                    <div className="cart cart-header">
                        Hay {cartItems.length} elementos en el carro{" "}
                    </div>
                )}

                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item)=>(
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.tittle}></img>
                                    </div>
                                    <div>
                                        <div>{item.description}</div>
                                        
                                        <div className="right">
                                            {formatCurrency(item.price)} x { item.count } {" "}
                                            <button className="button" onClick={() => this.props.removeFromCart(item)}>
                                                Eliminar
                                            </button>
                                        </div>

                                        
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {cartItems.length !== 0 && (
                        <div className="cart">
                            <div className="total">
                                <div>
                                    Total: { " " }
                                    {formatCurrency(cartItems.reduce((a,c) => a + c.price*c.count, 0))}
                                </div>
                                <button className="button primary">Realizar compra</button>
                            </div>
                        </div>
                    )}
                    
                </div>

            </div>
            
        );
    }
}
