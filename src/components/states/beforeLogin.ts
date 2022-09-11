import React from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface beforeLoginState {
  pathname: string
}

export const beforeLoginRecoilState = atom<beforeLoginState>({
  key: 'beforeLoginState',
  default: { pathname: '' }
})

export const useBeforeLoginState = () => useRecoilValue(beforeLoginRecoilState)

export const useBeforeLoginMutators = () => {
  const setState = useSetRecoilState(beforeLoginRecoilState)
  return React.useCallback(
    (newLocation: string) => setState({ pathname: newLocation }),
    [setState]
  )
}
