export class StringsHelper {
  public static uniqueId(): string {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  public static isCurp(curp: string): boolean {
    const regex = /^([A-Z]{4})([0-9]{6})([A-Z]{6})([A-Z0-9]{2})$/;
    return regex.test(curp);
  }
}
