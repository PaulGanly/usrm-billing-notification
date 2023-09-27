
class Utils {

  public isValidEmail(str: string): boolean {
    return str && str.includes('@libertymutual.com');
  }

  public isValidUSZipCode(str: string): boolean {
    return str && str.length == 5 && !isNaN(str);
  }
}
