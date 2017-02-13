// import { uuid } from '../common/js/util';

export default {
    user: {
        id: 1,
        nick: '路飞',
        imStatus: 'offline',
        avatar: ''
    },
    chats: [{
        id: 1,
        nick: '索隆',
        platform: 'web',
        lastMsg: '我的酒',
        online: true,
        unread: 0,
        active: true,
        msgIds: ["001", "002", "003"]
    }, {
        id: 2,
        nick: '娜美',
        platform: 'ios',
        lastMsg: '我的钱',
        online: true,
        unread: 110,
        active: false,
        msgIds: []
    }, {
        id: 3,
        nick: '山治',
        platform: 'android',
        lastMsg: '我的美女',
        online: false,
        unread: 2,
        active: false,
        msgIds: []
    }],
    messages: [{
        id: "001",
        chatId: 1,
        type: 'message',
        content: '你好啊',
        sender: 'agent',
        senderId: 1,
        senderName: '路飞',
        filename: "",
        filesize: "",
        create_at: '2016-01-01 12:00',
        status: 1
    }, {
        id: "002",
        chatId: 1,
        type: 'message',
        content: '我是第一剑客',
        sender: 'customer',
        senderId: 2,
        senderName: '索隆',
        create_at: '2016-01-01 12:20',
        status: 1
    }, {
        id: "003",
        chatId: 1,
        type: 'message',
        content: '再说一遍',
        sender: 'customer',
        senderId: 2,
        senderName: '索隆',
        create_at: '2016-01-01 12:20',
        status: 0
    }]
};
