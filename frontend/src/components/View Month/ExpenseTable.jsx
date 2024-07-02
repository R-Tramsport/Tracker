import React, {useState} from "react";
import axios from "axios";

import '../../styles.css';

const ExpenseTable = ({trans}) => {
    const handleDeleteTransaction = (id) => {
        axios
        .delete(`http://localhost:5555/transactions/${id}`)
        .catch((error) => {
            alert("An error occured. Please check console.");
            console.log(error);
        })
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th className='text-right'>Amount</th>
                    <th className='text-right'>Special</th>
                    <th className='text-right'>Edit/Delete</th>
                </tr>
                <tr>
                    <td><hr class='solid' /></td>
                    <td><hr class='solid' /></td>
                    <td><hr class='solid' /></td>
                    <td><hr class='solid' /></td>
                    <td><hr class='solid' /></td>
                    <td><hr class='solid' /></td>
                    <td><hr class='solid' /></td>
                </tr>
            </thead>
            <tbody>
                {trans.map( (transaction, index) => (
                    <tr key={transaction._id}>
                        <td>{transaction.createdAt}</td>
                        <td>{transaction.title}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td className='text-right'>{transaction.amount}</td>
                        <td className='text-right'>{index + 1}</td>
                        <td style={{display: "flex", justifyContent: "right"}}>
                            <button className='edit'>Edit</button>
                            <button 
                                className='delete'
                                onClick={() => handleDeleteTransaction(transaction._id)}
                            >Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>

        </table>
    )
}

export default ExpenseTable;