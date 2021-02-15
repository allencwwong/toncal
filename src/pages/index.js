import React, {useState} from "react"
import { Container , Row , Col } from 'react-bootstrap'

import Layout from "../components/layout"
import Wrapper from "../components/Wrapper"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => {
  const tonData = {
    "wrapper": 8,
    "mushroom": 0.5,
    "woodear": 0.75,
    "shrimp": 0.25,
    "meat": 4.5
  }
  
  const [wrapperAmt, useWrapperAmt] = useState(tonData.wrapper);
  // const [mushroomAmt, useMushroomAmt] = useState(tonData.mushroom);
  // const [woodEarAmt, useWoodEarAmt] = useState(tonData.woodear);
  // const [shrimpAmt, useShrimpAmt] = useState(tonData.shrimp);
  // const [meatAmt, useMeatAmt] = useState(tonData.meat);

  // eslint-disable-next-line no-use-before-define
  const HandleAmtChange = (e) =>{
    let amt = 1;
    if(amt > 0){
      amt = e.target.value;
    }
      useWrapperAmt(amt*tonData.wrapper);
      // useMushroomAmt(amt*tonData.mushroom);
      // useWoodEarAmt(amt*tonData.woodear);
      // useShrimpAmt(amt*tonData.shrimp);
      // useMeatAmt(amt*tonData.meat);
  }

  return (
    <Layout>
      <SEO title="Home" />
        <Container as="section">
          <Row>
            <Col xs={6} md={4}>
              <h1>多少包?</h1>
            </Col>
            <Col xs={6} md={8}>
              <input onChange={(e) => HandleAmtChange(e)} min="1" max="100" type="number" placeholder="1" />
            </Col>
          </Row>
          <Row>
            <Col>
              <article className="ing-card ing-card-wrapper">
                <div className="bg-img"><Wrapper></Wrapper></div>
                <Row>
                  <Col xs={{ span: 4, offset: 5 }}>
                    <p>雲吞皮</p>
                  </Col>
                  <Col xs={3}>
                    <p>{ wrapperAmt }<span>oz</span></p>
                  </Col>
                </Row>
              </article>
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}

export default IndexPage
