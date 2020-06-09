import React, { useState } from 'react';
import { Button, FormField, Form, TextInput, Box, Select } from 'grommet';

//styled components
import { Container, BigText } from './styled.gifted';

function Gifted() {
  const options = ['Feminino', 'Masculino', 'lgbt+', 'Isso realmente importa?'];
  const [value, setValue] = useState({});
  return (
    <Container>
      <BigText>
        Primeiramente, para quem vamos
        <br /> dar esse presente especial?
      </BigText>
      <Form style={{ margin: 45 }} onSubmit={({ value }) => {}}>
        <FormField name="name" label="Name">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <FormField name="age" label="Idade">
          <TextInput id="text-input-id" name="name" />
        </FormField>
        <FormField name="gender" label="Genero">
          <Select id="select" name="select" placeholder="Selecione um genero" options={options} />
        </FormField>
        <Box direction="row" style={{ marginTop: 30 }} gap="medium">
          <Button type="submit" primary label="Proximo passo!" />
        </Box>
      </Form>
    </Container>
  );
}

export default Gifted;
