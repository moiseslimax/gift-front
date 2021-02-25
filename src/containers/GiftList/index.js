import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormField, Form, TextInput, Box, Select, RangeInput } from 'grommet';
import { Star } from 'grommet-icons';

//styled components
import { BigText, Container, MoneyInput, SelectableBox, Boxes, BoxContent } from './styled';

function GiftList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [giftStyleSelected, setGiftStyleSelected] = useState();

  const choiseBox = () => {
    let gifts = [
      {
        id: '1',
        name: 'Flores',
        mediumValue: 10.20,
        stars: 3
      },
      {
        id: '2',
        name: 'Útil',
        mediumValue: 15.20,
        stars:2
      },
      {
        id: '3',
        name: 'Romantico',
        mediumValue: 20.20,
        stars:2
      },
      {
        id: '4',
        name: 'Indiferente',
        mediumValue: 200.00,
        stars:2
      },
      {
        id: '6',
        name: 'Lembrança',
        mediumValue: 10.20,
        stars:1
      },
      {
        id: '7',
        name: 'Lembrança',
        mediumValue: 10.20,
        stars:0
      }
    ];

    return gifts.map((event) => {
      let selectedStyle = {
        backgroundColor: giftStyleSelected == event.id && 'rgb(83, 83, 138)'
      }

      const numberOfStars = new Array(event.stars).fill(null);

      return (
        <SelectableBox style={selectedStyle} onClick={() => setGiftStyleSelected(event.id)}>
          <BoxContent >
            {numberOfStars.map(() => <Star style={{ height: 15}}/>)}
            <br />
            
            <span style={{opacity: 0.7}}>{event.name}</span>
            <br />
            <span style={{opacity: 0.8, fontSize: 17}}>R$ {event.mediumValue}</span>
          </BoxContent>
        </SelectableBox>
      );
    });
  };

  return (
    <Container>
            <BigText>Filtramos os seguintes presentes que se encaixam com seu filtro, qual deles vc quer dar? (Lembrando que já está na ordem que a gente acha mais interessante)</BigText>
            <Boxes style={{marginTop: 50}}>{choiseBox()}</Boxes>
    </Container>
  );
}

export default GiftList;
