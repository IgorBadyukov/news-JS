import { News, INewsData } from './news';
import { Sources, ISourceData } from './sources';

export interface IData {
  status: string;
  totalResults: number;
  articles: [INewsData];
}
export interface ISource {
  status: string;
  sources: [ISourceData<string>];
}

export class AppView {
  news: News;

  sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: IData) {
    const values = data.articles;
    this.news.draw(values);
  }

  drawSources(data: ISource) {
    const values = data.sources;
    this.sources.draw(values);
  }
}
