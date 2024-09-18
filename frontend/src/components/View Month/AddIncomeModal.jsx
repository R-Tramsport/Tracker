import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from 'react';
import axios from 'axios';

const AddIncomeModal = ({ income, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = () => {
        const data = {
            title,
            description,
            category,
            amount,
            "type": "Income",
            "isSpecial": false
        }
        axios
            .post(`http://localhost:5555/transactions/`, data)
            .then((response) => {
                onClose();
                alert("Income added");
            })
            .catch((error) => {
                alert("An error occured. Please check console.");
                console.log(error);
            })
        }
        
        const handleEdit = async (id) => {
            const response = await axios.get(`http://localhost:5555/transactions/${id}`);
            setTitle(response.title);
            setDescription(response.description);
            setCategory(response.category);
            setAmount(response.amount);
            
            axios
            .put(`http://localhost:5555/transactions/${id}`)
            .then((response) => {
                onClose();
                alert("Income edited");
            })
            .catch((error) => {
                alert("An error occured. Please check console.");
                console.log(error);
            })
    }
    

    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            style={{backgroundColor: "rgba(0, 0, 0, 0.8)"}}
            onClick={onClose}    
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full -[400px] bg-white rounded-xl p-4 flex flex-col relative"
                style={{opacity: "1.0"}}
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />
                <h2
                    className="header2"
                >
                    Add Income
                </h2>
                <table>
                    <tr>
                        <td>
                            <div className="label">Title</div>    
                        </td>
                        <td>
                            <input 
                                name="title"
                                className="input"
                                placeholder="e.g. Officeworks"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="label">Description</div>    
                        </td>
                        <td>
                            <input 
                            Description
                                name="description" 
                                className="input" 
                                placeholder="e.g. Fortnightly Pay"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="label">Category</div>    
                        </td>
                        <td>
                            <input 
                                name="category" 
                                className="input" 
                                placeholder="e.g. Income"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="label">Amount</div>    
                        </td>
                        <td>
                            <input 
                                name="amount" 
                                className="input" 
                                placeholder="e.g. 737"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            />
                        </td>
                    </tr>
                </table>
                <div
                    style={{display: 'flex', justifyContent: 'center'}}
                >
                    <button 
                        onClick={() => handleSubmit()}
                        className="add-button"
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default AddIncomeModal;