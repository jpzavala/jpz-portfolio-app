import { Modal } from "react-bootstrap";

const EducationModal = (props) => {
  return (
    <Modal show={props.isShowing} size="lg" onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>Modal body content</Modal.Body>
    </Modal>
  );
};

export default EducationModal;
