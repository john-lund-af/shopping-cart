export enum ActionType {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
  REMOVE = 'REMOVE'
}

export type Action = {
  actionType: ActionType,
  itemId: number
}