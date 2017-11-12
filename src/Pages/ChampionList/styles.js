import styled from 'styled-components';

export const ListItem = styled.div`
  height: 8.7rem;
  line-height: 8.7rem;
  border-bottom: 1px solid #432C6D;
  :hover {
    background: rgba(0,0,0,0.1)
  }
`;

export const Avatar = styled.div`
  display: inline-block;
  padding-left: 1.6rem;
  img {
    max-height: 5.6rem;
    border-radius: 100%;
    border: 4px solid #7B4BFF;
  }
`

export const ItemName = styled.div`
  display: inline-block;
  padding-left: 1.6rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
`;