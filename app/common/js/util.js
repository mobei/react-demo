let g_count = 0;

const dom = {
  scrollTo(el = {}, height = 0) {
    el.scrollTop = height;
  }
};

export function uuid(prefix = '', suffix = '') {
  g_count++;
  return prefix + '_' + (+new Date()) + g_count + '_' + suffix;
};

export { dom }

