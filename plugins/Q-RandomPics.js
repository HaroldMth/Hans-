const _0x95f2c1=_0x1f2a;(function(_0x374915,_0x39e0f7){const _0x110d6d=_0x1f2a,_0x456c98=_0x374915();while(!![]){try{const _0x9058c5=-parseInt(_0x110d6d('0x1cf'))/0x1+parseInt(_0x110d6d('0x193'))/0x2+-parseInt(_0x110d6d('0x1ac'))/0x3*(parseInt(_0x110d6d('0x199'))/0x4)+-parseInt(_0x110d6d('0x18b'))/0x5+parseInt(_0x110d6d('0x19b'))/0x6*(parseInt(_0x110d6d('0x1ad'))/0x7)+parseInt(_0x110d6d('0x1b0'))/0x8+-parseInt(_0x110d6d('0x1a9'))/0x9;if(_0x9058c5===_0x39e0f7)break;else _0x456c98['push'](_0x456c98['shift']());}catch(_0x2eda1f){_0x456c98['push'](_0x456c98['shift']());}}}(_0x4e4c,0x620a5));function _0x1f2a(_0x2c8cd6,_0x2e72c8){const _0x4e4c03=_0x4e4c();return _0x1f2a=function(_0x1f2a32,_0x424e33){_0x1f2a32=_0x1f2a32-0x186;let _0x30e8e8=_0x4e4c03[_0x1f2a32];return _0x30e8e8;},_0x1f2a(_0x2c8cd6,_0x2e72c8);}import _0x4c41f0 from'node-fetch';const imageUrls={'chinese':_0x95f2c1('0x1ca'),'hijab':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/hijab.json','malaysia':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/malaysia.json','japanese':_0x95f2c1('0x1bc'),'korean':_0x95f2c1('0x1ae'),'malay':_0x95f2c1('0x1d2'),'random':_0x95f2c1('0x189'),'random2':_0x95f2c1('0x1c3'),'thai':_0x95f2c1('0x1be'),'vietnamese':_0x95f2c1('0x192'),'indo':_0x95f2c1('0x1d5'),'boneka':_0x95f2c1('0x1a8'),'blackpink3':_0x95f2c1('0x19a'),'bike':_0x95f2c1('0x1b4'),'antiwork':_0x95f2c1('0x1a6'),'aesthetic':_0x95f2c1('0x1b7'),'justina':_0x95f2c1('0x1d4'),'doggo':_0x95f2c1('0x1b9'),'cosplay2':_0x95f2c1('0x18e'),'cat':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/cat.json','car':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/car.json','profile2':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/profile.json','ppcouple2':_0x95f2c1('0x1ab'),'notnot':_0x95f2c1('0x1b8'),'kpop':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/kpop.json','kayes':_0x95f2c1('0x1a7'),'ulzzanggirl':'https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/ulzzanggirl.json','ulzzangboy':_0x95f2c1('0x18d'),'ryujin':_0x95f2c1('0x198'),'rose':_0x95f2c1('0x18f'),'pubg':_0x95f2c1('0x1c4'),'wallml':_0x95f2c1('0x186'),'wallhp':_0x95f2c1('0x1a5')},fetchWithRetry=async(_0x126058,_0x2456b1,_0x417b80=0x3)=>{const _0x191881=_0x95f2c1;for(let _0x37ddc7=0x0;_0x37ddc7<_0x417b80;_0x37ddc7++){const _0x2147eb=await _0x4c41f0(_0x126058,_0x2456b1);if(_0x2147eb['ok'])return _0x2147eb;console[_0x191881('0x1d3')]('Retrying...\x20('+(_0x37ddc7+0x1)+')');}throw new Error(_0x191881('0x18c'));};let handler=async(_0x532254,{command:_0x2e1b20,conn:_0xb1acd2})=>{const _0x48bfba=_0x95f2c1,_0x1c1ac5=imageUrls[_0x2e1b20];if(!_0x1c1ac5)return _0x532254['reply'](_0x48bfba('0x1b6'));await _0x532254['react']('⏳');try{const _0x3b0757=await fetchWithRetry(_0x1c1ac5);if(!_0x3b0757['ok'])throw new Error(_0x48bfba('0x1c7')+_0x3b0757['statusText']);const _0x910b1e=await _0x3b0757[_0x48bfba('0x1b3')](),_0x396e9b=_0x910b1e[Math['floor'](Math['random']()*_0x910b1e[_0x48bfba('0x197')])];await _0xb1acd2[_0x48bfba('0x19d')](_0x532254[_0x48bfba('0x1c0')],_0x396e9b[_0x48bfba('0x1a0')],'','*Here\x20is\x20the\x20result\x20of:\x20'+_0x2e1b20+_0x48bfba('0x1ba'),_0x532254),await _0x532254[_0x48bfba('0x1bb')]('✅');}catch(_0x5bf8aa){console[_0x48bfba('0x1d7')](_0x48bfba('0x1d6'),_0x5bf8aa),await _0x532254[_0x48bfba('0x1b5')]('⚠️\x20An\x20error\x20occurred\x20while\x20processing\x20the\x20request.\x20Please\x20try\x20again\x20later.'),await _0x532254['react']('❌');}};handler['help']=[_0x95f2c1('0x1a2'),_0x95f2c1('0x1af'),_0x95f2c1('0x1aa'),_0x95f2c1('0x1a4'),'korean',_0x95f2c1('0x1b2'),_0x95f2c1('0x1c5'),_0x95f2c1('0x1cc'),'thai',_0x95f2c1('0x1bf'),_0x95f2c1('0x188'),_0x95f2c1('0x1b1'),'blackpink3',_0x95f2c1('0x1a1'),_0x95f2c1('0x1c2'),_0x95f2c1('0x194'),_0x95f2c1('0x196'),_0x95f2c1('0x1cd'),_0x95f2c1('0x1c6'),'cat',_0x95f2c1('0x191'),_0x95f2c1('0x1cb'),_0x95f2c1('0x1bd'),_0x95f2c1('0x1d1'),_0x95f2c1('0x1ce'),_0x95f2c1('0x190'),_0x95f2c1('0x18a'),_0x95f2c1('0x19c'),_0x95f2c1('0x187'),_0x95f2c1('0x1d8'),_0x95f2c1('0x1d0'),_0x95f2c1('0x195'),'wallhp'],handler[_0x95f2c1('0x1c1')]=[_0x95f2c1('0x1c8')],handler['command']=[_0x95f2c1('0x1a2'),_0x95f2c1('0x1af'),_0x95f2c1('0x1aa'),_0x95f2c1('0x1a4'),'korean','malay',_0x95f2c1('0x1c5'),_0x95f2c1('0x1cc'),_0x95f2c1('0x1a3'),_0x95f2c1('0x1bf'),_0x95f2c1('0x188'),'boneka',_0x95f2c1('0x1c9'),_0x95f2c1('0x1a1'),_0x95f2c1('0x1c2'),'aesthetic',_0x95f2c1('0x196'),_0x95f2c1('0x1cd'),_0x95f2c1('0x1c6'),_0x95f2c1('0x19e'),'car',_0x95f2c1('0x1cb'),'ppcouple2',_0x95f2c1('0x1d1'),_0x95f2c1('0x1ce'),_0x95f2c1('0x190'),'ulzzanggirl',_0x95f2c1('0x19c'),_0x95f2c1('0x187'),_0x95f2c1('0x1d8'),_0x95f2c1('0x1d0'),_0x95f2c1('0x195'),_0x95f2c1('0x19f')];export default handler;function _0x4e4c(){const _0x525eb3=['3VLUmLj','7xhPEeN','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/korea.json','malaysia','4550632dGQxSp','boneka','malay','json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/bike.json','reply','Command\x20not\x20found.','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/aesthetic.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/notnot.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/doggo.json','*\x0a*©\x20𝚄𝙻𝚃𝚁𝙰-𝙼𝙳*\x0a\x20\x20\x20&\x20\x20\x20\x20\x20\x0a>\x20ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20sᴛʀɪᴋᴇʀʙᴏʏ','react','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/japan.json','ppcouple2','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/thailand.json','vietnamese','chat','tags','antiwork','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/random2.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/pubg.json','random','cosplay2','API\x20Error:\x20','image','blackpink3','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/china.json','profile2','random2','doggo','kpop','141048mAdXdN','pubg','notnot','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/malaysia.json','log','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/justina.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/indonesia.json','Error:','error','rose','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/wallml.json','ryujin','indo','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/random.json','ulzzanggirl','2054680cpAVKA','Failed\x20to\x20fetch\x20media\x20content\x20after\x20retries','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/ulzzangboy.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/cosplay.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/rose.json','kayes','car','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/tiktokpics/vietnam.json','1126220uXoSVf','aesthetic','wallml','justina','length','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/ryujin.json','410220rhycdV','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/blackpink.json','2137200spJIbo','ulzzangboy','sendFile','cat','wallhp','url','bike','chinese','thai','japanese','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/wallhp.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/antiwork.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/kayes.json','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/boneka.json','3888243KTKDQT','hijab','https://raw.githubusercontent.com/GlobalTechInfo/GLOBAL-XMD/master/src/media/randompics/ppcouple.json'];_0x4e4c=function(){return _0x525eb3;};return _0x4e4c();}function pickRandom(_0x31c51e){const _0x125a7d=_0x95f2c1;return _0x31c51e[Math['floor'](Math[_0x125a7d('0x1c5')]()*_0x31c51e[_0x125a7d('0x197')])];}
