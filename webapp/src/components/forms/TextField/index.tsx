import { Input } from '@/components/shadcn/ui/input';
import { useController } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const TextField = ({ name, ...rest }: Props) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  return (
    <div className="flex flex-col gap-2">
      <Input {...field} {...rest} />
      {error && (
        <p className="text-red-500 text-sm text-muted-foreground">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default TextField;
