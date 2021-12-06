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
 I am passionate about problem-solving, writing code, working with web-based technologies, and engaging as part of a team in a collaborative effort to meet company deadlines. I bring a strong work ethic, and adaptive nature, and a curious mind, also I will bring a firm knowledge of the fundamentals of HTML, CSS, JavaScript, and React. I believe I would be a great asset to your team. please click on my projects tab if you will like to see my skills in practice. 
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
