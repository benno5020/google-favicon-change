// ==UserScript==
// @name         Gmail Favicon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Changes your second Gmail account's favicon.
// @author       benno5020
// @match        https://mail.google.com/mail/u/1/*
// @grant        none
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://yourdomain.com/img/favicon.ico'; // https is important for this to work
favicon_link_html.type = 'image/x-icon';

try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }
