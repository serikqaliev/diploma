import React from 'react';
import Table from "react-bootstrap/Table";

const TableComponent = (props) => {
    const words = props.words;
    const colors = props.colors;
    const options = props.options;

    return (
        <div style={{ overflowX: "scroll" }}>
            <Table striped bordered hover size="sm" responsive="sm" style={{width: "auto", marginLeft: "auto", marginRight: "auto"}}>

                <thead>
                <tr>
                    <td></td>
                    {words.map((word) => (
                        <th key={word} style={{transform: "rotate(180deg)", writingMode: "vertical-lr", width: "30px", textAlign: "start"}}>
                            {word}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {words.map((word, rowIndex) => {
                    return (
                        <tr key={`${word}tr`} style={{textAlign: "end"}}>
                            <th>{word}</th>
                            {words.map((word, colIndex) => {
                                return (
                                    <td key={`${word}td`} style={colors.length !== 0 ? {backgroundColor: colors[rowIndex][colIndex]} : {backgroundColor: "white"}}>
                                        <select
                                            defaultValue={"-"}
                                            onChange={(event) =>
                                                props.onChange(rowIndex, colIndex, event)
                                            }
                                            style={colors.length !== 0 ? {backgroundColor: colors[rowIndex][colIndex]} : {backgroundColor: "white"}}
                                        >
                                            {options.map((element) => {
                                                return (
                                                    <option value={element.value}>
                                                        {element.type}
                                                    </option>
                                                );
                                            })}
                                        </select>
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;