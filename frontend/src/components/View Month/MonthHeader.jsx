import '../../styles.css';

const MonthHeader = ({exp, inc, total}) => {
    return (
        <div className='rounded container apart shadow' style={{marginBottom: "50px"}}>
            <div className='header1' style={{flex: "3", flexDirection: "column", justifyContent: "center"}}>January, 2024</div>
            <div className='container' style={{flex: "1", justifyContent: "right"}}>
                <table>
                    <tr>
                        <td className='header3 text-right'>Monthly Income:</td>
                        <td className='header3 text-right'>{inc}</td>
                    </tr>
                    <tr>
                        <td className='header3 text-right'>Monthly Expenses:</td>
                        <td className='header3 text-right'>{exp}</td>
                    </tr>
                    <tr>
                        <td>
                            <hr class='solid' />
                        </td>
                        <td>
                            <hr class='solid' />
                        </td>
                    </tr>
                    <tr>
                        <td className='header3 text-right'>Monthly Profit:</td>
                        <td className='header3 text-right'>{total}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default MonthHeader;