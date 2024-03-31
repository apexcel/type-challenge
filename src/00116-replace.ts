/*
  116 - Replace
  -------
  by Anthony Fu (@antfu) #보통 #template-literal

  ### 질문

  문자열 S에서 `From`를 찾아 한 번만 `To`로 교체하는 `Replace<S, From, To>`를 구현하세요.

  예시:

  ```ts
  type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'
  ```

  > GitHub에서 보기: https://tsch.js.org/116/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 1. string 타입 S가 Left, From, Right로 분할되는 지 확인.
 * 2. From이 ''인 경우 Left + Right를 반환.
 * 3. From이 ''가 아닌 경우 Left + To + Right를 반환.
 * 4. S가 From을 포함하지 않는 경우 S를 반환.
 */
type Replace<S extends string, From extends string, To extends string> = 
    S extends `${infer Left}${From}${infer Right}`
        ? From extends ''
            ? `${Left}${Right}`
            : `${Left}${To}${Right}`
        : S;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/116/answer/ko
  > 정답 보기: https://tsch.js.org/116/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
