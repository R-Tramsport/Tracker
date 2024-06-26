import { useState } from 'react';

import '../styles.css';

import NavBar from '../components/NavBar';
import MonthHeader from '../components/View Month/MonthHeader';
import ExpenseTable from "../components/View Month/ExpenseTable";
import AddExpenseModal from '../components/View Month/AddExpenseModal';
import IncomeTable from '../components/View Month/IncomeTable';

const MonthlyTransactions = () => {
    const [showModal, setShowModal] = useState(false);

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
                            onClick={() => setShowModal(true)}
                        >Add Expenses</button>
                    </div>
                    <ExpenseTable />
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
        </div>
    );
}

export default MonthlyTransactions;