declare module '*.scss';
declare module '*.webp';
declare module '*.scss';
declare module '*.png';
declare module '*.svg';
declare module '*.jpg';
declare module '*.mp4';
declare module '@mui/material/styles' {
    export interface Theme {
        status: {
            danger: string;
        };
    }
    // allow configuration using `createTheme`
    export interface ThemeOptions {
        status?: {
            danger?: string;
        };
    }
}

declare function useLocation(): Location;

interface Location extends Path {
    state: unknown;
    key: Key;
}