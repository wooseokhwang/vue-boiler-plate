module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        printWidth: 80, // 한 줄 최대 문자 수
        tabWidth: 2, // 들여쓰기 시, 탭 너비
        useTabs: false, // 스페이스 대신 탭 사용
        semi: true, // 문장 끝 세미콜론 사용
        singleQuote: true, // 작은 따옴표 사용
        trailingComma: 'all', // 꼬리 콤마 사용
        bracketSpacing: true, // 중괄호 내에 공백 사용
        arrowParens: 'avoid', // 화살표 함수 단일 인자 시, 괄호 생략
        proseWrap: 'never', // 마크다운 포매팅 제외
        endOfLine: 'auto', // 개행문자 유지 (혼합일 경우, 첫 줄 개행문자로 통일)
      },
    ],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
