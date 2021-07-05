import React, { Component } from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends Component {
    render() {
        return !this.props.filteredProducts ? (
            <div>Cargando...</div> ) : (
            <div className="filter">
                <div className="filter-result">{this.props.filteredProducts.length} Productos</div>
                <div className="filter-sort"> 
                    Orden{" "}
                    <select value={this.props.sort} onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)} /* e.target.value es el valor selecccionado, this.props.filteredProducts, valor de la función coonect de abajo */ > 
                        <option value="latest">Novedades</option>
                        <option value="lowest">Precio (asc)</option>
                        <option value="highest">Precio (desc)</option>
                    </select>
                </div> 
                <div className="filter-size">
                    Masa{" "}
                    <select value={this.props.size} onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                        <option value="">TODAS</option>
                        <option value="F">Finissima</option>
                        <option value="M">Mollete</option>
                        <option value="P">Prosciutto</option>
                    </select>
                </div>
            </div>
        
        );
    }
}
export default  connect((state) => ({
    size: state.products.size,
    sort:state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
}),{
    filterProducts,
    sortProducts,
})(Filter);