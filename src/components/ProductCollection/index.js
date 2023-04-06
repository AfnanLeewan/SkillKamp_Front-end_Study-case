
import React, { useEffect, useState } from 'react'
import Card from '../NewArival/Card'
import './index.css'

const Collection = () => {
  const [NewArrivalProducts, setNewArrivalProducts] = useState([])
  useEffect(() => {
    fetch('https://skillkamp-api.com/v1/api/products/new_arrivals')
      .then(response => response.json())
      .then(data => {
        const products = data.detail.data.catalog.category.productsWithMetaData.list
        setNewArrivalProducts(products)
        console.log(products)
      })
  }, [])
  const rows = Math.ceil(NewArrivalProducts.length / 3)

  const itemRows = []
  for (let i = 0; i < rows; i++) {
    const start = i * 3
    const rowItems = NewArrivalProducts.slice(start, start + 3).map((card) => (
        <Card key={card.id} mediaUrl={card.media[0].url} name={card.name}
      description={card.description} price={card.price}/>
    ))
    itemRows.push(
      <div key={i} className="row">
        {rowItems}
      </div>
    )
  }

  return (<div>{itemRows }</div>)
}
export default Collection
