import $api from "../http";

export default class SemanticService {
    static fetchSemantic() {
        return $api.get("/semantic");
    }

    static fetchOneSemantic(id) {
        return $api.get(`/semantic/${id}`);
    }

    static async postMarkedSemantic(words, semanticTags, id) {
        return $api.post("/semantic", {words, semanticTags, id});
    }
}