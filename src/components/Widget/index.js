import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.wrong};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }

  input {
    width: 100%;
    padding: 10px;
    font-weight: 600;
    font-size: 16px;
    text-align: center;
    border: none;
    border-radius: 4px;
  }

  button {
    margin-top: 12px;
    background-color: ${({ theme }) => theme.colors.wrong};
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    border-radius: 4px;
  }
`;

Widget.Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.success};

  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

export default Widget;
