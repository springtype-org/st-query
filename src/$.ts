import { addClass, removeClass, toggleClass, hasClass } from "./css";
import { attr, empty, html } from "./dom";
import { API } from "./interface/api";

let impl: API;

export const $ = (ref: Element) => {
  impl = {
    attr: attr(ref, impl),
    empty: empty(ref, impl),
    html: html(ref, impl),
    addClass: addClass(ref, impl),
    removeClass: removeClass(ref, impl),
    toggleClass: toggleClass(ref, impl),
    hasClass: hasClass(ref),
  };
  return impl;
};