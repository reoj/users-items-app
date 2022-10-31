import React, { Fragment, useContext } from "react";
import TableDisplayer from "../../UI/TableDisplayer";
import UserSingle from "./UserSingle";
import { useSelector } from "react-redux";
import ModalContext from "../../../Context/modal-context";

function UsersList(props) {
  const mdlCtx = useContext(ModalContext);
  const usersList = useSelector((state) => state.users.value.list);

  const properties = ["ID", "Name"];

  return (
    <Fragment>
      <TableDisplayer modelType="Users" colList={properties}>
        {usersList.map((u) => {
          return (
            <UserSingle
              key={"User__" + u.id.toString()}
              idn={u.id}
              name={u.name}
              modalCtx={mdlCtx}
            />
          );
        })}
      </TableDisplayer>
    </Fragment>
  );
}

export default UsersList;
