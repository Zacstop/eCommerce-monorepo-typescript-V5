// themes/lightTheme.ts
import { commonStyles, CommonThemeStyles } from './commonTheme';

interface LightTheme extends CommonThemeStyles {
  body: string;
  text: string;
  background: string;
  // light 테마에만 특화된 추가 스타일 타입 정의
}

export const lightTheme: LightTheme = {
  ...commonStyles,
  body: '#FFF',
  text: '#363537',
  background: '#f8f9fa',
  // light 테마에 특화된 추가 스타일 정의
};
