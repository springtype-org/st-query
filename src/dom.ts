import { API } from './interface/api';

const render = (ref: Element, vdom: any) => (ref as any).$st.render(vdom);

export const attr = (ref: Element, impl: API) => (name: string, value?: any) => {
  if (typeof value === 'undefined') return ref.getAttribute(name);
  ref.setAttribute(name, value);
  return impl;
};

export const val = (ref: Element, impl: API) => (value?: any) => {
  const isCheckbox = (ref as any).type === 'checkbox';
  if (typeof value === 'undefined') {
    return isCheckbox ? (ref as any).checked : (ref as any).value;
  }
  if (isCheckbox) {
    (ref as any).checked = value;
  } else {
    (ref as any).value = value;
  }
  return impl;
};

export const empty = (ref: Element, impl: API) => () => {
  ref.innerHTML = '';
  return impl;
};

export const html = (ref: Element, impl: API) => (vdom: any) => {
  empty(ref, impl)();
  ref.appendChild(render(ref, vdom));
  return impl;
};

export const remove = (ref: Element, impl: API) => () => {
  if (ref.parentNode) ref.parentNode.removeChild(ref);
  return impl;
};

export const replaceWith = (ref: Element) => (vdom: any) => {
  const el = render(ref, vdom);
  if (ref.parentNode) {
    ref.parentNode.replaceChild(el, ref);
  }
  return el;
};
