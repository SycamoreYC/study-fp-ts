import { pipe } from 'fp-ts/function'
import { array } from 'fp-ts'
import * as O from 'fp-ts/Option'

export const safeHead = (array: number[]) => {
    return array.length === 0 ? O.none : O.some(array[0])
}

export const safeBack = (array: number[]) => {
    return array.length === 0 ? O.none : O.some(array[array.length - 1])
}