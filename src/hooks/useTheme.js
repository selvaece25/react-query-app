import { useEffect, useState } from 'react';
import { setToLocalStorage, getFromLocalStorage } from '../utils/storage';

export const useTheme = () => {
    const themes = getFromLocalStorage('all-themes');
    const defaultTheme =  themes.data.light;
    const [theme, setTheme] = useState(getFromLocalStorage('theme') || defaultTheme);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLocalStorage('theme', mode)
        setTheme(mode);
    };

    useEffect(() => {
        const localTheme = getFromLocalStorage('theme');
        localTheme ? setTheme(localTheme) : setTheme(defaultTheme);
        setThemeLoaded(true);
    }, [defaultTheme]);
    
    return { theme, themeLoaded, setMode, themes };
};