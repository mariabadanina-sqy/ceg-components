import { useMediaQuery } from 'beautiful-react-hooks'
import { useStyledTheme } from './useThemes'

const useBreakpoints = () => {
  const {
    mediaquery: { mediaqueries },
  } = useStyledTheme()

  const at = {}
  const lessThan = {}
  const greaterThan = {}
  const greaterThanOrEqual = {}

  mediaqueries.forEach((mq, idx) => {
    at[mq.label] = useMediaQuery(
      `(min-width: ${mq.minWidth === null ? 0 : mq.minWidth}) and (max-width: ${
        mediaqueries[idx + 1]?.minWidth
      })`
    )

    lessThan[mq.label] = useMediaQuery(
      `(max-width: ${mediaqueries[idx]?.minWidth})`
    )

    greaterThan[mq.label] = useMediaQuery(
      `(min-width: ${
        mq.minWidth === null ? 0 : mediaqueries[idx + 1]?.minWidth
      })`
    )

    greaterThanOrEqual[mq.label] = useMediaQuery(
      `(min-width: ${mq.minWidth === null ? 0 : mediaqueries[idx]?.minWidth})`
    )
  })

  return {
    at,
    lessThan,
    greaterThan,
    greaterThanOrEqual,
  }
}

export { useBreakpoints }
