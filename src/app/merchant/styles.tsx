'use client';
import {
  fontSize,
  heightPixel,
  mobileHeightPixel,
  mobileStyle,
  mobileWidthPixel,
  widthPixel
} from '@/utils/pxToVW';
import styled from '@emotion/styled';
import { RaleText } from '../styles';

export const HeroSection = styled.div({
  backgroundColor: '#FFF5F8',
  display: 'flex',
  flexDirection: 'row',
  padding: `${heightPixel(100)} ${widthPixel(80)}`,
  alignItems: 'center',
  justifyContent: 'space-between',
  '& img': {
    width: widthPixel(616),
    height: widthPixel(600),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  ...mobileStyle({
    flexDirection: 'column',
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    alignItems: 'flex-start',
    textAlign: 'center',
    gap: mobileHeightPixel(40),
    '& img': {
      width: mobileWidthPixel(414),
      height: mobileWidthPixel(404),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })
});

export const HeroContent = styled.div([
  `
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(40)};
  width: ${widthPixel(560)};
`,
  mobileStyle({
    alignItems: 'center',
    width: '100%'
  })
]);

export const HeroContentTextArea = styled.div([
  `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${heightPixel(16)};
`,
  mobileStyle({
    '& .small': {
      textAlign: 'center',
      width: '100%'
    }
  })
]);

export const BottomSection = styled.div({
  backgroundColor: '#FFFFFF',
  display: 'flex',
  flexDirection: 'row',
  padding: `${heightPixel(81)} ${widthPixel(80)} ${heightPixel(79)}`,
  alignItems: 'center',
  gap: widthPixel(54),
  justifyContent: 'space-between',
  '& img': {
    width: widthPixel(586),
    height: widthPixel(600),
    objectFit: 'cover',
    objectPosition: 'center'
  },
  ...mobileStyle({
    backgroundColor: '#EBF2FF',
    flexDirection: 'column-reverse',
    padding: `${mobileHeightPixel(40)} ${mobileWidthPixel(24)}`,
    alignItems: 'flex-start',
    textAlign: 'center',
    gap: mobileHeightPixel(40),
    '& img': {
      width: mobileWidthPixel(414),
      height: mobileWidthPixel(404),
      objectFit: 'cover',
      objectPosition: 'center'
    }
  })
});

export const FormWrapper = styled.div({
  width: '100%',
  height: heightPixel(1620),
  backgroundColor: 'rgba(51, 52, 58, 0.35)',
  // display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  paddingTop: heightPixel(160),
  display: 'none',
  flexDirection: 'row',
  ...mobileStyle({
    paddingTop: heightPixel(100)
  })
});

export const FormCard = styled.div({
  width: widthPixel(1000),
  height: heightPixel(640),
  borderRadius: widthPixel(16),
  backgroundColor: '#ffffff',
  flexDirection: 'row',
  display: 'flex',
  justifyContent: 'space-between',
  ...mobileStyle({
    flexDirection: 'column-reverse',
    width: mobileWidthPixel(382),
    height: mobileHeightPixel(800),
    borderRadius: mobileWidthPixel(8)
  })
});

export const FormContainer = styled.div({
  padding: `${heightPixel(40)} ${widthPixel(56)} ${heightPixel(66)}`
});

export const FormRight = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#FEE6ED',
  height: '100%',
  width: widthPixel(364),
  borderTopRightRadius: widthPixel(16),
  borderBottomRightRadius: widthPixel(16),
  ...mobileStyle({
    height: '50%'
  })
});

export const IconWrapper = styled.div([
  `
display: inline-flex;
padding: ${heightPixel(138)} ${widthPixel(64)};
flex-direction: column;
justify-content: center;
align-items: center;
gap: ${heightPixel(40)};`,
  {
    '& svg': {
      width: widthPixel(240),
      height: widthPixel(240)
    }
  },
  mobileStyle({
    '& svg': {
      width: widthPixel(160),
      height: widthPixel(160)
    }
  })
]);

export const CardText = styled(RaleText)({
  fontSize: fontSize(20),
  textAlign: 'center'
});

export const CardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="240"
    height="240"
    viewBox="0 0 240 240"
    fill="none"
  >
    <g filter="url(#filter0_b_569_35738)">
      <circle cx="120" cy="120" r="120" fill="#FF80A1" />
    </g>
    <path
      d="M188 88.3935V170.608C188 171.256 187.916 171.885 187.76 172.484C186.928 175.659 184.039 178.001 180.602 178.001H64.3982C60.9614 178.001 58.0722 175.659 57.2402 172.484C57.0836 171.885 57 171.256 57 170.608V88.3935C57 84.3106 60.3123 81.0008 64.3982 81.0008H180.602C184.688 81.0008 188 84.3106 188 88.3935Z"
      fill="white"
    />
    <path
      d="M187 172.001C186.171 175.454 183.294 178.001 179.871 178.001H64.1293C60.7062 178.001 57.8287 175.454 57 172.001H187Z"
      fill="#A3A3FD"
    />
    <path
      d="M61 82.8959V122.828C61 128.998 65.9442 133.999 72.0433 133.999H170.957C177.056 133.999 182 128.998 182 122.828V82.973C182 81.926 181.161 81.077 180.126 81.0762L62.8761 80.9992C61.8402 80.9986 61 81.8479 61 82.8959Z"
      fill="#A3A3FD"
    />
    <path
      d="M67 81.0009V122.223C67 125.414 69.5867 128.001 72.7773 128.001H172.223C175.413 128.001 178 125.414 178 122.223V81.0731L67 81.0009Z"
      fill="#6767F0"
    />
    <path
      d="M132.846 137H112.154C110.412 137 109 135.56 109 133.783V125.217C109 123.44 110.412 122 112.154 122H132.846C134.588 122 136 123.44 136 125.217V133.783C136 135.56 134.588 137 132.846 137Z"
      fill="#FFA300"
    />
    <path
      d="M167 80.9993V79.9675C167 77.2235 164.728 74.9993 161.924 74.9993H150.076C147.273 74.9993 145 77.2235 145 79.9675V80.7903L167 80.9993Z"
      fill="white"
    />
    <path
      d="M99 80.9991V79.9674C99 77.2234 96.7274 74.9991 93.924 74.9991H82.076C79.2726 74.9991 77 77.2234 77 79.9674V80.9991H99Z"
      fill="white"
    />
    <path
      d="M160 74V67.0757C160 63.1741 156.729 60 152.708 60H92.2922C88.2713 60 85 63.1741 85 67.0757V73.9221L91.4207 74V67.0757C91.4207 66.6094 91.8118 66.2301 92.2922 66.2301H152.708C153.188 66.2301 153.579 66.6094 153.579 67.0757V73.8442"
      fill="#FFA300"
    />
    <path
      d="M65 172.003H70"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M53 172.003H58"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62 175.003V180.003"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M62 163.002V168.002"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52 107.001V165.001"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M192 117.001V175.001"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M52 92.0018V102.002"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67 82.0013V123.245C67 126.424 69.5867 129.001 72.7773 129.001H172.223C175.413 129.001 178 126.424 178 123.245V82.4268"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M167 81.001V79.9693C167 77.2253 164.728 75.001 161.924 75.001H150.076C147.273 75.001 145 77.2253 145 79.9693V80.7921"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99 81.001V79.9693C99 77.2253 96.7274 75.001 93.924 75.001H82.076C79.2726 75.001 77 77.2253 77 79.9693V81.001"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M153 73.8414V66.8725C153 66.3924 152.61 66.0019 152.131 66.0019H91.8692C91.39 66.0019 91 66.3924 91 66.8725V74.0019"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M85 73.9237V67.0773C85 63.1758 88.2713 60.0016 92.2922 60.0016H152.708C156.729 60.0016 160 63.1758 160 67.0773V74.0016"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M132.846 137.002H112.154C110.412 137.002 109 135.562 109 133.785V125.219C109 123.442 110.412 122.002 112.154 122.002H132.846C134.588 122.002 136 123.442 136 125.219V133.785C136 135.562 134.588 137.002 132.846 137.002Z"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M173 92.0022V121.216C173 122.755 171.745 124.002 170.196 124.002H144"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M67 85.0015H177"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M108 172.003H77"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M192 100.002V103.002"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M192 109.002V112.002"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M198 106.003H195"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M189 106.003H186"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M187 115.002V170.281C187 173.993 183.975 177.002 180.244 177.002H70"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M57 162.001V87.7609C57 84.0275 60.0168 81.001 63.7382 81.001H180.262C183.983 81.001 187 84.0275 187 87.7609V95.114"
      stroke="#5D2F89"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <defs>
      <filter
        id="filter0_b_569_35738"
        x="-37.5"
        y="-37.5"
        width="315"
        height="315"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImageFix" stdDeviation="18.75" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_569_35738"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_569_35738"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
