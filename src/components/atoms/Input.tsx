import styled from "@emotion/styled";
import { colors } from "../../theme/variables";

const S: any = {};

S.Input = styled.input`
  font-size: 1.4rem;
  color: ${colors.dark};
  font-family: inherit;
  padding: 1.5rem 2rem;
  width: 100%;
  font-weight: 600;
  border: 0.1rem solid #dedede;
  border-radius: 0.5rem;

  &:focus {
    outline: none;
    border: 0.25rem solid ${colors.green};

    &:invalid {
      border: 0.25rem solid ${colors.red};
    }
  }
`;

interface iInputProps {
  value: String;
  onChange: String;
  children?: any;
}

const Input: React.FC<iInputProps & any> = ({
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <S.Input
      //   className="input"
      //   aria-label="password"
      //   type="password"
      //   placeholder="Password"
      //   required
      //   name="password"
      //   id="password"
      value={value}
      onChange={onChange}
      //   autoComplete="current-password"
      {...props}
    >
      {children}
    </S.Input>
  );
};
export default Input;
