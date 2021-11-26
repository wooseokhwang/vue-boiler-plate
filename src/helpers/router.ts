export const lazyLoadPage = (page: string) =>
  import(
    /* webpackChunkName: "views-[request]" */
    `@/views/${page}.vue`
  );
