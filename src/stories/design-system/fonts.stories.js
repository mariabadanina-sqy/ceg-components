import * as React from 'react'
import { Flex, Text } from '@sqymagma/elements'
import { useStyledTheme } from '@hooks'

export const TextStyle = () => (
  <Flex m="m" flexDirection="column">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => {
      return (
        <Text key={idx} textStyle={`display0${idx + 1}`}>
          Hoves @ display0{idx + 1}
        </Text>
      )
    })}
  </Flex>
)

export const CustomFontWeight = () => (
  <Flex m="m" flexDirection="column">
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, idx) => {
      return (
        <Text key={idx} textStyle="heading2xl" weight={`${(idx + 1) * 100}`}>
          Display @ {(idx + 1) * 100}
        </Text>
      )
    })}
  </Flex>
)

export const CustomStyle = () => (
  <Flex m="m" flexDirection="column">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) => {
      const ratio = 1.2
      const size = Math.round(16 * ratio ** _)
      return (
        <Text key={idx} fontFamily="Hoves" fontSize={size} weight="500">
          Font Size — {size}px
        </Text>
      )
    })}
  </Flex>
)

export const Colors = () => {
  const { colors } = useStyledTheme()
  return (
    <Flex m="m" flexDirection="column">
      {Object.keys(colors).map((key, idx) => {
        return (
          <Text
            fontFamily="Hoves"
            fontSize="16px"
            weight="500"
            color={key}
            key={idx}
          >
            {key}
          </Text>
        )
      })}
    </Flex>
  )
}

export const TextColors = () => {
  const { colors } = useStyledTheme()
  return (
    <Flex m="m" flexDirection="column">
      {Object.keys(colors)
        .filter((key) => key.match(/text\d/g))
        .map((key, idx) => {
          return (
            <Text
              key={idx}
              fontFamily="Hoves"
              fontSize="32px"
              weight="500"
              color={key}
            >
              {key} : {colors[key]}
            </Text>
          )
        })}
    </Flex>
  )
}

export default {
  title: 'DesignSystem/Typography',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}
