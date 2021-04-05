window.addEventListener("load", function(){

  const contents_all = [
    ["2020/09/26", "https://twitter.com/i/events/1337327415551397888", "江東区塩浜⇒豊洲⇒お台場⇒有明⇒東雲⇒辰巳", "17.51km", "https://pbs.twimg.com/media/Ei0sXZZUMAI6CKM?format=jpg&name=small"], 
    ["2020/09/27", "https://twitter.com/i/events/1337329063313121284", "塩浜⇒葛西⇒ディズニーランド", "28.33km", "https://pbs.twimg.com/media/Eo8mLr-VoAAh6YF?format=png&name=small"], 
    ["2020/09/28", "https://twitter.com/i/events/1337330422351503361", "塩浜⇒枝川⇒豊洲⇒月島⇒門前仲町⇒塩浜", "8.48km", "https://pbs.twimg.com/media/Eo8nIFLU8AAFNgO?format=png&name=small"], 
    ["2020/09/29", "https://twitter.com/i/events/1337331026637438977", "見どころなしのぶらぶら散歩", "8.55km", "https://pbs.twimg.com/media/Eo8nuanU8AAF0S6?format=png&name=small"], 
    ["2020/09/30", "https://twitter.com/i/events/1337331548429799424", "見どころなしのぶらぶら散歩", "8.11km", "https://pbs.twimg.com/media/EjJUvzaUMAE3QJn?format=jpg&name=small"], 
    ["2020/10/01", "https://twitter.com/i/events/1337332258244419587", "豊洲⇒築地⇒越中島", "9.33km", "https://pbs.twimg.com/media/EjONxVKVoAUCqhL?format=jpg&name=small"], 
    ["2020/10/02", "https://twitter.com/i/events/1337332945560825862", "江東区ぶらぶら散歩", "8.47km", "https://pbs.twimg.com/media/Eo8pZI9VEAEJfbI?format=png&name=small"], 
    ["2020/10/03", "https://twitter.com/i/events/1337333434855747586", "南大沢⇒墓掃除⇒町田市小山田（農村）⇒多摩市唐木田", "13.3km", "https://pbs.twimg.com/media/EjZRaWlU8AEINpZ?format=jpg&name=small"], 
    ["2020/10/04", "https://twitter.com/i/events/1337333998637338624", "木場⇒東京スカイツリー⇒亀有⇒葛西", "33.91km", "https://pbs.twimg.com/media/Eje98YPUcAE3yhN?format=jpg&name=small"], 
    ["2020/10/05", "https://twitter.com/i/events/1337335741894955009", "門前仲町周辺ぶらぶら", "7.01km", "https://pbs.twimg.com/media/EjiGMQBUcAAZduh?format=jpg&name=small"], 
    ["2020/10/06", "https://twitter.com/i/events/1337336107273388032", "塩浜⇒夢の島⇒東雲⇒辰巳⇒塩浜塩浜⇒夢の島⇒東雲⇒辰巳⇒塩浜", "9.01km", "https://pbs.twimg.com/media/EjnWLwuVkAAAcFF?format=jpg&name=small"], 
    ["2020/10/07", "https://twitter.com/i/events/1337336527416741893", "千歳烏山⇒京王線沿線⇒新宿", "13.05km", "https://pbs.twimg.com/media/EjuGNiIU0AE9MvF?format=jpg&name=small"], 
    ["2020/10/08", "https://twitter.com/i/events/1337337369754648576", "門前仲町⇒清澄白川⇒高橋のらくろード", "7.94km", "https://pbs.twimg.com/media/EjxhOjkU8AYIk8c?format=jpg&name=small"], 
    ["2020/10/09", "https://twitter.com/i/events/1337337801579237381", "塩浜⇒東陽町⇒錦糸町⇒塩浜", "8.95km", "https://pbs.twimg.com/media/Ej2tH8tVoAE7nQt?format=jpg&name=small"], 
    ["2020/10/10", "https://twitter.com/i/events/1337338503802208256", "塩浜⇒門前仲町⇒日本橋⇒八丁堀⇒塩浜", "9.22km", "https://pbs.twimg.com/media/Ej73zO_VoAAVRbO?format=jpg&name=small"], 
    ["2020/10/11", "https://twitter.com/i/events/1337338803426480128", "塩浜⇒月島⇒築地⇒川崎⇒横浜みなとみらい⇒根岸", "46.18km", "https://pbs.twimg.com/media/EkGvfjtUYAIoqNN?format=jpg&name=small"], 
    ["2020/10/12", "https://twitter.com/i/events/1337340141837303808", "塩浜⇒豊洲ぐるり散歩", "9.69km", "https://pbs.twimg.com/media/EkGSRFSU8AA25rJ?format=jpg&name=small"], 
    ["2020/10/13", "https://twitter.com/i/events/1337340585892433921", "塩浜⇒東陽町⇒砂町銀座商店街", "7.91km", "https://pbs.twimg.com/media/EkL9V2jU4AA1361?format=jpg&name=small"], 
    ["2020/10/14", "https://twitter.com/i/events/1337340909009047552", "塩浜⇒潮見⇒東雲", "8.81km", "https://pbs.twimg.com/media/EkQ2nAnU4AI6LlF?format=jpg&name=small"], 
    ["2020/10/15", "https://twitter.com/i/events/1337341304733278209", "塩浜⇒門前仲町⇒日本橋・人形町", "8.47km", "https://pbs.twimg.com/media/EkWKH7_UcAYlr4P?format=jpg&name=small"], 
    ["2020/10/16", "https://twitter.com/i/events/1337341668937220096", "塩浜⇒月島⇒佃島", "9km", "https://pbs.twimg.com/media/EkbGFhVUYAE6C6X?format=jpg&name=small"], 
    ["2020/10/17", "https://twitter.com/i/events/1337342968512933889", "塩浜⇒門前仲町⇒日本橋", "8.51km", "https://pbs.twimg.com/media/EkfKDWiU0AAudKf?format=jpg&name=medium"], 
    ["2020/10/18", "https://twitter.com/i/events/1337343333820055552", "江東区⇒鳩の街⇒玉ノ井⇒埼玉県春日部", "47.6km", "https://pbs.twimg.com/media/Ekl13uPVMAINWmA?format=jpg&name=small"], 
    ["2020/10/19", "https://twitter.com/i/events/1337344404076445699", "塩浜⇒荒川？⇒東砂⇒南砂", "8.76km", "https://pbs.twimg.com/media/EkuARuZU8AEbQw6?format=jpg&name=small"], 
    ["2020/10/20", "https://twitter.com/i/events/1337344686973808641", "塩浜⇒豊洲⇒晴海埠頭", "9.03km", "https://pbs.twimg.com/media/Ekwo-YwUUAE1tuD?format=jpg&name=small"], 
    ["2020/10/20", "https://twitter.com/i/events/1337345180286926851", "塩浜⇒秋葉原⇒塩浜", "15.8km", "https://pbs.twimg.com/media/Ek1NZCDUYAAV1PF?format=jpg&name=small"], 
    ["2020/10/21", "https://twitter.com/i/events/1337345819083587585", "江東区塩浜⇒墨田区緑", "8.76km", "https://pbs.twimg.com/media/Ek1uPbuUcAAgzX-?format=jpg&name=small"], 
    ["2020/10/22", "https://twitter.com/i/events/1337346700231393280", "江東区塩浜⇒新木場ぐるり散歩", "11.57km", "https://pbs.twimg.com/media/Ek6cwYFUYAA2hOZ?format=jpg&name=small"], 
    ["2020/10/23", "https://twitter.com/i/events/1337347466576842752", "江東区塩浜⇒錦糸町⇒さまよい散歩", "10.59km", "https://pbs.twimg.com/media/ElAEkbeUUAAdlvF?format=jpg&name=small"], 
    ["2020/10/24", "https://twitter.com/i/events/1337347806395125761", "江東区塩浜⇒豊洲ぐるり公園一周", "10.11km", "https://pbs.twimg.com/media/ElEoa7wUcAEdjDU?format=jpg&name=small"], 
    ["2020/10/25", "https://twitter.com/i/events/1337348260470476800", "江東区塩浜⇒千葉県ひたすら散歩", "50.25km", "https://pbs.twimg.com/media/ElJ6lGSVkAANLAA?format=jpg&name=small"], 
    ["2020/10/26", "https://twitter.com/i/events/1337349680947023872", "江東区塩浜⇒荒川河川敷", "8.46km", "https://pbs.twimg.com/media/ElO3xMfUUAAIyKa?format=jpg&name=small"], 
    ["2020/10/27", "https://twitter.com/i/events/1337350023361654784", "江東区塩浜⇒砂町銀座商店街周辺徘徊", "7.08km", "https://pbs.twimg.com/media/ElUrIbeUUAYQY0Z?format=jpg&name=small"], 
    ["2020/10/27", "https://twitter.com/i/events/1337350423905148928", "江東区塩浜⇒テックキャンプ丸の内校⇒江東区塩浜", "9.66km", "https://pbs.twimg.com/media/EtIZoFaVgAg4hZx?format=jpg&name=small"], 
    ["2020/10/28", "https://twitter.com/i/events/1337351146936049664", "江東区塩浜⇒若洲海浜公園", "11.93km", "https://pbs.twimg.com/media/ElXoEfeVcAAtx09?format=jpg&name=small"], 
    ["2020/10/29", "https://twitter.com/i/events/1337352042503831554", "江東区塩浜⇒門前仲町⇒清澄公園⇒隅田川テラス", "8.16km", "https://pbs.twimg.com/media/Elcsv2wVgAAV3f_?format=jpg&name=small"], 
    ["2020/10/30", "https://twitter.com/i/events/1337352533770027009", "江東区塩浜⇒豊洲⇒お台場海浜公園", "11km", "https://pbs.twimg.com/media/ElhyPRVU0AE_faD?format=jpg&name=small"], 
    ["2020/10/31", "https://twitter.com/i/events/1354240306762272772", "江東区⇒お台場⇒川崎⇒横浜", "105.73km", "https://pbs.twimg.com/media/ElsG8x1VoAArVIT?format=jpg&name=small"], 
    ["2020/11/02", "https://twitter.com/i/events/1353290182145961984", "江東区塩浜⇒荒川河川敷", "7.05km", "https://pbs.twimg.com/media/EsfbEa0VcAYkxJE?format=jpg&name=small"], 
    ["2020/11/03", "https://twitter.com/i/events/1353301133507190791", "南大沢⇒多摩丘陵⇒京王堀之内", "12.42km", "https://pbs.twimg.com/media/EsfkXUJUYBk0Gd9?format=jpg&name=small"], 
    ["2020/11/04", "https://twitter.com/i/events/1353303612328341504", "江東区塩浜⇒木場公園周辺", "6.65km", "https://pbs.twimg.com/media/EsfmqD5U4AAKvCz?format=jpg&name=small"], 
    ["2020/11/05", "https://twitter.com/i/events/1353304799500877825", "江東区塩浜⇒門前仲町周辺", "6.94km", "https://pbs.twimg.com/media/EsfnpoHUwAABotw?format=jpg&name=small"], 
    ["2020/11/05", "https://twitter.com/i/events/1353305404525043713", "江東区塩浜の夜景散歩", "--km", "https://pbs.twimg.com/media/EmD9RUeVkAAlqc8?format=jpg&name=small"], 
    ["2020/11/06", "https://twitter.com/i/events/1353306233466306561", "江東区塩浜⇒佃島⇒豊洲", "6.81km", "https://pbs.twimg.com/media/EsfpNtTUwAAj_Oa?format=jpg&name=small"], 
    ["2020/11/06", "https://twitter.com/i/events/1353306801354104832", "江東区塩浜の夜景散歩", "--km", "https://pbs.twimg.com/media/EmJIChZU0AAjKdi?format=jpg&name=small"], 
    ["2020/11/07", "https://twitter.com/i/events/1353307209447297025", "江東区塩浜の朝散歩", "--km", "https://pbs.twimg.com/media/EmK1hvtU0AAH2-B?format=jpg&name=small"], 
    ["2020/11/08", "https://twitter.com/i/events/1353307849418444803", "江東区荒川河口⇒荒川遡り⇒川越⇒荒川遡り⇒埼玉県籠原", "120.79km", "https://pbs.twimg.com/media/EsfwYD5VcAMpuaI?format=jpg&name=small"], 
    ["2020/11/09", "https://twitter.com/i/events/1353569055593009152", "江東区塩浜⇒門前仲町⇒日本橋箱崎", "10.68km", "https://pbs.twimg.com/media/EmVZOQCVkAA1dZm?format=jpg&name=small"], 
    ["2020/11/10", "https://twitter.com/i/events/1353569702702800899", "江東区塩浜⇒小名木川⇒北砂⇒南砂", "9.44km", "https://pbs.twimg.com/media/EmacDOOVoAATwcT?format=jpg&name=small"], 
    ["2020/11/11", "https://twitter.com/i/events/1353570438538948608", "江東区塩浜⇒千石⇒大島", "10.17km", "https://pbs.twimg.com/media/EmfiUwuVcAIx9WA?format=jpg&name=small"], 
    ["2020/11/12", "https://twitter.com/i/events/1353571154011721729", "江東区塩浜⇒大島⇒北砂⇒南砂", "10.3km", "https://pbs.twimg.com/media/Emk9Jd_U4AA3W3R?format=jpg&name=small"], 
    ["2020/11/13", "https://twitter.com/i/events/1353571762772971521", "江東区塩浜⇒豊洲市場裏側", "10.6km", "https://pbs.twimg.com/media/EmtA4IEUYAIlhgn?format=jpg&name=small"], 
    ["2020/11/14", "https://twitter.com/i/events/1353572605815480320", "江東区塩浜⇒亀戸⇒小松川⇒江戸川区⇒千葉ぶらぶら⇒江戸川⇒利根川", "111.76km", "https://pbs.twimg.com/media/EsjfgO_VEAABDnY?format=jpg&name=small"], 
    ["2020/11/16", "https://twitter.com/i/events/1353585908973363201", "江東区塩浜⇒隅田川テラス右岸", "8.68km", "https://pbs.twimg.com/media/Em8gHnFUUAAmUZQ?format=jpg&name=small"], 
    ["2020/11/17", "https://twitter.com/i/events/1353588007710810114", "江東区塩浜⇒豊洲⇒月島", "7.87km", "https://pbs.twimg.com/media/EnA4zurVEAEcnBZ?format=jpg&name=small"], 
    ["2020/11/18", "https://twitter.com/i/events/1353588738882850816", "江東区塩浜⇒清砂大橋⇒西葛西", "10.49km", "https://pbs.twimg.com/media/EnGAF9-VEAI90UI?format=jpg&name=small"], 
    ["2020/11/19", "https://twitter.com/i/events/1353590862828064768", "塩浜⇒富岡八幡宮⇒深川不動尊⇒隅田川テラス⇒洲崎神社", "8.46km", "https://pbs.twimg.com/media/EnLLwPpVkAAtQwH?format=jpg&name=small"], 
    ["2020/11/19", "https://twitter.com/i/events/1354250412656791558", "木場周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EnRREkDVoAEheKv?format=jpg&name=small"], 
    ["2020/11/20", "https://twitter.com/i/events/1353591464798810115", "塩浜⇒夢の島公園⇒東京辰巳国際水泳場⇒潮見さざなみ公園", "9.04km", "https://pbs.twimg.com/media/EnQP7SUVQAInYPR?format=jpg&name=small"], 
    ["2020/11/21", "https://twitter.com/i/events/1353593738002452486", "江東区塩浜⇒田園調布⇒二子玉川⇒若葉台⇒南大沢⇒多摩川", "106.14km", "https://pbs.twimg.com/media/EsjnHCCVEAE5RCu?format=jpg&name=small"], 
    ["2020/11/23", "https://twitter.com/i/events/1353608712099831815", "江東区塩浜⇒門前仲町⇒永代橋⇒昭和通り", "9.87km", "https://pbs.twimg.com/media/Enf2B1pUwAAfARO?format=jpg&name=small"], 
    ["2020/11/24", "https://twitter.com/i/events/1353609419163004928", "江東区塩浜⇒東京スカイツリー", "11.38km", "https://pbs.twimg.com/media/Enij89EVgAAbu3N?format=jpg&name=small"], 
    ["2020/11/25", "https://twitter.com/i/events/1353610189040017408", "江東区塩浜⇒門前仲町⇒高橋のらくろード⇒木場公園⇒仙台堀川公園⇒横十間川親水公園", "8.28km", "https://pbs.twimg.com/media/EnqEEWIVQAIBFHw?format=jpg&name=small"], 
    ["2020/11/26", "https://twitter.com/i/events/1353610998343589888", "江東区塩浜⇒豊洲⇒築地", "9.65km", "https://pbs.twimg.com/media/Env8VZRVoAU7P4t?format=jpg&name=small"], 
    ["2020/11/27", "https://twitter.com/i/events/1353612120374407174", "江東区塩浜⇒横十間川親水公園⇒仙台堀川公園⇒南砂三丁目公園", "9.18km", "https://pbs.twimg.com/media/En0S_YeVcAAa4bk?format=jpg&name=small"], 
    ["2020/11/27", "https://twitter.com/i/events/1353619153442099201", "潮見周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/En1HczoUcAE7sDT?format=jpg&name=small"], 
    ["2020/11/28", "https://twitter.com/i/events/1353619869770518528", "江東区塩浜⇒夢の島マリーナ⇒葛西臨海公園⇒ディズニーランド外周⇒東京スカイツリー⇒浅草⇒東京タワー", "60.62km", "https://pbs.twimg.com/media/EskIk0IVEAAdDjJ?format=jpg&name=small"], 
    ["2020/11/29", "https://twitter.com/i/events/1353623125091524613", "江東区塩浜⇒船堀⇒旧中川⇒末広通り商店街", "17.94km", "https://pbs.twimg.com/media/En-AyJDUYAET07q?format=jpg&name=small"], 
    ["2020/11/30", "https://twitter.com/i/events/1353632644722946048", "江東区塩浜⇒豊洲ぐるり公園⇒有明", "11.08km", "https://pbs.twimg.com/media/EoDtpxsVcAM9C5G?format=jpg&name=small"], 
    ["2020/12/01", "https://twitter.com/i/events/1353633956667682818", "江東区塩浜⇒荒川⇒中川⇒南砂緑道公園", "9.9km", "https://pbs.twimg.com/media/EoGcBPYVEAA-tfG?format=jpg&name=small"], 
    ["2020/12/02", "https://twitter.com/i/events/1353634768475197442", "江東区塩浜⇒豊洲⇒晴海埠頭", "9.76km", "https://pbs.twimg.com/media/EoOAi_WVkAALtJ0?format=jpg&name=small"], 
    ["2020/12/03", "https://twitter.com/i/events/1353635498711871488", "江東区塩浜⇒門前仲町⇒八丁堀", "9.09km", "https://pbs.twimg.com/media/EoTIQzYUwAExW3S?format=jpg&name=small"], 
    ["2020/12/04", "https://twitter.com/i/events/1353636050527117320", "江東区塩浜⇒荒川河川敷", "10.24km", "https://pbs.twimg.com/media/EoYXjTzUwAA8-6Y?format=jpg&name=small"], 
    ["2020/12/04", "https://twitter.com/i/events/1353670510496813057", "豊洲周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EoZVRgrUwAEoZwE?format=jpg&name=small"], 
    ["2020/12/05", "https://twitter.com/i/events/1353637209056788480", " 江東区塩浜⇒お台場⇒有明⇒皇居⇒六本木ヒルズ⇒渋谷⇒代田橋", "81.66km", "https://pbs.twimg.com/media/EskZWMuU4AEE-s-?format=jpg&name=small"], 
    ["2020/12/07", "https://twitter.com/i/events/1353650469172723715", "江東区塩浜⇒両国", "10.1km", "https://pbs.twimg.com/media/EontfWfUwAIa9gN?format=jpg&name=small"], 
    ["2020/12/08", "https://twitter.com/i/events/1353651255843799040", "若葉台⇒南大沢⇒町田市小山田⇒京王堀之内", "18.71km", "https://pbs.twimg.com/media/EoyGC0fU8AIQ1wp?format=jpg&name=small"], 
    ["2020/12/09", "https://twitter.com/i/events/1353652481331351554", "江東区塩浜⇒豊洲⇒晴海トリトンスクエア", "9.16km", "https://pbs.twimg.com/media/Eoy6y0vUYAA2q6I?format=jpg&name=small"], 
    ["2020/12/10", "https://twitter.com/i/events/1353653166684868609", "江東区塩浜⇒横十間川親水公園⇒猿江恩賜公園", "8.52km", "https://pbs.twimg.com/media/Eo3Pjh7VEAAR5pR?format=jpg&name=small"], 
    ["2020/12/11", "https://twitter.com/i/events/1337292013192921088", "江東区塩浜⇒石川島公園⇒佃公園⇒勝鬨橋", "8.48km", "https://pbs.twimg.com/media/Eo6P85fUwAAnltL?format=jpg&name=small"], 
    ["2020/12/11", "https://twitter.com/i/events/1353666124404015105", "木場公園周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/Eo9V1pvU8AE8fgr?format=jpg&name=small"], 
    ["2020/12/12", "https://twitter.com/i/events/1353654279966351361", "江東区塩浜⇒隅田川⇒板橋⇒川口⇒東村山⇒立川⇒武蔵国分寺公園⇒千歳烏山", "107.74km", "https://pbs.twimg.com/media/EskomCQVEAAxkJs?format=jpg&name=small"], 
    ["2020/12/14", "https://twitter.com/i/events/1353681255271862274", "江東区塩浜⇒木場公園⇒清澄白河", "6.66km", "https://pbs.twimg.com/media/EpMGerxUcAEO-Vv?format=jpg&name=small"], 
    ["2020/12/15", "https://twitter.com/i/events/1353681878490902531", "江東区塩浜⇒夢の島マリーナ⇒夢の島緑道公園", "9.49km", "https://pbs.twimg.com/media/EpRGRNKVoAASUA4?format=jpg&name=small"], 
    ["2020/12/16", "https://twitter.com/i/events/1353682611810390019", "江東区塩浜⇒豊洲⇒有明", "9.31km", "https://pbs.twimg.com/media/EpWNQQBUwAAQnqX?format=jpg&name=small"], 
    ["2020/12/17", "https://twitter.com/i/events/1353683284568416256", "江東区塩浜⇒東陽町⇒北砂", "6.34km", "https://pbs.twimg.com/media/EpbkYPdUcAElTp7?format=jpg&name=small"], 
    ["2020/12/17", "https://twitter.com/i/events/1353684149358346241", "江東区塩浜⇒南砂", "--km", "https://pbs.twimg.com/media/EpbpNzfU8AAAqVX?format=jpg&name=small"], 
    ["2020/12/18", "https://twitter.com/i/events/1353685844381470720", "江東区塩浜⇒門前仲町⇒清澄", "8.33km", "https://pbs.twimg.com/media/Epgi3rqUUAA59cv?format=jpg&name=small"], 
    ["2020/12/18", "https://twitter.com/i/events/1353686647527809025", "門前仲町周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EphgqlNVgAA9zSO?format=jpg&name=small"], 
    ["2020/12/19", "https://twitter.com/i/events/1353872829146533889", "江東区塩浜⇒浅草⇒上野⇒東京⇒六本木⇒川崎⇒高幡不動⇒高尾山口⇒永山", "107.12km", "https://pbs.twimg.com/media/EsnwqN3UYAAvj_V?format=jpg&name=small"], 
    ["2020/12/21", "https://twitter.com/i/events/1353882867034595328", "江東区塩浜⇒東陽町⇒南砂", "5.65km", "https://pbs.twimg.com/media/Epv4H7yVgAE_rCG?format=jpg&name=small"], 
    ["2020/12/22", "https://twitter.com/i/events/1353883440576270337", "江東区塩浜⇒潮見⇒辰巳", "8.84km", "https://pbs.twimg.com/media/Ep1C3WCUUAAA79D?format=jpg&name=small"], 
    ["2020/12/23", "https://twitter.com/i/events/1353884188114522113", "江東区塩浜⇒東陽町⇒北砂⇒南砂", "8.08km", "https://pbs.twimg.com/media/Ep6N6geU0AEE-DT?format=jpg&name=small"], 
    ["2020/12/24", "https://twitter.com/i/events/1353885184068775937", "江東区塩浜⇒深川資料館通り商店街⇒木場公園", "7.11km", "https://pbs.twimg.com/media/Ep_R1qLVgAAAGV1?format=jpg&name=small"], 
    ["2020/12/25", "https://twitter.com/i/events/1353885863202091008", "江東区塩浜⇒豊洲ぐるり公園", "11.01km", "https://pbs.twimg.com/media/EqFTVvWVoAAa6Ih?format=jpg&name=small"], 
    ["2020/12/26", "https://twitter.com/i/events/1353922543590096896", "長野県茅野⇒蔦木宿⇒山梨県初狩", "94.48km", "https://pbs.twimg.com/media/EsocR_iUcAEhA7L?format=jpg&name=small"], 
    ["2020/12/28", "https://twitter.com/i/events/1353926095330897922", "江東区塩浜⇒西葛西", "13.92km", "https://pbs.twimg.com/media/EqYM62GUcAEdCMK?format=jpg&name=small"], 
    ["2020/12/29", "https://twitter.com/i/events/1353926985014153216", "江東区塩浜⇒荒川河川敷", "10.6km", "https://pbs.twimg.com/media/EqZBianUUAE0Ua9?format=jpg&name=small"], 
    ["2020/12/30", "https://twitter.com/i/events/1353927604605050880", "江東区塩浜⇒築地⇒築地本願寺", "9.5km", "https://pbs.twimg.com/media/Eqb99vUVoAApyZa?format=jpg&name=small"], 
    ["2020/12/30", "https://twitter.com/i/events/1353928517952528385", "豊洲周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EqfPCAjUYAARhjL?format=jpg&name=small"], 
    ["2020/12/31", "https://twitter.com/i/events/1353931203586322433", "江東区塩浜⇒霞ヶ浦⇒下総神崎", "113.61km", "https://pbs.twimg.com/media/EsolUH2U4AAkKoQ?format=jpg&name=small"], 
    ["2021/01/02", "https://twitter.com/i/events/1353936460060139521", "江東区塩浜⇒門前仲町⇒永代橋", "6.54km", "https://pbs.twimg.com/media/EqtsLy7VoAE5q0s?format=jpg&name=small"], 
    ["2021/01/03", "https://twitter.com/i/events/1353937186685521920", "若葉台⇒町田市小山田⇒南大沢", "17.1km", "https://pbs.twimg.com/media/Eq3NPJUUUAAFeIy?format=jpg&name=small"], 
    ["2021/01/04", "https://twitter.com/i/events/1353938836489793536", "江東区塩浜⇒東陽町⇒北砂⇒南砂", "9.4km", "https://pbs.twimg.com/media/Eq37tMDUwAEIgFV?format=jpg&name=small"], 
    ["2021/01/05", "https://twitter.com/i/events/1353939313017319424", "江東区塩浜⇒豊洲⇒月島", "7.78km", "https://pbs.twimg.com/media/Eq9HBIgVgAAi6u1?format=jpg&name=small"], 
    ["2021/01/06", "https://twitter.com/i/events/1353940222933798913", "江東区塩浜⇒人形町⇒ハローワーク木場", "8.65km", "https://pbs.twimg.com/media/ErCSYM9VEAAji5L?format=jpg&name=small"], 
    ["2021/01/07", "https://twitter.com/i/events/1353941468029706241", "江東区塩浜⇒新砂運動場", "7.91km", "https://pbs.twimg.com/media/ErHfpvqUYAc4LI0?format=jpg&name=small"], 
    ["2021/01/08", "https://twitter.com/i/events/1353942482677993472", "江東区塩浜⇒豊洲⇒有明⇒東京ビッグサイト", "9.95km", "https://pbs.twimg.com/media/ErMmnYNVcAUax1g?format=jpg&name=small"], 
    ["2021/01/08", "https://twitter.com/i/events/1353944842292719621", "東陽町周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/ErNilQuUUAEJlEz?format=jpg&name=small"], 
    ["2021/01/09", "https://twitter.com/i/events/1353947357545603072", "江東区塩浜⇒両国⇒足立区⇒春日部⇒川越⇒荒川⇒王子", "102.85km", "https://pbs.twimg.com/media/Eso0Jl6VcAENknd?format=jpg&name=small"], 
    ["2021/01/11", "https://twitter.com/i/events/1353954776531181568", "江東区塩浜⇒晴海埠頭⇒豊洲", "9.51km", "https://pbs.twimg.com/media/ErcEOdKVgAIi5xu?format=jpg&name=small"], 
    ["2021/01/12", "https://twitter.com/i/events/1353955994452168705", "江東区塩浜⇒荒川⇒中川（西葛西）", "9.86km", "https://pbs.twimg.com/media/ErhGVJiVcAMJuxF?format=jpg&name=small"], 
    ["2021/01/13", "https://twitter.com/i/events/1353956636801437697", "烏山駅前通り商店街⇒烏山寺町⇒烏山病院", "4.93km", "https://pbs.twimg.com/media/ErqsKepVoAE6xhC?format=jpg&name=small"], 
    ["2021/01/14", "https://twitter.com/i/events/1353958077460963328", "江東区塩浜⇒菊川⇒住吉⇒猿江⇒千石", "8.96km", "https://pbs.twimg.com/media/Errf9Q6U0AIHZiA?format=jpg&name=small"], 
    ["2021/01/15", "https://twitter.com/i/events/1353960413570863104", "江東区塩浜⇒千石⇒住吉⇒錦糸町", "8.87km", "https://pbs.twimg.com/media/ErwrJkwUwAIvu_5?format=jpg&name=small"], 
    ["2021/01/15", "https://twitter.com/i/events/1353962179330854912", "門前仲町周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/ErxjlR2VkAErI18?format=jpg&name=small"], 
    ["2021/01/16", "https://twitter.com/i/events/1353963263160008705", "江東区塩浜⇒市川⇒船橋⇒八千代⇒四街道⇒佐倉⇒酒々井町（往復）", "115.04km", "https://pbs.twimg.com/media/EspB3zNVEAAY9NL?format=jpg&name=small"], 
    ["2021/01/18", "https://twitter.com/i/events/1353968604031508485", "江東区塩浜⇒豊洲", "7.4km", "https://pbs.twimg.com/media/EsAG9QnWMAIIg1h?format=jpg&name=small"], 
    ["2021/01/19", "https://twitter.com/i/events/1353969816764256256", "江東区塩浜⇒東陽町⇒猿江恩賜公園⇒小名木川", "9.57km", "https://pbs.twimg.com/media/EsFPJQiVgAEMuMy?format=jpg&name=small"], 
    ["2021/01/20", "https://twitter.com/i/events/1353971198753824769", "江東区塩浜⇒豊洲⇒東京テレポート⇒東京ビッグサイト", "14.51km", "https://pbs.twimg.com/media/EsLScjEVkAAhvfD?format=jpg&name=small"], 
    ["2021/01/21", "https://twitter.com/i/events/1353972609298223105", "江東区塩浜⇒高橋のらくろード⇒森下⇒菊川", "9.64km", "https://pbs.twimg.com/media/EsPe0LfUcAcV3jP?format=jpg&name=small"], 
    ["2021/01/22", "https://twitter.com/i/events/1353974028541644801", "江東区塩浜⇒南砂⇒東砂⇒荒川河川敷", "10.85km", "https://pbs.twimg.com/media/EsUzoMYVoAMaHN9?format=jpg&name=small"], 
    ["2021/01/22", "https://twitter.com/i/events/1353975103550156801", "東京⇒門前仲町", "--km", "https://pbs.twimg.com/media/EsUoC7WUYAUx9Qr?format=jpg&name=small"], 
    ["2021/01/22", "https://twitter.com/i/events/1353975673677701120", "潮見周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EsVyhTeVoAAERqp?format=jpg&name=small"], 
    ["2021/01/23", "https://twitter.com/i/events/1353985349974822912", "江東区塩浜⇒豊洲⇒芝公園⇒麻布⇒子安⇒横浜⇒みなとみらい", "40km", "https://pbs.twimg.com/media/EspUwSIVcAArBsV?format=jpg&name=small"], 
    ["2021/01/24", "https://twitter.com/i/events/1353990597862805504", "江東区塩浜⇒門前仲町⇒木場公園⇒千石", "9.06km", "https://pbs.twimg.com/media/EspaXOqUwAA4UNA?format=jpg&name=small"], 
    ["2021/01/25", "https://twitter.com/i/events/1353994657751949312", "江東区塩浜⇒豊洲⇒辰巳⇒東雲", "8.8km", "https://pbs.twimg.com/media/EspdVoHVcAAgL4c?format=jpg&name=small"], 
    ["2021/01/26", "https://twitter.com/i/events/1353997708202188800", "江東区塩浜⇒夢の島マリーナ⇒夢の島緑道公園", "9.87km", "https://pbs.twimg.com/media/EspfUtrVkAEsRQl?format=jpg&name=small"], 
    ["2021/01/27", "https://twitter.com/i/events/1354313322238070786", "江東区塩浜⇒錦糸町⇒東京スカイツリー周辺", "11.09km", "https://pbs.twimg.com/media/EssQ0QXUUAApfOC?format=jpg&name=small"], 
    ["2021/01/28", "https://twitter.com/i/events/1354576277756289026", "江東区塩浜⇒越中島⇒石川島公園⇒佃公園", "10.29km", "https://pbs.twimg.com/media/EsxWzNcVoAcmWq7?format=jpg&name=small"], 
    ["2021/01/29", "https://twitter.com/i/events/1354980469750726658", "江東区塩浜⇒木場公園⇒菊川⇒東京都現代美術館", "8.73km", "https://pbs.twimg.com/media/Es2XvxHVoAAvNfq?format=jpg&name=small"], 
    ["2021/01/29", "https://twitter.com/i/events/1356053457971466241", "石川島公園周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/Es5zkz_VgAUYVQh?format=jpg&name=small"], 
    ["2021/01/30", "https://twitter.com/i/moments/1356058605661814785", "江東区塩浜⇒大久保⇒玉川上水⇒あきる野市⇒立川⇒千歳烏山⇒代々木公園⇒東京", "114.62km", "https://pbs.twimg.com/media/EtG3BPaUcAc8RWu?format=jpg&name=small"], 
    ["2021/02/01", "https://twitter.com/i/events/1356099435869073411", "江東区塩浜⇒南砂⇒砂町銀座商店街周辺", "7.23km", "https://pbs.twimg.com/media/EtF9H7FU4AEddtD?format=jpg&name=small"], 
    ["2021/02/02", "https://twitter.com/i/events/1356391854850273281", "江東区塩浜⇒門前仲町⇒永代橋", "5.67km", "https://pbs.twimg.com/media/EtK538nVoAIm33Z?format=jpg&name=small"], 
    ["2021/02/03", "https://twitter.com/i/events/1356780849383968769", "江東区塩浜⇒江戸資料館⇒日本橋⇒ハローワーク木場", "11.08km", "https://pbs.twimg.com/media/EtQWb_rVkAAE_uS?format=jpg&name=small"], 
    ["2021/02/04", "https://twitter.com/i/events/1357112213232709633", "江東区塩浜⇒北砂⇒小名木川⇒菊川", "9.38km", "https://pbs.twimg.com/media/EtVY4V_UUAAC3AK?format=jpg&name=small"], 
    ["2021/02/05", "https://twitter.com/i/events/1357502095126007808", "江東区塩浜⇒夢の島マリーナ⇒若洲海浜公園", "13.38km", "https://pbs.twimg.com/media/Etak_PpVkAAEJph?format=jpg&name=small"], 
    ["2021/02/05", "https://twitter.com/i/events/1357808250062737408", "辰巳周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/Etd2_IUVEAA5yST?format=jpg&name=small"], 
    ["2021/02/06", "https://twitter.com/i/events/1358584591376732162", "江東区塩浜⇒江戸川区⇒八潮⇒流山⇒野田⇒春日部⇒足立区⇒中央区", "121.62km", "https://pbs.twimg.com/media/EtqtvBBVoAI3bMB?format=jpg&name=small"], 
    ["2021/02/08", "https://twitter.com/i/events/1358590962352590848", "江東区塩浜⇒越中島発着所⇒隅田川テラス⇒木場親水公園", "9.99km", "https://pbs.twimg.com/media/EtqHhyhVkAA1l4w?format=jpg&name=small"], 
    ["2021/02/09", "https://twitter.com/i/events/1359019551430639621", "若葉台⇒多摩センター⇒長池見附橋⇒小山田⇒南大沢", "20.22km", "https://pbs.twimg.com/media/EtvNrreUYAEMNKv?format=jpg&name=small"], 
    ["2021/02/10", "https://twitter.com/i/events/1359312918836174852", "江東区塩浜⇒豊洲⇒有明⇒お台場", "15.15km", "https://pbs.twimg.com/media/Et0U1BoVIAIPElP?format=jpg&name=small"], 
    ["2021/02/11", "https://twitter.com/i/events/1359649836706926593", "江東区塩浜⇒茅場町⇒日本橋⇒東京", "12.38km", "https://pbs.twimg.com/media/Et5cIphU0AE5NcS?format=jpg&name=small"], 
    ["2021/02/12", "https://twitter.com/i/events/1360039608810000384", "江東区塩浜⇒西大島⇒住吉", "10.56km", "https://pbs.twimg.com/media/Et-mWZDVoAI2VKL?format=jpg&name=small"],
    ["2021/02/12", "https://twitter.com/i/events/1361262467842674688", "荒川・清砂大橋周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EuB6QbRVkAUHX_I?format=jpg&name=small"], 
    ["2021/02/13", "https://twitter.com/i/events/1361263661231210499", "江東区塩浜⇒旧東海道⇒横浜⇒停電⇒中華街⇒浮島【1】", "113.82km", "https://pbs.twimg.com/media/EuQ3eiqVgAAs3bl?format=jpg&name=small"], 
    ["2021/02/13", "https://twitter.com/i/events/1363699918171348994", "江東区塩浜⇒旧東海道⇒横浜⇒停電⇒中華街⇒浮島【2】", "113.82km", "https://pbs.twimg.com/media/EuzXhpcVcAMeIOf?format=jpg&name=small"], 
    ["2021/02/15", "https://twitter.com/i/events/1361274426914787328", "江東区塩浜⇒潮見⇒辰巳", "9.56km", "https://pbs.twimg.com/media/EuN1faZVEAA1GE_?format=jpg&name=small"], 
    ["2021/02/16", "https://twitter.com/i/events/1361462212720664576", "江東区塩浜⇒荒川河川敷", "11.45km", "https://pbs.twimg.com/media/EuTI1_xVcAIBHa2?format=jpg&name=small"], 
    ["2021/02/17", "https://twitter.com/i/events/1362009386768420864", "江東区塩浜⇒葛西臨海公園⇒ディズニーランド", "11.97km", "https://pbs.twimg.com/media/EuYg6anVgAIdfHm?format=jpg&name=small"], 
    ["2021/02/17", "https://twitter.com/i/events/1362011653529690118", "新木場・潮見周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/Eua2TRVUUAIDSlk?format=jpg&name=small"], 
    ["2021/02/18", "https://twitter.com/i/events/1362179418060320768", "江東区塩浜⇒木場公園⇒清洲白川⇒猿江恩賜公園", "10.37km", "https://pbs.twimg.com/media/Euder8kVoAEXXnn?format=jpg&name=small"], 
    ["2021/02/19", "https://twitter.com/i/events/1362563447364313089", "江東区塩浜⇒豊洲⇒築地⇒佃島", "11.05km", "https://pbs.twimg.com/media/Euirz2KU4AIRB1k?format=jpg&name=small"], 
    ["2021/02/19", "https://twitter.com/i/events/1363658110347272192", "豊洲・晴海トリトンスクエア周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EumDEFNVEAMqb16?format=jpg&name=small"], 
    ["2021/02/20", "https://twitter.com/i/events/1363676956512849920", "江東区塩浜⇒幕張⇒京葉工業地域【1】", "128.68km", "https://pbs.twimg.com/media/EuzCwVpVIAIugCl?format=jpg&name=small"], 
    ["2021/02/20", "https://twitter.com/i/events/1363679170090336257", "江東区塩浜⇒幕張⇒京葉工業地域【2】", "128.68km", "https://pbs.twimg.com/media/EuzEk6eVIAMzb_h?format=jpg&name=small"], 
    ["2021/02/22", "https://twitter.com/i/events/1363684220200099840", "江東区塩浜⇒東京スカイツリー", "11.98km", "https://pbs.twimg.com/media/EuyCBxvVcAE11U1?format=jpg&name=small"], 
    ["2021/02/23", "https://twitter.com/i/events/1364083795910008839", "江東区塩浜⇒東京駅⇒門前仲町", "13.58km", "https://pbs.twimg.com/media/Eu3O6DtUUAEhaEl?format=jpg&name=small"], 
    ["2021/02/24", "https://twitter.com/i/events/1364351975945433090", "江東区塩浜⇒豊洲ぐるり公園", "11.42km", "https://pbs.twimg.com/media/Eu8alAJVcAM70CY?format=jpg&name=small"], 
    ["2021/02/25", "https://twitter.com/i/events/1364749311892856834", "江東区塩浜⇒荒川河川敷⇒小松川公園⇒江東区役所", "17.48km", "https://pbs.twimg.com/media/EvBmi4hUcAQIKib?format=jpg&name=small"], 
    ["2021/02/26", "https://twitter.com/i/events/1365074637428678657", "江東区塩浜⇒白河⇒森川⇒木場", "9.32km", "https://pbs.twimg.com/media/EvGsxxjVkAE4WgW?format=jpg&name=small"], 
    ["2021/02/27", "https://twitter.com/i/events/1366281719385522182", "つくば駅⇒筑波山⇒つくば市内観光", "23.09km", "https://pbs.twimg.com/media/EvYF1EwU4AERx6C?format=jpg&name=small"], 
    ["2021/02/28", "https://twitter.com/i/events/1366286788046688256", "江東区塩浜⇒門前仲町⇒浅草⇒東京スカイツリー", "24.48km", "https://pbs.twimg.com/media/EvYMcbOVcAA2i8i?format=jpg&name=small"], 
    ["2021/03/01", "https://twitter.com/i/events/1366295478422265860", "江東区塩浜⇒晴海⇒豊海⇒築地⇒銀座⇒国税局", "19.31km", "https://pbs.twimg.com/media/EvWiQ4HU4AAlFM2?format=jpg&name=small"], 
    ["2021/03/02", "https://twitter.com/i/events/1366524892888240133", "江東区塩浜⇒木場公園⇒横十間川親水公園", "8.96km", "https://pbs.twimg.com/media/EvbW7sMVEAAnU0s?format=jpg&name=small"], 
    ["2021/03/03", "https://twitter.com/i/events/1366966833048215555", "江東区塩浜⇒日本橋⇒人形町⇒ハローワーク木場", "10.81km", "https://pbs.twimg.com/media/EvgWMxYVIAIy-I5?format=jpg&name=small"], 
    ["2021/03/04", "https://twitter.com/i/events/1367408149896982529", "江東区塩浜⇒東陽町⇒葛西橋⇒南砂", "10.24km", "https://pbs.twimg.com/media/EvlVWAJVEAEQMzK?format=jpg&name=small"], 
    ["2021/03/05", "https://twitter.com/i/events/1367762797778530304", "江東区塩浜⇒東雲水辺公園⇒辰巳桜橋⇒辰巳の森", "9.83km", "https://pbs.twimg.com/media/EvqvG5uVgAQBa6a?format=jpg&name=small"], 
    ["2021/03/05", "https://twitter.com/i/events/1368777977928974336", "豊洲周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EvuGfdiUUAYAqjF?format=jpg&name=small"], 
    ["2021/03/06", "https://twitter.com/i/events/1368781060339769349", "江東区塩浜⇒皇居⇒東小金井⇒多摩湖・狭山湖⇒練馬⇒東大⇒秋葉原", "124.41km", "https://pbs.twimg.com/media/Ev7r-EMVgAQSmC0?format=jpg&name=small"], 
    ["2021/03/08", "https://twitter.com/i/events/1368792270829326341", "江東区塩浜⇒荒川河川敷⇒南砂", "10.46km", "https://pbs.twimg.com/media/Ev6FiX-VEAAN4HY?format=jpg&name=small"], 
    ["2021/03/09", "https://twitter.com/i/events/1369441781927010304", "江東区塩浜⇒八丁堀⇒皇居⇒日比谷公園⇒新橋", "17.22km", "https://pbs.twimg.com/media/EwE_halWYAUOtIs?format=jpg&name=small"], 
    ["2021/03/09", "https://twitter.com/i/events/1369445971109638144", "築地⇒月島⇒豊洲⇒お台場", "28.33km", "https://pbs.twimg.com/media/EwFClk2WEAUQ8Qu?format=jpg&name=small"], 
    ["2021/03/10", "https://twitter.com/i/events/1369449593440722947", "江東区塩浜⇒夢の島マリーナ⇒新木場緑道公園", "10.22km", "https://pbs.twimg.com/media/EwEfEX0WYAE-HOD?format=jpg&name=small"], 
    ["2021/03/11", "https://twitter.com/i/events/1369785244275023874", "江東区塩浜⇒砂町銀座商店街⇒南砂", "9.45km", "https://pbs.twimg.com/media/EwJpXodUYAYcZhn?format=jpg&name=small"], 
    ["2021/03/12", "https://twitter.com/i/events/1370253652099694593", "江東区塩浜⇒豊洲ぐるり公園", "12.92km", "https://pbs.twimg.com/media/EwOpi5dVIAI49pt?format=jpg&name=small"], 
    ["2021/03/12", "https://twitter.com/i/events/1370255964356571136", "江東区塩浜⇒東京⇒秋葉原⇒日本橋", "--km", "https://pbs.twimg.com/media/EwPKuynVEAAxEzf?format=jpg&name=small"], 
    ["2021/03/12", "https://twitter.com/i/events/1371008341053304834", "晴海・豊海周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/EwSMOoNVkAIeiyB?format=jpg&name=small"], 
    ["2021/03/13", "https://twitter.com/i/events/1371010378813952006", "江東区塩浜⇒日本武道館⇒靖国神社⇒新宿⇒皇居⇒永代橋", "34.6km", "https://pbs.twimg.com/media/EwbTEaDVcAImFvA?format=jpg&name=small"], 
    ["2021/03/14", "https://twitter.com/i/events/1371015477888045056", "江東区塩浜⇒荒川⇒ワークマン船堀⇒東葛西", "27.24km", "https://pbs.twimg.com/media/EwbWw0LVgAE5n6K?format=jpg&name=small"], 
    ["2021/03/15", "https://twitter.com/i/events/1371243001658318851", "江東区塩浜⇒中の島公園⇒石川島公園", "9.44km", "https://pbs.twimg.com/media/EweGlFYUUAoj2R_?format=jpg&name=small"], 
    ["2021/03/16", "https://twitter.com/i/events/1371700672366702594", "稲城⇒若葉台⇒多摩丘陵⇒墓掃除⇒京王堀之内", "25.17km", "https://pbs.twimg.com/media/EwlGcpQVIAAQGSl?format=jpg&name=small"], 
    ["2021/03/17", "https://twitter.com/i/events/1371972249889112067", "江東区塩浜⇒木場公園⇒高橋のらくろード", "9.63km", "https://pbs.twimg.com/media/EwoZV4KUUAEtllk?format=jpg&name=small"], 
    ["2021/03/18", "https://twitter.com/i/events/1372318109130924034", "江東区塩浜⇒東陽町⇒南砂", "8.59km", "https://pbs.twimg.com/media/EwtZ3vsVkAMNPj8?format=jpg&name=small"], 
    ["2021/03/19", "https://twitter.com/i/events/1372676345914744836", "江東区塩浜⇒豊洲⇒東雲⇒辰巳", "9.26km", "https://pbs.twimg.com/media/EwyeGN4VoAA83oM?format=jpg&name=small"], 
    ["2021/03/19", "https://twitter.com/i/events/1373790338238750722", "東陽町・南砂周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/Ew15gWWVIAAkVIJ?format=jpg&name=small"], 
    ["2021/03/20", "https://twitter.com/i/events/1373799147094962177", "江東区塩浜⇒平井⇒八広⇒山谷⇒東京ドーム⇒赤坂⇒六本木⇒東京タワー⇒虎ノ門⇒両国", "86.98km", "https://pbs.twimg.com/media/ExC9W6PVkAE1vtR?format=jpg&name=small"], 
    ["2021/03/20", "https://twitter.com/i/events/1373806607956545536", "江東区塩浜⇒平井⇒八広⇒山谷⇒東京ドーム⇒赤坂⇒六本木⇒東京タワー⇒虎ノ門⇒両国", "86.98km", "https://pbs.twimg.com/media/ExDAAgYVIAAHlB7?format=jpg&name=small"], 
    ["2021/03/22", "https://twitter.com/i/events/1373822587956981764", "江東区塩浜⇒清砂大橋", "11.53km", "https://pbs.twimg.com/media/ExCJ2dsUcAA223j?format=jpg&name=small"], 
    ["2021/03/23", "https://twitter.com/i/events/1374128173709848578", "江東区塩浜⇒洲崎⇒木場⇒千石", "9.13km", "https://pbs.twimg.com/media/ExHFQz_U8AIsm1c?format=jpg&name=small"], 
    ["2021/03/24", "https://twitter.com/i/events/1374861743155908608", "江東区塩浜⇒夢の島マリーナ⇒新木場緑道公園", "12.63km", "https://pbs.twimg.com/media/ExMSpYSVcAUZQ9O?format=jpg&name=small"], 
    ["2021/03/24", "https://twitter.com/i/events/1374863632253612034", "江東区塩浜⇒東京スカイツリー⇒錦糸町⇒東陽町", "--km", "https://pbs.twimg.com/media/ExNkHx1VEAMmqEh?format=jpg&name=small"], 
    ["2021/03/25", "https://twitter.com/i/events/1374866061472923648", "江東区塩浜⇒門前仲町周辺", "8.33km", "https://pbs.twimg.com/media/ExRWC2vU8AELgHb?format=jpg&name=small"], 
    ["2021/03/26", "https://twitter.com/i/events/1375219740591845382", "江東区塩浜⇒豊洲⇒東雲⇒辰巳", "11.17km", "https://pbs.twimg.com/media/ExWmNjrVcAMlz6j?format=jpg&name=small"], 
    ["2021/03/26", "https://twitter.com/i/events/1376327983946854400", "江東区塩浜⇒潮見⇒夢の島マリーナ⇒新木場緑道公園", "--km", "https://pbs.twimg.com/media/ExZ7LdqVIAEyY9U?format=jpg&name=small"], 
    ["2021/03/27", "https://twitter.com/i/events/1377458559789625348", "江東区塩浜⇒鎌ヶ谷⇒船橋⇒印西⇒白井", "122.52km", "https://pbs.twimg.com/media/Ex2509oVcAcfNs4?format=jpg&name=small"], 
    ["2021/03/27", "https://twitter.com/i/events/1376330056587374596", "江東区塩浜⇒鎌ヶ谷⇒船橋⇒印西⇒白井", "122.52km", "https://pbs.twimg.com/media/Exm70cNVoAER1L9?format=jpg&name=small"], 
    ["2021/03/29", "https://twitter.com/i/events/1376338009486807045", "江東区塩浜⇒豊洲", "7.76km", "https://pbs.twimg.com/media/ExmDg-3VcAUmYJc?format=jpg&name=small"], 
    ["2021/03/30", "https://twitter.com/i/events/1376667714689794050", "江東区塩浜⇒横十間川親水公園⇒亀戸⇒西大島", "10.98km", "https://pbs.twimg.com/media/ExrYvTvUcAMuN2H?format=jpg&name=small"], 
    ["2021/03/31", "https://twitter.com/i/events/1377082811320918016", "江東区塩浜⇒豊洲⇒有明⇒お台場⇒ハローワーク木場", "19.29km", "https://pbs.twimg.com/media/Exwl_ztUUAIie2g?format=jpg&name=small"], 
    ["2021/04/01", "https://twitter.com/i/events/1377380036773244930", "江東区塩浜⇒木場⇒門前仲町⇒隅田川", "8.76km", "https://pbs.twimg.com/media/Ex1YQ4kUUAIOACO?format=jpg&name=small"], 
    ["2021/04/02", "https://twitter.com/i/events/1377877781464313856", "江東区塩浜⇒豊住公園⇒仙台堀川公園⇒南砂緑道公園", "9.36km", "https://pbs.twimg.com/media/Ex6wMI5VoAAn_1g?format=jpg&name=small"], 
    ["2021/04/02", "https://twitter.com/i/events/1378865969087410178", "東陽町荒川周辺の夜景散歩", "--km", "https://pbs.twimg.com/media/Ex-PYVxUUAABTGa?format=jpg&name=small"], 
    ["2021/04/03", "https://twitter.com/i/events/1378875211668279303", "江東区塩浜⇒東大周辺⇒巣鴨⇒王子⇒川口⇒大宮⇒荒川⇒板橋", "116km", "https://pbs.twimg.com/media/EyLKEGGUYAEqlwB?format=jpg&name=small"], 
    ["2021/04/03", "https://twitter.com/i/events/1378886889055252482", "江東区塩浜⇒東大周辺⇒巣鴨⇒王子⇒川口⇒大宮⇒荒川⇒板橋", "116km", "https://pbs.twimg.com/media/EyLMC0DU8AMGCKa?format=jpg&name=small"], 
    ["2021/04/05", "https://twitter.com/i/events/1378901466971168768", "江東区塩浜⇒豊洲", "10.09km", "https://pbs.twimg.com/media/EyJ_WD-UYAAHDyc?format=jpg&name=small"], 
    ["2021/04/06", "https://twitter.com/i/events/1379202030477090819", "江東区塩浜⇒夢の島マリーナ⇒若洲海浜公園", "16.03km", "https://pbs.twimg.com/media/EyPSIu_UYAAasSp?format=jpg&name=small"], 
  ];
  
  const formSearch = document.getElementById("search-form");
  const inputSearch = document.getElementById("search");
  const btnSearch = document.getElementById("search-button");
  inputSearch.placeholder = contents_all.length + "回の散歩から検索 ※複合条件不可";
  formSearch.addEventListener("submit", function(e){
    e.preventDefault();
    buildPage(1, inputSearch.value);
  });
  btnSearch.addEventListener("click", function(){buildPage(1, inputSearch.value)});

  let contentsPageCut = [];

  function searchContents(strKey) {
    contentsPageCut = [];
    let contentsReverse = [];
    let tempCutArray = [];
    if (strKey == "") {
      contents_all.forEach(function (content){
        contentsReverse.unshift(content);
      });
    } else {
      contents_all.forEach(function (content){
        if (content[2].indexOf(strKey) != -1) {
          contentsReverse.unshift(content);
        }
      });
    }
    let intContentCount = 0;
    contentsReverse.forEach(function(content) {
      tempCutArray.push(content);
      intContentCount++;
      if (intContentCount % 20 == 0 || intContentCount == contentsReverse.length) {
        contentsPageCut.push(tempCutArray);
        tempCutArray = [];
      }
    });
    if (contentsPageCut.length == 0) {
      window.alert(  '"' + strKey + '"の検索結果は0件でしたから、全件表示しろいたします。');
      searchContents("");
    }
  }

  const contents = document.getElementById("contents");
  const buttons = document.getElementById("buttons")

  function setPageContents(intPage){
    let strContent = "";
    let strButtons = "";
    scrollTo(0, 0);
    contents.innerHTML = strContent;
    buttons.innerHTML = strButtons;
    contentsPageCut[intPage - 1].forEach(function( content ) {
      strContent = '<li>' +
                    '<div class="content">' + 
                      '<a href=' + content[1] + ' target="_blank">' + 
                        '<div class="img-container">' +
                          '<img src=' + content[4] + ' class="content-img">' + 
                          '<div class="content-cover"></div>' +
                          '<div class="content-date">' + content[0] + '</div>' +
                        '</div>' +
                        '<div class="content-title">【個人撮影・無修正】' + content[2] + '</div>' +
                        '</a>' +
                        '<div class="played-count">' + content[3] + ' 歩行距離 <i class="fas fa-thumbs-up"></i> 100%</div>' +
                    '</div>';
                  '</li>'
      contents.insertAdjacentHTML("beforeend", strContent);
    });

    const intLastPage = contentsPageCut.length;
    let intStart = 0;
    let intEnd = 0;
    let intButtonCount = 0;
    if ( intLastPage >= 5 ){
      intButtonCount = 5;
    } else {
      intButtonCount = intLastPage;
    }

    if (intPage + intButtonCount - 1 >= intLastPage) {
      intStart = intLastPage - intButtonCount + 1;
      intEnd = intLastPage;
    } else {
      intStart = intPage;
      intEnd = intPage + intButtonCount - 1;
    }

    for (i = intStart; i <= intEnd; i++) {
      const intNum = i;
      if (i == intPage) {
        strButtons = '<li class="page-button now-button" id="page-button-' + (intNum) + '">' + i + '</li>'
      } else {
        strButtons = '<li class="page-button" id="page-button-' + (intNum) + '">' + i + '</li>'
      }
      buttons.insertAdjacentHTML("beforeend", strButtons);
      const button = document.getElementById("page-button-" + (intNum));
      button.addEventListener("click", function(){setPageContents(intNum)});
    }
    if (intPage != 1) {
      strButtons = '<li class="page-button prev-button" id="page-button-prev">< 前の</li>'
      buttons.insertAdjacentHTML("afterbegin", strButtons);
      const buttonPrev = document.getElementById("page-button-prev");
      buttonPrev.addEventListener("click", function(){setPageContents(intPage - 1)});
    }
    if (intPage != intLastPage) {
      strButtons = '<li class="page-button next-button" id="page-button-next">次へ ></li>'
      buttons.insertAdjacentHTML("beforeend", strButtons);
      const buttonNext = document.getElementById("page-button-next");
      buttonNext.addEventListener("click", function(){setPageContents(intPage + 1)});
    }
  }

  function buildPage( intPage, strKey) {
    searchContents(strKey);
    setPageContents(intPage);
  }

  buildPage(1, "");

})