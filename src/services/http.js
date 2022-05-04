import { HTTP } from "@/config/constants";
import isDevelopment from "@/config/isDevelopment";

const api = isDevelopment ? `http://localhost:${process.env.VUE_APP_EXPRESS_PORT || 3000}` : "/api"

const initDefault = {
    credentials: isDevelopment ? "include" : "same-origin",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
}

const fetchConfigured = (method, url, body, init) => fetch(api+url, {
    ...initDefault,
    method,
    // body: JSON.stringify(body),
    body,
    ...init
})
    .then(response => Promise.all([response, response.json()]))
    .then(([response, body]) => {
        response.bodyJson = body
        if(!response.ok) {
            return new Promise((resolve, reject) => reject(response))
        }
        return response
    })

export default {
    fetchMe: () => fetchConfigured(HTTP.GET, "/access/me"),
    fetchDirectory: () => fetchConfigured(HTTP.GET, "/directory")
}
