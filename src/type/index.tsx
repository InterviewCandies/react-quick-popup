export interface Theme {
  backgroundColor: String;
  color: String;
  secondaryColor: String;
  backdropColor: String;
  buttonTextColor: String;
  hoverColor: String;
}

export interface IObjectKeys {
  [key: string]: string | Theme;
}
