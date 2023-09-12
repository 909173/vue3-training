async function Fetch<T>(url: string): Promise<string> {
  return await fetch(url).then((res) => res.json())
}
