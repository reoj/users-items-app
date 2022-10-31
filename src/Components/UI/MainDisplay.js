import React, { Fragment, useState } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import UsersList from "../Models/Users/UsersList";
import ItemsList from "../Models/Items/ItemsList";

import store from "../../Context/user-redux";

function MainDisplay() {
  const [itemsList, setItemsList] = useState([
    { id: 1, desc: "Chair", owner: 1 },
  ]);

  return (
    <Fragment>
      <Container className="w-75 rounded bg-light p-3 my-3">
        <Route path="/Users">
          <Provider store={store}>
            <UsersList/>
          </Provider>
        </Route>
        <Route path="/Items">
          <ItemsList state={itemsList} setter={setItemsList} />
        </Route>
      </Container>
    </Fragment>
  );
}

export default MainDisplay;
