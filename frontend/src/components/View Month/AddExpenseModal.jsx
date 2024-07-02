import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { useEffect, useState } from 'react';
import axios from 'axios';

const AddExpenseModal = ({ expense, onClose }) => {
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
            "isSpecial": false
        }
        axios
            .post(`http://localhost:5555/transactions/`, data)
            .catch((error) => {
                alert("An error occured. Please check console.");
                console.log(error);
            })
    }

    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            style={{backgroundColor: "black", opacity: "0.9"}}
            onClick={onClose}    
        >
            <div
                onClick={(event) => event.stopPropagation()}
                className="w-[600px] max-w-full -[400px] bg-white rounded-xl p-4 flex flex-col relative"
            >
                <AiOutlineClose
                    className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
                    onClick={onClose}
                />
                <h2>
                    Add Expense
                </h2>
                <div>
                    Title
                    <input 
                        name="title" 
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div>
                    Description
                    <input 
                        name="description" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    Category
                    <input 
                        name="category" 
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                </div>
                <div>
                    Amount
                    <input 
                        name="amount" 
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>
                <button onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    )
}

export default AddExpenseModal;