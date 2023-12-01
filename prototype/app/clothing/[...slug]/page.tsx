import React,{Fragment} from 'react'
import Space from '../../components/Space'
import Pannel from '../../components/Pannel'
import Item from '../../components/Item'
import Label from '../../components/Label'
import Margins from '../../components/Margins'
import ClothFrame from '../../components/Paper'
import Image from 'next/image'


import {fetchCategoryData} from '../../api/page'

export default async function Page(slug:any) {
  const products = await fetchCategoryData(slug.params.slug[0],slug.params.slug[1])

  const title = (str:string)=>{
    const titlearray = str.split("%20");
    for (var i = 0, x = titlearray.length; i < x; i++) {
      titlearray[i] = titlearray[i][0].toUpperCase() + titlearray[i].substr(1);
    }
    return titlearray
  }
  
  return (
    <Fragment>
    <Space style={{ m: 10 }} />
    <Margins style={{marginTop:"6em",marginBottom:"2em"}}>
    <Pannel spacing={{ xs: 2}}>
      <Item xs={0.5}></Item>
      <Item xs={3.5}>
        <Label sx={{ width: '100%', maxWidth: 500,fontWeight: 'bold', fontSize:20 }}  variant="subtitle2" text={title(slug.params.slug[0]).join(' ')}  />
      </Item>
      <Item  xs={4}>
      </Item>
      <Item  xs={4}>
      </Item>
    </Pannel>  
    </Margins>
    <Margins style={{marginLeft:"4em",marginRight:"4em"}}>    
    <Pannel spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
    {products.map(
        (val:Cloth, index:number) => {
          return (
            <Fragment key={index}>
              <Item xs={3} sm={3} md={3} >
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
                
              </Item>
            </Fragment>
          )
        }
      )}
    </Pannel>
    </Margins>
    </Fragment>
  )
}
