import ModalAddnew from "./ModalAddnew"
import "./Manager.scss"
import { useState } from "react"
import TableUSer from "./TableUser"
import { useEffect, } from "react";
import { getallUser } from "../../../Services/ApiServer"
import ModalUpdateUser from "./ModalUpdateUser";
import ModalView from "./ModalView";
import { Modal } from "bootstrap";
import ModalDelete from "./ModalDelete";
const ManageUser = (props) => {

    const [showModaladdUser, setshowModaladdUser] = useState(false)
    const [listUser, setListUser] = useState([]);
    const [showModalUpdateUSer, setshowModalUpdateUSer] = useState(false)
    const [dataUserUpdate, setdataUserUpdate] = useState({})
    const [showModalView, setshowModalView] = useState(false)
    const [dataUsertView, setdataUsetView] = useState({})
    const [showModalDelete, sethshowModalDelete] = useState(false)
    const [dataUserDelete, setdataUserDelete] = useState({})
    useEffect(() => {
        fetAllcharUser();
    }, []);

    const fetAllcharUser = async () => {
        let res = await getallUser()
        if (res && res.EC === 0) {
            setListUser(res.DT)
        }
    }
    const handleClickUpdate = (user) => {
        setshowModalUpdateUSer(true);
        setdataUserUpdate(user)
        console.log("check data :", user)

    }
    const handleClickView = (user) => {
        setshowModalView(true);
        setdataUsetView(user)
        console.log("user", user)
    }
    const handleClickDelete = (user) => {
        sethshowModalDelete(true)
        setdataUserDelete(user)
    }
    return (
        <div className="ManagerUser-container">
            <div className="title">
                hello users
            </div>

            <div className="user-content">
                <div className="btn-add-new">
                    <button className="btn-add-user"
                        onClick={() => setshowModaladdUser(true)}
                    >
                        <i class="fa-solid fa-plus" ></i> Add new user
                    </button>
                </div>
                <div className="table-user-container">
                    <TableUSer
                        listUser={listUser}
                        handleClickUpdate={handleClickUpdate}
                        handleClickView={handleClickView}
                        handleClickDelete={handleClickDelete}
                    />

                </div>

            </div>
            <ModalAddnew
                setShow={setshowModaladdUser}
                show={showModaladdUser}
                fetAllcharUser={fetAllcharUser}
            />
            <ModalUpdateUser
                setShow={setshowModalUpdateUSer}
                show={showModalUpdateUSer}
                dataUserUpdate={dataUserUpdate}
                fetAllcharUser={fetAllcharUser}
            />
            <ModalView
                show={showModalView}
                setShow={setshowModalView}
                dataUsertView={dataUsertView}
            />
            <ModalDelete
                show={showModalDelete}
                setShow={sethshowModalDelete}
                fetAllcharUser={fetAllcharUser}
                dataUserDelete={dataUserDelete}
            />
        </div>
    )
}
export default ManageUser;