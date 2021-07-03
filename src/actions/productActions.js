import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types";
export const fetchProducts = () => async (dispatch) => {
    const res = await fetch("/api/products");
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    });
};

//Función FILTRAR (Productos backend)
export const filterProducts = (products, size) => (dispatch) => {
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: 
                size === "" 
                ? products 
                : products.filter((x)=> x.availableSizes.indexOf(size)>=0),   //else, muestra los acordes al parámetro dado
        },
    });
};

//Función ORDENAR (Productos backend)
export const sortProducts = (filteredProducts, sort) => (dispatch) => {
    const sortedProducts = filteredProducts.slice();                    //crea una copia de los productos filtrados para trabajar con ella
    if(sort === "latest") {                                                   //Si sort es "", filtraremos por id
        sortedProducts.sort((a,b) => (a._id > b._id? 1 : -1));            //filtro, donde 1 es if, y -1 else
    } else{
        sortedProducts.sort((a, b) => (
            sort === "lowest"? a.price > b.price? 1 : -1
            :
            a.price > b.price? -1 : 1
        ));
    }
    console.log(sortedProducts);
    dispatch(
        {
            type: ORDER_PRODUCTS_BY_PRICE,
            payload: {
                sort:sort,
                items: sortedProducts,
            },
        }
    );
};