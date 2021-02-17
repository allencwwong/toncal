import React, {useState} from "react"
import { Container , Row , Col } from 'react-bootstrap'

import Layout from "../components/layout"
import SEO from "../components/seo"
import Strip from "../components/Strip"
import "./index.css"
import { baseTonIng } from "./../../data/ing"

const IndexPage = () => {

  const [tonData, setTonData] = useState(baseTonIng);

  // eslint-disable-next-line no-use-before-define
  const HandleAmtChange = (e) =>{
    let amt = 1;
    if(amt > 0){
      amt = e.target.value;
    }

    setTonData({
      'wrapper' : amt*baseTonIng.wrapper , 'mushroom': amt*baseTonIng.mushroom , 'woodear': amt*baseTonIng.woodear , 'shrimp': amt*baseTonIng.shrimp, 'meat': amt*baseTonIng.meat
    });
  }

  const totalWeight = tonData.wrapper + tonData.mushroom + tonData.woodear + tonData.shrimp + tonData['shrimp-tail'] + tonData.meat;

  return (
    <Layout>
      <SEO title="雲吞機" />
        <Container as="section">
          <Row>
            <Col xs={6} md={4}>
              <h1>多少包?</h1>
            </Col>
            <Col xs={6} md={8}>
              <input className="input-amt" onChange={(e) => HandleAmtChange(e)} min="1" max="100" type="number" placeholder="1" pattern="[0-9]*" novalidate />
            </Col>
          </Row>
          <Strip tonType="wrapper" tonData={tonData}></Strip>
          <Strip tonType="mushroom" tonData={tonData}></Strip>
          <Strip tonType="woodear" tonData={tonData}></Strip>
          <Strip tonType="shrimp" tonData={tonData}></Strip>
          <Strip tonType="shrimp-tail" tonData={tonData}></Strip>
          <Strip tonType="meat" tonData={tonData}></Strip>
          <Row>
            <Col>
              <p className="ing-total">Total: { totalWeight }oz | { totalWeight/16 } lbs </p>
            </Col>
          </Row>
        </Container>
    </Layout>
  )
}

export default IndexPage
