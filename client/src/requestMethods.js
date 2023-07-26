import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YmM5ODkzZDk4YTg4MTg5ZjdiOWQ4NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDE5MDkwMSwiZXhwIjoxNjkwNDUwMTAxfQ.L3kHul895_tlOb_LyKzZDRUlOrvRS6wJK2Ee_fI5-wE";

export const publicRequest = axios.create({
    baseURL: BASE_URL
});
export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});