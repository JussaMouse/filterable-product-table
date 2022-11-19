import { useState } from 'react'
import SearchBar from './SearchBar'
import ProductTable from './ProductTable'

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('')
  const [onlyInStock, setOnlyInStock] = useState(false)

  return (
    <>
      <SearchBar
        filterText={filterText}
        onlyInStock={onlyInStock}
        onFilterTextChange={setFilterText}
        onOnlyInStockChange={setOnlyInStock}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        onlyInStock={onlyInStock}
      />
    </>
  )
}

export default FilterableProductTable
