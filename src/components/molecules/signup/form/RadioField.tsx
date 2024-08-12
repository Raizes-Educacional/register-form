import { Label } from "../../../atoms/signup/form/Label";
import { RadioInput } from "../../../atoms/signup/form/RadioInput";

type RadioFieldProps ={
  label: string,
  name: string,
}

export function RadioField(props: RadioFieldProps) {
  return (
    <div className='w-80 md:w-full flex flex-col gap-1'>
      <Label htmlFor={props.name}>{props.label}</Label>
      <RadioInput 
        name={props.name}
        id={props.name}
        radios={[
          { value: 'yes', label: 'Sim' },
          { value: 'no', label: 'Não' }
        ]}
      />
    </div>
  )
  
}