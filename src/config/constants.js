const HTTP = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE"
}

const STORE = {
    STATE: {
        USER: "USER",
        DIRECTORY: "DIRECTORY"
    },
    MUTATIONS: {
        SET_USER: "SET_USER",
        SET_DIRECTORY: "SET_DIRECTORY"
    },
    ACTIONS: {
        FETCH_ME: "FETCH_ME",
        FETCH_DIRECTORY: "FETCH_DIRECTORY"
    }
}

export {
    HTTP,
    STORE
}
