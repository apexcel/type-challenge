/*
  459 - Flatten
  -------
  by zhouyiming (@chbro) #보통 #array

  ### 질문

  주어진 배열을 플랫한 배열 타입으로 바꾸는 Flatten 타입을 구현하세요.

  예시:

  ```ts
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
  ```

  > GitHub에서 보기: https://tsch.js.org/459/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

type Flatten<T extends any[], Result extends any[] = []> =
    // T가 `[infer Item, ...infer Rest] 형태의 배열을 
    // 만족하는 경우 요소 Item과 나머지 Rest로 분리한다.
    T extends [infer Item, ...infer Rest]
        // Item이 배열 형태를 만족하는 경우
        ? Item extends any[]
            // Item과 Rest에 spread 연산자를 붙여 배열을 펼친다.
            ? Flatten<[...Item, ...Rest], Result>
            // Item이 배열 형태를 만족하지 않는 경우, Rest를 넘겨서 다시 Flatten을 호출한다.
            : Flatten<Rest, [...Result, Item]>
        : Result;

type X = Flatten<[[1, 2], 3, 4]>;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<Flatten<[]>, []>>,
    Expect<Equal<Flatten<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
    Expect<Equal<Flatten<[1, [2]]>, [1, 2]>>,
    Expect<Equal<Flatten<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, 5]>>,
    Expect<Equal<Flatten<[{ foo: 'bar', 2: 10 }, 'foobar']>, [{ foo: 'bar', 2: 10 }, 'foobar']>>,
]

// @ts-expect-error
type error = Flatten<'1'>

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/459/answer/ko
  > 정답 보기: https://tsch.js.org/459/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
