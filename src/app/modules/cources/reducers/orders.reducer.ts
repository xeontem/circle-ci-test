import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export type Order = 'id' | 'title' | 'duration' | 'date' | 'description' | 'created' | 'topRated'

export interface State extends EntityState<Order> {
  //  entities: Array<Cource>
  //  ids: Array<string>
}

export const adapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  // selectId: (book: Book) => book.id,
  sortComparer: false,
});

const initialState: State = adapter.getInitialState({
  entities: ['id', 'title', 'duration', 'date', 'description', 'created', 'topRated']
  //  ids: Array<string>
});

export function reducer(state: State = initialState, action: any): State {
  switch (action.type) {
    default: return state;
  }
}
