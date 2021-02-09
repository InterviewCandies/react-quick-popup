export interface Theme {
  backgroundColor: String;
  color: String;
  backdropColor: String;
  buttonTextColor: String;
  hoverColor: String;
}

export interface IObjectKeys {
  [key: string]: string | Theme;
}

export interface PopupSettings {
  backdropColor?: string;
  paper?: Object;
  okButton?: Object;
  cancelButton?: Object;
}

export interface PopupProps {
  children: React.ReactChild;
  open: Boolean;
  theme?: "light" | "dark";
  showCloseIcon?: Object;
  disableBackdropClick?: Boolean;
  onClose: Function;
  onOK?: Function;
  onCancel?: Function;
  settings?: PopupSettings;
}
