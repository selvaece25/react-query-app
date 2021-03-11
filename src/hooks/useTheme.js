import { useEffect, useState } from 'react';
import { setToLocalStorage, getFromLocalStorage } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
    const themesFromStore = getFromLocalStorage('all-themes');

    const localTheme = getFromLocalStorage('theme');
    const [theme, setTheme] = useState(localTheme || themesFromStore.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLocalStorage('theme', mode)
        setTheme(mode);
    };

    const getFonts = () => {
        const allFonts = _.values(_.mapValues(themesFromStore.data, 'font'));
        return allFonts;
    }

    useEffect(() => {
        localTheme ? setTheme(localTheme) : setTheme(themesFromStore.data.light);
        setThemeLoaded(true);
    }, [localTheme, themesFromStore.data.light]);
    
    return { theme, themeLoaded, setMode, getFonts, themesFromStore };
};
