import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Label } from './Label';

type CheckboxInputProps = {
  name: string,
  label: string
};

const handleChange = (event: CheckboxChangeEvent) => {
  return event.target.checked;
};

export function CheckboxInput (props: CheckboxInputProps) {
  return (
    <div className='w-80 md:w-full text-base'>
      <Checkbox onChange={handleChange} name={props.name} className='top-0'>
        <Label htmlFor={props.name}>
          {props.label}
        </Label>
      </Checkbox>
    </div>
  );
};
