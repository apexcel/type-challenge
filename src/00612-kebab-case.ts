/*
  612 - KebabCase
  -------
  by Johnson Chu (@johnsoncodehk) #보통 #template-literal

  ### 질문

  `camelCase`나 `PascalCase`를 `kebab-case` 문자열로 수정하세요.

  `FooBarBaz` -> `foo-bar-baz`

  예시:

  ```ts
  type FooBarBaz = KebabCase<"FooBarBaz">
  const foobarbaz: FooBarBaz = "foo-bar-baz"

  type DoNothing = KebabCase<"do-nothing">
  const doNothing: DoNothing = "do-nothing"
  ```

  > GitHub에서 보기: https://tsch.js.org/612/ko
*/

/* _____________ 여기에 코드 입력 _____________ */

/**
 * 1. type `Char`와 나머지 문자열 `Rest`로 나눈다.
 * 2. type `Rest`가 `Uncapitalize<Rest>`인 경우에는 `Char`를 소문자로 변환하고 `Rest`를 `KebabCase`에 재귀적으로 호출한다.
 * 3. 그렇지 않은 경우에는 `Char`를 소문자로 변환하고 `-`를 붙이고 `Rest`를 `KebabCase`에 재귀적으로 호출한다.
 * 4. `Rest`가 빈 문자열인 경우에는 `S`를 반환한다.
 */
type KebabCase<S> = S extends `${infer Char}${infer Rest}`
    ? Rest extends Uncapitalize<Rest>
        ? `${Uncapitalize<Char>}${KebabCase<Rest>}`
        : `${Uncapitalize<Char>}-${KebabCase<Rest>}`
    : S;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
    Expect<Equal<KebabCase<'FooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'fooBarBaz'>, 'foo-bar-baz'>>,
    Expect<Equal<KebabCase<'foo-bar'>, 'foo-bar'>>,
    Expect<Equal<KebabCase<'foo_bar'>, 'foo_bar'>>,
    Expect<Equal<KebabCase<'Foo-Bar'>, 'foo--bar'>>,
    Expect<Equal<KebabCase<'ABC'>, 'a-b-c'>>,
    Expect<Equal<KebabCase<'-'>, '-'>>,
    Expect<Equal<KebabCase<''>, ''>>,
    Expect<Equal<KebabCase<'😎'>, '😎'>>,
]

/* _____________ 다음 단계 _____________ */
/*
  > 정답 공유하기: https://tsch.js.org/612/answer/ko
  > 정답 보기: https://tsch.js.org/612/solutions
  > 다른 문제들: https://tsch.js.org/ko
*/
