/* eslint-disable no-restricted-syntax */
import { styled, Tooltip, tooltipClasses, TooltipProps } from '@mui/material'
import { useEffect, useState } from 'react'

interface Props {
  code: string
}

interface Result {
  code: string
  message: string
}

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11
  }
}))

function ResultCode(props: Props) {
  const [bg, setBg] = useState('bg-wj-100')
  const [additional, setAdditional] = useState('')
  const [result, setResult] = useState({
    code: props.code,
    message: props.code
  })
  const oks: Result[] = [
    {
      code: 'AC',
      message: '正解です'
    },
    {
      code: 'OK',
      message: 'オーケー'
    },
    {
      code: 'CP',
      message: '以前に AC しました'
    }
  ]
  const ngs = [
    {
      code: 'WA',
      message: '不正解またはランタイムエラーです'
    },
    {
      code: 'RE',
      message: 'ランタイムエラーです'
    },
    {
      code: 'TLE',
      message: '実行時間制限超過です'
    },
    {
      code: 'MLE',
      message: 'メモリ制限超過です'
    },
    {
      code: 'OLE',
      message: '出力制限超過です'
    },
    {
      code: 'CE',
      message: 'コンパイルエラーです'
    },
    {
      code: 'NC',
      message: '以前に提出しました'
    }
  ]
  const errors = [
    {
      code: 'KK',
      message:
        '外部アプリの制限により実行できません。明日朝 9 時にまた試してください'
    },
    {
      code: 'UE',
      message: '不明なエラーです。'
    }
  ]
  const wjs = [
    {
      code: 'WJ',
      message: 'ジャッジ中です'
    },
    {
      code: 'AB',
      message: '中止されました'
    }
  ]
  useEffect(() => {
    for (const ok of oks) {
      setAdditional('')
      if (props.code.startsWith(ok.code)) {
        setBg('bg-ok-100')
        setResult(ok)
      }
    }
    for (const ng of ngs) {
      setAdditional('')
      if (props.code.startsWith(ng.code)) {
        setBg('bg-ng-100')
        setResult(ng)
      }
    }
    for (const err of errors) {
      if (props.code.startsWith(err.code)) {
        setBg('bg-err-100')
        if (err.code === 'UE') {
          setAdditional(props.code.split(' ')[1])
        } else {
          setAdditional('')
        }
        setResult(err)
      }
    }
    for (const wj of wjs) {
      if (props.code.startsWith(wj.code)) {
        setBg('bg-wj-100')
        setResult(wj)
        if (wj.code === 'WJ' && props.code.split(' ')[1]) {
          setAdditional(props.code.split(' ')[1])
        } else {
          setAdditional('')
        }
      }
    }
  }, [props.code])
  return (
    <div className="flex justify-center">
      <LightTooltip title={result.message} disableInteractive>
        <div className={`text-base px-1 rounded text-white font-bold ${bg}`}>
          {result.code}
        </div>
      </LightTooltip>

      {additional && (
        <div className="mx-1 text-sm mb-0 m-auto">{additional}</div>
      )}
    </div>
  )
}

export default ResultCode
