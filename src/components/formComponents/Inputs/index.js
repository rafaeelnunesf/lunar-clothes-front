import CustomInput from "./style";

export default function Inputs({ inputs, data, setData }) {
  function keyboardAnswer(keyboard, input) {
    setData({ ...data, [input.parameterName]: keyboard.value });
  }
  console.log(data);

  return (
    <>
      {inputs.map((input, index) => (
        <CustomInput
          fullWidth
          type={input.type}
          onChange={(e) => keyboardAnswer(e.target, input)}
          label={input.label}
          variant="standard"
          key={index}
          required
        />
      ))}
    </>
  );
}
