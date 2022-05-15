export default class SemanticFunctions {
    options = [
        {type: "Әдепкі", description: "Әдепкі", value: "O"},
        {type: "Position", description: "Іс-әрекетке қарсы жүзеге асырылатын күш немесе қарсылық ортасы;", value: "POS"},
        {type: "Agent", description: "Іс-әрекетті жүзеге асыратын немесе жағдайды бақылауды жүзеге асыратын жағдайдың белсенді қатысушысы;", value: "AGN"},
        {type: "Object", description: "Іс -әрекеттің объектісі жанды-жансыз заттар болады. Кейде жанды заттар және олардың белгілерін білдіретін сөздермен тіркесіп келеді;", value: "OBJ"},
        {type: "Doer", description: "Белсенді жансыз оқиғаның бастамашысы-табиғи немесе стихиялық құбылыс немесе зат, олардың белгілерімен бірге;", value: "DOE"},
        {type: "LOCA", description: "Дереккөз – қозғалыс жүзеге асырылатын орын;", value: "LOCA"},
        {type: "asasd", description: "Қимылдың орындау мақсаттарын білдіреді;", value: "DIRE"},
        {type: "asasd", description: "Ақпаратты қабылдаушы, іс әрекеттің нәтижесін көруші;", value: "REC"},
        {type: "asasd", description: "Сезім мен ой, естеліктерді тасымалдаушысы;", value: "EXPE"},
        {type: "asasd", description: "Қимылдың, іс-әрекеттің болу-болмау, іске асу-аспау мүмкіндігінің шартын білдіреді;", value: "COND"},
        {type: "asasd", description: "Етістікпен айтылған сөйлемнің оқиғасын жүзеге асыру себептері. Қимылдың, іс-әрекеттің болу себебін немесе салдарын (нәтижесін) білдіреді;", value: "CAUS"},
        {type: "asasd", description: "Сөйлемдегі іс-әрекетті жүзеге асыру ,  орындау құралы немесе іске асыру жолы;", value: "INST"},
        {type: "asasd", description: "Іс -әрекеттің әсерінен, оқыйғадан, белгілі бір жағдайдан пайда болатын нәтиже;", value: "RESU"},
        {type: "asasd", description: "Сөйлемде оқиғаның жүзеге асу уақытын білдіреді;", value: "TIME"},
        {type: "asasd", description: "Предикат", value: "PRED"}
    ];

    changeColors(value) {
        let currentColor = "";
        switch (value) {
            case "O":
                currentColor = "white";
                break;
            case "POS":
                currentColor = "fuchsia";
                break;
            case "AGN":
                currentColor = "#00cc99";
                break;
            case "OBJ":
                currentColor = "red";
                break;
            case "DOE":
                currentColor = "#ff7733";
                break;
            case "LOCA":
                currentColor = "yellow";
                break;
            case "DIRE":
                currentColor = "olive";
                break;
            case "REC":
                currentColor = "lime";
                break;
            case "EXPE":
                currentColor = "green";
                break;
            case "COND":
                currentColor = "aqua";
                break;
            case "CAUS":
                currentColor = "teal";
                break;
            case "INST":
                currentColor = "#0066ff";
                break;
            case "RESU":
                currentColor = "#ff6699";
                break;
            case "TIME":
                currentColor = "salmon";
                break;
            case "PRED":
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