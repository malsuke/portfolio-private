import type { Toml } from '@/types/data'
import * as toml from '@iarna/toml'
import * as fs from 'fs'
import path from 'path'

export default async function parseToml() {
  const filePath = path.join(process.cwd(), 'data', 'data.toml')
  const data = await fs.promises.readFile(filePath, 'utf-8')
  const parsedData = toml.parse(data) as unknown as Toml
  return parsedData
}
