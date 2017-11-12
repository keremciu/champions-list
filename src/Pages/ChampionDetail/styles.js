import styled from 'styled-components';

export const BackgroundImage = styled.div`
  background-position: top center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: calc(100vh - 5.2rem);
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-180deg, rgba(28, 35, 68, 0.7) 0%, rgba(53, 35, 88, 1) 70%);
  }
`;

export const Details = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const Champion = styled.div`
  padding-top: 9.5rem;
`

export const ChampionAvatar = styled.div`
  text-align: center;
  img {
    min-width: 19.2rem;
    border-radius: 100%;
    border: 20px solid #242751;
  }
`

export const Statistics = styled.div`
  text-align: center;
`

export const SecondaryTitle = styled.h2`
  padding-top: 100px;
  color: white;
  font-weight: 300;
  font-size: 1.8rem;
`

export const Phases = styled.div`
`

export const Phase = styled.div`
  display: inline-block;
  padding: 0 2.8rem;
`