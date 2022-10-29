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
    border: 5px solid #febd69;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .api {
    background-color: #ffffff;
    width: 600px;
    height: 600px;
    border-radius: 30px;
    border: 5px solid #febd69;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #name,
  #email,
  #phone,
  #cpf {
    width: 500px;
    height: 50px;
    font-size: 30px;
    background-color: #cdcdcd;
    border: 1px;
    margin-top: 30px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    :focus {
      background: #ffffff;
      border: #000000 1px solid;
    }
  }

  .button_submit {
    width: 200px;
    height: 60px;
    display: flex;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: #ffffff;
    border-radius: 30px;

    :hover {
      background: #ffe9e9;
    }
  }
`
