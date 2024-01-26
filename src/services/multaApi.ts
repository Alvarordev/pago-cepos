import { API } from "../utils/api";

interface GetAllProps {
  error: unknown;
  data?: Multa[] | null;
}

export const getAllMultas = async (access_token: string): Promise<GetAllProps> => {
  try {
    const res = await API.get("/multa", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${access_token}`
      },
    });

    return { error: null, data: res.data };
  } catch (err: unknown) {
    return { error: err, data: null };
  }
};

export const updateMulta = async (
  multa: Multa
): Promise<{ data: Multa | null; error: unknown }> => {
  try {
    const { iCodMulta, ...multaBody } = multa;

    const res = await API.patch(`/multa/${iCodMulta}`, multaBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { error: null, data: res.data };
  } catch (err) {
    return { error: err, data: null };
  }
};