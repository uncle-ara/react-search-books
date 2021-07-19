export type InferValueType<T> = T extends { [key: string]: infer U }
  ? U
  : never;

export type InferPromiseType<T> = T extends Promise<infer U> ? U : never;
export type ReturnTypePromise<T extends (...args: any) => any> =
  InferPromiseType<ReturnType<T>>;

export const pack = <T extends {}, K extends keyof T>(arr: T[], key: K) =>
  arr.reduce((acc, item) => {
    acc[item[key] as any as string] = item;
    return acc;
  }, {} as Record<string, T>);
