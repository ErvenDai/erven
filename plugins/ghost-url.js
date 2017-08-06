const apiUrl = 'http://api.yefun.top/ghost/api/v0.1/';
const clientId = 'ghost-frontend';
const clientSecret = '06beabbd12d3';

let url;

const generateQueryString = object => {
  let queries = [];
  if (!object) {
    return '';
  };

  for (let i in object) {
    if (object.hasOwnProperty(i) && (!!object[i] || object[i] === false)) {
      queries.push(i + '=' + encodeURIComponent(object[i]));
    }
  };

  if (queries.length) {
    return '?' + queries.join('&');
  }

  return '';
};

url = {
  api () {
    const args = Array.prototype.slice.call(arguments);
    let requestUrl = apiUrl;
    const queryOptions = args.length && typeof args[args.length - 1] === 'object'
      ? args.pop()
      : {};

    queryOptions.client_id = clientId;
    queryOptions.client_secret = clientSecret;

    if (args.length) {
      args.forEach(el => {
        requestUrl += el.replace(/^\/|\/$/g, '') + '/';
      });
    }
    return requestUrl + generateQueryString(queryOptions);
  }
};

export default url;
