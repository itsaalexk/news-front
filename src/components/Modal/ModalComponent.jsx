import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function ModalComponent({ show, onClose, onDeleteConfirm }) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      className="modal show"
      style={{
        display: "block",
        position: "initial",
        position: "absolute",
        top: 200,
      }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>¿Eliminar la noticia?</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>¿Estás seguro de que quieres eliminar la noticia?</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={onClose} variant="secondary">
            Cerrar
          </Button>
          <Button onClick={onDeleteConfirm} variant="primary">
            Eliminar
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
