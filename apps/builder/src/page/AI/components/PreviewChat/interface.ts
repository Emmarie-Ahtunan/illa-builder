import {
  AI_AGENT_MODEL,
  AI_AGENT_TYPE,
  AgentAdvanceConfig,
} from "@illa-public/market-agent/MarketAgentCard/interface"
import { Params } from "@/redux/resource/restapiResource"

export type EDIT_STATE = "EDIT" | "RUN"

export enum SenderType {
  USER = 1,
  AGENT = 2,
  ANONYMOUS_AGENT = 3,
}

export interface ChatWsAppendResponse {
  sender: ChatSender
  threadID: string
  message: string
  actionID: string
}

export interface ChatWsEndResponse {
  actionID: string
}

export interface ChatSender {
  senderID: string
  senderType: SenderType
}

export interface ChatMessage {
  threadID: string
  message: string
  sender: ChatSender
}

export interface ChatSendRequestPayload {
  threadID: string
  prompt: string
  actionID: string // the ID of who answered the question
  variables: Params[]
  model: AI_AGENT_MODEL
  agentType: AI_AGENT_TYPE
  modelConfig: AgentAdvanceConfig
}

export interface PreviewChatProps {
  hasCreated: boolean
  editState: EDIT_STATE
  agentType: AI_AGENT_TYPE
  chatMessages: ChatMessage[]
  generationMessage?: ChatMessage
  onSendMessage: (message: ChatMessage, agentType: AI_AGENT_TYPE) => void
  onCancelReceiving: () => void
  blockInput: boolean
  isReceiving: boolean
  isRunning: boolean
  isMobile: boolean
  showShareAndContributeDialog: boolean
  onShowShareDialog?: () => void
  onShowContributeDialog?: () => void
}