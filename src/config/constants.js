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
        CLEAR_USER: "CLEAR_USER",
        SET_DIRECTORY: "SET_DIRECTORY"
    },
    ACTIONS: {
        FETCH_ME: "FETCH_ME",
        LOG_IN: "LOG_IN",
        LOG_OUT: "LOG_OUT",
        FETCH_DIRECTORY: "FETCH_DIRECTORY"
    }
}

const VIEW = {
    APP: "App",
    DIRECTORY_VIEW: "DirectoryView",
    LOGIN_VIEW: "LoginView"
}
const COMPONENT = {
    LOGOUT_BUTTON: "LogoutButton",
    NAVIGATION_BAR: "NavigationBar",
    USER_FORM: "UserForm"
}

export {
    HTTP,
    STORE,
    VIEW,
    COMPONENT
}
