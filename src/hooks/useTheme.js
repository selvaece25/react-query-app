import { useEffect, useState } from 'react';
import { setToLocalStorage, getFromLocalStorage } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
    const themes = getFromLocalStorage('all-themes');
    const [theme, setTheme] = useState(getFromLocalStorage('theme') || themes.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLocalStorage('theme', mode)
        setTheme(mode);
    };

    useEffect(() => {
        const localTheme = getFromLocalStorage('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
        setThemeLoaded(true);
    }, []);
    
    return { theme, themeLoaded, setMode, themes };
};