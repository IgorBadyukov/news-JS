import { News, INewsData } from './news';
import { Sources, ISourceData } from './sources';

export interface IData<T> {
  status: T;
  totalResults: number;
  articles: [INewsData<T>];
}
export interface ISource<T> {
  status: T;
  sources: [ISourceData<T>];
}

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData<string>) {
    const values = data.articles;
    this.news.draw(values);
  }

  drawSources(data: ISource<string>) {
    const values = data.sources;
    this.sources.draw(values);
  }
}
