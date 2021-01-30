import styled from "@emotion/styled";
import { colors } from "../../theme/variables";

const S: any = {};

S.Label = styled.input`
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

interface iLabelProps {
  htmlFor: String;
  children?: any;
}

const Label: React.FC<iLabelProps & any> = ({
  htmlFor,
  children,
  ...props
}) => {
  return (
    <S.Label htmlFor={htmlFor} {...props}>
      {children}
    </S.Label>
  );
};
export default Label;
