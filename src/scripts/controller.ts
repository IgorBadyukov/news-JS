import { AppLoader } from './appLoader';

import { IData, ISource } from './appView';

import { IEndpoint } from './loader';

export class AppController extends AppLoader {
  getSources(callback: (data?: ISource) => void) {
    super.getResp(
      {
        endpoint: 'sources',
      },
      // eslint-disable-next-line @typescript-eslint/comma-dangle
      callback
    );
  }

  getNews(e: Event, callback: (data?: IData) => void) {
    let target = e.target as HTMLElement;
    const newsContainer = e.currentTarget as HTMLElement;
    while (target !== newsContainer) {
      if (target.classList.contains('source__item')) {
        const sourceId = target.getAttribute('data-source-id') as string;
        if (newsContainer.getAttribute('data-source') !== sourceId) {
          newsContainer.setAttribute('data-source', sourceId);
          super.getResp(
            {
              endpoint: 'everything',
              options: {
                sources: sourceId,
              },
            } as IEndpoint,
            // eslint-disable-next-line @typescript-eslint/comma-dangle
            callback
          );
        }
        return;
      }
      target = target.parentNode as HTMLElement;
    }
  }
}
