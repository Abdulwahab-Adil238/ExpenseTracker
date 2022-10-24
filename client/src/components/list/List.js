import React from 'react'
import Transaction from '../Partials/Transaction/Transaction'
import listData from './listData'
const List = () => {
    return (
        <>
            <h3 style={{ fontWeight: "bolder", fontSize: "1.2rem", textAlign: "center" }}>History</h3>

            {listData.map((lebalData, index) => {
                return (
                    <Transaction key={index} lebelItem={lebalData} index={index} />
                )
            })}
            This is the form tage
        </>
    )
}

export default List