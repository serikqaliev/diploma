import $api from "../http";

export default class SyntaxService {
    static fetchSyntax() {
        return $api.get("/syntax");
    }

    static fetchOneSyntax(id) {
        return $api.get(`/syntax/${id}`);
    }

    static async postMarkedSyntax(words, syntaxMatrix, id) {
        return $api.post("/syntax", {words, syntaxMatrix, id});
    }
}