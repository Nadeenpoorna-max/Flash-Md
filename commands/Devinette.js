

/** 

🇫‌🇱‌🇦‌🇸‌🇭‌-🇲‌🇩‌ 

  𝗖𝗼𝗽𝘆𝗿𝗶𝗴𝗵𝘁 (𝗖) 2024.
 𝗟𝗶𝗰𝗲𝗻𝘀𝗲𝗱 𝘂𝗻𝗱𝗲𝗿 𝘁𝗵𝗲  𝗠𝗜𝗧 𝗟𝗶𝗰𝗲𝗻𝘀𝗲;
 𝗬𝗼𝘂 𝗺𝗮𝘆 𝗻𝗼𝘁 𝘂𝘀𝗲 𝘁𝗵𝗶𝘀 𝗳𝗶𝗹𝗲 𝗲𝘅𝗰𝗲𝗽𝘁 𝗶𝗻 𝗰𝗼𝗺𝗽𝗹𝗶𝗮𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝘁𝗵𝗲 𝗟𝗶𝗰𝗲𝗻𝘀𝗲.
 𝗜𝘁 𝗶𝘀 𝘀𝘂𝗽𝗽𝗹𝗶𝗲𝗱 𝗶𝗻 𝘁𝗵𝗲 𝗵𝗼𝗽𝗲 𝘁𝗵𝗮𝘁 𝗶𝘁 𝗺𝗮𝘆 𝗯𝗲 𝘂𝘀𝗲𝗳𝘂𝗹.
 * @𝗽𝗿𝗼𝗷𝗲𝗰𝘁_𝗻𝗮𝗺𝗲 : 𝗙𝗹𝗮𝘀𝗵 𝗠𝗗, 𝗮 𝘀𝗶𝗺𝗽𝗹𝗲 𝗮𝗻𝗱 𝗲𝗮𝘀𝘆 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 𝘂𝘀𝗲𝗿 𝗯𝗼𝘁 
 * @𝗼𝘄𝗻𝗲𝗿: 𝗙𝗿𝗮𝗻𝗰𝗲 𝗞𝗶𝗻𝗴 
 
 **/







const { france } = require('../framework/france');

// Set a riddle list with questions and answers
const devinettes = [
  {
    question: "මට පියාපත් නොමැතිව පියාසර කළ හැකිය, මම කවුද?",
    reponse: "කාලගුණය",
  },
  {
    question: "තරුෂ උගේ කෙල්ල කියල හිතන් ඉන්නේ,කාවද ?",
    reponse: "දමීෂව 😒",
  },
  {
    question: "තරුෂ, නම්බර් එක ඉල්ලුවේ කාගේද ?",
    reponse: "දමිශාගේ ",
  },
  {
    question: "මහින්ද මහත්තයා නෙලුම් කුලුන හැදුවේ ඇයි ?",
    reponse: "ඌ නෙමෙයි හැදුවේ,බාස්ලා.. ",
  },
  {
    question: "*පීකොක්* කියන්නේ ඉංග්‍රීසියෙන් මොනරටද ?",
    reponse: "ඔව් ",
  },
  {
    question: "තරුෂ ටෝක් කරන කෙල්ල කවුද? ",
    reponse: "දමිෂා ",
  },
  {
    question: "උබ දැන් මොකද කරන්නේ ?",
    reponse: "ඒක ඉතිං මම දන්නවා ඈ ...😏",
  },
  {
    question: "උබ කැමති ගානක් හිතාගනින්,ඒක 2න් ගුණ කරලා 10ක් එකතු කරන්න.දැන් ඒක 2න් බෙදන්න.දැන් කලින්ම හිතපු ගානෙන් අඩු කරන්න. ",
    reponse: "5 නේද අවේ...😎",
  },
  {
    question: "උබ කැමති ගානක් හිතාගනින්,ඒක 2න් ගුණ කරලා 10ක් එකතු කරන්න.දැන් ඒක 2න් බෙදන්න.දැන් කලින්ම හිතපු ගානෙන් අඩු කරන්න. ",
    reponse: "5 නේද අවේ...😎",
  },
  {
    question: "තරුෂ ටෝක් කරන කෙල්ල කවුද?",
    reponse: "හරියටම හරි...දමිෂා...🤭",
  },
  {
    question: "තරුෂ ටෝක් කරන කෙල්ල කවුද?",
    reponse: "හරියටම හරි...දමිෂා...🤭",
  },
  {
    question: "තරුෂ ටෝක් කරන කෙල්ල කවුද?",
    reponse: "හරියටම හරි...දමිෂා...🤭",
  },
  {
    question: "මම උණුසුම් වන තරමට මම සීතල වෙමි. මම කවුද ?",
    reponse: "කෝපි",
  },
  {
    question: "මම සිහින වල වස්තුවයි. මම බිඳුණු අදහස් ආවරණය කරමි. මම ආත්මයන් පියාපත් බවට පත් කරමි. මම කවුද?",
    reponse: "පොතක්",
  },
  {
    question: "අපිරිසිදු වූ විට මම සුදු වන අතර පිරිසිදු වූ විට කළු ය. මම කවුද?",
    reponse: " කළු ලෑල්ල ",
  },
  {
    question: "මට පියාපත් නොමැතිව පියාසර කළ හැකිය, මට ඇස් නොමැතිව අඬන්න පුළුවන්, මම කවුද??",
    reponse: "වලාකුළක්",
  },
  {
    question: "සීගිරිය ඇයි 8වන පුදුමය උනේ? ?",
    reponse: "මන් දන්නවනම් තොගෙන් අහන්නේ නැනේ..",
  },
  {
    question: "තරුෂ, නම්බර් එක ඉල්ලුවේ කාගේද ?",
    reponse: "දමිශාගේ",
  },
  {
    question: "තරුෂ, නම්බර් එක ඉල්ලුවේ කාගේද ?",
    reponse: "දමිශාගේ",
  },
  {
    question: "මහින්ද මහත්තයා නෙලුම් කුලුන හැදුවේ ඇයි ?",
    reponse: "ඌ නෙමෙයි හැදුවේ,බාස්ලා.. ",
  },
  {
    question: "තරුෂ, නම්බර් එක ඉල්ලුවේ කාගේද ?",
    reponse: "Dameesha",
  },
  {
    question: "මහින්ද මහත්තයා නෙලුම් කුලුන හැදුවේ ඇයි ?",
    reponse: "ඌ නෙමෙයි හැදුවේ,බාස්ලා.. ",
  },
  {
    question: "මහින්ද මහත්තයා නෙලුම් කුලුන හැදුවේ ඇයි ?",
    reponse: "ඌ නෙමෙයි හැදුවේ,බාස්ලා.. ",
  },
  ];
  
france({ nomCom: "riddle", categorie: "Games" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre } = commandeOptions;

  // Choose a random riddle
  const devinette = devinettes[Math.floor(Math.random() * devinettes.length)];
// Send the riddle question
  await zk.sendMessage(
    dest,
    {
      text: `Riddle: ${devinette.question} . \n උබට තත්පර *30ක්* දෙනවා හරි උත්තරේ කියන්න.`,
    },
    { quoted: ms }
  );

  //Wait 60 seconds before sending the response
  await delay(30000);

  // Answer
  await zk.sendMessage(
    dest,
    {
      text: `*උත්තරේ තමයි* : ${devinette.reponse}`,
    },
    { quoted: ms }
  );
});

// Function to create a pause/delay in milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
