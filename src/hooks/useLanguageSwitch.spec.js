import { renderHook, act } from "@testing-library/react-hooks";

import useLanguageSwitch from './useLanguageSwitch';
describe('Test useLanguageSwitch', () => {
  
     it("initial data state is loading and data empty", () => {
      const { currentLang } = renderHook(() => useLanguageSwitch("en"));
  
      expect(currentLang).toStrictEqual('en');
    });
})