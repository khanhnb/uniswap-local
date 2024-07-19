import { Trans } from '@lingui/macro'
import { ChainId, SUPPORTED_CHAINS } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import type { ReactNode } from 'react'

// convert SUPPORTED_CHAINS to number[]
const supportedChain = SUPPORTED_CHAINS.map((chain) => chain)
supportedChain.push(1022)

export const FEE_AMOUNT_DETAIL: Record<
  FeeAmount,
  // { label: string; description: ReactNode; supportedChains: readonly ChainId[] }
  // TODO: refactor this
  { label: string; description: ReactNode; supportedChains: number[]}
> = {
  [FeeAmount.LOWEST]: {
    label: '0.01',
    description: <Trans>Best for very stable pairs.</Trans>,
    supportedChains: [
      ChainId.ARBITRUM_ONE,
      ChainId.BNB,
      ChainId.CELO,
      ChainId.CELO_ALFAJORES,
      ChainId.MAINNET,
      ChainId.OPTIMISM,
      ChainId.POLYGON,
      ChainId.POLYGON_MUMBAI,
      ChainId.AVALANCHE,
      ChainId.BASE,
      1022
    ],
  },
  [FeeAmount.LOW]: {
    label: '0.05',
    description: <Trans>Best for stable pairs.</Trans>,
    supportedChains: supportedChain,
  },
  [FeeAmount.MEDIUM]: {
    label: '0.3',
    description: <Trans>Best for most pairs.</Trans>,
    supportedChains: supportedChain,
  },
  [FeeAmount.HIGH]: {
    label: '1',
    description: <Trans>Best for exotic pairs.</Trans>,
    supportedChains: supportedChain,
  },
}
