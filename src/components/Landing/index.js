import React, { Component, Fragment} from 'react'
import Media from 'react-media';

import { Image, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import BG from '../../img/kristy_george.png';
import GM from '../../img/getting_married.png';
export default class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }
    render() {
        return (

        <div>
        <Media 
          queries={{
            small: "(max-width: 599px)",
            medium: "(min-width: 600px) and (max-width: 1199px)",
            large: "(min-width: 1200px)"
          }}
        >
          {
            matches => (
              <Fragment>
              {matches.small && 
                <Container>
                  <Row>
                    <Col>
                      <Image src={GM} rounded fluid />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Image 
                          src={BG} 
                          style={{
                              boxShadow:'rgba(0, 0, 0, 0.75) 22px 22px 67px -19px',
                              height: '100%',
                              width: '100%',
                          }}
                          fluid/>
                    </Col>
                  </Row>
                </Container> 
              }
              {matches.medium && 
                <Container>
                  <Row>
                    <Col xs={10}>
                      <Image src={GM} rounded fluid />
                    </Col>
                    <Col xs={10}>
                      <Image 
                          src={BG} 
                          style={{
                              boxShadow:'rgba(0, 0, 0, 0.75) 22px 22px 67px -19px',
                              height: '100%',
                              width: '100%',
                          }}
                          fluid/>
                    </Col>
                  </Row>
                </Container> 
              }
              {matches.large && 
                <Container 
                    style={{ 
                      display:'flex', 
                      justifyContent:'center', 
                      maxHeight: 1200 
                    }}fluid>
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
                          fluid/>
                    </Col>
                  </Row>
                </Container> 
              }
                </Fragment>
              )
            }
          </Media>
        </div>     
        )
    }
}
