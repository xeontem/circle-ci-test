import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export type Order = 'id' | 'title' | 'duration' | 'date' | 'description' | 'created' | 'topRated';

export interface OrdersState extends EntityState<Order> {
  //  entities: Array<Cource>
  //  ids: Array<string>
}

export const OrdersAdapter: EntityAdapter<Order> = createEntityAdapter<Order>({
  // selectId: (book: Book) => book.id,
  sortComparer: false,
});

const initialState: OrdersState = OrdersAdapter.getInitialState({
  entities: ['id', 'title', 'duration', 'date', 'description', 'created', 'topRated']
  //  ids: Array<string>
});

export function OrdersReducer(state: OrdersState = initialState, action: any): OrdersState {
  switch (action.type) {
    default: return state;
  }
}
