import styled from "styled-components";

export const LargeButton = styled.TouchableOpacity<{ bgColor: string }>`
  background-color: ${({ bgColor = "red" }) => bgColor};
  border-radius: 100px;
  height: 200px;
  width: 200px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 30px;
  margin: auto;
`;

export const Spacer = styled.View<{ value: number }>`
  margin-bottom: ${({ value }) => value}px;
`;
