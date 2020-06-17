import React from 'react';
import { Button } from 'grommet';
import { useHistory } from 'react-router-dom';

//styled components
import { BigText, Container } from './styled';

function Home() {
  const history = useHistory();

  return (
    <Container>
      <BigText>Bem vindo ao gift, clique a baixo para começar</BigText>
      <Button
        primary
        label="Vamos lá!"
        alignSelf="center"
        size="large"
        style={{ marginTop: 40 }}
        onClick={() => history.push('/gifted')}
      />
    </Container>
  );
}

export default Home;
