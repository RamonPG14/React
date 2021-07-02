import React, { Component } from 'react'

export default class filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Productos</div>
                <div className="filter-sort"> 
                Orden{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}> 
                        <option>Novedades</option>
                        <option value="lowest">Precio (asc)</option>
                        <option value="highest">Precio (desc)</option>
                    </select>
                </div>
                <div className="filter-size">
                    Filtrar{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">TODOS</option>
                        <option value="P">Pequeña</option>
                        <option value="M">Mediana</option>
                        <option value="F">Grande</option>
                    </select>
                </div>
            </div>
        )
    }
}
