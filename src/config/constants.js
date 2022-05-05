const HTTP = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE"
}

const STORE = {
    STATE: {
        USER: "USER",
        DIRECTORY: "DIRECTORY",
        CODES: "CODES"
    },
    MUTATIONS: {
        SET_USER: "SET_USER",
        CLEAR_USER: "CLEAR_USER",
        SET_DIRECTORY: "SET_DIRECTORY",
        SET_CODES: "SET_CODES",
        ADD_CODE: "ADD_CODE",
        CLEAR_CODES: "CLEAR_CODES",
        REMOVE_CODE: "REMOVE_CODE"
    },
    ACTIONS: {
        FETCH_ME: "FETCH_ME",
        REGISTER: "REGISTER",
        LOG_IN: "LOG_IN",
        LOG_OUT: "LOG_OUT",
        FETCH_DIRECTORY: "FETCH_DIRECTORY",
        FETCH_CODES: "FETCH_CODES",
        GENERATE_CODE: "GENERATE_CODE",
        DESTROY_CODE: "DESTROY_CODE"
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
    CODE_ITEM: "CodeItem"
}

export {
    HTTP,
    STORE,
    VIEW,
    COMPONENT
}
