export interface CircuitDependency {
  id: number
  currentStartWire: number
  dependencyInputWire: number
  offset: number
}

export interface CircuitLine {
  id: number
  circuitName: string
  out: boolean
  dependency: CircuitDependency[]
}