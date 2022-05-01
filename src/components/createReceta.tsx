import jsPDF from "jspdf";
import { IRecetaPaciente } from "../utils/interfaces/IRecetaPaciente";
import backgroundRecetaComponent from "./backgroundReceta";

type Props = {
  receta: IRecetaPaciente;
};

const createReceta = (props: Props) => {
  const { receta } = props;
  const doc = new jsPDF();

  const arraytoPrint = (tratamientos: Array<string>) => {
    let tratamientoString: string = "";
    tratamientos.forEach((tratamiento: string) => {
      tratamientoString += tratamiento + "\n";
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

  doc.addImage("images/backgroundReceta.jpg", "JPG", 0, 0, 210, 148.5);

  doc.setFontSize(8);
  doc.setFont("arial");
  doc.text(receta.direccion, 27, 39, { align: "left" });

  doc.setFontSize(10);
  doc.setFont("arial");
  doc.text(receta.fecha, 172, 29, { align: "left" });

  doc.setFontSize(12);
  doc.setFont("arial");
  doc.text(arraytoPrintPerComa(receta.medicamentos), 153, 39, {
    align: "left",
  });

  doc.setFontSize(14);
  doc.setFont("arial");
  doc.text(arraytoPrint(receta.tratamientos), 30, 57, { align: "left" });

  doc.setFontSize(12);
  doc.setFont("arial", "bold");
  doc.text(receta.nombre, 23.5, 34, { align: "left" });
  doc.text(receta.edad.toString() + " años", 115, 34, { align: "left" });
  doc.text(receta.telefono, 147, 34, { align: "left" });

  doc.text(receta.peso, 16, 50, { align: "left" });
  doc.text(receta.talla, 16, 55, { align: "left" });
  doc.text(receta.temperatura, 13, 60, { align: "left" });
  doc.text(receta.ta, 15, 65, { align: "left" });
  doc.text(receta.fc, 15, 70, { align: "left" });
  doc.text(receta.fr, 15, 75, { align: "left" });
  doc.text(receta.so2, 17, 80, { align: "left" });

  doc.save(`${receta.nombre}_receta.pdf`);
};

export default createReceta;
