import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";

export default class AuthStore {
    user = {};
    isAuth = false;
    isLoading = false;
    hasError = false;
    errorMessage = "";

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool) {
        this.isAuth = bool;
    }

    setUser(user) {
        this.user = user;
    }

    setLoading(bool) {
        this.isLoading = bool;
    }

    setError(bool) {
        this.hasError = bool;
    }

    setMessage(message) {
        this.errorMessage = message;
    }

    async login(email, password) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(email, password);
            console.log("login response" + response);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            this.errorToggle(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async registration(email, password) {
        this.setLoading(true);
        try {
            const response = await AuthService.registration(email, password);
            console.log("registration response" + response);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            this.errorToggle(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout();
            console.log("logout response" + response);
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setUser({});
        } catch (e) {
            this.errorToggle(e.response?.data?.message);
        }
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await axios.get(`${API_URL}/user/refresh`, {withCredentials: true,});
            console.log("check auth response" + response);
            localStorage.setItem("token", response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (e) {
            this.errorToggle(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    errorToggle(message) {
        this.setError(true);
        this.setMessage(message);
        console.log("error message from error toggle" + message);
    }
}