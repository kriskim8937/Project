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
import './components/App.css';
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
        {/* //     <header>
    //       <Header></Header>
    //     </header>
    //     <Row>
    //       <Col>
    //         <div class="col-20 col-s-10">
    //         <Carou></Carou>
              
    //         </div>

    //       </Col>
    //       <Col sm={3}>
    //         <div class="aside">
    //           <h2>What?</h2>
    //           <p>Chania is a city on the island of Crete.</p>
    //           <h2>Where?</h2>
    //           <p>Crete is a Greek island in the Mediterranean Sea.</p>
    //           <h2>How?</h2>
    //           <p>You can reach Chania airport from all over Europe.</p>
    //         </div>

    //       </Col>
    //     </Row>
    //     <Article></Article>
*/}


        <body>
          <div class="header">
            <h1>My Website</h1>
            <p>With a <b>flexible</b> layout.</p>
          </div>

          <div class="navbar">
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
          </div>

          <div class="row">
            <div class="side2"></div>
            <div class="main">

              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <Carou></Carou>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <br></br>
              <div className = "cardList">
              <h2>Attendees</h2>

              <CardForm
                onCreate={this.handleCreate}
              />
              <CardList 
                data={information}
                onRemove={this.handleRemove}
              />
              </div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
            <div class="side">
              <h2>What?</h2>
              <p>Chania is a city on the island of Crete.</p>
              <h2>Where?</h2>
              <p>Crete is a Greek island in the Mediterranean Sea.</p>
              <h2>How?</h2>
              <p>You can reach Chania airport from all over Europe.</p>
              <h3>More Text</h3>
              <p>Lorem ipsum dolor sit ame.</p>
              <div class="fakeimg">Image</div><br></br>
              <div class="fakeimg">Image</div><br></br>
              <div class="fakeimg">Image</div>
            </div>
            <div class="side2"></div>
          </div>

          <div class="footer">
            <h2>Footer</h2>
          </div>

        </body>
      </div>
    );
  }
}

export default App;