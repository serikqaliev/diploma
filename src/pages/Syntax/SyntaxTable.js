import React from 'react';
import Table from "react-bootstrap/Table";
import sty from "./SyntaxCard.module.css";

const TableComponent = (props) => {
    const words = props.words;
    const colors = props.colors;
    const options = props.options;

    return (
        <div style={{overflowX: "scroll"}} className={sty.table}>
            <Table striped bordered size="sm" responsive="sm"
                   style={{width: "auto", marginLeft: "auto", marginRight: "auto"}}>

                <thead>
                <tr>
                    <td></td>
                    {words.map((word) => (
                        <th style={{
                            transform: "rotate(180deg)",
                            writingMode: "vertical-lr",
                            width: "30px",
                            textAlign: "start"
                        }}>
                            {word}
                        </th>
                    ))}
                </tr>
                </thead>

                <tbody>
                {words.map((word, rowIndex) => {
                    return (
                        <tr style={{textAlign: "end"}}>
                            <th className={sty.thStyle} ref={(node) => {
                                if (node) {
                                    node.style.setProperty('background-color', 'white', 'important');
                                }
                            }}>{word}</th>
                            {words.map((word, colIndex) => {
                                return (
                                    <td>
                                        <select
                                            defaultValue={"-"}
                                            onChange={(event) =>
                                                props.onChange(rowIndex, colIndex, event)
                                            }
                                            style={colors.length !== 0 ? {backgroundColor: colors[rowIndex][colIndex]} : {backgroundColor: "transparent"}}
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