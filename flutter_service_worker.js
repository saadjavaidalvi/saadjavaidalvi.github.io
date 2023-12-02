'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "04c0e8d6bf24a66f2688773527bade9b",
"index.html": "ca549c7f4031df9cec3637a12869977c",
"/": "ca549c7f4031df9cec3637a12869977c",
"LICENSE": "0e72704759edce1529102005503c220b",
"main.dart.js": "76c77f985542050fbc5f12cb7a855148",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"p1.png": "9556bad7ffacb959fc651e3b08ff1bb3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "46adaae54ad8194c7948cd6acea438c4",
".git/ORIG_HEAD": "092456e0169f734526397b4360c94700",
".git/config": "90ced24b59ece2a50653fc13be7ac3d1",
".git/objects/61/9d32f5e81f777bd5e56d2664591c2f893a2b4c": "a37e30776f046405cbbcc0a9b957b25f",
".git/objects/0d/46a09a094a83b0e70a076ee25a5517ba93b663": "a5039770d40c67dbddba1765a3cc7097",
".git/objects/0c/2333b25b5d50352c1757e2d89540005cab1a82": "ba35c179391a13991166727ec0a3de97",
".git/objects/3e/ac245fee4d1adbe97ae3da9706d9547b97b307": "737570cbd4d22bd7fce326e4020344c3",
".git/objects/50/af64e540469278eca27be23ed0daf6b203fa07": "b4b729a95aab5587802ee3ea5bc218bf",
".git/objects/68/9120d0e249f1e5f77ddf89472a2e8a4827d2d8": "7dd33c3c613187c8d4ce9b02f6054bce",
".git/objects/57/456427f2b8874a90388a6772274b6bb8eca9f9": "a3e7b5032afa3fd93c22ca9eaed101a1",
".git/objects/3b/6e287aac16061e4c675ed7f73a631b833849e7": "4e354156e93017687f09c3f249525f83",
".git/objects/6f/3d07cfaf18e93a573823d89216c40a0cff319c": "d1cc28d4efc1cc855214e55081d7c9d6",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/be5c398c61128e54363b4334cf4de40a193f45": "ab471a423e24b33e67c56e5d60f9504f",
".git/objects/9e/3759aa2475d6af68cd1ed8756136dc8eb481d6": "0f6dcd75ae9ad4a7934a50574abe1116",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/208950ac0f9f47de180814e3dc341290c8918a": "d1e4d05922ebd83411b97e5da3143b00",
".git/objects/3c/0e2a3ae40a85baf8b3dd8215b3a8b7363cc4dd": "3b1f40f97033bec5d871e63e7eb7a889",
".git/objects/56/d92ee19222d48510934ba87de77b112a7b97b2": "7f8f41b624f78032f9176867e6655ea9",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/67/37cff02eae395cd0d7281776b3e826d5a2b156": "39d46fd130ccb739a0ebf1b62469510e",
".git/objects/67/75a8f977f4bb0d65ecae42908f3b976b020404": "aa67078aa4a212ebefaaee0dd4290c17",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/93/dff0d027466d636132b1969c10c79451551d2b": "c712731730283e36cda8206609c2a83d",
".git/objects/0e/e05d649c5b28b77fa7990781e1011838bb7403": "182d31c5c651282c411b8c65e0039152",
".git/objects/0e/2e3114dbc79a33ef9895f1f205066c21624c23": "ea32317bf028fabadc8cd90493e0cdac",
".git/objects/0e/d5973563e6eeead5189c775a67d89575245ab5": "3a7118e776b290f6335589607260b8d4",
".git/objects/60/511a2e2b85bdac78f4eef1aa3c478d2464f976": "329a881262f9df6a8268e056cef0aeec",
".git/objects/33/0c5b7cac3421e84093972f05525b412ddd04f7": "0ca52b397f84642e12cb724867a85fa7",
".git/objects/a3/1b8bd6ee24e06ddc5eb6208d61e683a8fb2e17": "be420a130bfb13fdbf33f1b244d76478",
".git/objects/b5/2c056399494f8d3dcc35b5224504a714ae74d6": "703a7001dd98c1add11a172cba2b1259",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b2/2d2a480f7420639e229a1f221b47e424942492": "325239a1c89cb771a87cfb3fe9ba8433",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/434569ac2efcffbf3a80b237d8a685a7c286ed": "5f374329bb79a60403bdd700eb12ea98",
".git/objects/da/434368b27e25242c28d37ccc81d4467b4204df": "bbbec6692a67875c737357685b3c14cb",
".git/objects/da/d0606042fc9767ec01d78c0bb32b674bfd4467": "79b8bb439300d898f599c6cfd191bf49",
".git/objects/d1/93ba80e56fd6ed9f42fecf7a01f693f16841f5": "3458084a5c4cc6c241a6d24fe3e3ed8f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/4e0b5c6e7b58b8490907d622d252e53b7f6a09": "72581ccecb55c3b048a756f528ef7b42",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/9148c93719e5ff75e0a920cd97e37d527a10c5": "3a663999495b54fd733f18a4d127c582",
".git/objects/e2/e631a2291c29aa318bdfc5fe5176d5b5c8e186": "3a9123f5e331148be69a8f25020575ae",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/d03c3620fdc243d6023f8a09e5af1e9559ccb7": "de309fcaf8b09f66a53381c80ac70b51",
".git/objects/c9/79b25836cb8705d849c97124010773a234aa69": "5cad8d48165b6610fda165dc28936894",
".git/objects/fc/0f322e61617230621468a8090f25edb73110d5": "ecc6495fc2bada51dd28771bea5b58eb",
".git/objects/cf/4c6a219e2252e67ac400ee308fedfaea75d65e": "53b0364fa030ad779bdc9847e01469d9",
".git/objects/e4/643e85a8032c234a1c400c6799046797805dba": "8edd89398ed753283e89ce34ae1110c7",
".git/objects/fe/4e0e615bb2ce945d45b63699ec7588af07a618": "6be7a1f5ca8a783b3224b57edbb6d8b7",
".git/objects/ed/61b14528f6ecae45be5a766d818c203b040adf": "fe049339c8bea0dd6276ee1caa228559",
".git/objects/c6/955d83d8df90a6f9fe285f17169c943819ca93": "23c54061a2d471e334d8cceef4a86d6b",
".git/objects/ec/0b1de23bc26afb942fb95417cb2f2b35e7851a": "349dc1ec018647b6c6a297ccb476b8db",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/18/314f203c235456d3da80ab5b9f27640f339a1b": "5cef7211c3aef1cb95288bce40f81ed2",
".git/objects/4b/324197390347d69ef8e2fa2656edef064fd14a": "0a07a5f9d6a960aa745a9bb01f9b90ce",
".git/objects/pack/pack-5667b790f8abf95c106f251e726b403f5b86d1a5.idx": "ea98a707a088df9e3b0fc35a68f82c49",
".git/objects/pack/pack-5667b790f8abf95c106f251e726b403f5b86d1a5.pack": "15c10fadff6ed27c0106ffebf833246f",
".git/objects/11/c2f8d62af5a71efeafb791ecfdd0255ae78992": "44df3e436b45c047c2c7461d907d33e5",
".git/objects/11/f072eebfd712d7109d80622a05499ca333fc15": "b14f1b3af87f653103b42dae5b7daf3e",
".git/objects/7c/a66a66826ab43326cee9be6787b325adab6c59": "ddced01f1e9cfe2d4073600626873717",
".git/objects/89/93fd90a04966b957f4ff20f091a688d739fa41": "a24b5977af8f54d52defd80d16f4fd4f",
".git/objects/1f/56867e70c434d8dff86a85ca09e6d942a38257": "27d844aa56b9fd88c276a37ccf62cee6",
".git/objects/80/1922304592559a3602c3573f2db66aa767d471": "30382331d830784f2a5f7b008df668ab",
".git/objects/28/9db985920be68ffada29cc3cfafc34415b4a8e": "031380c60231af7c01a032c5e95e09b4",
".git/objects/7b/21d87594771e5b6b459a383eea6bf5eb406f4d": "06e95d5ef4b68ed2b5f41bb2d3b8a19c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/4d/ba7c0fb3de401a1ac8b825e82a6a7e4fc763b4": "87ccf7226a49980c35ad2d290fe67665",
".git/objects/4d/06571fbb30dd3c31c9cccc9c883d8d25a981a6": "a4a3ae5031b40a3d2e22f7f55b16e118",
".git/objects/4d/7b995faa22eecbedad5c5baae6c5e1f3734bad": "6fe043ab0589bfc22fdb15bff93f47e8",
".git/objects/75/ec7f097361b753a782046d62d3030035a0a741": "2a867955a4ee96909aa9d50b40146a23",
".git/objects/81/d900e1e1945368964ddf2685c73707a2f34f00": "046d9b40f03b973f3dc7e5dc193c7cf3",
".git/objects/86/bb971747f241c1ddcd4e1e99efb09988736db1": "173f1c85e49a6e92cf391fc25f68feba",
".git/objects/86/cca30afd1e661d7bf7b74c840c8d7e31a63a3c": "2393ac5882e17d10e4b768c31e5ef86d",
".git/objects/72/aaa084ec3a8dbc088f3d5f4fd7a3e13618b932": "1d6e1f3d3838ddafe12f678de7813a7b",
".git/objects/44/bf4babdbb87f720ac4f8742507d713a167ba0e": "c09bba60ca3e6b08874a739d7ae35c8b",
".git/objects/2f/43c81d492bf75dc3ed6217822f9ad86ccd08d3": "449c97a3197000077be7aeb141dc5687",
".git/objects/43/ec413b489d630893b6f9c1c86dea5f8cf5e56d": "1def42cb5cea9ea9ec7fffeae9506c46",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/838b7208fee8b92e7b5cb83cbff03e94067056": "7d3b205e9315b369bd0a42824fc6896c",
".git/objects/6b/16fad98d817823cb199893dea1e0f93afed977": "e17cfc4ea4e4743eac58c12da95cb8aa",
".git/objects/07/2e30d7c19b89367177e6757ae150269379244b": "fbaec78b68f2025728cd62f21cbec124",
".git/objects/5c/6d92a10d9d8b8a4cf40b234d76423539316332": "4e18f40b9a1a26516bf83f3807e4fe4c",
".git/objects/31/6a695d70ffaf9366e7eb85cd1093ae118590f3": "194f5fd688772cd80bfe3ec982b12e66",
".git/objects/31/6457e9433620a93299d57e41adb4f61e1b3242": "eefee40a7b1e416cf9b178d1cec894da",
".git/objects/91/80f7d9845f6a11991f0a0b7bd5b59c37c66467": "a9846c80973feedd00bf17871bb91b83",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/96/da452880a628498c21ebf42da2ed67077c518a": "a52fe1bfb024bdbc7c82a4ecf376efc4",
".git/objects/54/87b8c9ef1adf209a6f6be369c1933926645d0f": "526de8cee27b28b91e4171acd9da4745",
".git/objects/3f/83bbb0be2635106fcd79560d4c132626874f33": "6a973edf8bf1331a45f0e62cfd93a234",
".git/objects/5e/ed51d2ae17bfa6370b89c94601d2c011b28a71": "6d2eb7f075f64975766839c48919bef9",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/39a7dcc4de8a99e1039db8f8156d33bb64b6d6": "10b5720edd223c4643f829eab320e44b",
".git/objects/37/52783cf094b50e73db42eb73229b197d8b4df8": "6a45ae36a11e25001a5ac2dc01a63381",
".git/objects/6c/380f467a1ca94b64d753c9fb660c969640e045": "2cebf43cc47176029fff47b5fd505e88",
".git/objects/99/905990c00eb8863a2f51e83c3db0e3f16e79a8": "38bbaa9b91834591e16ad0292013f5b2",
".git/objects/0f/cdeb7db95d095b9b9d4596d14aa3dfa240fbf0": "ad48fcebb76f7c88e157d84b91a3b78d",
".git/objects/bf/e403365431b95347eeb9df87492baed5e2f6ca": "a5cf46049b5c9b00a93e3ae651adb1a1",
".git/objects/d3/262fa0b8d2346900c8f14f8db30fca6719f904": "2c2ba4c3da96d105f22a2dce03f07bad",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/dbd1f787e175405a7777e8bd336aa130ea1fc8": "38fd3359bf7d726286c9db6abfef9e7c",
".git/objects/ba/852321cd541f4e2383053d8399c7d3c8164a16": "16c9c261e616023daee1128a8a5d963a",
".git/objects/a7/f9325ffe78c07ef020799a853a6d2ed196a9d6": "756095896bdb1e01572cac9ff58ae40e",
".git/objects/dc/c9d667037e7f9ab2f3a696df99a5ccc4f095be": "12d30841b7a378b5651232ff57e3cb1c",
".git/objects/dc/2d6d69908e361097cd308ef4b784c89a0c31fe": "1ac6055102bf0d80050f390129debed9",
".git/objects/dc/73906e72ef73e45e8bf59ee442b6c0fb6b3caa": "e60030be1049f26b3482a467762e1e68",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/36d72d91459d280afc480400d26ae788afe26e": "1b20d227189a7ff7fda49cb82a13af41",
".git/objects/a1/a80cb657cdcbba2e37b77dc8eee1baa67e0c24": "b2d027f1cf28fdf92b0ec4b9a195c16c",
".git/objects/ef/784ea8a9cdaea3121f37c5912c619488119355": "b2fc38823e1945a5da0bb2e82b9e9415",
".git/objects/e1/fc33f74a7d45353d43b9a8123f46bf5d53aa99": "409fd7f731608d5054f468422f37abdc",
".git/objects/cc/314450bdab5d50703ae70ee54dab9577d36934": "8edf7d3c66d16b034967ccb7b42237bc",
".git/objects/f9/f341ac1a4dab383eb6234325000552709d41f4": "c78ea793ef7b559ffd5441e4fbd6ca3b",
".git/objects/fa/4786b87a2b87b1e319d205623d779331fbb117": "74990ebfca27bec367c6806716bbdf0b",
".git/objects/f6/a99c8d5fb5caa4233f348bcc8c82c40a20faa5": "c965190fcbfb7dde6295ec9c8390d318",
".git/objects/e9/a195edfa9709891cb66077f3211997202ac259": "3f64c2245e0156aee110d5fc7ead1b32",
".git/objects/e7/23a377ce108f59c7be6cfa10623952e435e3a2": "a0574fb27bcc8d7f34c455394ce3048f",
".git/objects/e7/27c41ba3c02cf85da156212409400f9ad84c5a": "386baa1e7a71890a7e0265032a12c9a4",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/1628be50f7c6df55ef911e2d76b3bdd4145ed7": "0302a1539ab7f3c8727883297d20d1cd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/3d40d50c6c4cbd2748b39437acafd023129e29": "df8712c55442432231d17613f9f19d93",
".git/objects/79/7ca3568535034d626fa7cf80e0ffa5babce818": "d39ef2b21dec9f65d2cd24e87e4f465d",
".git/objects/79/4aadbef71218281b6111c91b9a3e9e44541bf2": "6874457066378d3a5221b94077d8b765",
".git/objects/41/196dbb2a2fa6948c95e698e3f51123ecaa3349": "22b52eb94da7cd2680231a8089e61798",
".git/objects/83/be77a2b7ac2a4436253840b8eb67691448e106": "332bdaf3c650ca745c08f6fa733da6b6",
".git/objects/83/57008bab9a5d2e62585ae441a53b9cd3dfd834": "f24508aa10899219c008c743126684a9",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/4c2471b386e97a6662095fb127ec33ef5f1709": "776023e8bf1b7ef123de8b89e1642d09",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/84/694bea5f65a8ef7d9193573085ca0d25fdef0b": "fbd967114a9360d6fbce5d4811ec26d4",
".git/objects/24/f2d96fa0d0f6395ed1eaba719839003f5b576a": "14347947221f87e9d5fade8594a73b84",
".git/objects/23/6a2d6ee9061d12be6dac053d7a86c4d1a9fcb7": "76abd24c7e51a2dee8323da63b477ef2",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/85/00ff7f391392b3086fc7503beb588b2b46c47f": "85c6c6e7a2368e6d8bc8b9cf1199409d",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/71/126bd188b4943d8d6f3e326a4cfec4776896ed": "83dffb4e4ee4b856738f2aa80abe376e",
".git/objects/76/264a5180cf9a41853e1ef8f863df9ab6596713": "1096420e7e6aada48995d359ce802f52",
".git/objects/8b/b579786f3ec6a4281741c1bced50a67c6add1c": "d618ccd65d9aed4808181be95231e890",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f70465f0e3700d8a9730b9ff87fc392",
".git/logs/refs/heads/main": "8203c9db050d595109d6f89de3bdb291",
".git/logs/refs/remotes/origin/main": "b29205f115c75b94875b37c9f89f3701",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "4a9e3df1d1cb65d2bcda577f55215f2c",
".git/refs/remotes/origin/main": "4a9e3df1d1cb65d2bcda577f55215f2c",
".git/index": "4242283986db774e3faf8373b54fdf72",
".git/COMMIT_EDITMSG": "e2ee51879c6b9146aaea731e14f3f3b8",
".git/FETCH_HEAD": "a1f3f9adea61c7ad499d73c4acce9e9c",
"assets/AssetManifest.json": "b881efd146cd0ff14fbf4928bc7aba24",
"assets/NOTICES": "e3d4b594b8daedb7829b52591fa3e628",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/SaadAlviDetailedResume.pdf": "94e0f7fbd67dbed03e06bc50adb278b1",
"assets/AssetManifest.bin": "a0cef4193c53209272595ae73b9ee76a",
"assets/fonts/MaterialIcons-Regular.otf": "97388c949f15f84c9d9e084bdfa540b6",
"assets/assets/Me.png": "4a460507fb9503787e5b74e6bbd5a717",
"assets/assets/Me.svg": "7e8bdd90bfdb16ce14f4c80a941f9490",
"assets/assets/Saad_Javaid_Alvi_Resume.pdf": "44f09767c0ddbc67f84745deb5ba5da8",
"assets/assets/Me.jpeg": "90aef3f2289e0eea89c8adb7897be0b5",
"assets/assets/Me1.png": "b84dd91d2ffc734e61406cdca01ac46f",
"assets/assets/bg.jpeg": "6e45cbef2e85536cad00d9b99d0ccea1",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
