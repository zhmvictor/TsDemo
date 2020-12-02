"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = exports.Content = exports.Header = void 0;
var Header = (function () {
    function Header() {
        var ele = document.createElement('div');
        ele.innerText = 'This is Header';
        document.body.appendChild(ele);
    }
    return Header;
}());
exports.Header = Header;
var Content = (function () {
    function Content() {
        var ele = document.createElement('div');
        ele.innerText = 'This is Content';
        document.body.appendChild(ele);
    }
    return Content;
}());
exports.Content = Content;
var Footer = (function () {
    function Footer() {
        var ele = document.createElement('div');
        ele.innerText = 'This is Footer';
        document.body.appendChild(ele);
    }
    return Footer;
}());
exports.Footer = Footer;
