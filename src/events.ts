import { API } from './interface/api';

export const off = (ref: Element | Window, impl: API) => (eventName: string, handler: EventListener) => {
  ref.removeEventListener(eventName, handler);
  return impl;
};

export const on = (ref: Element | Window, impl: API) => (eventName: string, handler: EventListener) => {
  ref.addEventListener(eventName, handler);
  return impl;
};
