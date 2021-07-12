const fs = require('fs')
const camelCase = require('camelcase')
const path = require('path')
const { exec } = require('child_process')

const SVG_SRC_DIR = './src/static/svg'
const SVG_COMPONENTS_DEST_DIR = './src/ui/components/Icon'
const SVG_DEST_DIR = './src/ui/components/Icon/svg'

exec(
  `./node_modules/svgo/bin/svgo -q -r --config svgo.json --folder ${SVG_SRC_DIR} --output ${SVG_DEST_DIR}`,
  (err, stdout, stderr) => {
    if (err) console.error(err)
  }
)

// Devuelve un array con TODOS los archivos/carpetas de un path
function walk(dir) {
  var results = []
  var list = fs.readdirSync(dir)
  list.forEach(function (file) {
    file = dir + '/' + file
    var stat = fs.statSync(file)
    if (stat && stat.isDirectory()) {
      /* Recurse into a subdirectory */
      results = results.concat(walk(file))
    } else {
      /* Is a file */
      results.push(file)
    }
  })
  return results
}

const isSvgFile = (file) => path.extname(file) === '.svg'

const allSVGS = walk(SVG_SRC_DIR).filter(isSvgFile)
const allSVGSRelativePath = allSVGS.map((file) =>
  path.relative(SVG_SRC_DIR, file)
)

const svgBaseName = allSVGS.map((file) =>
  path.basename(file, path.extname(file))
)
const svgCamelCase = svgBaseName.map((file) => camelCase(file))
const svgPascalCase = svgBaseName.map((file) =>
  camelCase(file, { pascalCase: true })
)

const indexFile = `import * as React from "react"
import styled, { css } from "styled-components"
import { system } from "styled-system"
import { Box } from "@sqymagma/elements"

${svgPascalCase
  .map((f, idx) => `import ${f} from "./svg/${allSVGSRelativePath[idx]}"`)
  .join('\n')}

const filterProps = ["width", "height", "fill", "color", "bg", "display"]

const Base = css\`
  * \{
    $\{system({
      fill: {
        property: "fill",
        scale: "colors",
      },
    })}
  }
\`

${svgPascalCase
  .map(
    (f) => `const Base${f} = styled(Box)
  .attrs(p => ({ as: ${f} }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
\`\$\{Base\}\``
  )
  .join('\n')}

const Icons = ({ name, props}) => \{
  const list = \{
    ${svgPascalCase
      .map((f, idx) => `${svgCamelCase[idx]} : <Base${f} {...props} />,`)
      .join('\n')}
    }
    return list[name] || null
\}

const IcnSystem = ({ name, ...props }) => {
  const icon = Icons({ name, props })
  if (!icon) console.warn(\`Griddo: The Icon \${name} doesn't exist in the icon library\`)
  return icon
}

${svgPascalCase.map((f, idx) => `export { Base${f} as ${f} }`).join('\n')}

export default IcnSystem
 `

fs.writeFileSync(`${SVG_COMPONENTS_DEST_DIR}/index.js`, indexFile)
