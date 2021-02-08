export interface Theme {
  backgroundColor: String;
  color: String;
  secondaryColor: String;
}

export interface IObjectKeys {
  [key: string]: string | Theme;
}
