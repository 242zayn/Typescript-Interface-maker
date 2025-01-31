export interface ThemeButtonType {
  content: string;
  bg_dark: string;
  bg_light: string;
  text_dark: string;
  text_light: string;
  AceternityLogos: boolean;
  herf?: string;
  onclick?: () => void;
}
export interface InterfacePropsType {
  value: string;
  onValueChange: (value: string) => void;
}
export interface CodeBlockDemoProps {
  code: string;
}

export interface JobDataType {
  jobTitle: string;
  companyName: string;
  hrEmail: string;
  hrMobile: string;
  currentStatus: string;
  description: string;
}
