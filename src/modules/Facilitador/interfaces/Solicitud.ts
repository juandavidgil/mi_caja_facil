interface FormularioSolicitud {
    beneficiario_id: number;
    monto_solicitado: number;
    moneda_id: number;
    ciudad_id: number;
    descripcion: string;
}

export interface Beneficiarios {
    id: number;
    nombreCompleto: string;
    tipoDomento: string;
    documento: string;
    correo: string;
}

export interface Ciudades {
    id: number;
    nombre: string;
    codigoDivipo: number;
}

export interface Monedas {
    id : number;
    nombre: string;
    codigo: string;
    trm: number;
}

