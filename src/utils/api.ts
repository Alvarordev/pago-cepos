import axios from "axios";

const BASE_URL = process.env.API;

export const API = axios.create({ baseURL: BASE_URL });