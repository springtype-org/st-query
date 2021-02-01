<h1 align="center">SpringType: st-query</h1>

> DOM manipluation API that feels like jQuery

[![Gitter](https://badges.gitter.im/springtype-official/springtype.svg)](https://gitter.im/springtype-official/springtype?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

<h2 align="center">Purpose</h2>

This is a tiny library to augment the SpringType v3 JSX/TSX microframework with a jQuery-like API for programmatic runtime DOM manipulation.

<h2 align="center">Features</h2>

- ✅ Supports JSX/TSX for runtime DOM mutations
- ✅ Ultra-fast: Uses SpringType `ref` instead of DOM CSS selector queries
- ✅ Supports the most important jQuery methods
- ✅ Tiny: `421 bytes` (best, brotli) - `607 bytes` (worst, umd, gz)
- ✅ Zero dependencies
- ✅ First class TypeScript support
- ✅ Unit Test coverage >90%
- ✅ TestCafé smoke tests

<h2 align="center">API docs</h2>

This is how using `st-query` looks like:

```tsx
import { tsx, render, Ref } from "springtype";
import { $ } from "st-query";

interface SomeCustomInputProps {
  name: string;
}

const SomeCustomInput = ({ name }: SomeCustomInputProps) => {

  const inputRef: Ref = {};
  
  const onBlur = () => {
    $(inputRef.current).val(Math.random());
    console.log('Value after blur:', $(inputRef.current).val());
  }
  return <input ref={inputRef} name={name} onBlur={onBlur} />
}
render(<SomeCustomInput name="firstname" />);
```

<h3 align="center">DOM manipulation</h3>

Method        | Examples        
------------- |------------- 
`attr` | Get an attribute of a checkbox: `$(formInputRef).attr('tabIndex')`
`attr` | Set an attribute of an input element: `$(formInputRef).attr('tabIndex', '2')`
`val` | Get a value of a checkbox: `$(formInputRef).val()`
`val` | Set the value of an input element: `$(formInputRef).val(2)`
`html` | Get the `innerHTML` of an element: `$(formInputRef).html()`
`html` | Render VDOM and replace the DOM *children* of an element: `$(formInputRef).html(<div>Something else</div>)`
`replaceWith` | Render DOM and replace the DOM element *itself* with it: `$(formInputRef).replaceWith(<div>Something else</div>)`
`empty` | Remove all children of an element: `$(formInputRef).empty()`
`remove` | Remove the element itself from it's DOM parent node: `$(formInputRef).remove()`

<h3 align="center">DOM events</h3>

Method        | Examples        
------------- |------------- 
`on` | Add a DOM event listener programmatically: `$(formInputRef).on('click', (evt: MouseEvent) => { console.log('clicked on', evt.target) })`
`off` | Remove a DOM event listener programmatically: `$(window).on('resize', (evt: ResizeEvent) => { console.log('browser resized!', window.innerWidth) })`

<h3 align="center">CSS</h3>

Method        | Examples        
------------- |------------- 
`addClass` | Add one CSS class: `$(formInputRef).addClass('outlined')`
`addClass` | Add many CSS classes: `$(formInputRef).addClass(['button', 'mobile'])`
`removeClass` | Remove one CSS class: `$(formInputRef).removeClass('outlined')`
`removeClass` | Remove many CSS classes: `$(formInputRef).removeClass(['button', 'mobile'])`
`toggleClass` | Toggles a CSS class: `$(formInputRef).toggleClass('button')`
`hasClass` | Returns `true` if the CSS class can be found on the element: `$(formInputRef).hasClass('button')`

<h2 align="center">Backers</h2>

Thank you so much for supporting us financially! 🙏🏻😎🥳👍

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/17221813?v=4&s=150">
        </br>
        <a href="https://github.com/jsdevtom">Tom</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Maintainers</h2>

SpringType is brought to you by:

<table>
  <tbody>
    <tr>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars3.githubusercontent.com/u/454817?v=4&s=150">
        </br>
        <a href="https://github.com/kyr0">Aron Homberg</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/17221813?s=150&v=4">
        </br>
        <a href="https://github.com/jsdevtom">Tom</a>
      </td>
      <td align="center">
        <img width="150" height="150"
        src="https://avatars2.githubusercontent.com/u/12079044?s=150&v=4">
        </br>
        <a href="https://github.com/mansi1">Michael Mannseicher</a>
      </td>
    </tr>
  <tbody>
</table>

<h2 align="center">Contributing</h2>

Please help out to make this project even better and see your name added to the list of our
[CONTRIBUTORS.md](./CONTRIBUTORS.md) :tada:
