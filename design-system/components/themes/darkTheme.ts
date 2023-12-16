// themes/darkTheme.ts
import { commonStyles, CommonThemeStyles } from './commonTheme';

interface DarkTheme extends CommonThemeStyles {
  body: string;
  text: string;
  background: string;
  // dark 테마에만 특화된 추가 스타일 타입 정의
}

export const darkTheme: DarkTheme = {
  ...commonStyles,
  body: '#363537',
  text: '#FAFAFA',
  background: '#343a40',
  // dark 테마에 특화된 추가 스타일 정의
};
