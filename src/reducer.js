export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  //   remove after finished developing
  // token:
  //   "BQCd97JVl8XSKgx9GYElvJCgLHrpbF3otFbKacYgldZoHsN9vXAMlMlJy8we1smIu72E0vR_XxHfcMD6yz62noUp5DpZR6IFpqJaph3K3_uoWZWkPg716iNYhZS_N9UBk_pWD9ZDDnS-CJZ5BYjV3ZU0O1rUji2ooljUTR3I_FExYJni6dGiG--grzW8xV852ngbZx1gEMWiyir-mHQ3",
};

const reducer = (state, action) => {
  console.log(action);

  //   Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
