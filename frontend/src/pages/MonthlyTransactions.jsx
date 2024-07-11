import { useEffect, useState } from 'react';

import '../styles.css';

import NavBar from '../components/NavBar';
import MonthHeader from '../components/View Month/MonthHeader';
import ExpenseTable from "../components/View Month/ExpenseTable";
import AddExpenseModal from '../components/View Month/AddExpenseModal';
import EditExpenseModal from '../components/View Month/EditExpenseModal';
import IncomeTable from '../components/View Month/IncomeTable';
import Spinner from "../components/Spinner";
import axios from 'axios';

const MonthlyTransactions = () => {
    const [showModal, setShowModal] = useState(false);
    const [showEModal, setShowEModal] = useState(false);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(false);
    // Get Transactions
    useEffect(() => {
        setLoading(true);
        axios
            .get("http://localhost:5555/transactions")
            .then((response) => {
                setTransactions(response.data.data);
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
                <MonthHeader />
                {/* Monthly Expenses */}
                <div className='rounded container col shadow' style={{marginBottom: "50px"}}>
                    <div className='container apart'>
                        <div className='header2'>Monthly Expenses</div>
                        <button 
                            className='add-button'
                            onClick={() => {setShowModal(true); setShowEModal(false)}}
                        >Add Expenses</button>
                    </div>
                    {loading ? <Spinner /> : <ExpenseTable trans={transactions} onOpen={() => {setShowEModal(true); setShowModal(false); console.log("OPEN!")}} />}
                </div>
                {/* Monthly Income */}
                <div className='rounded container col shadow'>
                <div className='container apart'>
                    <div className='header2'>Monthly Income</div>
                    <button className='add-button'>Add Income</button>
                </div>
                <IncomeTable />
                </div>
            </div>
            {
                showModal && (<AddExpenseModal onClose={() => setShowModal(false)} />)
            }
            {
                showEModal && (<EditExpenseModal onClose={() => setShowEModal(false)}/>)
            }
        </div>
    );
}

export default MonthlyTransactions;