import { API } from "./interface/api";

export const attr = (ref: Element, impl: API) => (name: string, value?: any) => {
  if (typeof value === 'undefined') return ref.getAttribute(name);
  ref.setAttribute(name, value);
  return impl;
};

export const empty = (ref: Element, impl: API) => () => {
  ref.innerHTML = '';
  return impl;
}

export const html = (ref: Element, impl: API) => (htmlOrVDOM?: string|any) => {
  if (!htmlOrVDOM) {
    return ref.innerHTML;
  }

  if (typeof htmlOrVDOM === 'string') {
    ref.innerHTML = htmlOrVDOM;
  } else if ((ref as any).$st) {
    // render VDOM 
    const el = (ref as any).$st.renderer.render(htmlOrVDOM);
    // empty
    ref.innerHTML = '';
    // append newly rendered child
    ref.appendChild(el);
  }
  return impl;
}
