import { ComponentPublicInstance } from 'vue';
import {
  NavigationGuard,
  RouteLocationRaw,
  NavigationGuardNext,
} from 'vue-router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type NavigationGuardNextCallback = (vm: ComponentPublicInstance) => any;

export type NextTo =
  | false
  | void
  | RouteLocationRaw
  | NavigationGuardNextCallback
  | undefined;

export const combineGuards = (guards: NavigationGuard[]): NavigationGuard => {
  return async (to, from, next) => {
    const callBackFuncs: NavigationGuardNextCallback[] = [];
    for (const guard of guards) {
      try {
        const res = await new Promise<NavigationGuardNext>(resolve => {
          guard(to, from, resolve as NavigationGuardNext);
        });
        if (typeof res === 'function') {
          callBackFuncs.push(res);
        } else if (res !== undefined) {
          next(res);
          return;
        }
      } catch (e) {
        const error = e instanceof Error ? e : new Error(e as string);
        next(error);
        return;
      }
    }
    if (callBackFuncs.length === 0) {
      next();
    } else {
      next(vm => {
        callBackFuncs.forEach(ele => {
          ele(vm);
        });
      });
    }
  };
};
