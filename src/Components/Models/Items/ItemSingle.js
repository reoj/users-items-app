import React, { Fragment } from 'react'
import ActionButtons from '../../UI/ActionButtons'

function ItemSingle(props) {
  return (
    <Fragment>
        <td>{props.id}</td>
        <td>{props.description}</td>
        <td>{props.owner}</td>
        <ActionButtons/>
    </Fragment>
  )
}

export default ItemSingle