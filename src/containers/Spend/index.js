import React, { useState } from 'react';
import { Button, FormField, Form, TextInput, Box, Select, RangeInput } from 'grommet';
import { Validate, Spa, Camera, Gift } from 'grommet-icons';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//styled components
import { BigText, Container, MoneyInput, SelectableBox, Boxes, BoxContent } from './styled';

function Spend() {
  // const history = useHistory();
  let giftStyles = ['Especial', 'Útil', 'Romantico', 'Indiferente', 'Lembrança'];
  let gifted = useSelector((state) => state.gifted);
  const [spendValue, setSpendValue] = useState(100);
  const [giftStyle, setGiftStyle] = useState('');
  // if (!gifted.name) {
  //   history.push('/home');
  // }
  const choiseBox = () => {
    let events = [
      {
        id: '1',
        name: 'Especial',
        icon: <Gift />,
      },
      {
        id: '2',
        name: 'Útil',
        icon: <Camera />,
      },
      {
        id: '3',
        name: 'Romantico',
        icon: <Spa />,
      },
      {
        id: '4',
        name: 'Indiferente',
        icon: <Gift />,
      },
      {
        id: '6',
        name: 'Lembrança',
        icon: <Validate />,
      },
    ];

    return events.map((event) => {
      return (
        <SelectableBox>
          <BoxContent>
            {event.icon}
            <br />
            <span style={{ opacity: 0.7 }}>{event.name}</span>
          </BoxContent>
        </SelectableBox>
      );
    });
  };

  return (
    <Container>
      <BigText>
        Então, quanto vc quer gastar e qual tipo de presente vc acha que
        {gifted.name || 'Teste Nome'} vai gostar?
      </BigText>
      <Form style={{ margin: 25 }} onSubmit>
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
          <Boxes>{choiseBox()}</Boxes>
        </FormField>
        <Box direction="row" style={{ marginTop: 30 }} gap="medium">
          <Button type="submit" primary label="Proximo passo!" />
        </Box>
      </Form>
    </Container>
  );
}

export default Spend;
