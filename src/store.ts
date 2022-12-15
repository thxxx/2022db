import create from "zustand";

type SelectContentState = {
  //ts를 사용하기때문에 타입지정이 필요.js사용시 미사용 코드
  isLogin: boolean;
  host: string;
  port: string;
  database: string;
  toggleIsLogin: (isLogin: boolean) => void;
  setHost: (host: string) => void;
  setPort: (port: string) => void;
  setDatabase: (database: string) => void;
};

// store hook 생성
export const useDbStore = create<SelectContentState>((set) => ({
  isLogin: false, //state
  host: "",
  port: "",
  database: "",
  toggleIsLogin: () =>
    set((state: any) => ({ ...state, isLogin: !state.isLogin })),
  setHost: (host) => set((state: any) => ({ ...state, host: host })),
  setPort: (port) => set((state: any) => ({ ...state, port: port })),
  setDatabase: (database) =>
    set((state: any) => ({ ...state, database: database })),
}));
