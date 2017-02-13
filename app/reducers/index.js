import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import * as ImAction from './../constants/actionTypes/im';

function user(state = {
    id: 1,
    nick: 'Tom',
    imStatus: 'offline',
    avatar: ''
  }, action) {
	switch (action.type) {
	  case ImAction.CHANGING:
	    return { ...state, imStatus: action.status }
	  default:
	    return state
	 }
}

function chats(state = [], action) {
	switch (action.type) {
	  case ImAction.ADD_CHAT:
	    return [...state, action.chat]
	  case ImAction.SELECT_CHAT:
	  	if (action.chat.active) return state;

	  	const nChats = state.map(chat => {
	  		if (chat.id === action.chat.id) {
	  			chat.unread = 0;
					chat.active = true;
				} else {
					chat.active = false;
				}
				return chat;
	  	});

	    return nChats
	  case ImAction.REMOVE_CHAT:
	  	return state.filter(chat => chat.id !== action.id);
	  case ImAction.ADD_MESSAGE_ID:
	  	return state.map(chat => {
	  		if (chat.id === action.chatId) {
	  			chat.msgIds.push(action.msgId);
				} 
				return chat;
	  	});
	  default:
	    return state
	 }
}

function messages(state = [], action) {
	switch (action.type) {
	  case ImAction.ADD_MESSAGE:
	  	return [...state, action.msg]
	  default:
	    return state
	 }
}

const reducers = combineReducers({
  user,
  chats,
  messages,
  routing
});
export default reducers
