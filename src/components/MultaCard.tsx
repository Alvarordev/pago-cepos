import { updateMulta } from "../services/multaApi";
import { toast } from "sonner";

interface Props {
  multa: Multa;
}

const MultaCard = ({ multa }: Props) => {
  if (!multa) return null;

  const updatedMulta = {
    iCodMulta: +multa.iCodMulta,
    iCodEmpresa: +multa.iCodEmpresa,
    iCodTipoCepo: +multa.iCodTipoCepo,
    gCoordenadasXMulta: +multa.gCoordenadasXMulta,
    gCoordenadasYMulta: +multa.gCoordenadasYMulta,
    vDireccionMulta: multa.vDireccionMulta,
    vConceptoMulta: multa.vConceptoMulta,
    vTarjetaPropiedad: multa.vTarjetaPropiedad,
    vLicenciaConducir: multa.vLicenciaConducir,
    vPlacaAuto: multa.vPlacaAuto,
    vMarcaAuto: multa.vMarcaAuto,
    vModeloAuto: multa.vModeloAuto,
    vColorAuto: multa.vColorAuto,
    iNumeroLlantas: +multa.iNumeroLlantas,
    vCodigoPreliquidacion: multa.vCodigoPreliquidacion,
    dFechaPago: new Date().toISOString(),
    iCodUsuarioBloqueo: +multa.iCodUsuarioBloqueo,
    dtFechaBloqueo: multa.dtFechaBloqueo,
    iCodUsuarioDesbloqueo:
      multa.iCodUsuarioDesbloqueo && +multa.iCodUsuarioDesbloqueo,
    dtFechaDesbloqueo: multa.dtFechaDesbloqueo,
    bEstadoRegistro: multa.bEstadoRegistro,
    iCodigoUsuarioModificacion: +multa.iCodUsuarioBloqueo,
  };

  const handleClick = async () => {
    if (!localStorage) return;

    const { data, error } = await updateMulta({
      multa: updatedMulta,
      access_token: localStorage.getItem("access-token"),
    });

    if (data) {
      toast.success("Se realizo el pago correctamente");
    } else {
      toast.error("Hubo un error al procesar el pago");
      console.log(error);
    }
  };

  return (
    <article className="border border-border w-full rounded-md p-2">
      <h2 className="text-center font-semibold">Monto a pagar</h2>
      <div className="flex justify-center py-2">
        <span className="text-xl">S/. {multa.tipocepo?.vCostoCepo}</span>
      </div>

      <button
        onClick={handleClick}
        className="h-9 px-4 py-2 w-full bg-primary text-primary-foreground shadow hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium transition-colors cursor-pointer "
      >
        Pagar
      </button>
    </article>
  );
};

export default MultaCard;
