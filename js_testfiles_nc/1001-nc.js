const numberOfArrays = function (s, k) {
  const n = s.length
    const dp = Array(n)
  return dfs(s, k, 0, dp)
}
function dfs(s, k, i, dp) {
  const mod = 10 ** 9 + 7
    if (i === s.length) return 1
      if (s.charAt(i) === '0') return 0
  if (dp[i] != null) return dp[i]
  let ans = 0
  let num = 0
  for (let j = i; j < s.length; j++) {
        num = num * 10 + (+s.charAt(j))
        if (num > k) break
    ans += dfs(s, k, j + 1, dp)
    ans %= mod
  }
  return (dp[i] = ans)
}
const numberOfArrays = function (s, k) {
  const mod = 10 ** 9 + 7
  const n = s.length
  const dp = new Array(n + 1).fill(0)
  dp[n] = 1
  for (let i = n - 1; i >= 0; i--) {
    if (s[i] === '0') continue
    else {
      let temp = s[i]
      for (let j = i + 1; j <= n; j++) {
        if (temp > k) break
        dp[i] = (dp[i] + dp[j]) % mod
        if (j < n) {
          temp = temp * 10 + parseInt(s[j])
        }
      }
    }
  }
  return parseInt(dp[0])
}
