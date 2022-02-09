import CustomInput from "./style";

export default function Inputs({ inputs }) {
  return (
    <>
      {inputs.map((input, index) => (
        <CustomInput
          fullWidth
          type={input.type}
          label={input.label}
          variant="standard"
          key={index}
          required
        />
      ))}
    </>
  );
}
