import '../../styles.css';

const ExpenseTable = () => {
    const test1 = {
        date: "05/01/2024",
        title: "Frangos",
        description: "Half chicken combo",
        category: "Food & Drink",
        amount: 16,
        special: true,
    };
    const test2 = {
        date: "05/01/2024",
        title: "El Jannah",
        description: "Half chicken combo",
        category: "Food & Drink",
        amount: 18,
        special: true,
    };
    
    const data1 = [test1, test2, test1, test2];
    return (
        <table>
            <tr>
                <td>Date</td>
                <td>Title</td>
                <td>Description</td>
                <td>Category</td>
                <td className='text-right'>Amount</td>
                <td className='text-right'>Special</td>
                <td className='text-right'>Edit/Delete</td>
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
            {data1.map( (test) => (
                <tr>
                    <td>{test.date}</td>
                    <td>{test.title}</td>
                    <td>{test.description}</td>
                    <td>{test.category}</td>
                    <td className='text-right'>{test.amount}</td>
                    <td className='text-right'>{test.special}</td>
                    <td style={{display: "flex", justifyContent: "right"}}>
                        <button className='edit'>Edit</button>
                        <button className='delete'>Delete</button>
                    </td>
                </tr>
            ))}
        </table>
    )
}

export default ExpenseTable;