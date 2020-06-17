import React, { useState } from 'react';
import { Button, FormField, Form, TextInput, Box, Select, RangeInput } from 'grommet';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styled components
import { BigText, Container, MoneyInput } from './styled';

function Spend() {
  const history = useHistory();
  let giftStyles = ['especial', 'util'];
  let gifted = useSelector((state) => state.gifted);
  const [spendValue, setSpendValue] = useState(100);
  if (!gifted.name) {
    history.push('/home');
  }
  return (
    <Container>
      <BigText>
        Então, quanto você quer gastar no presente do {gifted.name} e qual estilo de presente você
        acha que o {gifted.bond} vai gostar?
      </BigText>
      <Form style={{ margin: 45 }} onSubmit>
        <FormField name="age" label="Valor médio a gastar" style={{ marginTop: 40 }}>
          <MoneyInput>R$ {spendValue}</MoneyInput>
          <RangeInput
            min="0"
            max="5000"
            step="1"
            value={spendValue}
            onChange={(e) => setSpendValue(e.target.value)}
          />
        </FormField>
        <FormField
          name="gender"
          label="Qual vai ser o estilo do presente?"
          style={{ marginTop: 30 }}
        >
          <Select
            placeholder="Selecione um estilo"
            options={['optionsBond']}
            value={'bond'}
            onChange={({ value }) => console.log(value)}
          />
        </FormField>
        <Box direction="row" style={{ marginTop: 30 }} gap="medium">
          <Button type="submit" primary label="Proximo passo!" />
        </Box>
      </Form>
    </Container>
  );
}

export default Spend;
