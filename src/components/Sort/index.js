import React from 'react';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import {
  Container, Content, Title, Description, ButtonStyled,
} from './styles';

export default function Sort({ ...props }) {
  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;
      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 480 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 480 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }
  return (
    <Container {...props}>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <Content
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-400, 0, 480],
                  outputRange: [0, 50, 480],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          <Title>Sort</Title>
          <Description>Sort Pokémons alphabetically or by National Pokédex number!</Description>
          <ButtonStyled active>Smallest number first</ButtonStyled>
          <ButtonStyled>Highest number first</ButtonStyled>
          <ButtonStyled>A-Z</ButtonStyled>
          <ButtonStyled>Z-A</ButtonStyled>
        </Content>
      </PanGestureHandler>
    </Container>
  );
}
