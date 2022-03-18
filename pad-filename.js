import fs from 'fs/promises'
import { join, basename } from 'path'

const ext = '.jpg', fileNameLength = 8

main()

async function main() {
  let cwd = process.cwd()
  try {
    await dealFolder(cwd)
  } catch (e) {
    console.log(e)
  }
}

async function dealFolder(file = '') {

  let stats = await fs.stat(file)
  console.log({ file, isFile: stats.isFile() })
  if (stats.isFile()) {
    if (file.endsWith(ext)) {
      let name = basename(file)
      let to = file.replace(name, name.padStart(fileNameLength, '0'))
      console.log({ file, to })
      await fs.rename(file, to)
    }
    return
  }
  for (let x of await fs.readdir(file)) {
    await dealFolder(join(file, x))
  }
}