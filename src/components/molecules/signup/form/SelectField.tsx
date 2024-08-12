import '../../../../styles/global.css';
import { Label } from "../../../atoms/signup/form/Label";

type Option = {
  value: string,
  label: string
};

type SelectDropListProps = {
  label: string,
  name: string,
  options: Option[]
};

export function SelectDropList(props: SelectDropListProps) {
  return (
    <div className="mt-4 flex flex-col">
      <Label htmlFor={props.name}>{props.label}</Label>
      <select
        id={props.name}
        name={props.name}
        className='w-80 h-10 py-1 px-3 text-sm bg-achromatic-200 text-achromatic-300 placeholder:text-primary-300 border-0 rounded-md'
        defaultValue="Selecione">
          {...props.options.map(item => 
            <option id={item.value} value={item.value}>
              {item.label}
            </option>
          )}
        </select>
    </div>
  );
};
