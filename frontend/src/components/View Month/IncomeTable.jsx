import '../../styles.css';

const IncomeTable = () => {
    const test3 = {
        date: "05/01/2024",
        title: "Officeworks pay",
        description: "N/A",
        category: "Income",
        amount: 800,
        special: false,
    }
    const test4 = {
        date: "05/01/2024",
        title: "Savings Interest",
        description: "N/A",
        category: "Income",
        amount: 20,
        special: false,
    }
    const data2 = [test3, test4, test3, test4];

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
            {data2.map( (test) => (
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

export default IncomeTable;