import React,{Fragment} from 'react'
import Label from './components/Label'
import Space from './components/Space'
import Pannel from './components/Pannel'
import Item from './components/Item'
import ClothFrame from './components/Paper'
import Image from 'next/image'
import Link from 'next/link'
import Margins from './components/Margins'
import {fetchSalesData} from './api/page'

const categories = [
  {
    title:"Men's Clothing",
    url:"/clothing/men's clothing",
    params:"men's clothing"
  },
  {
    title:"Women's Clothing",
    url:"/clothing/women's clothing",
    params:"women's clothing"
  }
];

const internalData = (val:any,index:number,products:any) => {
  return (
    <>
    <ClothFrame variant="elevation" elevation={1} sx={{height:"25em"}}>
    <Label sx={{ width: '100%', maxWidth: 500, fontWeight: 'bold' }}  variant="subtitle2" text={(val.title.split(' ').length > 4) ? val.title.split(' ').splice(0, 4).join(" "):val.title} prodCount={products.length}/>
    <Space style={{ m: 2 }} />
    <Image
      src={val.image}
      width={200}
      height={200}
      alt={val.title}
      priority={true}                        
    />
    <Space style={{ m: 2 }} />
  </ClothFrame>
  <ClothFrame variant="elevation" elevation={1} sx={{position:'relative',top:'-1em',backgroundColor: index%2===0?"#2BD9AF":"#FF5D84",height:"15em"}}>
    <Label sx={{ width: '100%', maxWidth: 500, color: '#0F42FD', fontWeight: 'bold' }}  variant='h6' text={'Rs ' + val.price}  prodCount={products.length}/>
    <Label sx={{ width: '100%', maxWidth: 500,textAlign:"center" }}  variant='h6' text={(val.description.split(' ').length > 8) ? val.description.split(' ').splice(0, 8).join(" "):val.description + `...`} prodCount={products.length}/>
  </ClothFrame>
  </>
  )

}


export default async function Home() {
  try{
    const products = await fetchSalesData(4)

    return (
      <main>
      <Space style={{ m: 10 }} />
      <Margins style={{marginTop:"6em",marginBottom:"2em"}}>
      <Pannel spacing={{ xs: 2}}>
        <Item xs={0.5}></Item>
        <Item xs={3.5}>
          <Label sx={{ width: '100%', maxWidth: 500,fontWeight: 'bold', fontSize:20 }}  variant="subtitle2" text="Flash Sale"  />
        </Item>
        <Item  xs={4}>
        </Item>
        <Item  xs={4}>
        </Item>
      </Pannel>
      </Margins>
      <Margins style={{marginLeft:"4em",marginRight:"4em"}}>
      <Pannel spacing={{ xs: 2, md: 3 }} >
        {products?.map(
          (val:Cloth, index:number) => {
            let x = 12 % products.length ===0?(12 / products.length):1
            return (
              <Fragment key={index}>
                <Item xs={x} sm={x} md={x} >
                  {internalData(val,index,products)}
                </Item>
              </Fragment>
            )
          }
        )}
      
      </Pannel>
      </Margins>
      <Margins style={{marginTop:"2em",marginBottom:"2em"}}>
      <Pannel spacing={{ xs: 2}}>
        <Item xs={0.5}></Item>
        <Item xs={3.5}>
          <Label sx={{ width: '100%', maxWidth: 500, fontWeight: 'bold',  fontSize:20 }}  variantType='subtitle2' text="Categories"  />
        </Item>
        <Item  xs={4}>
        </Item>
        <Item  xs={4}>
        </Item>
      </Pannel>
      </Margins>
      <Pannel spacing={{  xs: 2, md: 3 }}>
      <Item xs={0.5}></Item>
        {
          categories.map((_val:Categories, _index:number) => <Fragment key={_index}>
          <Item xs={5.5}>
          <ClothFrame variant="elevation" elevation={1} sx={{position:'relative',backgroundColor: _index%2===0?"#2BD9AF":"#FF5D84",height:"15em"}}>
          <Link href={_val.url+'/'+products.length} style={{ color: 'inherit', textDecoration: 'inherit'}}><Label sx={{ width: '100%', maxWidth: 800, color: '#FFFFFF', fontWeight: 'bold', fontSize:30,marginLeft:"auto",marginRight:"auto",margin:"2em",position:"relative",left:"-2em"}}  variantType='subtitle1' text={_val.title}  /></Link>
          </ClothFrame>
          </Item>
          </Fragment>)        
        }
      <Item xs={0.5}></Item>
      </Pannel>
      </main>
    )
  }catch(error:any){
    throw new Error(error);
  }

}
