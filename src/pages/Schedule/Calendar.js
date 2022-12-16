import React from 'react';
import { Table} from 'react-bootstrap';

export default function Calendar({props}) {
    return (
        <Table striped bordered responsive>
            <thead>
                <tr className="text-center">
                    <th>#</th>
                    <th>Date</th>
                    <th>Department</th>
                    <th>Category</th>
                    <th>Doctor</th>
                    <th className="w-33">Prescription</th>
                </tr>
            </thead>
            <tbody>
                {props &&
                    props.map((s, index) => {
                        return (
                            <tr key={index} className="text-center">
                                <td>{index * 1 + 1}</td>
                                <td>{s.day}</td>
                                <td>{s.department}</td>
                                <td>{s.category}</td>
                                <td>{s.doctor}</td>
                                <td className="">{s.prescription}</td>
                            </tr>
                        );
                    })}
            </tbody>
        </Table>
    );
}
