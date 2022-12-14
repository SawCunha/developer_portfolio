import { Container as ContainerMUI, styled } from '@mui/material';

const Container = styled(ContainerMUI)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-evenly;
  align-items: center;

  position: -webkit-sticky;
  position: sticky;
  top: 0;

  background-color: ${({ theme }: any) => theme.palette.primary.main};

  @media (min-width: 680px) {
    padding-left: 6.25rem;
    padding-right: 0;
  }
`;

export { Container };
