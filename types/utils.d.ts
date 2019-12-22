export declare const isArray: (arg: any) => arg is any[]
export declare const isFunction: (value: unknown) => value is Function
export declare const isPlainObject: <T extends Record<string, unknown> = Record<string, unknown>>(
  value: unknown
) => value is T
export declare const getType: (value: unknown) => string
export declare const getKeys: {
  (o: object): string[]
  (o: {}): string[]
}
export declare const isEmptyObject: (value: Record<string, unknown>) => boolean