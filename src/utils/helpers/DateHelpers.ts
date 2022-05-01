export default class DateHelpers {
  private static readonly MESES: string[] = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  public static getDateFromString(date: string): Date {
    const dateParts: string[] = date.split("-");
    const year: number = parseInt(dateParts[0], 10);
    const month: number = parseInt(dateParts[1], 10) - 1;
    const day: number = parseInt(dateParts[2], 10);
    return new Date(year, month, day);
  }

  public static getCurrentDateString(): string {
    const date: Date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  public static getCurrentDateStringLarge(): string {
    const date: Date = new Date();

    return (
      date.getDate() +
      " de " +
      DateHelpers.MESES[date.getMonth()] +
      " del " +
      date.getFullYear()
    );
  }
}
