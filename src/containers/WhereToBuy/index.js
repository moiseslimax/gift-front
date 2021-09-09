import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormField, Form, TextInput, Box, Select, RangeInput } from 'grommet';
import { Star } from 'grommet-icons';

//styled components
import { BigText, Container, MoneyInput, SelectableBox, Boxes, BoxContent } from './styled';
import { SET_GIFT_TYPE } from '../../store/reducers/types';

function WhereToBuy() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [giftStyleSelected, setGiftStyleSelected] = useState();

  const choiseBox = () => {
    let gifts = [
      {
        id: '1',
        name: 'Flores',
        mediumValue: 10.2,
        stars: 3,
      },
      {
        id: '2',
        name: 'Útil',
        mediumValue: 15.2,
        stars: 2,
      },
      {
        id: '3',
        name: 'Romantico',
        mediumValue: 20.2,
        stars: 2,
      },
      {
        id: '4',
        name: 'Indiferente',
        mediumValue: 200.0,
        stars: 2,
      },
      {
        id: '6',
        name: 'Lembrança',
        mediumValue: 10.2,
        stars: 1,
      },
      {
        id: '7',
        name: 'Lembrança',
        mediumValue: 10.2,
        stars: 0,
      },
    ];

    return gifts.map((event) => {
      let selectedStyle = {
        backgroundColor: giftStyleSelected == event.id && 'rgb(83, 83, 138)',
      };

      const numberOfStars = new Array(event.stars).fill(null);

      return (
        <SelectableBox style={selectedStyle} onClick={() => setGiftStyleSelected(event.id)}>
          <BoxContent>
            {numberOfStars.map(() => (
              <Star style={{ height: 15 }} />
            ))}
            <br />

            <span style={{ opacity: 0.7 }}>{event.name}</span>
            <br />
            <span style={{ opacity: 0.8, fontSize: 17 }}>R$ {event.mediumValue}</span>
          </BoxContent>
        </SelectableBox>
      );
    });
  };

  const submit = () => {
    const payload = { giftTypeId: giftStyleSelected };
    console.log(payload)
    dispatch({ type: SET_GIFT_TYPE, payload });
  };

  return (
    <Container>
      <BigText>
        Bom, depois que vc decidiu o presente, vamos as compras.
      </BigText>
    </Container>
  );
}

export default WhereToBuy;
