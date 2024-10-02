import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { DeleteUser } from '../../../Services/ApiServer';
import { toast } from 'react-toastify';

const ModalDelete = (props) => {
    const { show, setShow, dataUserDelete } = props;
    const handleClose = () => {
        setShow(false)
    }
    const handleConfirmDelete = async () => {

        let data = await DeleteUser(dataUserDelete.id)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            props.fetAllcharUser()
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
        }

    }
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Delete User</Modal.Title>
                </Modal.Header>
                <Modal.Body>you will sure delete this email : <b className='text-danger'>{dataUserDelete.email}</b></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>
                        Comfirm
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;