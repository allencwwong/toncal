import React from "react"
import {  Row , Col } from 'react-bootstrap'
import { tonIngInfo } from '../../data/ing'

const Strip = (props) => (
    <Row>
    <Col>
      <article className="ing-strip ing-strip-wrapper">
        <div className="bg-img">{ tonIngInfo[props.tonType] && tonIngInfo[props.tonType].img }</div>
        <Row>
          <Col xs={{ span: 4, offset: 4 }}>
            <p class="ing-title">{ tonIngInfo[props.tonType] && tonIngInfo[props.tonType].name }</p>
          </Col>
          <Col xs={4}>
            <p class="ing-weight"><span>{ props.tonData[props.tonType] }</span><span class="sm ft-sub">oz</span></p>
          </Col>
        </Row>
      </article>
    </Col>
  </Row>
);

export default Strip
