import React from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface customTestSourceState {
  source: string
}

export const customTestSourceRecoilState = atom<customTestSourceState>({
  key: 'customTestSourceState',
  default: { source: '' }
})

export const useCustomTestSourceState = () =>
  useRecoilValue(customTestSourceRecoilState)

export const useCustomTestSourceMutators = () => {
  const setState = useSetRecoilState(customTestSourceRecoilState)
  return React.useCallback(
    (newSource: string) => setState({ source: newSource }),
    [setState]
  )
}
