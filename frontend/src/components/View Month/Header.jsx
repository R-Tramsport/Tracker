import '../../styles.css';

const Header = ({exp, inc, total}) => {
    return (
        <div className='rounded container apart shadow' style={{marginBottom: "50px"}}>
            <div className='header1' style={{flex: "3", flexDirection: "column", justifyContent: "center"}}>Summary</div>
            <div className='container' style={{flex: "1", justifyContent: "right"}}>
                <table>
                    <tr>
                        <td className='header3 text-right'>Total Income:</td>
                        <td className='header3 text-right'>{inc}</td>
                    </tr>
                    <tr>
                        <td className='header3 text-right'>Total Expenses:</td>
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
                        <td className='header3 text-right'>Total Profit:</td>
                        <td className='header3 text-right'>{total}</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default Header;