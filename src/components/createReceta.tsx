import jsPDF from "jspdf";
import { IRecetaPaciente } from "../utils/interfaces/IRecetaPaciente";

type Props = {
  receta: IRecetaPaciente;
};

const createReceta = (props: Props) => {
  const { receta } = props;
  const doc = new jsPDF({
    orientation: "p",
    unit: "mm",
    format: "letter",
  });

  const arraytoPrint = (tratamientos: Array<string>) => {
    let tratamientoString: string = "";
    tratamientos.forEach((tratamiento: string, index: number) => {
      tratamientoString += `${index + 1}. ${tratamiento} \n`;
    });
    return tratamientoString;
  };

  const arraytoPrintPerComa = (tratamientos: Array<string>) => {
    let tratamientoString: string = "";
    tratamientos.forEach((tratamiento: string, index: number) => {
      if (index > 0) {
        tratamientoString += ", " + tratamiento;
      } else {
        tratamientoString += tratamiento;
      }
    });
    return tratamientoString;
  };

  doc.addImage("images/backgroundReceta.jpg", "JPG", 0, 5, 216, 148.5);

  doc.setFontSize(12);
  doc.setFont("arial");
  doc.text(receta.direccion, 37, 44, { align: "left" });

  doc.setFontSize(10);
  doc.setFont("arial");
  doc.text(receta.fecha, 183, 34, { align: "left" });

  doc.setFontSize(12);
  doc.setFont("arial");
  doc.text(receta.nombre, 31, 39, { align: "left" });
  doc.text(receta.edad.toString() + " años", 135, 39, { align: "left" });
  doc.text(receta.telefono, 175, 39, { align: "left" });

  doc.text(receta.peso, 23.5, 59.8, { align: "left" });
  doc.text(receta.talla, 24, 66.5, { align: "left" });
  doc.text(receta.temperatura + "°", 15.5, 73, { align: "left" });
  doc.text(receta.ta, 18, 78.7, { align: "left" });
  doc.text(receta.fc, 18, 84.6, { align: "left" });
  doc.text(receta.fr, 19, 91.5, { align: "left" });
  doc.text(receta.so2, 22, 98, { align: "left" });
  doc.text(arraytoPrintPerComa(receta.medicamentos), 87, 49, {
    align: "left",
  });
  doc.text(arraytoPrint(receta.tratamientos), 35, 70, { align: "left" });
  doc.text(receta.recomendaciones, 13, 125, { align: "left" });


  doc.save(`${receta.nombre}_receta.pdf`);
};

export default createReceta;
