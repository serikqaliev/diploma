export default class SyntaxFunctions {
    options = [
        { type: "–", value: 0, description: 'Әдепкі' },
        { type: "ҚИ", value: 1, description: 'Қиысу'  },
        { type: "МА", value: 2, description: 'Матасу'  },
        { type: "МЕ", value: 3, description: 'Меңгеру'  },
        { type: "ҚА", value: 4, description: 'Қабысу'  },
        { type: "ЖА", value: 5, description: 'Жанасу'  },
    ];

    changeColors(value) {
        let currentColor = "";
        switch (value) {
            case 0:
                currentColor = "white";
                break;
            case 1:
                currentColor = "aqua";
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
                currentColor = "lightgreen";
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
        return matrix;
    }
}