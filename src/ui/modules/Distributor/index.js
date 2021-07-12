import * as React from 'react'
import { useDistributorData } from '@hooks'
import { Box, Text } from '@sqymagma/elements'
import { Link } from '@griddo/core'

const Distributor = ({ data, queriedItems }) => {
  const [content, setContent] = React.useState([])
  const distributorData = queriedItems || useDistributorData(data)

  React.useEffect(() => {
    if (Array.isArray(distributorData)) {
      setContent(distributorData)
    }
  }, [distributorData])

  return (
    content &&
    content.map(({ content }, idx) => {
      const { title, text, href } = content
      return (
        <Box key={idx} p="s" bg="ui01">
          <Text as="h1" color="text01" textStyle="headingxs">
            {title}
          </Text>
          <Text as="p" color="text02" textStyle="body">
            {text}
          </Text>
          <Link url={{ href: href }} color="link01" textStyle="body">
            Go to Link
          </Link>
        </Box>
      )
    })
  )
}

export default Distributor
