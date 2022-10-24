import React from 'react'

const label = ({ lebelItem, index }) => {
    return (

        <div className='labels_conatiner' key={index} style={{
            borderLeft: `.2rem solid ${lebelItem.color}`,
            borderBottom: ` 4px solid ${lebelItem.color}`
        }}>
            <div className='label_title'>
                <div className='label_sideColor' style={{ backgroundColor: lebelItem.color }}></div>
                <h3>{lebelItem.type ?? "No items"}</h3>
            </div>
            <h3 className=''>{lebelItem.percent ? `${lebelItem.percent}%` : ""}</h3>
        </div>
    );
}
export default label;