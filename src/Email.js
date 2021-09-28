import { Modal, Button,Form } from 'react-bootstrap';

function Email(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-email">
           Contact Me!
          </Modal.Title>
        </Modal.Header>
        
           
                
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Share Your Thoughts</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
</Form>
          <Button onClick={props.onHide}>Close</Button>
        
      </Modal>
    );
  }
  
export default Email;