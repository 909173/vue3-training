async function Fetch<T>(url: string): Promise<T> {
  return await fetch(url).then((res) => res.json())
}
