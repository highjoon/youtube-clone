import styled from '@emotion/styled';

export const Container = styled.div`
  width: 240px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 11px 24px;
  gap: 23px;
  cursor: pointer;

  &:hover {
    background: var(--color-black-dark4);

    span {
      font-weight: 600;
    }
  }
`;

export const Title = styled.span`
  font-size: 14px;
  line-height: 16px;
  color: var(--color-primary-black);
`;
