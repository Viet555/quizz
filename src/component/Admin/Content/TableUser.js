import { useEffect, useState } from "react";
import "./Manager.scss"
const TableUSer = (props) => {
    const { listUser, } = props;

    return (
        <>
            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col " className="action-button">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr key={`table-user${index}`}>
                                    <td >{index + 1} </td>
                                    <td>{item.username}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td className="action-button">
                                        <button className="btn-view"
                                            onClick={() => props.handleClickView(item)}
                                        >View</button>
                                        <button className="btn-Update"
                                            onClick={() => props.handleClickUpdate(item)}
                                        >Update</button>
                                        <button className="btn-Delete"
                                            onClick={() => props.handleClickDelete(item)}
                                        >Delete</button>
                                    </td>
                                </tr>
                            )

                        })
                    }
                    {listUser && listUser.length === 0 &&
                        <tr>
                            <td colSpan={'5'}>
                                not foud User
                            </td>
                        </tr>
                    }

                </tbody>
            </table>
        </>
    )
}
export default TableUSer;