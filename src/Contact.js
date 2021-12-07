import { Modal, Button, Form } from "react-bootstrap";

function Contact(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Me!
        </Modal.Title>
      </Modal.Header>

      <Form className="form">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInputName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            className="place-holder"
            placeholder="Full Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            className="place-holder"
            placeholder="name@example.com"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlInputSubject"
        >
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            className="place-holder"
            placeholder="Subject"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Share Your Thoughts...</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <div className="send-btn-container">
          <Button variant="warning" className="send-btn" onClick={props.onHide}>
            Send
          </Button>
      </div>
    </Modal>
  );
}

export default Contact;
