import { Modal } from "react-bootstrap";

const EducationModal = (props) => {
  return (
    <Modal show={props.isShowing} size="lg" onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Header>Location: {props.data.location}</Modal.Header>
      <Modal.Body>{props.data.comment}</Modal.Body>
    </Modal>
  );
};

export default EducationModal;
