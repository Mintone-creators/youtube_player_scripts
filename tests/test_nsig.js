async function testNSig(n) {
    const resp = await fetch("https://raw.githubusercontent.com/HadeMusic/youtube_player_scripts/refs/heads/main/6450230e/nsig.js"
    )
    const text = await resp.text()
    eval(text)
    const clear = decrypt_nsig(n);
  return clear;
} 


testNSig("helloworld")
  .then(console.log)
  .catch(console.error);