import React from 'react'
import { useFormik } from 'formik'
import List from '../list/List'
// import axios from 'axios'
import { default as api } from '../../store/apiSlice';

const initialValues = {
    trans_type: "",
    Amount: 0,
    options: "Investment"
}

const Form = ({ listData }) => {

    const [addTransaction] = api.useAddTransactionMutation();
    const { values, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        onSubmit: async (value, action) => {
            addTransaction({
                name: value.trans_type,
                amount: value.Amount,
                type: value.options
            }).unwrap();
            // console.log(data);
            // setLebal((pre) => {
            //     return [...pre, data];
            // })
            action.resetForm()
        }
    });

    return (
        <div className='form_box'>
            <form action="#"
                onSubmit={handleSubmit}
            >
                <div className='form_container'>
                    <div>
                        <input
                            name='trans_type' type="text"
                            placeholder='salary,House Rent,... '
                            className='form_input'
                            value={values.trans_type}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        >

                        </input>
                    </div>
                    <select className='form_input' name='options'
                        value={values.options}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    >
                        <option defaultValue="Investment" name="investment">Investment</option>
                        <option name="Expense">Expense</option>
                        <option Value="Savings" name="Savings">Savings</option>
                    </select>
                    <div className='input_group'>
                        <input
                            name='Amount' type="text" placeholder='Amount'
                            className='form_input'
                            value={+values.Amount}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        ></input>
                    </div>
                    <div className='submit_btn'>
                        <button type="submit">Make Transaction</button>
                    </div>
                </div>
            </form>
            <List listData={listData} />
        </div>
    )
}

export default Form