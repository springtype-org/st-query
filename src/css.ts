import { API } from "./interface/api";

export const addSingleClass = (ref: Element, className: string) => {
  if (!ref.classList.contains(className)) {
    ref.classList.add(className);
  }
}

export const addClass = (ref: Element, impl: API) => (className: Array<string> | string) => {
  if (className instanceof Array) {
    className.forEach((className) => addSingleClass(ref, className));
  } else {
    addSingleClass(ref, className);
  }
  return impl;
}

export const removeSingleClass = (ref: Element, className: string) => {
  if (ref.classList.contains(className)) {
    ref.classList.remove(className);
  }
}

export const removeClass = (ref: Element, impl: API) => (className: Array<string> | string) => {
  if (className instanceof Array) {
    className.forEach((className) => removeSingleClass(ref, className));
  } else {
    removeSingleClass(ref, className);
  }
  return impl;
}

export const toggleClass = (ref: Element, impl: API) => (className: string) => {
  ref.classList.toggle(className);
  return impl;
}

export const hasClass = (ref: Element) => (className: string) => {
  return ref.classList.contains(className);
}