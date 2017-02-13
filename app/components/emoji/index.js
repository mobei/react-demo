import React, { Component, PropTypes } from 'react';
import Emojis from './emoji-category';
import EmojiPanel from './emoji-panel';
import Immutable from 'immutable';

const reg = /\:([a-z0-9_+-]+)(?:\[((?:[^\]]|\][^:])*\]?)\])?\:/g;
const emojiList = Immutable.fromJS(Emojis).toList().flatten().sort().toJS().map(item => {
  return `:${item}:`;
});

function parseEmoji(text) {
  if (typeof text !== "string") {
    return text;
  }
  return text.replace(reg, function(match, name) {
    if (emojiList.indexOf(match) === -1) {
      return match;
    } else {
      const src = `https://dn-talk.oss.aliyuncs.com/icons/emoji/${name}.png`;
      return '<img class="emoji" src="' + src + '" />';
    }
  });
}

export {
  EmojiPanel,
  parseEmoji
}
