import { useEffect, useState } from "react";
import { logIn } from "../services/authApi";
import { getAllMultas } from "../services/multaApi";

const authData = {
  vAliasUsuario: "usuario1",
  vClaveUsuario: "usuario1",
};

const useMulta = () => {
  const [token, setToken] = useState<string | null>();
  const [multas, setMultas] = useState<Multa[] | null>();

  useEffect(() => {
    const initializeAuth = async () => {
      const { data } = await logIn(authData);

      setToken(data?.access_token);
    };

    initializeAuth();
  }, []);

  useEffect(() => {
    if (!token) return;

    const fetchMultas = async () => {
      try {
        const { data, error } = await getAllMultas(token);

        if (error) throw Error;

        console.log(data)
        setMultas(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchMultas();
  }, [token]);

  return { multas };
};

export default useMulta;
