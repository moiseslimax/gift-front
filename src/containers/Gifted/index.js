import React, { useState } from 'react';
import { Button, FormField, Form, TextInput, Box, Select, RangeInput } from 'grommet';
import { useDispatch } from 'react-redux';
import { SET_GIFTED } from '../../store/reducers/types';
import { useHistory } from 'react-router-dom';

//styled components
import { Container, BigText } from './styled';

function Gifted() {
  const history = useHistory();
  const dispatch = useDispatch();
  const optionsGender = ['Feminino', 'Masculino', 'lgbt+', 'Isso realmente importa?'];
  const optionsBond = ['Amigo(a)', 'Primo(a)', 'Namorado(a)', 'Mãe', 'Pai', 'Conhecido'];
  const [age, setAge] = useState(50);
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [bond, setbond] = useState();

  function submitGiftedData() {
    let gifted = {
      name,
      age,
      gender,
      bond,
    };

    dispatch({ type: SET_GIFTED, payload: {gifted} });
    history.push('/spend');
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
            onChange={({ value }) => setGender(value)}
          />
        </FormField>
        <FormField name="gender" label="O que essa pessoa é para você?">
          <Select
            placeholder="Selecione um vinculo"
            options={optionsBond}
            value={bond}
            onChange={({ value }) => setbond(value)}
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
