import { useEffect, useState } from 'react'
import { usePage } from '@griddo/core'
import { getToken, getSiteID, getLang } from '@utils'

const getOptions = (body) => {
  const lang = getLang()

  return {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      lang,
      ...getToken(),
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  }
}

const useDistributorData = (props) => {
  const [response, setResponse] = useState(null)
  const { order, quantity, source, mode, fixed, filter } = props

  const { apiUrl } = usePage()

  useEffect(() => {
    const lang = getLang()
    const isAX = !!lang
    const siteID = getSiteID()
    const url = `${apiUrl}/site/${siteID}/distributor`
    const body =
      mode === 'auto'
        ? {
            mode,
            order,
            quantity,
            source,
            filter,
          }
        : {
            mode,
            fixed,
          }
    const fetchOptions = getOptions(body)

    const fetchData = async () => {
      const res = await fetch(url, fetchOptions)
      const json = await res.json()
      setResponse(json)
    }

    isAX && fetchData()
  }, [mode, order, quantity, fixed, filter, source])

  return response
}

export { useDistributorData }
