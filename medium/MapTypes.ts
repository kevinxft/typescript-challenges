type MapConfig = {
  mapFrom: unknown;
  mapTo: unknown;
};

type GetMapToType<
  T,
  R extends MapConfig,
  Type = R extends R ? (T extends R["mapFrom"] ? R["mapTo"] : never) : never
> = [Type] extends [never] ? T : Type;

type MapTypes<T, R extends MapConfig> = {
  [key in keyof T]: GetMapToType<T[key], R>;
};

export {  }