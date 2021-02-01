export interface API {
  attr(name: string, value?: string): string | null | API;
  val(value?: string | boolean): string | boolean | API;
  empty(): API;
  html(vdom: any): API;
  remove(): API;
  replaceWith(vdom: any): Element | API;
  addClass(className: Array<string> | string): API;
  removeClass(className: Array<string> | string): API;
  hasClass(className: string): boolean;
  toggleClass(className: string): API;
  on(eventName: string, handler: EventListener): API;
  off(eventName: string, handler: EventListener): API;
}