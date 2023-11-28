import React,{Fragment} from 'react'
import Space from '../../components/Space'
import Pannel from '../../components/Pannel'
import Item from '../../components/Item'
import Label from '../../components/Label'
import Margins from '../../components/Margins'
import ClothFrame from '../../components/Paper'
import Image from 'next/image'

import {fetchSalesData} from '../../api/page'

export default async function page(count:ProductCount) {
  const products = await fetchSalesData(count.params.count)
  return (
    <Fragment>
    <Space style={{ m: 10 }} />
    <Pannel spacing={{ xs: 2}}>
      <Item xs={0.5}></Item>
      <Item xs={3.5}>
        <Label sx={{ width: '100%', maxWidth: 500,fontWeight: 'bold', fontSize:20 }}  variant="subtitle2" text="Women Clothing"  />
      </Item>
      <Item  xs={4}>
      </Item>
      <Item  xs={4}>
      </Item>
    </Pannel>  
    <Pannel spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {products.map(
        (val:Cloth, index:number) => {
          return (
            <Fragment key={index}>
              <Item xs={2} sm={4} md={4} >
                <Margins style={{marginLeft:"5em",marginRight:"5em"}}>
                  <ClothFrame variant="elevation" elevation={1}>
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
                  <ClothFrame variant="elevation" elevation={1} sx={{position:'relative',top:'-1em',backgroundColor: "#FF5D84"}}>
                    <Label sx={{ width: '100%', maxWidth: 500, color: '#0F42FD', fontWeight: 'bold' }}  variant='h6' text={'Rs ' + val.price}  prodCount={products.length}/>
                    <Label sx={{ width: '100%', maxWidth: 500 }}  variant='h6' text={(val.description.split(' ').length > 15) ? val.description.split(' ').splice(0, 15).join(" "):val.description + `...`} prodCount={products.length}/>
                  </ClothFrame>
                </Margins>
              </Item>
            </Fragment>
          )
        }
      )}
    </Pannel>    
    </Fragment>
  )
}
