import toml from '@iarna/toml'

const data = `
[meta]
"設定" = "値"
"日本語のキー" = "これは日本語の値です"
`

async function parseTomlFile() {
  try {
    // TOMLをパースする
    const parsedData = toml.parse(data)
    // 結果をコンソールに出力
    console.log(parsedData)
  } catch (error) {
    console.error('Error reading or parsing TOML file:', error)
  }
}

// ここにTOMLファイルのパスを指定
parseTomlFile()
