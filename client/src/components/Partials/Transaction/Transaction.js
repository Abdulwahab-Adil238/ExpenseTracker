import './Transaction.css'
import { default as api } from '../../../store/apiSlice';


const Transaction = ({ lebelItem, index, setLebal }) => {
    const [deleteTransaction] = api.useDeleteTransactionMutation()
    const style = {
        backgroundColor: lebelItem.color,
    }
    const deleteLebal = (id) => {
        // console.log(id)
        deleteTransaction({ _id: id })
    }
    return (
        <>
            <div className='List_conatiner' key={index} style={{
                borderBottom: ` 3px solid ${lebelItem.color}`
            }}>
                <div className='list_title'>
                    <button style={{ color: lebelItem.color }} onClick={() => deleteLebal(lebelItem._id)}>🗑</button>
                    <h3>{lebelItem.name ?? "No items"}</h3>
                    <div className='label_sideColor to_right' style={style}></div>
                </div>
                <h3 className=''>{lebelItem.percent ? `${Math.round(lebelItem.percent)}%` : ""}</h3>
            </div>
        </>
    );
}

export default Transaction