export interface ISourceData<T> {
  category: T;
  country: T;
  description: T;
  id: T;
  language: T;
  name: T;
  url: T;
}

export class Sources {
  // eslint-disable-next-line class-methods-use-this
  draw(data: ISourceData<string>[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    data.forEach((item) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
      if (!(sourceClone instanceof DocumentFragment)) {
        throw new Error('Something has gone very, very wrong.');
      } else {
        (sourceClone.querySelector('.source__item-name') as HTMLElement).textContent = item.name;
        sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
      }
      fragment.append(sourceClone);
    });

    document.querySelector('.sources')?.append(fragment);
  }
}
