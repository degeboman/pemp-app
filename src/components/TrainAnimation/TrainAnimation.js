// TrainAnimation.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import trainImage from '../../images/train.png';

const trainAnimation = keyframes`
  from {
		margin-left: -10%;
	}
	to {
		margin-left: 100%;
	}
`;

const TrainContainer = styled.div`
position: relative;
  width: 100vw; /* Ширина контейнера равна ширине окна */
  height: 200px; /* Высота анимации поезда */
  overflow: hidden;
  margin: 0 0; /* Отступы между рядами картинок */
  left: 50%;
  transform: translateX(-50%);
`;

const Train = styled.div`
  position: absolute;
  width: 300px; /* Ширина поезда */
  height: 200px; /* Высота поезда */
  background: url(${trainImage}) no-repeat center center;
  background-size: contain;
  animation: ${trainAnimation} 10s linear infinite;
`;

const TrainAnimation = () => {
  return (
    <TrainContainer>
      <Train />
    </TrainContainer>
  );
};

export default TrainAnimation;
