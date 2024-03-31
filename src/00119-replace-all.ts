/*
  119 - ReplaceAll
  -------
  by Anthony Fu (@antfu) #보통 #template-literal

  ### 질문

  주어진 문자열 `S`에서 부분 문자열 `From`을 찾아 모두 `To`로 교체하는 제네릭 `ReplaceAll<S, From, To>`을 구현하세요.

  예시:

  ```ts
  type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'
  ```

  > GitHub에서 보기: https://tsch.js.org/119/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 1. From이 ''인 경우 S를 반환.
 * 2. string 타입 S가 Left, From, Right로 분할되는지 확인.
 * 3. From이 S에 포함되어 있는 경우 Left + To + Right를 반환.
 * 4. From이 S에 포함되어 있지 않은 경우 S를 반환.
 */
type ReplaceAll<S extends string, From extends string, To extends string> = 
    From extends ''
        ? S
        : S extends `${infer Left}${From}${infer Right}`
            ? `${Left}${To}${ReplaceAll<Right, From, To>}` 
            : S;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/119/answer/ko
  > 정답 보기: https://tsch.js.org/119/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
