
class Utils {

  public isValidEmail(str: string): boolean {
    return str && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(str);
  }

  public isValidUSZipCode(str: string): boolean {
    return str && /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(str);
  }
}
