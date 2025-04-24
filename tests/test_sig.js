async function testSig( s) {
    const resp = await fetch("https://raw.githubusercontent.com/HadeMusic/youtube_player_scripts/refs/heads/main/6450230e/sig.js")
    const text = await resp.text();

    eval(text);
    const clear = decrypt_sig(s);
    return clear;
}

testSig("helloworld")
  .then(result => {
    console.log(result);
    return result === "SMubQOdx";
  })
  .catch(console.error);