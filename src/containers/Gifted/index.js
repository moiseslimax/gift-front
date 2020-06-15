import React, { useState } from 'react';
import { Button, FormField, Form, TextInput, Box, Select, RangeInput } from 'grommet';
import { useDispatch } from 'react-redux';
import { SET_ERROR } from '../../store/reducers/types';
//styled components
import { Container, BigText } from './styled.gifted';

function Gifted() {
  const dispatch = useDispatch();
  const optionsGender = ['Feminino', 'Masculino', 'lgbt+', 'Isso realmente importa?'];
  const optionsBond = ['Amigo(a)', 'Primo(a)', 'Namorado(a)', 'Mãe', 'Pai', 'Conhecido'];
  const [age, setAge] = useState(50);
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [bond, setbond] = useState('');

  function submitGiftedData() {
    let gifted = {
      name,
      age,
      gender,
    };

    //TODO Dispatch gifted
    let reducerError = {
      page: 'gifted',
      error: {
        message: 'error',
      },
    };

    dispatch({ type: SET_ERROR, payload: reducerError });
    console.log(gifted);
  }

  return (
    <Container>
      <BigText>
        Primeiramente, para quem vamos
        <br /> dar esse presente especial?
      </BigText>
      <Form style={{ margin: 45 }} onSubmit={() => submitGiftedData()}>
        <FormField name="name" label="Name">
          <TextInput value={name} onChange={(e) => setName(e.target.value)} />
        </FormField>
        <FormField name="age" label="Idade">
          {age}
          <RangeInput
            min="0"
            max="100"
            step="1"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </FormField>
        <FormField name="gender" label="Genero">
          <Select
            id="select"
            name="select"
            placeholder="Selecione um genero"
            options={optionsGender}
            value={gender}
            onChange={({ optionsGender }) => setGender(optionsGender)}
          />
        </FormField>
        <FormField name="gender" label="O que essa pessoa é para você?">
          <Select
            id="select"
            name="select"
            placeholder="Selecione um vinculo"
            options={optionsBond}
            value={bond}
            onChange={({ optionsBond }) => setbond(optionsBond)}
          />
        </FormField>
        <Box direction="row" style={{ marginTop: 30 }} gap="medium">
          <Button type="submit" primary label="Proximo passo!" />
        </Box>
      </Form>
    </Container>
  );
}

export default Gifted;
