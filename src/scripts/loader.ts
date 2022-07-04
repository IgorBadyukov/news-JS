import { IData, ISource } from './appView';

export interface IEndpoint {
  endpoint: string;
  options?: {
    [key: string]: string;
  };
}

type Data<T> = IData<T> | ISource<T>;

export type Option = {
  [key: string]: string;
};

export class Loader {
  baseLink: string;

  options: Option;

  constructor(baseLink: string, options: Option) {
    this.baseLink = baseLink;
    this.options = options;
  }

  getResp(
    { endpoint, options = {} }: IEndpoint,
    callback = () => {
      // eslint-disable-next-line no-console
      console.error('No callback for GET response');
    },
  ) {
    this.load('GET', endpoint, callback, options);
  }

  // eslint-disable-next-line class-methods-use-this
  errorHandler(res: Response) {
    if (!res.ok) {
      if (res.status === 401 || res.status === 404) throw Error(res.statusText);
    }

    return res;
  }

  makeUrl(options: Option, endpoint: string): string {
    const urlOptions = { ...this.options, ...options };
    let url = `${this.baseLink}${endpoint}?`;

    Object.keys(urlOptions).forEach((key) => {
      url += `${key}=${urlOptions[key]}&`;
    });

    return url.slice(0, -1);
  }

  load(method: string, endpoint: string, callback: (data?: IData<string>) => void, options: Option = {}) {
    fetch(this.makeUrl(options, endpoint), { method })
      .then(this.errorHandler)
      .then((res) => res.json())
      .then((data: Data<string>) => callback(data as IData<string>))
      // eslint-disable-next-line no-console
      .catch((err: Error) => console.error(err));
  }
}
