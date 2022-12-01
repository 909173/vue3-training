export async function fetchApi<T>(
  path: string,
  params?: (string | number)[],
  query?: { [key: string]: any }
): Promise<T> {
  const basePath = buildBasePath()
  const paramPath = buildPath(path, params)
  let url = `${basePath}/${paramPath}`
  if (query && Object.keys(query).length > 0) url += "?" + buildQuery(query)
  const res = await fetch(url)
  return await res.json()
}

function buildBasePath() {
  return "/api/v1/"
}
/**
 * APIパスとパラメータでExpressと同様のURIを作成する
 * @param path APIのパス
 * @param params URIパラメータ
 */
function buildPath(path: string, params?: (string | number)[]): string {
  if (!params) return path
  let builder = path
  const paramsPattern = /[^{}]+(?=})/g
  const extractParams = path.match(paramsPattern)
  if (extractParams) {
    extractParams.forEach((item: string, index: number) => {
      builder = builder.replace(`{${item}}`, params[index].toString())
    })
  }
  return builder
}
/**
 * QueryStringの配列を { key[0]=xxx, key[1]=xxx } の形式に変換
 * @param obj Queryパラメータ
 */
function buildQuery(obj?: {
  [key: string]: any
}): { params: { [key: string]: any } } | undefined {
  if (!obj) return undefined
  const query: { [key: string]: any } = {}
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((x, index) => {
        query[`${key}[${index}]`] = x
      })
    } else {
      query[key] = value
    }
  }
  return { params: query }
}
