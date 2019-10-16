import React, { Component } from 'react'

import { Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import BG from '../../img/kristy_george.png';
import GM from '../../img/getting_married.png';
export default class Landing extends Component {
    render() {
        return (
        <Container fluid>
            <Row>
              <Col xs={4}>
                <Image src={GM} rounded fluid />
              </Col>
              <Col xs={7}>
                <Image 
                    src={BG} 
                    style={{
                        boxShadow:'rgba(0, 0, 0, 0.75) 22px 22px 67px -19px',
                        height: '100%',
                        width: '100%',
                    }}
                    rounded 
                    fluid/>
              </Col>
            </Row>

          </Container>
        )
    }
}
