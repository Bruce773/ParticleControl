import styled from "styled-components";

export const LargeButton = styled.TouchableOpacity<{ bgColor: string }>`
  background-color: ${({ bgColor = "red" }) => bgColor};
  border-radius: 60;
  height: 120px;
  width: 120px;
  text-align: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  margin: auto;
`;

export const Spacer = styled.View<{ value: number }>`
  margin-bottom: ${({ value }) => value}px;
`;
