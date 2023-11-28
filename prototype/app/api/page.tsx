export  async function fetchSalesData(count:number) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${count}`)
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }
  const products:Cloth[] = await res.json()
  return products
}
