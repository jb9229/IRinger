import { DefaultTheme } from 'styled-components/native';

export interface DefaultStyledProps {
  theme: DefaultTheme;
}

export const colors = {
  tomato: 'rgb(229,33,33)',

  whiteGray: '#f7f6f3',
  dusk: 'rgb(65,77,107)',
  dodgerBlue: 'rgb(58,139,255)',
  whiteBlue: 'rgb(230, 240, 255)',
  skyBlue: 'rgb(100,199,255)',
  mellowBlue: '#80b8f0',
  green: 'rgb(29,211,168)',
  greenBlue: 'rgb(36,205,151)',
  greenishCyan: '#50e3c2',
  mediumGray: 'rgb(134,154,183)',
  paleGray: 'rgb(221,226,236)',
  lightBackground: '#ffffff',
  lightBackgroundLight: '#f7f6f3',
  darkBackground: '#323739',
  darkBackgroundLight: '#393241',
  cloudyBlue: 'rgb(175,194,219)',
  lightSalmon: '#f5aeae',
  google: 'rgb(224,66,56)',
  facebook: 'rgb(52,89,151)'
};

export const koFont = {
  FontTalkTitle: 'nanum-pen',
  FontTitle: 'nanumbarun-gothic-b',
  FontMiddleTitle: 'nanumbarun-gothic',
  FontBatang: 'nanumsquare-roundR',
  FontButton: 'nanumbarun-gothic'
};

// export const enFont = {
//   FontTalkTitle: 'nanum-pen',
//   FontTitle: 'nanum-barun-gothic',
//   FontMiddleTitle: 'nanum-barun-gothic',
//   FontBatang: 'nanum-square-roundR',
//   FontButton: 'nanum-barun-gothic'
// };

export const light = {
  primary: colors.dodgerBlue,
  primaryLight: 'rgb(204, 224, 255)',
  disabled: colors.mediumGray,
  error: colors.tomato,

  // BG
  backgroundGray: 'rgb(245, 245, 245)',
  backgroundListSeperator: 'rgb(128, 128, 128)',

  // TEXT
  textListLabel: 'rgb(169, 169, 169)',

  background: colors.lightBackground,
  backgroundDark: colors.dodgerBlue,
  btnPrimary: colors.dodgerBlue,
  btnPrimaryFont: 'white',
  btnPrimaryLight: 'white',
  btnPrimaryLightFont: colors.dodgerBlue,
  textDisabled: '#969696',
  btnDisabled: 'rgb(224,224,224)',
  fontColor: 'black',
  fontSubColor: colors.dusk,
  labelColor: colors.mediumGray,
  tintColor: colors.dodgerBlue,
  lineColor: colors.paleGray,
  indicatorColor: colors.dodgerBlue,
  inactiveColor: '#a3a3a3',
  searchBackground: 'rgb(247,248,251)',
  status: colors.greenishCyan,
  placeholder: colors.cloudyBlue,
  focused: colors.dodgerBlue,
  placeholderFocused: colors.mellowBlue
};

export type Theme = typeof light;

export const dark = {
  primary: '#1F2324',
  primaryLight: 'rgb(204, 224, 255)',
  disabled: colors.mediumGray,
  error: colors.tomato,

  // BG
  backgroundGray: 'rgb(245, 245, 245)',
  backgroundListSeperator: 'rgb(128, 128, 128)',

  // TEXT
  textListLabel: 'rgb(169, 169, 169)',

  background: colors.darkBackground,
  backgroundDark: '#262A2C',
  btnPrimary: '#262A2C',
  btnPrimaryFont: 'white',
  btnPrimaryLight: '#696969',
  btnPrimaryLightFont: '#262A2C',
  textDisabled: '#969696',
  btnDisabled: 'rgb(224,224,224)',
  fontColor: 'white',
  fontSubColor: colors.paleGray,
  labelColor: colors.mediumGray,
  tintColor: '#a3a3a3',
  lineColor: '#515557',
  indicatorColor: 'white',
  inactiveColor: colors.paleGray,
  searchBackground: '#243447',
  status: colors.greenishCyan,
  placeholder: colors.cloudyBlue,
  focused: 'lightcoral',
  placeholderFocused: colors.lightSalmon
};
