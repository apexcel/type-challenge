/*
  10 - Tuple to Union
  -------
  by Anthony Fu (@antfu) #보통 #infer #tuple #union

  ### 질문

  튜플 값으로 유니온 타입을 생성하는 제네릭 `TupleToUnion<T>`를 구현하세요.

  예시:

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > GitHub에서 보기: https://tsch.js.org/10/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type TupleToUnion1<T extends any[]> = T extends [infer Item, ...infer Rest]
    // 타입 `T`가 `[infer Item, ...infer Rest]` 구조를 가지고 있는 경우, 타입 `Rest`가 배열인 경우
    ? Rest extends any[]
        // `Item`과 `TupleToUnion<Rest>`를 유니온 타입으로 반환
        ? Item | TupleToUnion1<Rest>
        // 타입 `Rest`가 배열이 아닌 경우, `Item`을 반환
        : Item
    // 아무것도 해당되지 않는 경우 `never`.
    : never;

// 타입스크립트에서 튜플은 제한된 길이를 가진 특성 타입의 집합으로
// `T`가 튜플이라면 `T[number]`는 `T`의 모든 요소의 유니온 타입이 된다.
type TupleToUnion2<T extends any[]> = T[number];

type TupleToUnion3<T extends any[]> = T extends Array<infer U> ? U : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<TupleToUnion1<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion1<[123]>, 123>>,

    Expect<Equal<TupleToUnion2<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion2<[123]>, 123>>,

    Expect<Equal<TupleToUnion3<[123, '456', true]>, 123 | '456' | true>>,
    Expect<Equal<TupleToUnion3<[123]>, 123>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/10/answer/ko
  > 정답 보기: https://tsch.js.org/10/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
