import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as watch} from "./watch/watch.js";
import {reducer as user} from "./user/user.js";
import NameSpace from "./name-space.js";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.WATCH]: watch,
  [NameSpace.USER]: user,
});
