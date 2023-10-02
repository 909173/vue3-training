// TODO: API定義書を参考に型定義すること
export type Prefecture = {
  prefCode: number
  prefName: string
}
// TODO: Prefecture型にインターセクション型を利用して、チェックボックスのbooleanも追加すること
export type PrefectureDisplay = Prefecture & {
  // チェックボックスがチェックされているかどうか
  isCheck: boolean
}
