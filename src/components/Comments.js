import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';

class Comments extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    }
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }




  render() {

  	  	  			let commentList = this.props.comments.map( (comment, index) => {

					return  <li key={index}>
   								<p><b>{comment.name} said:</b> {comment.content}</p>
   								
   								<br/><br/>
							</li>
					})

				
    return (
      <div>

        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
        	<h4>Strategies</h4>
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Strategies for {this.props.name}</Modal.Title>
          </Modal.Header>
        	<Modal.Body>
            <ul>{commentList}</ul>

            </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Comments