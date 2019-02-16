import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class Header extends Component {

    render() {
        const style = { 
            border: '1px solid gray',
            fontsize: '90px'
          };
        return (
            
            <div className="App">
                <Container>
                    {/* <Row>
                        <Col style ={style} sm={6}>sm=12</Col>
                        <Col style ={style} sm={4}>sm=4</Col>
                    </Row> */}
                    <Row>
                        <Col style ={style} sm= {8}><h2>
                        ★Gangnam All-you-can-drink Lounge Party (BYO food Available)
                        </h2>
                        </Col>
                        
                        <Col style ={style} sm >Are you going? 28 people going</Col>
                    </Row>
                    <Row>
                        <Col style ={style} sm= {8}>Hosted by Evan and 25 others
From Korean, Japanese, Expats International Friends and Parties

Public group
</Col>
                        <Col style ={style} sm >Saturday, February 16, 2019
7:00 PM to 10:30 PM
Every 3rd Saturday of the month</Col>
                    </Row>
                </Container>;
      </div>
        );
    }
}

export default Header;