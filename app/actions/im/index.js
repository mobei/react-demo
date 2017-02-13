import * as ImAction from '../../constants/actionTypes/im';

//切换在线状态
export function changeStatus(status) {
  return {
    type: ImAction.CHANGING,
    status
  };
}

//增加会话
export function addChat(chat) {
  return {
    type: ImAction.ADD_CHAT,
    chat
  };
}

//选择会话
export function selectChat(chat) {
  return {
    type: ImAction.SELECT_CHAT,
    chat
  };
}

//删除会话
export function removeChat(id) {
  return {
    type: ImAction.REMOVE_CHAT,
    id
  };
}

//增加消息ID
export function addMessageId(chatId, msgId) {
  return {
    type: ImAction.ADD_MESSAGE_ID,
    chatId,
    msgId
  };
}

//增加消息
export function addMessage(msg) {
  return {
    type: ImAction.ADD_MESSAGE,
    msg
  };
}

//修改消息状态
export function changeMsgStatus(msg) {
  return {
    type: ImAction.CHANGE_MESSAGE_STATUS,
    msg
  };
}

//删除消息
export function removeMessage(id) {
  return {
    type: ImAction.REMOVE_MESSAGE,
    id
  };
}
