module.exports.config = {
        name: "joinNoti",
        eventType: ["log:subscribe"],
        version: "1.0.1",
        credits: "FAIZ BABU",
        description: "Notify bots or people entering the group",
        dependencies: {
            "fs-extra": ""
        }
};
module.exports.run = async function({ api, event }) {

        const request = require("request");
        const { threadID } = event;
        if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
                api.changeNickname(`【 ${global.config.PREFIX} 】 ${global.config.BOTNAME}`, threadID, api.getCurrentUserID());
                return api.sendMessage(`╭•┄┅═══❁🌺❁═══┅┄•╮\n  💐  FAIZ BABU  💐\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n✧═══❁🌺𝗪𝗘𝗟𝗖𝗢𝗠𝗘🌺❁═══✧\nलो में आ गया आपका फैज बाबू जल्दी से स्वागत करो हमारा 😀\n╭•┄┅═════════════════❁🌺\n\nऔर जल्दी से मेरे बॉस फैज बाबू को रिक्वेस्ट भेज दो 😌\n╭•┄┅═════════════════❁🌺\n\nMY BOSS 𒁍 MR FAIZ BABU 🌺\n╭•┄┅═════════════════❁🌺\n\nFACEBOOK ID LINK 🔗 𒁍https://www.facebook.com/dileumeedtorahaikis\n╭•┄┅═════════════════❁🌺\n\nMY PREFIX 𒁍【 ${global.config.PREFIX} 】\n╭•┄┅═════════════════❁🌺\n\nTHANKYOU FOR USING MR FAIZ BABU BOT`, threadID);
        }
        else {
                try {
    const request = require("request");
                        const fs = global.nodemodule["fs-extra"];
                        let { threadName, participantIDs } = await api.getThreadInfo(threadID);

                        const threadData = global.data.threadData.get(parseInt(threadID)) || {};

                        var mentions = [], nameArray = [], memLength = [], i = 0;

    let addedParticipants1 = event.logMessageData.addedParticipants;
        for (let newParticipant of addedParticipants1) {
   let userID = newParticipant.userFbId
api.getUserInfo(parseInt(userID), (err, data) => {
      if(err){ return console.log(err)}
     var obj = Object.keys(data);
    var userName = data[obj].name.replace("@", "");             if (userID !== api.getCurrentUserID()) {  

                                nameArray.push(userName);
                                mentions.push({ tag: userName, id: userID, fromIndex: 0 });

                                memLength.push(participantIDs.length - i++);
memLength.sort((a, b) => a - b);

                        (typeof threadData.customJoin == "undefined") ? msg = "╭•┄┅═══❁🌺❁═══┅┄•╮\n  💐   FAIZ-ANSARI  💐\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n✧══ ❁𝗪𝗘𝗟𝗖𝗢𝗠𝗘❁ ══✧\nHELLO 𒁍 {uName}\nMEMBER TO 𒁍 {soThanhVien}th\nGROUP NAME 𒁍 {threadName}\n╭•┄┅═════════════════❁🌺\n𝐌𝐘 𝐁𝐎𝐒𝐒 𒁍 𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 ♥️🙂\n╭•┄┅═════════════════❁🌺\n\nआप इस ग्रुप के {soThanhVien}th मेंबर हो......." : msg = threadData.customJoin;
                        msg = msg
                        .replace(/\{uName}/g, nameArray.join(', '))
                        .replace(/\{type}/g, (memLength.length > 1) ?  'you' : 'Friend')
                        .replace(/\{soThanhVien}/g, memLength.join(', '))
                        .replace(/\{threadName}/g, threadName);                        

      var link = [
"https://i.imgur.com/Rl6Py22.gif",
"https://i.imgur.com/WpOudX3.gif",
"https://i.imgur.com/DuoVYZi.gif",
"https://i.imgur.com/3M3lYay.gif",
      ];
                                var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashJ.jpg"), mentions }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashJ.jpg"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashJ.jpg")).on("close", () => callback());       
                  }
})
        }
    }catch (err) {
            return console.log("ERROR: "+err);
    }
        }
                                                  } 
