export function thunkMiddleware({ dispatch, getState }) {
    return function (next) {
        return function (action) {
            if (typeof action === "function") {
                action(dispatch, getState);
                return;
            }

            next(action);
        };
    };
}
