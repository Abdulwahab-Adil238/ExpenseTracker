import React from 'react'
import Label from '../lebal/Label'
import './Transaction.css'

const Transaction = ({ lebelItem, index }) => {
    const style = {
        backgroundColor: lebelItem.color,
    }
    return (
        <>
            <div className='List_conatiner' key={index} style={{
                borderBottom: ` 3px solid ${lebelItem.color}`
            }}>
                <div className='list_title'>
                    <h3>{lebelItem.type ?? "No items"}</h3>
                    <div className='label_sideColor to_right' style={style}></div>
                </div>
                <h3 className=''>{lebelItem.percent ? `${lebelItem.percent}%` : ""}</h3>
            </div>
        </>
    );
}

export default Transaction