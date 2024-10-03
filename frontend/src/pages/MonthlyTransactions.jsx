import { useEffect, useState } from 'react';
import { Routes, Route, Outlet, useParams, useMatch } from "react-router-dom";

import '../styles.css';

import NavBar from '../components/NavBar';
import MonthHeader from '../components/View Month/MonthHeader';
import ExpenseTable from "../components/View Month/ExpenseTable";
import AddExpenseModal from '../components/View Month/AddExpenseModal';
import AddIncomeModal from '../components/View Month/AddIncomeModal';
import EditExpenseModal from '../components/View Month/EditExpenseModal';
import IncomeTable from '../components/View Month/IncomeTable';
import Spinner from "../components/Spinner";
import axios from 'axios';

const MonthlyTransactions = () => {
    const match = useMatch("/month/:month/:year");
    const month = match?.params.month;
    const year = match?.params.year;

    const [showModal, setShowModal] = useState(false);
    const [showIModal, setShowIModal] = useState(false);
    const [showEModal, setShowEModal] = useState(false);
    const [expenses, setExpenses] = useState([]);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [income, setIncome] = useState([]);
    const [incomeTotal, setIncomeTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    
    // Get Transactions
    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/transactions/month?month=" + Number(month) + "&year=" + Number(year))
            .then((response) => {
                // setTransactions(response.data.data);
                setExpenses(response.data.data.expenses.transactions);
                setExpenseTotal(response.data.data.expenses.total);
                setIncome(response.data.data.income.transactions);
                setIncomeTotal(response.data.data.income.total);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            })
    }, []);
    return (
        <div>
            <NavBar />
            <div className='body'>
                <div style={{display: 'flex', justifyContent: 'center', marginBlock: "5px"}}>
                    <button className='button'>Previous Month</button>
                    <button className='button'>Next Month</button>
                </div>
                {/* Month Heading */}
                <MonthHeader month={Number(month)} year={Number(year)} exp={expenseTotal} inc={incomeTotal} total={incomeTotal-expenseTotal} />
                {/* Monthly Expenses */}
                <div className='rounded container col shadow' style={{marginBottom: "50px"}}>
                    <div className='container apart'>
                        <div className='header2'>Monthly Expenses</div>
                        <button 
                            className='add-button'
                            onClick={() => {setShowModal(true); setShowEModal(false); setShowIModal(true);} }
                        >Add Expenses</button>
                    </div>
                    {loading ? <Spinner /> : <ExpenseTable trans={expenses} onOpen={() => {setShowEModal(true); setShowModal(false); setShowIModal(false); console.log("OPEN!")}} />}
                </div>
                {/* Monthly Income */}
                <div className='rounded container col shadow'>
                <div className='container apart'>
                    <div className='header2'>Monthly Income</div>
                    <button 
                        className='add-button'
                        onClick={() => {setShowIModal(true); setShowModal(false); setShowEModal(false)}}
                    >Add Income</button>
                </div>
                {loading ? <Spinner /> : <IncomeTable trans={income} onOpen={() => {setShowIModal(true); setShowModal(false); setShowEModal(false); console.log("OPEN!")}} />}
                </div>
            </div>
            {
                showModal && (<AddExpenseModal onClose={() => setShowModal(false)} />)
            }
            {
                showEModal && (<EditExpenseModal onClose={() => setShowEModal(false)}/>)
            }
            {
                showIModal && (<AddIncomeModal onClose={() => setShowIModal(false)}/>)
            }
        </div>
    );
}

export default MonthlyTransactions;