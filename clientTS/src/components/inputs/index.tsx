type InputFieldProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

export const InputField = (props: InputFieldProps) => {
  return (
    <input
      type={props.type}
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
    />
  );
};

export const LabelField = (props: { label: string; htmlFor: string }) => {
  return <label htmlFor={props.htmlFor}>{props.label}</label>;
};

export const InputElement = (props: InputFieldProps) => {
  return (
    <div className="flex flex-col gap-2">
      <LabelField label={props.placeholder} htmlFor={props.placeholder} />
      <InputField {...props} />
    </div>
  );
};
