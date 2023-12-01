'use client'
 
import { useEffect } from 'react'
import Pannel from './components/Pannel'
import Item from './components/Item'
import Label from './components/Label'
import ButtonComponent from './components/Button'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {    
    console.error(error)
  }, [error])
 
  return (
    <Pannel spacing={{ xs: 2}}>
      <Item xs={4}>
          <Label sx={{ width: '100%', maxWidth: 500,fontWeight: 'bold', fontSize:16 }}  variant="h2" text="Something went wrong!"/>
      </Item>        
      <Item xs={4}><ButtonComponent text='Try Again !' variant='contained' type='button' fnc={() => reset()} disabled={false}/></Item>
      <Item xs={4}></Item>
    </Pannel>
  )
}