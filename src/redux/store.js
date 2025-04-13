import { createStore } from 'redux';  // ✅ 'createStore'로 수정
import reducer from './reducer/reducer';

let store = createStore(reducer);

export default store;