import React from 'react';
import Table from "react-bootstrap/Table";
import sty from "./SemanticTable.module.css";

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
                    <th></th>
                    {options.map((option) => <th>{option.value}</th>)}
                </tr>
                </thead>

                <tbody>
                {words.map((word, index) => {
                    return (<tr>
                            <th className={sty.thStyle}>{word}</th>
                            {options.map((option) => {
                                return (<td>
                                    <input name={`${index}${word}`} value={option.value} type="radio" onChange={(event) => {
                                        props.onChange(index, event)
                                    }}/>
                                </td>);
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