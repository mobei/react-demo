import React, { Component, PropTypes } from 'react';
import OutsideClick from 'react-onclickoutside';
import Emojis from './emoji-category';
import './index.scss';

const Categorys = ['PEOPLE', 'NATURE', 'OBJECTS', 'PLACES', 'SYMBOLS']; //后期由外部组件传入
const CATEGORY = {
  PEOPLE: { value: 'people', text: '人物' },
  NATURE: { value: 'nature', text: '自然' },
  OBJECTS: { value: 'objects', text: '物体' },
  PLACES: { value: 'places', text: '地点' },
  SYMBOLS: { value: 'symbols', text: '符号' }
};

class EmojiPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { page: Categorys[0], show: false };
  }
  selectEmoji(emoji) {
    if (this.props.onSelect) {
      this.props.onSelect(`:${emoji}:`);
    }
    this.setState({
      show: false
    });
  }
  toggleEmojiPanel() {
    this.setState({
      show: !this.state.show
    });
  }
  handleClickOutside(evt) {
    const show = this.state.show;
    if (!show) return;
    this.setState({
      show: false
    });
  }
  switchPage(page) {
    this.setState({
      page: page
    });
  }
  render() {
    const page = this.state.page;
    const emojis = Emojis[CATEGORY[page].value];
    const moreClazz = this.props.className || '';
    const showPanel = this.state.show ? 'show' : 'hide';
    
    return (
      <span>
        <div className={`emoji-panel ${moreClazz} ${showPanel}`}>
          <div className="emoji-tabs">
            {Categorys.map(item => {
              const clz = page===item ? 'active' : '';
              return (
                <div
                  key={item}
                  className={clz}
                  onClick={this.switchPage.bind(this, item)}>
                  {CATEGORY[item].text}
                </div>
              )
            })}
          </div>
          <ul className="emojis scrollbar">
            {emojis.map(emoji => {
              const src =`https://dn-talk.oss.aliyuncs.com/icons/emoji/${emoji}.png`;
              return (
                <li
                  key={emoji} 
                  onClick={this.selectEmoji.bind(this, emoji)}
                  className="emoji-container">
                  <img className="emoji" src={src} />
                </li>
              )
            })}
          </ul>
        </div> 
        <span onClick={this.toggleEmojiPanel.bind(this)}>{this.props.children}</span>
      </span>
    );
  }
}

EmojiPanel.propTypes = {
  onSelect: PropTypes.func,
  className: PropTypes.string
};

export default OutsideClick(EmojiPanel)
