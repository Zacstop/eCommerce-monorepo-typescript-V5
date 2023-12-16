import styled from "styled-components";


export const background = styled.div`
  background-color: var(--secondary-colors-white);
  border: 1px solid;
  border-color: var(--other-colorsdodger-blue);
  border-radius: 8px;
  height: 56px;
  left: 0;
  position: fixed;
  top: 0;
  width: 370px;
`;

const StyledOrderNumber = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
`;

export const Frame28 = styled.div`
  align-items: flex-start;
  background-color: var(--secondary-colors-white);
  border-radius: 24px;
  display: inline-flex;
  gap: 10px;
  padding: 4px;
  position: relative;
`;

export const inputLabel = styled.div`
  & .text-wrapper {
    color: var(--secondary-colors-steel);
    font-family: "Rubik-Regular", Helvetica;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: 11px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;

export const Type = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 16px;
  position: relative;
`;

export const bodyText = styled.div`
  color: var(--primary-colors-black);
  font-family: var(--body-text-regular-font-family);
  font-size: var(--body-text-regular-font-size);
  font-style: var(--body-text-regular-font-style);
  font-weight: var(--body-text-regular-font-weight);
  letter-spacing: var(--body-text-regular-letter-spacing);
  line-height: var(--body-text-regular-line-height);
  position: relative;
  width: 298px;
`;

export const icon = styled.div`
  height: 24px !important;
  position: relative !important;
  width: 24px !important;
`;