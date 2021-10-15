
export const typeOfAction="setState";
export const setState = (state) => ({
    type: [typeOfAction],
    state,
});
