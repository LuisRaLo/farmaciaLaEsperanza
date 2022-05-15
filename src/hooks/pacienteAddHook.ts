import { addPaciente } from "../services/firebase";
import DateHelpers from "../utils/helpers/DateHelpers";
import { StringsHelper } from "../utils/helpers/StringsHelper";
import { IRecetaPaciente } from "../utils/interfaces/IRecetaPaciente";
import { THitorialClinico, TPaciente } from "../utils/types/Paciente";

const pacienteAddHook = async (paciente: any): Promise<void> => {
  const userId = StringsHelper.uniqueId();

  const historialClinico: THitorialClinico = {
    diagnostico: [
      {
        fechaDiagnostico: DateHelpers.getCurrentDateString(),
        signosVitales: {
          temperatura: Number(paciente.temperatura),
          peso: Number(paciente.peso),
          talla: Number(paciente.talla),
          tensionArterial: {
            sistolica: Number(paciente.ta.split("/")[0]),
            diastolica: Number(paciente.ta.split("/")[1]),
          },
          frecuenciaCardiaca: Number(paciente.fc),
          frecuenciaRespiratoria: Number(paciente.fr),
          saturacionOxigeno: Number(paciente.so2),
        },
        medico: {
          numeroCedula: "En proceso",
          nombre: "Diana",
          apellidoPaterno: "Cruz",
          apellidoMaterno: "",
        },
        diagnosticoEnfermedad: "",
        tratamiento: [
          {
            medicamento: "",
            dosis: "",
            frecuencia: "",
            duracion: "",
            observaciones: paciente.tratamientos[0],
          },
        ],
        indicacionesGenerales: paciente.recomendaciones,
      },
    ],
  };

  const pacienteToAdd: TPaciente = {
    data: {
      curp: "",
      nombre: paciente.nombre,
      apellidoPaterno: "",
      apellidoMaterno: "",
      telefono: paciente.telefono,
      direccion: {
        calle: paciente.direccion,
        mzoni: "",
        ltone: "",
        colonia: "",
        municipio: "",
        estado: "",
        codigoPostal: "",
      },
    },
    historial: historialClinico,
  };
  await addPaciente(userId, pacienteToAdd);
};

export default pacienteAddHook;
