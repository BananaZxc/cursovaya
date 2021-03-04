export const searchTextAction = (text) => ({
  type: "SEARCH_TEXT_ACTION",
  payload: text,
});

export const resetState = () => ({
  type: "RESET_STATE",
});