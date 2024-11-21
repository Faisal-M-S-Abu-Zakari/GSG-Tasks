import { Card, Col , Button } from "react-bootstrap"

import  photo  from "../images/item.png";
import { useState } from "react";

interface Props {
    title : string ;
    price : number ;
    desc: string ;
}
const Product = ({title , price , desc }:Props) => {
    const [color , setColor] = useState<boolean>(false)
  return (
    <>
        <Col className="mt-3  ms-2 sm-2 md-3">
            <Card style={{ width: '18rem' }} className="text-center">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title>{title.substring(0 , 20)}</Card.Title>
                    <Card.Text>
                    {desc.substring(0 , 20)}
                    </Card.Text>
                    <Card.Text>
                    {price}
                    </Card.Text>
                    {color ? 
                        <Button className="px-3" variant={"btn btn-success"} onClick={()=>setColor(false)}>Added To Cart</Button>:
                        <Button className="px-3" variant={"btn btn-primary"} onClick={()=>setColor(true)}>Add</Button> 
                }
                </Card.Body>
            </Card>
        </Col>
    </>
  )
}

export default Product
