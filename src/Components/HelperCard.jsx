import { Card, Col } from 'react-bootstrap'
import image from '../assets/news2.jpg'


const HelperCard = ({dt}) => {  //use (props) dont ({props})

    // console.log(dt);    //use (dt/props); dont ({props/dt})

  return (
    <>
        <Col md='4'>
            <Card className='w-100 m-2 '>
                <Card.Img className='img-fluid' variant='top' src={dt.urlToImage?dt.urlToImage:image}></Card.Img>
                <Card.Title>{(dt.title && dt.title!="[Removed]")?dt.title:'Sorry!.. Title of the news is not available right now'}</Card.Title>
                <Card.Text>{(dt.description && dt.description!="[Removed]")?dt.description.slice(0,50):'Sorry!.. Description of the news is not available right now'}</Card.Text>
                <div className='d-flex justify-content-between m-1'>
                    <Card.Text>@{(dt.source.name && dt.source.name!="[Removed]")?dt.source.name:'unknown source'}</Card.Text>
                    <a className="btn btn-primary" href={dt.url?dt.url:'/'}>Read More</a>
                </div>
                <Card.Footer>{(dt.publishedAt && dt.publishedAt!="[Removed]")?dt.publishedAt:'unknown'}</Card.Footer>
            </Card>
        </Col>
    </>
  )
}

export default HelperCard



