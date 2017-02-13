import fetch from 'isomorphic-fetch';

const errorMessages = (res) => `${res.status} ${res.statusText}`;

function check401(res) {
  if (res.status === 401) {
    location.href = '/401';
  }
  return res;
}

function check404(res) {
  if (res.status === 404) {
    return Promise.reject(errorMessages(res));
  }
  return res;
}

function jsonParse(res) {
  return res.json().then(jsonResult => ({ ...res, jsonResult }));
}

function errorMessageParse(res) {
  const { code = 2000, message = '未知错误' } = res.jsonResult;
  if (code !== 1000) {
    console.log(message);
    return Promise.reject(message);
  }
  return res.jsonResult;
}

function xFetch(url, options) {
  const opts = { ...options };
  return fetch(url, opts)
    .then(check401)
    .then(check404)
    .then(jsonParse)
    .then(errorMessageParse);
}

export default xFetch;
