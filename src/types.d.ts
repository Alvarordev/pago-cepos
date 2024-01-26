interface Multa {
    iCodMulta: number
    iCodEmpresa: number
    iCodTipoCepo: number
    gCoordenadasXMulta: number
    gCoordenadasYMulta: number
    vDireccionMulta: string
    vConceptoMulta: string
    vTarjetaPropiedad: string
    vLicenciaConducir: string
    vPlacaAuto: string
    vMarcaAuto: string
    vModeloAuto: string
    vColorAuto: string
    iNumeroLlantas: number
    vCodigoPreliquidacion: string
    dFechaPago?: Date | string | null
    iCodUsuarioBloqueo?: number | null
    dtFechaBloqueo: Date | string 
    iCodUsuarioDesbloqueo?: number | null
    dtFechaDesbloqueo?: Date | null
    bEstadoRegistro: boolean
    iCodigoUsuarioCreacion: number
    dtFechaCreacion: Date | string 
    iCodigoUsuarioModificacion?: number | null
    dtFechaModificacion?: Date | null
    empresa: Empresa
    tipocepo: Tipocepo
    usuariobloqueo?: Usuario | null
    usuariodesbloqueo?: Usuario | null
  }