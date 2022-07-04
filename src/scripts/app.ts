import { AppController } from './controller';
import { AppView, IData, ISource } from './appView';

export class App {
  controller: AppController;

  view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    document
      .querySelector('.sources')!
      .addEventListener('click', (e: Event) => this.controller
        .getNews(e, (data: IData<string> | undefined) => this.view.drawNews(data as IData<string>)));
    this.controller.getSources((data: ISource<string> | undefined) => this.view.drawSources(data as ISource<string>));
  }
}
