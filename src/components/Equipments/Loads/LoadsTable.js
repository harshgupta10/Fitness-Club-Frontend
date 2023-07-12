import classes from "../../Clients/Table/Tables.module.css";
import { Card, Table } from "react-bootstrap";

function LoadsTable(props) {
    return (
        <Card className={classes.cardMachines}>
            <div>
                <header className={`${classes.header}`}>Loads</header>
            </div>
            <Table>
                <thead>
                    <tr>
                        <th />
                        <th>Manufacturer</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Weight</th>
                        <th>Price per piece</th>
                        <th>Purchase Date</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {props.loads.map((item, idx) => (
                        <tr key={item._id}>
                            <td>{idx + 1}</td>
                            <td>{item.producent}</td>
                            <td>{item.type}</td>
                            <td>{item.amount} pcs.</td>
                            <td>{item.weight}kg</td>
                            <td>{item.price}zł</td>
                            <td>{item.date}</td>
                            <td>
                                <button
                                    className={classes.btnTable}
                                    onClick={() => {
                                        props.setTempLoad(item);
                                        props.showEditModal();
                                    }}
                                >
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Card>
    );
}

export default LoadsTable;
