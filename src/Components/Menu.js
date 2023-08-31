import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Menu = ({items}) => {
  return (
    <main>
    <div className='text-center'>
    <h1 className='bg-dark text-white'>Restaurant Menu</h1>
            {items.map((item)=>{
                const {id,name,neighborhood,photograph,address,cuisine_type} = item
                return(
                    <div className='d-inline-flex ' key={id}>
           <Card className='shadow p-3 m-2 bg-body rounded' style={{ width: '20rem' ,height:'35rem'}}>
           <Card.Img  style={{ height: '18rem'}} className="p-2" variant="top" src= {photograph}/>
           <Card.Body>
             <Card.Title className='text-primary'>{name}</Card.Title>
             <Card.Text>
               {neighborhood}
             </Card.Text>
             <h5>{cuisine_type}</h5>
             <p>{address}</p>
             {/* <div>
                 <p>Qty:
                 <Button  className='m-1'>-</Button>
                 {item.qty}
                 <Button   className='m-1'>+</Button>
                 </p>
             </div> */}
             <Button variant="primary"> Add to Cart </Button>
           </Card.Body>
         </Card>
         </div>
                )
            })}

        

    </div>
    </main>
  )
}

export default Menu