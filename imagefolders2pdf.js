import fs from 'fs/promises'
import { exec } from 'child_process'

main()

async function main() {
  for (let x of await fs.readdir(process.cwd())) {
    await exec1(`images-pdf -f ./${x} -o ./${x}.pdf`, { cwd: process.cwd() })
  }
}

function exec1(...args) {
  console.log(args[0])
  // return new Promise((resolve, reject) => {
  //   exec(...args, (err) => {
  //     if (err) return reject(err)
  //     resolve()
  //   })
  // })
}