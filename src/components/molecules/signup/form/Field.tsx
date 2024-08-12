import { Input } from 'antd';
import '../../../../styles/global.css';
import { Label } from "../../../atoms/signup/form/Label";
import { ReactNode } from 'react';

type FieldProps = {
  label: string,
  type: string,
  name: string,
  placeholder: string,
  fieldErrorMessage: ReactNode
};

export function Field(props: FieldProps) {
  return (
    <div className="mt-4 flex flex-col">
      <Label htmlFor={props.name}>{props.label}</Label>
      <Input
        className='w-80 h-10 py-1 px-3 bg-achromatic-200 text-achromatic-300 placeholder:text-primary-300'
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
      { props.fieldErrorMessage ? <span className="">{props.fieldErrorMessage}</span> : null }
    </div>
  );
};
