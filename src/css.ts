import { API } from './interface/api';

export const addSingleClass = (ref: Element, className: string) => {
  if (!ref.classList.contains(className)) {
    ref.classList.add(className);
  }
};

export const addClass = (ref: Element, impl: API) => (className: Array<string> | string) => {
  if (className instanceof Array) {
    for (let i = 0; i < className.length; i++) {
      addSingleClass(ref, className[i]);
    }
  } else {
    addSingleClass(ref, className);
  }
  return impl;
};

export const removeSingleClass = (ref: Element, className: string) => {
  if (ref.classList.contains(className)) {
    ref.classList.remove(className);
  }
};

export const removeClass = (ref: Element, impl: API) => (className: Array<string> | string) => {
  if (className instanceof Array) {
    for (let i = 0; i < className.length; i++) {
      removeSingleClass(ref, className[i]);
    }
  } else {
    removeSingleClass(ref, className);
  }
  return impl;
};

export const toggleClass = (ref: Element, impl: API) => (className: string) => {
  ref.classList.toggle(className);
  return impl;
};

export const hasClass = (ref: Element) => (className: string) => ref.classList.contains(className);
