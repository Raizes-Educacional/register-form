import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { Label } from '../../../atoms/signup/form/Label';

type UploadFileProps = {
  label: string,
  name: string,
  title: string
}

export function UploadFileField(props: UploadFileProps) {
  return (
    <div className='mt-4 flex flex-col '>
      <Label htmlFor={props.name}>{props.label}</Label>
      <Upload>
        <Button 
          icon={<UploadOutlined />}
          className='w-80 h-10 py-1 px-3 bg-achromatic-200 text-primary-300 text-left'>
          {props.title}
        </Button>
      </Upload>
    </div>
  );
};
