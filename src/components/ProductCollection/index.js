
import React, { useEffect, useState } from 'react'
import Card from '../NewArival/Card'
import './index.css'
import axios from 'axios'
const Collection = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('https://skillkamp-api.com/v1/api/products/')
      .then((response) => {
        setData(response.data.detail.data.catalog.category.productsWithMetaData.list)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])
  const rows = Math.ceil(data.length / 3)

  const itemRows = []
  for (let i = 0; i < rows; i++) {
    const start = i * 3
    const rowItems = data.slice(start, start + 3).map((card) => (
        <Card key={card.id} sku={card.sku} mediaUrl={card.media[0].url} name={card.name} description={card.description} price={card.formattedPrice} url={card.urlPart}/>
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
