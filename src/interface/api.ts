export interface API {
  attr(name: string, value?: string): string | null | API;
  empty(): API;
  html(htmlOrVDOM?: string|any): string | API;
  addClass(className: Array<string> | string): API;
  removeClass(className: Array<string> | string): API;
  hasClass(className: string): boolean;
  toggleClass(className: string): API;
}