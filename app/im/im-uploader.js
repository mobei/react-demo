import React, { Component, PropTypes } from 'react';
import WebUploader from 'webuploader';
import xfetch from '../services/xFetch';

let Uploader;
export default class ImUploader extends Component {
  constructor(props) {
    super(props);
    this.state = { token: '' };
  }
  getToken(cb) {
    const self = this;
    xfetch('/api/uptoken').then((res = { uptoken: '' }) => {
      self.setState({ token: res.uptoken });
      cb && cb (res.uptoken);
    });
  }
  initUploader(token) {
    const uploader = WebUploader.create({ 
      auto:true,
      swf: 'Uploader.swf',
      // dnd: ,
      // paste: self.paste,
      disableGlobalDnd: true,
      server: 'http://up.qiniu.com',
      formData: {
          token: token
      },
      pick: {
        id: '#im-up-picker',
        multiple: false
      },
      fileSingleSizeLimit: 10000000,
      fileNumLimit: 9999999,
      duplicate: true,
      resize: false
    });

    uploader.on('beforeFileQueued', file => {
      // uploader.option('formData', {
      //   filename: file.name,
      //   name: file.name,
      //   token: token
      // });
    });

    uploader.on('fileQueued', file => {
      console.log(file);
    });

    uploader.on('uploadProgress', (file, percentage) => {
      let per = (percentage * 100).toFixed(1);
      per = per > 99.9 ? 99.9 : per;
      console.log(per);
    });

    uploader.on('uploadSuccess', (file, data) => {
      console.log(data);
      console.log(file);
    });

    uploader.on('uploadError', (file, data) => {
      console.error('uploadError', file, data);
    });

    uploader.on('uploadComplete', file => {});

    uploader.on('error', function(msg) {
      console.error(msg);
    });
    this.uploader = uploader;
  }
  componentDidMount() {
    const self = this;
    this.getToken((token) => {
      self.initUploader(token);
    });
  }
  componentWillUnmount() {
    console.log(this.uploader);
    this.uploader.distory();
  }
  render() {
    return <span className="up-picker">{this.props.children}</span>
  }
}

ImUploader.propTypes = {};
