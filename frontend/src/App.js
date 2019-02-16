import React, { Component } from 'react';
import { Alert, idx, Card } from 'react-bootstrap';
import Carou from './components/Carou';
import Article from './components/Article';
import Cards from './components/CardInfo';
import Header from './components/Header';
import CardList from './components/CardList';
import CardForm from './components/CardForm';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import './components/Carou.css';
class App extends Component {
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: '김민준',
        phone: '010-0000-0000'
      },
      {
        id: 1,
        name: '홍길동',
        phone: '010-0000-0001'
      }
    ]
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  render() {
    const { information } = this.state;
    return (
      <div className="App">
        <header>
          <Header></Header>
        </header>
        <Row>
          <Col>
            <div class="col-20 col-s-10">
            <Carou></Carou>
              
            </div>

          </Col>
          <Col sm={3}>
            <div class="aside">
              <h2>What?</h2>
              <p>Chania is a city on the island of Crete.</p>
              <h2>Where?</h2>
              <p>Crete is a Greek island in the Mediterranean Sea.</p>
              <h2>How?</h2>
              <p>You can reach Chania airport from all over Europe.</p>
            </div>

          </Col>
        </Row>
        <Article></Article>

        <CardForm
          onCreate={this.handleCreate}
        />
        <CardList
          data={information}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;