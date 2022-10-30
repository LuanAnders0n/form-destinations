import styled from 'styled-components'

export const Container = styled.div`
  .order {
    background: #131921;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .App {
    background-color: #ffffff;
    width: 600px;
    height: 600px;
    border-radius: 30px;
    border: 7px solid #4b91d1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .destinies {
    background-color: #ffffff;
    width: 600px;
    height: 600px;
    border-radius: 30px;
    border: 7px solid #4b91d1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .button_submit {
    width: 200px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #ffffff;
    border-radius: 30px;
    border: 7px;

    :hover {
      background: #ffe9e9;
      border: 5px solid #4b91d1;
    }
  }
  h1 {
    padding: 30px;
  }
`
