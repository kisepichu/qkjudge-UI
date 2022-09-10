import React from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

interface userState {
  username: string
}

export const userRecoilState = atom<userState>({
  key: 'userState',
  default: { username: '' }
})

export const useUserState = () => useRecoilValue(userRecoilState)

export const useUserMutators = () => {
  const setState = useSetRecoilState(userRecoilState)
  return React.useCallback(
    (newUsername: string) => setState({ username: newUsername }),
    [setState]
  )
}
