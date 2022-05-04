import { HTTP } from "@/config/constants";
import isDevelopment from "@/config/isDevelopment";

const api = isDevelopment ? `http://localhost:${process.env.EXPRESS_PORT || 3000}` : "/api"

const initDefault = {
    credentials: isDevelopment ? "include" : "same-origin"
}

const fetchConfigured = (method, url, init) => fetch(api+url, {
    ...initDefault,
    method,
    ...init
})

export default {
    fetchDirectory: () => fetchConfigured(HTTP.GET, "/directory")
}
