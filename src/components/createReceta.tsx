import jsPDF from "jspdf";
import pacienteAddHook from "../hooks/pacienteAddHook";
import { IRecetaPaciente } from "../utils/interfaces/IRecetaPaciente";
import { ITratamiento } from "../utils/interfaces/Paciente/ITratamiento";

type Props = {
  receta: IRecetaPaciente;
};

const createReceta = (props: Props) => {
  const { receta } = props;

  //pacienteAddHook(receta);

  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "letter",
  });

  const arrayAlergiastoPrint = (medicamentosAlergia: Array<string>) => {
    let alergias = "";
    medicamentosAlergia.forEach((medicamento) => {
      alergias += `${medicamento}, `;
    });
    return alergias;
  };

  const arrayTratamientostoPrint = (tratamientos: ITratamiento[]) => {
    let tratamientoString: string = "";

    tratamientos.forEach((tratamiento: ITratamiento, index: number) => {
      tratamientoString += `${index + 1}. ${tratamiento.medicamento} ${
        tratamiento.dosis
      } ${tratamiento.frecuencia} ${tratamiento.duracion} ${tratamiento.observaciones} \n`;
    });
    return tratamientoString;
  };

  doc.addImage(
    "/../../assets/images/backgroundReceta.jpg",
    "JPG",
    0,
    5,
    216,
    148.5
  );

  doc.setFontSize(12);
  doc.setFont("arial");
  doc.text(
    receta.direccion.calle +
      ", " +
      receta.direccion.MzoNi +
      " " +
      receta.direccion.LtoNe +
      ", " +
      receta.direccion.codigoPostal +
      ", " +
      receta.direccion.municipio +
      ", " +
      receta.direccion.estado,
    37,
    44,
    { align: "left" }
  );

  doc.setFontSize(10);
  doc.setFont("arial");
  doc.text(receta.fecha, 183, 34, { align: "left" });

  doc.setFontSize(12);
  doc.setFont("arial");
  doc.text(
    receta.nombre + " " + receta.apellidoPaterno + " " + receta.apellidoMaterno,
    31,
    39,
    { align: "left" }
  );
  doc.text(receta.edad.toString() + " años", 135, 39, { align: "left" });
  doc.text(receta.telefono, 175, 39, { align: "left" });

  doc.text(receta.peso, 23.5, 59.8, { align: "left" });
  doc.text(receta.talla, 24, 66.5, { align: "left" });
  doc.text(receta.temperatura + "°", 15.5, 73, { align: "left" });
  doc.text(receta.ta, 18, 78.7, { align: "left" });
  doc.text(receta.fc, 18, 84.6, { align: "left" });
  doc.text(receta.fr, 19, 91.5, { align: "left" });
  doc.text(receta.so2, 22, 98, { align: "left" });
  doc.text(arrayAlergiastoPrint(receta.medicamentosAlergia), 87, 49, {
    align: "left",
  });
  doc.text(arrayTratamientostoPrint(receta.tratamientos), 35, 70, {
    align: "left",
  });
  doc.text(receta.recomendaciones, 13, 125, { align: "left" });

  doc.save(`${receta.nombre}_receta.pdf`);
};

export default createReceta;
