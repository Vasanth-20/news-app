import React, { useEffect, useState } from 'react'
import HelperCard from './HelperCard'
import { CardGroup, Container, Row } from 'react-bootstrap'

const Content = React.memo(({category}) => {

    const API_KEY = '384098e1d41745668c8bf2f3a05e0fc7'

    const [data, setData] = useState([])

    useEffect(()=>{
        async function getData(){
            // const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`)
            const resData = await response.json()
            const {articles} = resData
            setData(articles)
        }
        getData()
    },[category])

    return (
      <>
        <CardGroup>
            <Container fluid>
                <Row >
                    {data.map((d, i)=>{
                        // return <HelperCard key={i} title={d.title} src={d.urlToImage} des={d.description} source={d.source} rm={d.url} pAt={d.publishedAt} />
                        return <HelperCard key={i} dt={d} />
                    })} 
                </Row>
            </Container>
        </CardGroup>

      </>
    )
  })

export default Content