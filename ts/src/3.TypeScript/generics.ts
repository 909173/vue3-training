/* eslint-disable @typescript-eslint/no-unused-vars */
async function Fetch<T>(url: string): Promise<T> {
  return await fetch(url).then((res) => res.json())
}

const str: Promise<string> = Fetch<string>("someURL")
