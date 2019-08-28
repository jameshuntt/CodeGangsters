import React, { Component } from 'react'
import { Row, Col, Container } from 'react-bootstrap'

export default class GetStarted extends Component {
    render() {
        return (
            <div style={{ paddingTop: '9vh', height: '91vh'}}>
                <Container>
                    <Row>
                        <Col>
                            <h2>Choose from our team of educators</h2>
                        </Col>
                        <Col>
                            <h2>Find the right instructor just for you</h2>
                        </Col>
                        <Col>
                            <h2>Just do it right now....</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Just do it right now....</h2>
                        </Col>
                        <Col>
                            <h2>Just do it right now....</h2>
                        </Col>
                        <Col>
                            <h2>Just do it right now....</h2>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
