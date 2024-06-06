/*
1. Netflix & Spotify

2. Importação de clientes via CSV (Excel)
3. 1GB - 1.000.000
4. POST /upload import.csv

5. Readable Streams / Writeable Streams

process.stdin
  .pipe(process.stdout)
*/

import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
  index = 1
  
  _read() {
    const i = this.index++
    setTimeout(() => {
      if (i > 100) {
        this.push(null)
        return
      }
      const buf = Buffer.from(`${i} - `)
      this.push(buf)
    }, 1000)
  }
}

new OneToHundredStream()
  .pipe(process.stdout)
