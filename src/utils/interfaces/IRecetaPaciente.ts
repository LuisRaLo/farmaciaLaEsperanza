import { ITratamiento } from "./Paciente/ITratamiento";

export interface IRecetaPaciente {
  nombre: string;
  apellidoPaterno: "",
  apellidoMaterno: "",
  telefono: string;
  direccion: {
    calle: "",
    MzoNi: "",
    LtoNe: "",
    colonia: "",
    codigoPostal: "",
    municipio: "",
    estado: "",
  },
  medicamentosAlergia: Array<string>;
  edad: number;
  peso: string;
  talla: string;
  temperatura: string;
  ta: string;
  fc: string;
  fr: string;
  so2: string;
  tratamientos: Array<ITratamiento>;
  fecha: string;
  recomendaciones: string;
}
