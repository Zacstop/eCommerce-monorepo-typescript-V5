export const colors = {
  // primary
  "--primary-colors-sopa-color-fresh-green": '#C1F651',
  "--primary-colors-black": '#02021D',

  // secondary
  "--secondary-colors-steel": '#75869C',
  "--secondary-colors-white-smoke": '#F2F2F2',
  "--secondary-colors-white": '#FFFFFF',

  // other
  "--other-colors-yellowish-green": '#81D376',
  "--other-colors-purple-mimosa": '#A441EA',
  "--other-colors-orange": '#F14E2E',  
  "--other-colors-none": '##787878',
  "--other-colors-raddish-orange": '#FE7B1E',
  "--other-colors-yellow": '#FFDA40',
  "--other-colors-orange-yellow": '#FDF9E3',
  "--other-colors-blue": '#353560',
  "--other-colors-yellowish-green2": '#CCE1C0',
  "--other-colors-dodger-blue": '#3184FF',
  
  // grey
  "--other-colors-grey-900": '#161F42',
  "--other-colors-grey-800": '#545C7C',
  "--other-colors-grey-700": '#767B92',
  "--other-colors-grey-600": '#999DAE',
  "--other-colors-grey-500": '#B7BAC9',
  "--other-colors-grey-400": '#D2D5DF',
  "--other-colors-grey-300": '#E3E5ED',
  "--other-colors-grey-200": '#EFF1F8',
  "--other-colors-grey-100": '#F8F9FD',
};

// CSS 변수로 변환하는 함수
export const createColorVariables = (): string => {
  return Object.entries(colors)
    .map(([name, value]) => `--${name}-color: ${value};`)
    .join('\n');
};