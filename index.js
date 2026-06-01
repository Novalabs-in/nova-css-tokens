// CSS Variable compiler utility
export function compileTokens(tokens) {
  let cssVariables = ':root {\n'
  for (let [key, val] of Object.entries(tokens)) {
    cssVariables += `  --color-${key}: ${val};\n`
  }
  cssVariables += '}'
  return cssVariables
}
