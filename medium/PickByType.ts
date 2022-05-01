type PickByType<S extends Record<string, any>, T extends any> = {
  [P in keyof S as S[P] extends T ? P : never]: S[P]
}

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }


export {}