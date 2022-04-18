import {v4} from 'uuid';

export default class SyntaxFunctions {
    options = [
        { type: "–", value: 0 },
        { type: "ҚИ", value: 1 },
        { type: "МА", value: 2 },
        { type: "МЕ", value: 3 },
        { type: "ҚА", value: 4 },
        { type: "ЖА", value: 5 },
    ];

    uniqueKeys(length) {
        const matrix = [];
        for (let i = 0; i < length; i++) {
            matrix[i] = [];
            for (let j = 0; j < length; j++) {
                console.log(v4());
            }
        }
        return matrix;
    }

    changeColors(value) {
        let currentColor = "";
        switch (value) {
            case 0:
                currentColor = "white";
                break;
            case 1:
                currentColor = "blue";
                break;
            case 2:
                currentColor = "yellow";
                break;
            case 3:
                currentColor = "pink";
                break;
            case 4:
                currentColor = "red";
                break;
            case 5:
                currentColor = "green";
                break;
            default:
                break;
        }
        return currentColor;
    }

    zeroingSyntaxMatrix(length) {
        const matrix = [];
        for (let i = 0; i < length; i++) {
            matrix[i] = [];
            for (let j = 0; j < length; j++) {
                matrix[i][j] = 0;
            }
        }
        return matrix;
    }

    whitingColors(length) {
        const matrix = [];
        for (let i = 0; i < length; i++) {
            matrix[i] = [];
            for (let j = 0; j < length; j++) {
                matrix[i][j] = "white";
            }
        }
        console.log(matrix);
        return matrix;
    }

    getColor(rowIndex, colIndex) {

    }
}