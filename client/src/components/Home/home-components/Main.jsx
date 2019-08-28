import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { AwesomeButton } from 'react-awesome-button'
import LazyHero from 'react-lazy-hero'
import './Main.scss'

export default class Main extends Component {
    render() {
        return (
            <div style={{ paddingTop: '9vh', height: '91vh'}}>
                <LazyHero 
                    parallaxOffset="200" 
                    imageSrc="/assets/binary.jpg" 
                    style={{
                        height: '91vh'
                    }}
                >
                    <Container>
                        <Row>
                            <Col xs={4}>
                                <h1>Fuck You</h1>
                                <AwesomeButton>Get Fucked</AwesomeButton>
                            </Col>
                            <Col xs={4}>
                                <br />
                            </Col>
                            <Col xs={4} md={4}>
                                <h1>Fuck You</h1>
                                <p>
                                    You are such a bitch. You need to learn some
                                    skills before you die a bum.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1>Fuck You</h1>
                            </Col>
                        </Row>
                    </Container>
                </LazyHero>
            </div>
        )
    }
}
