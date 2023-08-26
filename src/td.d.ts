export interface AppTheme {
    name: string
}
  
export type ThemeFunction = () => AppTheme;
  
export declare const createTheme: ThemeFunction;

var theme = createTheme();
theme.name = 'NoActionBar';