import { addClass, removeClass, toggleClass, hasClass } from "./css";
import { attr, empty, html, remove, replaceWith, val } from "./dom";
import { on, off } from "./events";
import { API } from "./interface/api";

let impl: API;

export const $ = (ref: Element) => {
  impl = {
    attr: attr(ref, impl),
    val: val(ref, impl),
    empty: empty(ref, impl),
    html: html(ref, impl),
    remove: remove(ref, impl),
    replaceWith: replaceWith(ref, impl),
    addClass: addClass(ref, impl),
    removeClass: removeClass(ref, impl),
    toggleClass: toggleClass(ref, impl),
    hasClass: hasClass(ref),
    on: on(ref, impl),
    off: off(ref, impl),
  };
  return impl;
};