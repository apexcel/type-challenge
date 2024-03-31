/*
  298 - Length of String
  -------
  by Pig Fang (@g-plane) #보통 #template-literal

  ### 질문

  `String#length`처럼 동작하는 문자열 리터럴의 길이를 구하세요.

  > GitHub에서 보기: https://tsch.js.org/298/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 1. 문자열 `S`가 `Char`와 `Rest`로 분할되는 지 확인.
 * 2. Char가 있으면 L에 Char를 추가하고 Rest를 재귀적으로 호출.
 * 3. Char가 없으면 L의 길이를 반환.
 */
type LengthOfString<S extends string, L extends string[] = []> = 
    S extends `${infer Char}${infer Rest}`
        ? LengthOfString<Rest, [...L, Char]>
        : L['length']

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<LengthOfString<''>, 0>>,
    Expect<Equal<LengthOfString<'kumiko'>, 6>>,
    Expect<Equal<LengthOfString<'reina'>, 5>>,
    Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/298/answer/ko
  > 정답 보기: https://tsch.js.org/298/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
