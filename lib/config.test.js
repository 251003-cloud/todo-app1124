import { appName } from './config'

test('環境変数がなければ初期値の「TODOアプリ」になる', () => {
  expect(appName).toBe('TODOアプリ')
})
