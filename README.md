# Lyft Application Example App
I made this app according to the specifications listed here:
[https://lyft-interview-test.glitch.me/](https://lyft-interview-test.glitch.me/)

## Built with:
- Node.js
- Express

## Breakdown:
Lines 1-3 imports our strCutter.js module and requires express and node utilities

Lines 5-6 creates our express app and binds value of 8000 to port variable

Lines 8-12 gets our app listening on port 8000

Lines 14 our post request returns the json string if successful and returns an error message otherwise

Line 22 ends the response process

Tested against a current working example with provided terminal command:
`curl -X POST https://lyft-interview-test.glitch.me/test --data '{"string_to_cut": "iamyourlyftdriver"}' -H 'Content-Type: application/json'`

Note: I originally did have an app.get request for the front end but it's not what was asked so I removed it.