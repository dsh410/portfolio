import { Modal, Button } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Projects</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4> Blogging site project</h4>
        <a href="https://gifted-hamilton-2e7ab1.netlify.app" target="_blank" rel="noopener noreferrer">simple blog</a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" git add onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
