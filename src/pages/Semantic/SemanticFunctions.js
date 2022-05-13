export default class SemanticFunctions {
    options = [
        {type: "По умолчанию", value: "O"},
        {type: "Агенс —инициатор события;", value: "AGN"},
        {type: "Контрагент — сила или сопротивляющаяся среда, против которой осуществлется действие;", value: "CoAGN"},
        {type: "Объект — участник, который передвигается или изменяется в ходе события;", value: "OBJ"},
        {type: "Результат — участник, который появляется в результате события;", value: "RESU"},
        {type: "Инструмент — стимул эмоции или участник, оказывающий непосредственное физическое воздействие;", value: "INST"},
        {type: "Источник — место, из которого осуществляется движение;", value: "LOCA"},
        {type: "Цель — место, в которое осуществляется движение;", value: "DIRE"},
        {type: "Экспериенцер —участник, на которого событие производит определенный эффект.", value: "EXPE"},
        {type: "Время", value: "TIME"},
        {type: "Условие", value: "COND"},
        {type: "Причина", value: "CAUS"},
        {type: "Предикат", value: "PRED"},
        {type: "Получатель, адресат Recipient", value: "REC"},
        {type: "Деятель (жансыз заттар) Doer", value: "DOE"}
    ];

    changeColors(value) {
        let currentColor = "";
        switch (value) {
            case "O":
                currentColor = "white";
                break;
            case "AGN":
                currentColor = "fuchsia";
                break;
            case "CoAGN":
                currentColor = "purple";
                break;
            case "OBJ":
                currentColor = "red";
                break;
            case "RESU":
                currentColor = "maroon";
                break;
            case "INST":
                currentColor = "yellow";
                break;
            case "LOCA":
                currentColor = "olive";
                break;
            case "DIRE":
                currentColor = "lime";
                break;
            case "EXPE":
                currentColor = "green";
                break;
            case "TIME":
                currentColor = "aqua";
                break;
            case "COND":
                currentColor = "teal";
                break;
            case "CAUS":
                currentColor = "blue";
                break;
            case "PRED":
                currentColor = "navy";
                break;
            case "REC":
                currentColor = "salmon";
                break;
            case "DOE":
                currentColor = "goldenrod";
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