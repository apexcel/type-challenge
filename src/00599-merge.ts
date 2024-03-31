/*
  599 - Merge
  -------
  by ZYSzys (@ZYSzys) #보통 #object

  ### 질문

  두개의 타입을 새로운 타입으로 병합하세요.
  두번째 타입의 Key가 첫번째 타입을 덮어씁니다(재정의합니다)

  예시:

  ```ts
  type foo = {
    name: string
    age: string
  }
  type coo = {
    age: number
    sex: string
  }

  type Result = Merge<foo, coo> // expected to be {name: string, age: number, sex: string}
  ```

  > GitHub에서 보기: https://tsch.js.org/599/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 1. Mapped type에 `keyof (F & S)` 또는 `keyof F | keyof S`를 사용하여 두 타입의 키를 가져온다.
 * 2. `P`가 `S`에 있는 경우 `S[P]`를 반환한다.
 * 3. `P`가 `F`에 있는 경우 `F[P]`를 반환한다.
 * 4. 그렇지 않은 경우 `never`를 반환한다.
 */
type Merge<F extends Record<PropertyKey, unknown>, S extends Record<PropertyKey, unknown>> = {
    [P in keyof (F & S)]: P extends keyof S
        ? S[P]
        : P extends keyof F
            ? F[P]
            : never;
};

type X = Merge<Foo, Bar>;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
    a: number
    b: string
}
type Bar = {
    b: number
    c: boolean
}

type cases = [
    Expect<Equal<Merge<Foo, Bar>, {
        a: number
        b: number
        c: boolean
    }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/599/answer/ko
  > 정답 보기: https://tsch.js.org/599/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
