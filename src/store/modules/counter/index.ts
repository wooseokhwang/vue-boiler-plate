import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from 'vuex-module-decorators';

import rootStore from '@/store';

@Module({ dynamic: true, store: rootStore, namespaced: true, name: 'counter' })
export default class Counter extends VuexModule {
  private _count = 0;

  get count() {
    return this._count;
  }

  @Mutation
  increment(delta: number) {
    this._count += delta;
  }
  @Mutation
  decrement(delta: number) {
    this._count -= delta;
  }

  // action 'incr' commits mutation 'increment' when done with return value as payload
  @Action({ commit: 'increment' })
  incr() {
    return 5;
  }
  // action 'decr' commits mutation 'decrement' when done with return value as payload
  @Action({ commit: 'decrement' })
  decr() {
    return 5;
  }
  @Action({ commit: 'increment' })
  async randomIncr() {
    const res = await new Promise(resolve => {
      setTimeout(() => {
        const random = Math.floor(Math.random() * 10);
        resolve(random);
      }, 1000);
    });
    return res;
  }
}
export const counterStore = getModule(Counter);
