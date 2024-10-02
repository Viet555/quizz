import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { postNewuser } from "../../../Services/ApiServer"
import { toast } from 'react-toastify';
const ModalAddnew = (props) => {
    const { show, setShow, fetAllcharUser } = props;
    const handleClose = () => {
        setemail("");
        setShow(false);
        setPassword("");
        setRole("USER");
        setimagePreview("");
        setuserName("")
    };
    const [email, setemail] = useState("")
    const [Password, setPassword] = useState("")
    const [userName, setuserName] = useState("")
    const [Role, setRole] = useState("User")
    const [imagePreview, setimagePreview] = useState("")
    const [image, setimage] = useState("")


    const handleUploadimg = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setimagePreview(URL.createObjectURL(event.target.files[0]))
            setimage(event.target.files[0])

        } else {
            setimagePreview("")
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const HandleSubmitUser = async () => {
        const isValiDateEmail = validateEmail(email);
        if (!isValiDateEmail) {
            alert("err Email !")
            setemail("")
            return;
        }
        if (!Password) {
            alert("err pass !")
            return;
        }
        let data = await postNewuser(email, Password, userName, Role, image)
        if (data && data.EC === 0) {
            toast.success(data.EM)
            handleClose()
            await fetAllcharUser();
        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)

        }

    }
    return (
        <>
            {/* <button className=" btnshow-modal " onClick={setShow}>
                Launch
            </button> */}
            <Modal
                show={show}
                onHide={handleClose}
                size="lg"
                backdrop="static"
                className='Modal-Add-new'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add new User</Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <>
                        <form>
                            <div className=" row g-3">
                                <div className="form-lable col-md-6">
                                    <label className="form-label"> Email</label>
                                    <input type="email" className="form-control"
                                        value={email}
                                        onChange={(event) => setemail(event.target.value)}
                                    />
                                </div>
                                <div className="form-lable col-md-6">
                                    <label className="form-label"> Password</label>
                                    <input type="password" className="form-control"
                                        value={Password}
                                        onChange={(event) => setPassword(event.target.value)} />
                                </div>
                                <div className="form-lable col-md-6">
                                    <label className="form-label"> UserName</label>
                                    <input type="email" className="form-control"
                                        value={userName}
                                        onChange={(event) => setuserName(event.target.value)}
                                    />

                                </div>
                                <div className="form-lable col-md-4">
                                    <label className="form-label"> Role</label>
                                    <select className="form-select"
                                        value={Role}
                                        onChange={(event) => setRole(event.target.value)}>
                                        <option value="USER">USER</option>
                                        <option value="ADMIN">ADMIN</option>
                                    </select>

                                </div>
                                <div className="form-lable col-md-12">
                                    <label className="form-label label-upload" htmlFor='LabelUpload'>
                                        <i className="fa-solid fa-cloud-arrow-up"></i> Upload File Image

                                    </label>
                                    <input type='file' id='LabelUpload' hidden
                                        onChange={(event) => handleUploadimg(event)}

                                    />
                                    <div className='col-md-12 img-preview'>
                                        {imagePreview ?
                                            <img src={imagePreview} />
                                            :

                                            <span>preview img </span>

                                        }
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={HandleSubmitUser}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal >
        </>
    );
}

export default ModalAddnew;