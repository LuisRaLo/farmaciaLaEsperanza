import { StringsHelper } from "../utils/helpers/StringsHelper";

export function validationForm(data: any) {
  const errors: Array<string> = [];

  for (const key in data) {
    const element = data[key];

    if (key === "curp") {
      if (!StringsHelper.isCurp(element)) {
        errors.push("El CURP no es válido");
      }
    }
  }
  return errors;
}
