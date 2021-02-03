import { tsx, render, Ref } from 'springtype';
import { $ } from '../../../dist/index';

interface SomeCustomInputProps {
  name: string;
}

const SomeCustomInput = ({ name }: SomeCustomInputProps) => {
  const inputRef: Ref = {};

  // programmatically added
  const onFocus = () => {
    console.log('onFocus!');
  };

  // implicitly added
  const onBlur = () => {
    console.log('Value on blur:', $(inputRef.current).val());

    $(inputRef.current).val('2');

    $(inputRef.current).on('focus', onFocus);
  };
  return <input ref={inputRef} name={name} onBlur={onBlur} />;
};
render(<SomeCustomInput name="firstname" />);
