import React from 'react';
import Table from "react-bootstrap/Table";

const TableComponent = (props) => {
    const words = props.words;
    const colors = props.colors;
    const options = props.options;

    return (
        <div style={{overflowX: "scroll"}}>
            <Table striped bordered hover size="sm" responsive="sm"
                   style={{width: "auto", marginLeft: "auto", marginRight: "auto"}}>

                <thead>
                    <tr>
                        {words.map((word, index) => {
                            return (
                                <th
                                    key={word + index}
                                    style={{
                                        transform: "rotate(180deg)",
                                        writingMode: "vertical-lr",
                                        width: "30px",
                                        textAlign: "start"
                                    }}
                                >
                                    {word}
                                </th>
                            );
                        })}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {words.map((word, index) => {
                            return (
                                <td key={word + "td" + index} style={colors.length !== 0 ? {backgroundColor: colors[index]} : {backgroundColor: "white"}}>
                                    <select
                                        defaultValue={"O"}
                                        onChange={(event) => {
                                            props.onChange(index, event);
                                        }}
                                        style={colors.length !== 0 ? {backgroundColor: colors[index]} : {backgroundColor: "white"}}
                                    >
                                        {options.map((element) => {
                                            return (
                                                <option
                                                    key={element.value}
                                                    value={element.value}
                                                >
                                                    {element.value}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </td>
                            );
                        })}
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default TableComponent;