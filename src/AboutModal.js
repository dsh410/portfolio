import { Modal, Button } from "react-bootstrap";

function AboutModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">About Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Hi My Name Is Demetri</h4>
        <p>
          I am a Front end web developer skilled in HTML, CSS, JavaScript,
          Bootstrap, Git, React l, and other UI libraries with a love for front
          end frameworks like React. A professional with a desire to learn new
          skills and improve with feedback. I believe I would be a great asset
          to your team. please click on my projects tab if you will like to see
          my skills in practice.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="warning" git add onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AboutModal;
