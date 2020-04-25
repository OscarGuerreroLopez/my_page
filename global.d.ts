export {};

declare global {
  interface IObjectLiteral {
    [key: string]: string;
  }
}
