import React, { Component, PropTypes } from 'react';
import { Input, Button } from 'antd';
import classNames from 'classnames';
import './index.scss';

const InputGroup = Input.Group;
export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = { value: '', focus: false };
  }
  getClassNames() {
    const btnCls = classNames({
      'ant-search-btn': true,
      'ant-search-btn-noempty': !!this.state.value.trim(),
    });
    const searchCls = classNames({
      'ant-search-input': true,
      'ud-search-input-focus': this.state.focus,
    });
    return { btnCls, searchCls };
  }
  handleInputChange(e) {
    this.setState({
      value: e.target.value,
    });
  }
  handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement,
    });
  }
  handleSearch() {
    if (this.props.onSearch) {
      this.props.onSearch(this.state.value);
    }
  }
  render() {
    const { style, size, placeholder = '请输入内容' } = this.props;
    const { btnCls, searchCls } = this.getClassNames();
    return (
      <div className="ud-search-input-wrapper" style={style}>
        <InputGroup size={size} className={searchCls}>
          <Input
            placeholder={placeholder}
            value={this.state.value}
            onChange={this.handleInputChange.bind(this)}
            onFocus={this.handleFocusBlur.bind(this)}
            onBlur={this.handleFocusBlur.bind(this)}
            onPressEnter={this.handleSearch.bind(this)}
          />
          <div className="ud-input-group-wrap">
            <Button
              icon="search"
              className={btnCls}
              size={size}
              onClick={this.handleSearch.bind(this)}
            />
          </div>
        </InputGroup>
      </div>
    );
  }
}

SearchInput.propTypes = {
  onSearch: PropTypes.func,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.string
};
