const SearchBar = ({ filterText, inStockOnly, onFilterTextChange, onOnlyInStockChange }) => {
  return (
    <form>
      <input
        type='text'
        value={filterText}
        placeholder='Search...'
        onChange={(e) => {
          onFilterTextChange(e.target.value)
        }}
      />
      <br />
      <label>
        <input
          type='checkbox'
          checked={inStockOnly}
          onChange={(e) => {
            onOnlyInStockChange(e.target.checked)
          }}
        />
        Only show products in stock
      </label>
    </form>
  )
}

export default SearchBar
