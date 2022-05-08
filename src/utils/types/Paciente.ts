export type TPaciente = {
  data: {
    curp: string;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    telefono: string;
    direccion: {
      calle: string;
      mzoni: string;
      ltone: string;
      colonia: string;
      municipio: string;
      estado: string;
      codigoPostal: string;
    };
  };
  historial: THitorialClinico | null;
};

export type THitorialClinico = {
  diagnostico: TDiagnostico[] | null;
};

export type TSignosVitales = {
  temperatura: number | null;
  peso: number | null;
  talla: number | null;
  tensionArterial: {
    sistolica: number | null;
    diastolica: number | null;
  } | null;
  frecuenciaCardiaca: number | null;
  frecuenciaRespiratoria: number | null;
  saturacionOxigeno: number | null;
};

type TDiagnostico = {
  fechaDiagnostico: string;
  signosVitales: TSignosVitales | null;
  medico: {
    numeroCedula: string | null;
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
  };
  diagnosticoEnfermedad: string;
  tratamiento: TTratamiento[] | TTratamiento;
  indicacionesGenerales: string;
};

type TTratamiento = {
  medicamento: string;
  dosis: string;
  frecuencia: string;
  duracion: string;
  observaciones: string;
};
