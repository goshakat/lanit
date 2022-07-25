// const url = new URL (window.location.href);
const url = new URL ('https://github.com/goshakat?tab=repositories');

function Url (protocol, hostname, pathname, query, hash) {

  let path = pathname.slice(0, pathname.lastIndexOf('/')+1);
  let filename = pathname.slice(pathname.lastIndexOf('/')+1);
  document.getElementById('protocol').textContent = protocol;
  document.getElementById('hostname').textContent = '/' + hostname
  document.getElementById('pathname').textContent = path;
  document.getElementById('filename').textContent = filename;
  document.getElementById('query').textContent = query;
  document.getElementById('hash').textContent = hash;
}
Url (url.protocol, url.hostname, url.pathname, url.hash, url.search);

document.getElementById('data-protocol').textContent = url.protocol;
document.getElementById('host-name').textContent = url.hostname;
document.getElementById('data-file').textContent = url.pathname;
document.getElementById('data-param').textContent = url.hash;
document.getElementById('data-query').textContent = url.search;