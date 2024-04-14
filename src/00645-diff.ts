/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #보통 #object

  ### 질문

  `O` & `O1`의 차이점인 `객체`를 가져옵니다

  > GitHub에서 보기: https://tsch.js.org/645/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 1. Mapped type에 `keyof X | keyof Y`를 사용하여 두 타입의 키를 가져온다.
 * 2. `keyof X & keyof Y`를 사용하여 두 타입의 key의 교집합을 가져온다.
 * 3. `Exclude`를 사용하여 두 타입의 key의 차집합을 가져온다.
 * 4. `Exclude`를 사용하여 두 타입의 key의 교집합을 제외한 key를 가져온다.
 */
type Diff<X, Y> = {
    // X와 Y의 모든 key중에서 X와 Y 모두 갖고있는 key를 제외한 key를 가져온다.
    [K in (keyof X | keyof Y) as Exclude<K, keyof X & keyof Y>]: 
        K extends keyof X  // K가 X의 key인 경우 X[K]를 반환한다.
            ? X[K] 
            : K extends keyof Y  // K가 Y의 key인 경우 Y[K]를 반환한다.
                ? Y[K] 
                : never;
};

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string, gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string, gender: number }>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/645/answer/ko
  > 정답 보기: https://tsch.js.org/645/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
