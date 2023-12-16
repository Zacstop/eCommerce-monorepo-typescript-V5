import { css } from 'styled-components';

export const typography = css`
  // Google Fonts에서 Open Sans 폰트 가져오기
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');

  // 기본 바디 폰트 설정
  body {
    font-family: 'Open Sans', sans-serif;
  }

  // Headers/T1 스타일 정의
  .T1 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T1 */
    font-family: Noto Serif Lao;
    font-size: 72px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px; /* 111.111% */
  }

  // Headers/T2 스타일 정의
  .T2 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T2 */
    font-family: Noto Serif Lao;
    font-size: 66px;
    font-style: normal;
    font-weight: 700;
    line-height: 74px; /* 112.121% */
  }

  // Headers/T3 스타일 정의
  .T3 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T3 */
    font-family: Noto Serif Lao;
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px; /* 114.286% */
  }

  // Headers/T4 스타일 정의
  .T4 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T4 */
    font-family: Noto Serif Lao;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 56px; /* 116.667% */
  }

  // Headers/T5 스타일 정의
  .T5 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T5 */
    font-family: Noto Serif Lao;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 46px; /* 115% */  
  }

  // Headers/T6 스타일 정의
  .T6 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T6 */
    font-family: Noto Serif Lao;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 111.111% */
  }

  // Headers/T7 스타일 정의
  .T7 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T7 */
    font-family: Noto Serif Lao;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 114.286% */
  }

  // Headers/T8 스타일 정의
  .T8 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Headers/T8 */
    font-family: Noto Serif Lao;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; /* 116.667% */
  }

  // BodyText 스타일 정의
  .P1 {
    color: var(--other-colors-yellowish-green, #81D376);
    font-family: Rubik;
    font-size: 20px;
    font-style: normal;

    &.Regular {
      font-weight: 400;
      line-height: 24px; /* 120% */
    }

    &.Medium {
      font-weight: 500;
      line-height: 24px; /* 120% */
    }

    &.SemiBold {
      font-weight: 600;
      line-height: 24px; /* 120% */
    }

    &.Bold {
      font-weight: 700;
      line-height: 24px; /* 120% */
    }
  }  
    
  .P2 {
    color: var(--other-colors-yellowish-green, #81D376);
    font-family: Rubik;
    font-size: 18px;
    font-style: normal;

    &.Regular {
      font-weight: 400;
      line-height: 20px; /* 125% */
    }

    &.Medium {
      font-weight: 500;
      line-height: 20px; /* 125% */
    }

    &.SemiBold {
      font-weight: 600;
      line-height: 20px; /* 125% */
    }

    &.Bold {
      font-weight: 700;
      line-height: 20px; /* 125% */
    }
  }

  .P3 {
    color: var(--other-colors-yellowish-green, #81D376);
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;

    &.Regular {
      font-weight: 400;
      line-height: 20px; /* 125% */
    }

    &.Medium {
      font-weight: 500;
      line-height: 20px; /* 125% */
    }

    &.SemiBold {
      font-weight: 600;
      line-height: 20px; /* 125% */
    }

    &.Bold {
      font-weight: 700;
      line-height: 20px; /* 125% */
    }
  }

  .P4 {
    color: var(--other-colors-yellowish-green, #81D376);
    font-family: Rubik;
    font-size: 14px;
    font-style: normal;

    &.Regular {
      font-weight: 400;
      line-height: 16px; /* 114.286% */
    }

    &.Medium {
      font-weight: 500;
      line-height: 16px; /* 114.286% */
    }

    &.SemiBold {
      font-weight: 600;
      line-height: 16px; /* 114.286% */
    }

    &.Bold {
      font-weight: 700;
      line-height: 16px; /* 114.286% */
    }
  }

  .P5 {
    color: var(--other-colors-yellowish-green, #81D376);
    font-family: Rubik;
    font-size: 12px;
    font-style: normal;

    &.Regular {
      font-weight: 400;
      line-height: 16px; /* 133.333% */
    }

    &.Medium {
      font-weight: 500;
      line-height: 16px; /* 133.333% */
    }

    &.SemiBold {
      font-weight: 600;
      line-height: 16px; /* 133.333% */
    }

    &.Bold {
      font-weight: 700;
      line-height: 16px; /* 133.333% */
    }
  }

  .U1 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Underline Text/Regular */
    font-family: Rubik;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    text-decoration-line: underline;
  }

  .U2 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Underline Text/Medium */
    font-family: Rubik;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */
    text-decoration-line: underline;
  }

  .U3 {
    color: var(--other-colors-yellowish-green, #81D376);

    /* Underline Text/SemiBold */
    font-family: Rubik;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px; /* 133.333% */
    text-decoration-line: underline;
  }

`;
