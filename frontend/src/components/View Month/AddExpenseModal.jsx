import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddExpenseModal = ({ expense, onClose }) => {
    return (
        <div 
            className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
            style={{backgroundColor: "black", opacity: "0.80"}}
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
            </div>
        </div>
    )
}

export default AddExpenseModal;