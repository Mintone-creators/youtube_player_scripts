const sigCypher = "s=7JAQdSswRQIgbgP_1SQQ_ODsU7MKBsxWFK7jdztgw7-ifxoIOA3QJyYCIQDa5xwfqfAy8JLmalrjdPAWK2yUdwrJj2izXl7nWrHxig%3D%3D&sp=sig&url=https://rr4---sn-qxoednee.googlevideo.com/videoplayback%3Fexpire%3D1745473501%26ei%3DfXsJaL-DAZjGybgPr6320Qo%26ip%3D63.143.55.126%26id%3Do-AAhi6Ju-NzdQsjlLzMHArqikv0V8E04l10WWO860Vbcb%26itag%3D251%26source%3Dyoutube%26requiressl%3Dyes%26xpc%3DEgVo2aDSNQ%253D%253D%26met%3D1745451901%252C%26mh%3DRH%26mm%3D31%252C29%26mn%3Dsn-qxoednee%252Csn-q4fl6n6r%26ms%3Dau%252Crdu%26mv%3Dm%26mvi%3D4%26pl%3D19%26rms%3Dau%252Cau%26gcr%3Dus%26initcwndbps%3D3118750%26bui%3DAccgBcNuh2sO288GUMeuy3KMPaXvp3DgtDg2LttTgHumYHEuXH4sh8NeZ-D2-x3jCs71Jogc06QMBHK2%26spc%3D_S3wKvzxDhefhJ6OwjhBTN-nf2kxLwN0RRMLMUgG6kKJ_VOFo5pa1uHicuT-OOV91EE%26vprv%3D1%26svpuc%3D1%26mime%3Daudio%252Fwebm%26ns%3D2-8VD8Ib8U5vwbJFaOAUZyMQ%26rqh%3D1%26gir%3Dyes%26clen%3D4972346%26dur%3D277.501%26lmt%3D1714606488670212%26mt%3D1745451426%26fvip%3D4%26keepalive%3Dyes%26c%3DWEB_REMIX%26sefc%3D1%26txp%3D1432434%26n%3DzYyfJT85p0lAOZsk%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cxpc%252Cgcr%252Cbui%252Cspc%252Cvprv%252Csvpuc%252Cmime%252Cns%252Crqh%252Cgir%252Cclen%252Cdur%252Clmt%26lsparams%3Dmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%26lsig%3DACuhMU0wRgIhAIu2hktgbAj5rcPATdypqXZI2phFvs_kv9Kpl5kB9Eb7AiEA04kV2UU2dIsfABwWgodt2KzWmS5YrcMja1KEY4YQGAY%253D";

const s = "7JAQdSswRQIgbgP_1SQQ_ODsU7MKBsxWFK7jdztgw7-ifxoIOA3QJyYCIQDa5xwfqfAy8JLmalrjdPAWK2yUdwrJj2izXl7nWrHxig%3D%3D";
const sp = "sig";
const url = "https://rr4---sn-qxoednee.googlevideo.com/videoplayback%3Fexpire%3D1745473501%26ei%3DfXsJaL-DAZjGybgPr6320Qo%26ip%3D63.143.55.126%26id%3Do-AAhi6Ju-NzdQsjlLzMHArqikv0V8E04l10WWO860Vbcb%26itag%3D251%26source%3Dyoutube%26requiressl%3Dyes%26xpc%3DEgVo2aDSNQ%253D%253D%26met%3D1745451901%252C%26mh%3DRH%26mm%3D31%252C29%26mn%3Dsn-qxoednee%252Csn-q4fl6n6r%26ms%3Dau%252Crdu%26mv%3Dm%26mvi%3D4%26pl%3D19%26rms%3Dau%252Cau%26gcr%3Dus%26initcwndbps%3D3118750%26bui%3DAccgBcNuh2sO288GUMeuy3KMPaXvp3DgtDg2LttTgHumYHEuXH4sh8NeZ-D2-x3jCs71Jogc06QMBHK2%26spc%3D_S3wKvzxDhefhJ6OwjhBTN-nf2kxLwN0RRMLMUgG6kKJ_VOFo5pa1uHicuT-OOV91EE%26vprv%3D1%26svpuc%3D1%26mime%3Daudio%252Fwebm%26ns%3D2-8VD8Ib8U5vwbJFaOAUZyMQ%26rqh%3D1%26gir%3Dyes%26clen%3D4972346%26dur%3D277.501%26lmt%3D1714606488670212%26mt%3D1745451426%26fvip%3D4%26keepalive%3Dyes%26c%3DWEB_REMIX%26sefc%3D1%26txp%3D1432434%26n%3DzYyfJT85p0lAOZsk%26sparams%3Dexpire%252Cei%252Cip%252Cid%252Citag%252Csource%252Crequiressl%252Cxpc%252Cgcr%252Cbui%252Cspc%252Cvprv%252Csvpuc%252Cmime%252Cns%252Crqh%252Cgir%252Cclen%252Cdur%252Clmt%26lsparams%3Dmet%252Cmh%252Cmm%252Cmn%252Cms%252Cmv%252Cmvi%252Cpl%252Crms%252Cinitcwndbps%26lsig%3DACuhMU0wRgIhAIu2hktgbAj5rcPATdypqXZI2phFvs_kv9Kpl5kB9Eb7AiEA04kV2UU2dIsfABwWgodt2KzWmS5YrcMja1KEY4YQGAY%253D";

async function decypher(){
    const resp = await fetch('https://raw.githubusercontent.com/HadeMusic/youtube_player_scripts/refs/heads/main/6450230e/sig.js')
    const sigScript = await resp.text();

    const resp2 = await fetch("https://raw.githubusercontent.com/HadeMusic/youtube_player_scripts/refs/heads/main/6450230e/nsig.js")
    const nsigScript = await resp2.text();

    eval(sigScript);
    const decryptedS = decrypt_sig(s);

    eval(nsigScript);
    const decryptedN = decrypt_nsig(s);

    const newUrl = new URL(url);
    newUrl.searchParams.delete('n')
    newUrl.searchParams.set('sig', decryptedS);
    newUrl.searchParams.set('n' , decryptedN)

    console.log(newUrl.toString()); 


}

await decypher()