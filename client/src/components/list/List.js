import React from 'react'
import Transaction from '../Partials/Transaction/Transaction'
const List = ({ listData, setLebal }) => {
    return (
        <>
            <h3 style={{ fontWeight: "bolder", fontSize: "1.2rem", textAlign: "center" }}>History</h3>

            {listData !== 'undefined' ? listData.map((lebalData, index) => {
                return (
                    <Transaction key={index} lebelItem={lebalData} index={index} setLebal={setLebal} />
                )
            }) : <h2>No Transaction</h2>
            }
        </>
    )
}

export default List