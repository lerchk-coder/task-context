import { ReactElement, createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider(props: { theme: Theme; children: ReactElement }) {
    return (
        <ThemeContext.Provider value={props.theme}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): Theme {
    const theme = useContext(ThemeContext);
    if (theme === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return theme;
}
