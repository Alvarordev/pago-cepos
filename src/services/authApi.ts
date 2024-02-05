import { API } from "../utils/api";

export interface AuthData {
  vCodigoEmpresa: string
  vAliasUsuario: string;
  vClaveUsuario: string;
}

interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

interface LoginResult {
  error: unknown;
  data: LoginResponse | null;
}

export const logIn = async (authData: AuthData): Promise<LoginResult> => {
    try {
      const res = await API.post("/auth/login", authData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      return { error: null, data: res.data };
    } catch (err: unknown) {
      return {error: err, data: null}
    }
  };