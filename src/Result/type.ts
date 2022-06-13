
export type Success<S> = {
  _resultType:"Success",
  value:S
}

export type FailJust<F> = {
  _failType:"FailJust",
  value:F
}

export type FailWithReason<F,R> = {
  _failType:"FailWithReason",
  value:F,
  reason:R
}

export type FailWithReasonAndEvidence<F,R,E> = {
  _failType:"FailWithReasonAndEvidence",
  value:F,
  reason:R,
  evidence:E
}

export type FailureSubType<F,R,E> =
  | FailJust<F>
  | FailWithReason<F,R>
  | FailWithReasonAndEvidence<F,R,E>

export type Failure<F,R,E> = {
  _resultType:"Failure",
}&FailureSubType<F,R,E>

export type Result<S,F,R,E>  = 
  | Success<S>
  | Failure<F,R,E>

