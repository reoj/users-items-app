import React, { Fragment, useState } from "react";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import UsersList from "../Models/Users/UsersList";
import ItemsList from "../Models/Items/ItemsList";
import CustomModal from "./CustomModal";

function MainDisplay() {
  const [modalProperties, setModalProperties] = useState({
    onDisplay: false,
    title: "",
    message: {},
  });

  const [usersList, setUsersList] = useState([{ id: 1, name: "Isra" }]);
  const [itemsList, setItemsList] = useState([
    { id: 1, desc: "Chair", owner: 1 },
  ]);

  return (
    <Fragment>
      {modalProperties.onDisplay && (
        <CustomModal status={modalProperties} controller={setModalProperties} />
      )}
      <Container className="w-75 rounded bg-light p-3 my-3">
        <Route path="/Users">
          <UsersList
            modalController={setModalProperties}
            state={usersList}
            setter={setUsersList}
          />
        </Route>
        <Route path="/Items">
          <ItemsList
            modalController={setModalProperties}
            state={itemsList}
            setter={setItemsList}
          />
        </Route>
      </Container>
    </Fragment>
  );
}

export default MainDisplay;
