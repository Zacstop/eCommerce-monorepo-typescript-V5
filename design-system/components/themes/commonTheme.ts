// themes/commonTheme.ts
export interface CommonThemeStyles {
  font: string;
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  dangerColor: string;
  warningColor: string;
  infoColor: string;
  lightColor: string;
  darkColor: string;
  button: {
    borderRadius: string;
    padding: string;
  };
  input: {
    borderColor: string;
    focusBorderColor: string;
    borderRadius: string;
    padding: string;
  };
  link: {
    textDecoration: string;
    hoverColor: string;
  };
}

export const commonStyles: CommonThemeStyles = {
  font: 'Arial, sans-serif',
  primaryColor: '#007bff',
  secondaryColor: '#6c757d',
  successColor: '#28a745',
  dangerColor: '#dc3545',
  warningColor: '#ffc107',
  infoColor: '#17a2b8',
  lightColor: '#f8f9fa',
  darkColor: '#343a40',
  button: {
    borderRadius: '4px',
    padding: '10px 15px',
  },
  input: {
    borderColor: '#ced4da',
    focusBorderColor: '#80bdff',
    borderRadius: '4px',
    padding: '10px',
  },
  link: {
    textDecoration: 'none',
    hoverColor: '#0056b3',
  },
};
