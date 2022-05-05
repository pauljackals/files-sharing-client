import isDevelopment from "./isDevelopment"

const API = isDevelopment ? `http://localhost:${process.env.VUE_APP_EXPRESS_PORT || 3000}` : "/api"

const HTTP = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE"
}

const STORE = {
    STATE: {
        USER: "USER",
        DIRECTORY: "DIRECTORY",
        CODES: "CODES",
        USERS: "USERS"
    },
    MUTATIONS: {
        SET_USER: "SET_USER",
        CLEAR_USER: "CLEAR_USER",
        SET_DIRECTORY: "SET_DIRECTORY",
        CLEAR_DIRECTORY: "CLEAR_DIRECTORY",
        SET_CODES: "SET_CODES",
        ADD_CODE: "ADD_CODE",
        CLEAR_CODES: "CLEAR_CODES",
        REMOVE_CODE: "REMOVE_CODE",
        SET_USERS: "SET_USERS",
        CLEAR_USERS: "CLEAR_USERS",
        REMOVE_USER: "REMOVE_USER",
    },
    ACTIONS: {
        FETCH_ME: "FETCH_ME",
        REGISTER: "REGISTER",
        LOG_IN: "LOG_IN",
        LOG_OUT: "LOG_OUT",
        FETCH_DIRECTORY: "FETCH_DIRECTORY",
        FETCH_CODES: "FETCH_CODES",
        GENERATE_CODE: "GENERATE_CODE",
        DESTROY_CODE: "DESTROY_CODE",
        FETCH_USERS: "FETCH_USERS",
        DESTROY_USER: "DESTROY_USER"
    }
}

const VIEW = {
    APP: "App",
    DIRECTORY_VIEW: "DirectoryView",
    LOGIN_VIEW: "LoginView",
    REGISTER_VIEW: "RegisterView",
    ADMIN_VIEW: "AdminView",
    ADMIN_CODE_VIEW: "AdminCodeView",
    ADMIN_USER_VIEW: "AdminUserView"
}
const COMPONENT = {
    LOGOUT_BUTTON: "LogoutButton",
    NAVIGATION_BAR: "NavigationBar",
    USER_FORM: "UserForm",
    CODE_LIST: "CodeList",
    CODE_ITEM: "CodeItem",
    USER_LIST: "UserList",
    USER_ITEM: "UserItem",
    DIRECTORY_NODE: "DirectoryNode"
}

export {
    API,
    HTTP,
    STORE,
    VIEW,
    COMPONENT
}
