import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Counter</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.productData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.product}</td>
                <td>{row.category}</td>
                <td>
                    <button onClick={() => props.decrementProduct(row)} className="btn btn-secondary btn-sm"> - </button>
                    {row.counter}
                    <button onClick={() => props.incrementProduct(row)} className="btn btn-secondary btn-sm"> + </button>
                </td>
                <td><button onClick={() => props.removeProduct(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
    const { productData, incrementProduct, decrementProduct, removeProduct } = props;
        return (
            <table>
                <TableHeader />
                <TableBody 
                   productData={productData}  
                   incrementProduct = { incrementProduct} 
                   decrementProduct = {decrementProduct} 
                   removeProduct = {removeProduct} 
                />
            </table>
        );
}


export default Table;