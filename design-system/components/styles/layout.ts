
type Spacing = {
  [key in 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl']: string;
};

type Grid = {
  [key in 'container' | 'gutter']: string;
};

type Breakpoints = {
  [key in 'xs' | 'sm' | 'md' | 'lg']: string;
};


const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px',
};

const grid = {
  container: '1140px',
  gutter: '15px',
};

const breakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const layout = {
  spacing,
  grid,
  breakpoints,
};

export const createLayoutVariables = (): string => {
  let variables = '';

  Object.entries(layout.spacing).forEach(([key, value]) => {
    variables += `--spacing-${key}: ${value}; `;
  });

  Object.entries(layout.grid).forEach(([key, value]) => {
    variables += `--grid-${key}: ${value}; `;
  });

  Object.entries(layout.breakpoints).forEach(([key, value]) => {
    variables += `--breakpoint-${key}: ${value}; `;
  });

  return variables;
};
