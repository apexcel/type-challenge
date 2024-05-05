/*
  1097 - IsUnion
  -------
  by null (@bencor) #medium #union

  ### Question

  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

  For example:

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > View on GitHub: https://tsch.js.org/1097
*/

/* _____________ Your Code Here _____________ */


/**
 * Union이 아닌 경우
 * 
 * ```ts
 * IsUnion<string>
 * => IsUnionImpl<string, string>
 * => (string extends string ? string extends string ? true : unknown : never) extends true ? false : true
 * => (string extends string ? true : unknown) extends true ? false : true
 * => (true) extends true ? false : true
 * => false
 * ```
 * 
 * Union인 경우
 * 
 * ```ts
 * IsUnion<string|number>
 * => IsUnionImpl<string|number, string|number>
 * => (string|number extends string|number ? string|number extends string|number ? true : unknown : never) extends true ? false : true
 * => (
 *   (string extends string|number ? string|number extends string ? true : unknown : never) |
 *   (number extends string|number ? string|number extends number ? true : unknown : never)
 * ) extends true ? false : true
 * => (
 *   (string|number extends string ? true : unknown) |
 *   (string|number extends number ? true : unknown)
 * ) extends true ? false : true
 * => (
 *   (
 *     (string extends string ? true : unknown) |
 *     (number extends string ? true : unknown)
 *   ) |
 *   (
 *     (string extends number ? true : unknown) |
 *     (number extends number ? true : unknown)
 *   )
 * ) extends true ? false : true
 * => (
 *   (
 *     (true) |
 *     (unknown)
 *   ) |
 *   (
 *     (unknown) |
 *     (true)
 *   )
 * ) extends true ? false : true
 * => (true|unknown) extends true ? false : true
 * => (unknown) extends true ? false : true
 * => true
 * ```
 */
type IsUnionImpl<T, C = T> = (
    T extends T
        ? C extends T
            ? true
            : unknown
        : never
) extends true
    ? false
    : true;

type IsUnion<T> = IsUnionImpl<T>;

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  Expect<Equal<IsUnion<() => any | (() => 15)>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/
