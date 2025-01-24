const accountId=832
let accountEmail="test@gamil.com"
var accountPassword="12345"
accountCity="Jaipur"

// accountId=2 not allowed
accountEmail="kp@kp.com"
accountPassword="7824"
accountCity="Jodhpur"
// console.log(accountId)
let accountState
/*
Prefer not to use var
beacuse of issue in blovk scope and functional scope
*/

console.table([accountId,accountEmail,accountCity,accountPassword,accountState])