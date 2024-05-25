const initialState = {
    name: "",
    userId: "",
    password: "",
    adminUserId: "admin",
    adminPassword: "admin",
    backgroundColor: "",
    appThemeFlag: false

}

const ACTIONS = {

    LOGIN: "LOGIN",
    NAME: "NAME",
    BGCOLOR: "BGCOLOR",
    THEMEFLAG: "THEMEFLAG"

}

export const nameActionCreator = (payload) => {
    console.log("nameActionCreator++++++++", payload);
    return ({ type: ACTIONS.NAME, payload: payload })
}

export const loginActionCreator = (payload) => {
    console.log("loginActionCreator++++++++", payload);
    // return
    return ({ type: ACTIONS.LOGIN, payload: payload })
}

export const bgColorChangeActionCreator = (payload) => {
    console.log("bgColorChangeActionCreator++++++++", payload);
    return ({ type: ACTIONS.BGCOLOR, payload: payload })
}

export const themeFlagChangeActionCreator = (payload) => {
    console.log("themeFlagChangeActionCreator++++++++", payload);
    return ({ type: ACTIONS.THEMEFLAG, payload: payload })
}

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case ACTIONS.NAME:
            return { ...state, name: payload }

        case ACTIONS.LOGIN:
            return { ...state, userId: payload.userId, password: payload.password }

        case ACTIONS.BGCOLOR:
            return { ...state, backgroundColor: payload }

        case ACTIONS.THEMEFLAG:
            return { ...state, appThemeFlag: payload }

        default:
            return state;
            break;
    }
}