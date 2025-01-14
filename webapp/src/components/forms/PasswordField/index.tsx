import { useState } from 'react';
import TextField from '../TextField';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { cn } from '@/lib/utils';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const PasswordField = ({ name, className, ...rest }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className={cn('relative', className)}>
      <TextField
        type={isPasswordVisible ? 'text' : 'password'}
        name={name}
        {...rest}
      />

      {isPasswordVisible ? (
        <FaEyeSlash
          className="absolute right-2 top-[12px] cursor-pointer select-none"
          onClick={() => setIsPasswordVisible(false)}
        />
      ) : (
        <FaEye
          className="absolute right-2 top-[12px] cursor-pointer select-none"
          onClick={() => setIsPasswordVisible(true)}
        />
      )}
    </div>
  );
};

export default PasswordField;
