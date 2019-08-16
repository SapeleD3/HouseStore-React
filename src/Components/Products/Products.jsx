import React from 'react'
import './products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

class Products extends React.Component {
    render() {
        const { image, title, id, price} = this.props;
        return (

                <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m center img-container grow shadow-5">
                    <img src={image} className="db w-100 br2 br--top" alt={id} />
                    <button className="bag-btn" data-id={id}>
                        <FontAwesomeIcon className='fas fa-shopping-cart' icon={faCartPlus} />
                        add to bag
                    </button>
                    <div className="pa2 ph3-ns pb3-ns">
                        <div className="dt w-100 mt1">
                            <div className="dtc">
                                <h1 className="f5 f4-ns mv0">{title}</h1>
                            </div>
                            <div className="dtc tr">
                                <h2 className="f5 mv0">${price}</h2>
                            </div>
                        </div>
                    </div>
                </article>
        )
    }
}


export default Products