export default class SemanticFunctions {
    options = [
        {type: "По умолчанию", value: "O"},
        {type: "Cубъект", value: "SUB"},
        {type: "Предмет", value: "PRE"},
        {type: "Понятие(Общее)", value: "COG"},
        {type: "Понятие(Научное)", value: "COS"},
        {type: "Процесс", value: "PRO"},
        {type: "Деятель", value: "DOE"},
        {type: "Объект", value: "OBJ"},
        {type: "Получатель", value: "REC"},
        {type: "Адресат", value: "DES"},
        {type: "Место", value: "LOC"},
        {type: "Средство", value: "MEA"},
        {type: "Инструмент", value: "INR"},
        {type: "Состав", value: "COM"},
        {type: "Определитель", value: "DET"},
        {type: "Время", value: "TIM"},
        {type: "Способ", value: "MET"},
        {type: "Условие", value: "CON"},
        {type: "Причина", value: "CAU"},
        {type: "Цель", value: "TAR"},
        {type: "Вставка", value: "INS"},
        {type: "Предикат", value: "PRED"},
    ];

    changeColors(value) {
        let currentColor = "";
        switch (value) {
            case "O":
                currentColor = "white";
                break;
            case "SUB":
                currentColor = "fuchsia";
                break;
            case "PRE":
                currentColor = "purple";
                break;
            case "COG":
                currentColor = "red";
                break;
            case "COS":
                currentColor = "maroon";
                break;
            case "PRO":
                currentColor = "yellow";
                break;
            case "DOE":
                currentColor = "olive";
                break;
            case "OBJ":
                currentColor = "lime";
                break;
            case "REC":
                currentColor = "green";
                break;
            case "DES":
                currentColor = "aqua";
                break;
            case "LOC":
                currentColor = "teal";
                break;
            case "MEA":
                currentColor = "blue";
                break;
            case "INR":
                currentColor = "navy";
                break;
            case "COM":
                currentColor = "salmon";
                break;
            case "DET":
                currentColor = "goldenrod";
                break;
            case "TIM":
                currentColor = "tomato";
                break;
            case "MET":
                currentColor = "greenyellow";
                break;
            case "CON":
                currentColor = "mediumaquamarine";
                break;
            case "CAU":
                currentColor = "mediumslateblue";
                break;
            case "TAR":
                currentColor = "violet";
                break;
            case "INS":
                currentColor = "deeppink";
                break;
            case "PRED":
                currentColor = "mediumspringgreen";
                break;
            default:
                break;
        }
        return currentColor;
    }

    zeroingSemanticTags(length) {
        const matrix = [];
        for (let i = 0; i < length; i++) {
            matrix[i] = "O";
        }
        return matrix;
    }

    whitingColors(length) {
        const matrix = [];
        for (let i = 0; i < length; i++) {
            matrix[i] = "white";
        }
        return matrix;
    }
}