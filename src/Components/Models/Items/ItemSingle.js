import React, { Fragment } from 'react'
import ActionButtons from '../../UI/ActionButtons'

function ItemSingle(props) {
  return (
    <tr>
        <td>{props.idn}</td>
        <td>{props.description}</td>
        <td>{props.owner}</td>
        <ActionButtons/>
    </tr>
  )
}

export default ItemSingle