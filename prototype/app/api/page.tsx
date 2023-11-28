export async function fetchSalesData(count:number) {
  const res = await fetch(`https://fakestoreapi.com/products?limit=${count}`)
  const products = await res.json()
  return products
}
