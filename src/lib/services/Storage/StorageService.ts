const storageKey = 'sevengal-base';

export class StorageService {
  private driver: Storage;

  private readonly key: string;

  public constructor(driver: Storage) {
    this.driver = driver;
    this.key = storageKey;
  }

  public getItem<T = string>(key: string, parsed = false): T | null {
    const data = this.driver.getItem(`${this.key}_${key}`);

    if (data && parsed) {
      try {
        return JSON.parse(data);
      } catch (_) {
        return null;
      }
    }

    return data as T;
  }

  public setItem(key: string, data: unknown): StorageService {
    this.driver.setItem(`${this.key}_${key}`, JSON.stringify(data));

    return this;
  }

  public removeItem(...keys: string[]): void {
    keys.forEach((key) => {
      this.driver.removeItem(`${this.key}_${key}`);
    });
  }

  public static sessionOrLocal(key: string): StorageService | undefined {
    if (localStorage.getItem(`${storageKey}_${key}`)) {
      return new StorageService(localStorage);
    }

    if (sessionStorage.getItem(`${storageKey}_${key}`)) {
      return new StorageService(sessionStorage);
    }

    return undefined;
  }
}
