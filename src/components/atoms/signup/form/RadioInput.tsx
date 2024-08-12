import { Radio, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';
import '../../../../styles/global.css';

type Radios = {
  value: string,
  label: string
};

type RadioInputProps = {
  name: string,
  id: string,
  radios: Radios[]
};

export function RadioInput(props: RadioInputProps) {

  const [value, setValue] = useState();

  const onChange = (event: RadioChangeEvent) => {
    return setValue(event.target.value);
  };
  
  return (
    <div>    
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          {...props.radios.map(item => 
            <Radio key={item.value} value={item.value}>
              {item.label}
            </Radio>
          )}
        </Space>
      </Radio.Group>
    </div>
  )
}
