import React from 'react'
import './products.css'
import Products from './Products'

function Pro({ product }){
    const result = product.items
    const DisplayProduct = result.map(data => <Products
      title={data.fields.title} price={data.fields.price}
      key={data.sys.id} id={data.sys.id}
      image={data.fields.image.fields.file.url}
    />)
    return (
        <div className='pc'>
            {DisplayProduct}
        </div>
    );
}

export default Pro