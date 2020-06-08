const array_url = new Array('https://www.youtube.com/watch?v=rzVn_03-X5A&list=PL3dtdJSHDJGbFPtt7_DOX34Ka8ZTWemuk&index=1',
              'https://www.youtube.com/watch?v=nqwmb8bhUmc&list=PL3dtdJSHDJGbFPtt7_DOX34Ka8ZTWemuk&index=2',
              'https://www.youtube.com/watch?v=T-rhh9HiqV0&list=PL3dtdJSHDJGbFPtt7_DOX34Ka8ZTWemuk&index=3',
              'https://www.youtube.com/watch?v=a3uLovCmSgw&list=PL3dtdJSHDJGbFPtt7_DOX34Ka8ZTWemuk&index=4',
              'https://www.youtube.com/watch?v=L7z-ANBFINg&list=PL3dtdJSHDJGbFPtt7_DOX34Ka8ZTWemuk&index=5',
              'https://www.youtube.com/watch?v=5h92kMV6OH8&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=1',
              'https://www.youtube.com/watch?v=SpNkC_t3EPY&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=2',
              'https://www.youtube.com/watch?v=CmghB9Yex8E&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=3',
              'https://www.youtube.com/watch?v=0llYOP8lDKA&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=4',
              'https://www.youtube.com/watch?v=c31WvhqpDxw&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=5',
              'https://www.youtube.com/watch?v=oCcimWXvUgo&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=6',
              'https://www.youtube.com/watch?v=tLh_DKEiCPk&list=PL3dtdJSHDJGa-fzWk95MgKfIF_QTUysb6&index=7',
              'https://www.youtube.com/watch?v=lLHGUlMbti0&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=1',
              'https://www.youtube.com/watch?v=gxj9AeGzu6U&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=2',
              'https://www.youtube.com/watch?v=jUmpWrFyyDM&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=3',
              'https://www.youtube.com/watch?v=uWKM1n1t85c&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=4',
              'https://www.youtube.com/watch?v=qG4Sga8DAmk&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=5',
              'https://www.youtube.com/watch?v=sqrprj3iUDs&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=6',
              'https://www.youtube.com/watch?v=iDsi5ngoehI&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=7',
              'https://www.youtube.com/watch?v=qMbnVz-ihsU&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=8',
              'https://www.youtube.com/watch?v=sITVM8XQ6zA&list=PL3dtdJSHDJGaq3MBh5hrxPBuS4NztgN5d&index=9',
              'https://www.youtube.com/watch?v=HOobyrSYDy4&list=PL3dtdJSHDJGY3C7uAtClrM1_ckhUreg3h&index=1',
              'https://www.youtube.com/watch?v=YS89OQjAp5I&list=PL3dtdJSHDJGY3C7uAtClrM1_ckhUreg3h&index=2',
              'https://www.youtube.com/watch?v=fc5HedT1MqA&list=PL3dtdJSHDJGY3C7uAtClrM1_ckhUreg3h&index=3',
              'https://www.youtube.com/watch?v=_-CssXA_o9M&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=1',
              'https://www.youtube.com/watch?v=LyW7tmd8npk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=2',
              'https://www.youtube.com/watch?v=g2AFcjHPO2A&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=3',
              'https://www.youtube.com/watch?v=Wx1J-8J7YtE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=4',
              'https://www.youtube.com/watch?v=k_4cQfed1JI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=5',
              'https://www.youtube.com/watch?v=EY1a6r0H2Bc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=6',
              'https://www.youtube.com/watch?v=w76bdNj_6F8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=7',
              'https://www.youtube.com/watch?v=_iyWi5wnwCg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=8',
              'https://www.youtube.com/watch?v=Cw9iGHrYreI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=9',
              'https://www.youtube.com/watch?v=-R-HQB-gH98&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=10',
              'https://www.youtube.com/watch?v=ArMNB_QTSXw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=11',
              'https://www.youtube.com/watch?v=HHITjI-yTy0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=12',
              'https://www.youtube.com/watch?v=uAc9l5R9sqo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=13',
              'https://www.youtube.com/watch?v=2hnXDTIf_y4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=14',
              'https://www.youtube.com/watch?v=4qp0jnuZAZ8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=15',
              'https://www.youtube.com/watch?v=eM85mYm1Nbs&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=16',
              'https://www.youtube.com/watch?v=6szrnsFa3u4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=17',
              'https://www.youtube.com/watch?v=-zvXlhu9SpI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=18',
              'https://www.youtube.com/watch?v=-zvXlhu9SpI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=19',
              'https://www.youtube.com/watch?v=WALImmm6UZw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=20',
              'https://www.youtube.com/watch?v=Az60CC9hi00&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=21',
              'https://www.youtube.com/watch?v=0KRsbT6Hcbg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=22',
              'https://www.youtube.com/watch?v=tLh_DKEiCPk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=23',
              'https://www.youtube.com/watch?v=bWZCpaSKwZg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=24',
              'https://www.youtube.com/watch?v=bWZCpaSKwZg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=25',
              'https://www.youtube.com/watch?v=1om8sdhgVMw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=26',
              'https://www.youtube.com/watch?v=L99WnfYCeXg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=27',
              'https://www.youtube.com/watch?v=-UNh9bv8ohI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=28',
              'https://www.youtube.com/watch?v=E0V5EcSh-0s&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=29',
              'https://www.youtube.com/watch?v=8WKwKT7Rdq8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=30',
              'https://www.youtube.com/watch?v=WBE-VjSnJ-Q&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=31',
              'https://www.youtube.com/watch?v=EYcrO_hQJB4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=32',
              'https://www.youtube.com/watch?v=dzHxNeVC4Vg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=33',
              'https://www.youtube.com/watch?v=dzHxNeVC4Vg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=34',
              'https://www.youtube.com/watch?v=BFj5lkbucuQ&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=35',
              'https://www.youtube.com/watch?v=yuhNxel-RnY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=36',
              'https://www.youtube.com/watch?v=QM5hiHMdnQc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=37',
              'https://www.youtube.com/watch?v=fUaRrlH4J_k&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=38',
              'https://www.youtube.com/watch?v=EdKCtR4GDEY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=39',
              'https://www.youtube.com/watch?v=RRe8shupnZc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=40',
              'https://www.youtube.com/watch?v=HbIlg8E3RIM&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=41',
              'https://www.youtube.com/watch?v=L4V5KnsVnQo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=42',
              'https://www.youtube.com/watch?v=lbph6FSARCc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=43',
              'https://www.youtube.com/watch?v=csokBZF5YmI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=44',
              'https://www.youtube.com/watch?v=atxJAHMOz78&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=45',
              'https://www.youtube.com/watch?v=gKJUWUMfAFo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=46',
              'https://www.youtube.com/watch?v=g13DtuZU85Y&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=47',
              'https://www.youtube.com/watch?v=cblxngRLRM8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=48',
              'https://www.youtube.com/watch?v=CRcYR8NUU4U&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=49',
              'https://www.youtube.com/watch?v=yFWL4kYJFfE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=50',
              'https://www.youtube.com/watch?v=D26oBz1ocaY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=51',
              'https://www.youtube.com/watch?v=lLHGUlMbti0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=52',
              'https://www.youtube.com/watch?v=UK99QpPXSiU&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=53',
              'https://www.youtube.com/watch?v=ErZoCQ-OyMQ&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=54',
              'https://www.youtube.com/watch?v=8y76KYwZctg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=55',
              'https://www.youtube.com/watch?v=ke-MrK96tbg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=56',
              'https://www.youtube.com/watch?v=7cRS6zYtQlo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=57',
              'https://www.youtube.com/watch?v=yuPDeowwBYk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=58',
              'https://www.youtube.com/watch?v=8G-9cGinPDY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=59',
              'https://www.youtube.com/watch?v=20HXM251TPk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=60',
              'https://www.youtube.com/watch?v=pf4eLy22ZCk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=61',
              'https://www.youtube.com/watch?v=_i0tlNi_h3A&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=62',
              'https://www.youtube.com/watch?v=W-RhsQPP55Y&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=63',
              'https://www.youtube.com/watch?v=W-RhsQPP55Y&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=64',
              'https://www.youtube.com/watch?v=WqGSf7RZvMU&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=65',
              'https://www.youtube.com/watch?v=8S-Ux0liXMc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=66',
              'https://www.youtube.com/watch?v=yqIsQPaiRC8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=67',
              'https://www.youtube.com/watch?v=6Qus_KKDffc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=68',
              'https://www.youtube.com/watch?v=uy8ISxK7zRU&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=69',
              'https://www.youtube.com/watch?v=65gXaUeeH48&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=70',
              'https://www.youtube.com/watch?v=ZcJ_hYLVaUY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=71',
              'https://www.youtube.com/watch?v=Eh4YshDzJ94&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=72',
              'https://www.youtube.com/watch?v=QNw6Q0VTkEQ&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=73',
              'https://www.youtube.com/watch?v=0NHkILdM-bk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=74',
              'https://www.youtube.com/watch?v=WKD5kn6LWtE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=75',
              'https://www.youtube.com/watch?v=YS89OQjAp5I&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=76',
              'https://www.youtube.com/watch?v=IppI_zdvih0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=77',
              'https://www.youtube.com/watch?v=5h92kMV6OH8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=78',
              'https://www.youtube.com/watch?v=DNb-fa9ZQ80&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=79',
              'https://www.youtube.com/watch?v=K7oSm8IIz7U&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=80',
              'https://www.youtube.com/watch?v=iKuXY_i7Uj8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=81',
              'https://www.youtube.com/watch?v=jSysx4f9waw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=82',
              'https://www.youtube.com/watch?v=sVvo0qklVkk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=83',
              'https://www.youtube.com/watch?v=Ij8RGAxIkTQ&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=84',
              'https://www.youtube.com/watch?v=Ij8RGAxIkTQ&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=85',
              'https://www.youtube.com/watch?v=fX1ve0pSQzc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=86',
              'https://www.youtube.com/watch?v=FkzieBAP_ys&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=87',
              'https://www.youtube.com/watch?v=RFU8JuNQ6O8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=88',
              'https://www.youtube.com/watch?v=iDsi5ngoehI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=89',
              'https://www.youtube.com/watch?v=-PmTvPRJwPg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=90',
              'https://www.youtube.com/watch?v=B6jd3YVDo0I&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=91',
              'https://www.youtube.com/watch?v=6BWuZ_azN34&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=92',
              'https://www.youtube.com/watch?v=rzVn_03-X5A&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=93',
              'https://www.youtube.com/watch?v=5ubAIzmFzuI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=94',
              'https://www.youtube.com/watch?v=nqwmb8bhUmc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=95',
              'https://www.youtube.com/watch?v=B4L9KSdEEOo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=96',
              'https://www.youtube.com/watch?v=QxiyXkGE0g0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=97',
              'https://www.youtube.com/watch?v=BuCfmvkZWbo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=98',
              'https://www.youtube.com/watch?v=RJa4HoOIsc0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=99',
              'https://www.youtube.com/watch?v=RJa4HoOIsc0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=100',
              'https://www.youtube.com/watch?v=EKsj6WAUD5Q&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=101',
              'https://www.youtube.com/watch?v=X6Vr_yL8PFY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=102',
              'https://www.youtube.com/watch?v=RPKuF0g6UTY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=103',
              'https://www.youtube.com/watch?v=zq50JwOU_ls&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=104',
              'https://www.youtube.com/watch?v=132NseiTJdE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=105',
              'https://www.youtube.com/watch?v=OZbC-3IU3dE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=106',
              'https://www.youtube.com/watch?v=SHmJuLNl5cs&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=107',
              'https://www.youtube.com/watch?v=qG4Sga8DAmk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=108',
              'https://www.youtube.com/watch?v=uljEES4hScM&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=109',
              'https://www.youtube.com/watch?v=qMbnVz-ihsU&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=110',
              'https://www.youtube.com/watch?v=c31WvhqpDxw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=111',
              'https://www.youtube.com/watch?v=2DdY_OEvxi0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=112',
              'https://www.youtube.com/watch?v=fc5HedT1MqA&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=113',
              'https://www.youtube.com/watch?v=vP2jKWBtc1o&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=114',
              'https://www.youtube.com/watch?v=NkbWj_S20-k&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=115',
              'https://www.youtube.com/watch?v=JYZX20bY568&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=116',
              'https://www.youtube.com/watch?v=CmghB9Yex8E&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=117',
              'https://www.youtube.com/watch?v=jUmpWrFyyDM&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=118',
              'https://www.youtube.com/watch?v=M_030Rdb7Ng&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=119',
              'https://www.youtube.com/watch?v=gxj9AeGzu6U&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=120',
              'https://www.youtube.com/watch?v=jZu5uPR6ifo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=121',
              'https://www.youtube.com/watch?v=rjkjvKeNMJA&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=122',
              'https://www.youtube.com/watch?v=VNX9fdJOTBY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=123',
              'https://www.youtube.com/watch?v=f0xWyMkTFC4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=124',
              'https://www.youtube.com/watch?v=uWKM1n1t85c&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=125',
              'https://www.youtube.com/watch?v=cuPce7UN4T0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=126',
              'https://www.youtube.com/watch?v=bB8A400xxy0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=127',
              'https://www.youtube.com/watch?v=6pwSNyEFp5o&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=128',
              'https://www.youtube.com/watch?v=u50bXOkm28U&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=129',
              'https://www.youtube.com/watch?v=HOobyrSYDy4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=130',
              'https://www.youtube.com/watch?v=0tyINchisJw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=131',
              'https://www.youtube.com/watch?v=OizglqfqWKw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=132',
              'https://www.youtube.com/watch?v=VfTZJszRYeE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=133',
              'https://www.youtube.com/watch?v=7lVZNkEliTc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=134',
              'https://www.youtube.com/watch?v=PMvXOBseI3k&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=135',
              'https://www.youtube.com/watch?v=K3IG3srUsyc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=136',
              'https://www.youtube.com/watch?v=gXH-A7tSos8&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=137',
              'https://www.youtube.com/watch?v=sFCNoyHMmT4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=138',
              'https://www.youtube.com/watch?v=UORAMHWa8AI&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=139',
              'https://www.youtube.com/watch?v=AtpDeDkBzrg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=140',
              'https://www.youtube.com/watch?v=L7z-ANBFINg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=141',
              'https://www.youtube.com/watch?v=vbO4QV6YHcA&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=142',
              'https://www.youtube.com/watch?v=9nTWllbkBEk&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=143',
              'https://www.youtube.com/watch?v=yt8LmgbimuY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=144',
              'https://www.youtube.com/watch?v=sqrprj3iUDs&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=145',
              'https://www.youtube.com/watch?v=AXBWHkZ7vjU&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=146',
              'https://www.youtube.com/watch?v=sITVM8XQ6zA&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=147',
              'https://www.youtube.com/watch?v=T65Q13b4d3c&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=148',
              'https://www.youtube.com/watch?v=a3uLovCmSgw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=149',
              'https://www.youtube.com/watch?v=3mRHYxPqGWE&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=150',
              'https://www.youtube.com/watch?v=zn7rDVls33o&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=151',
              'https://www.youtube.com/watch?v=LIoul4GMY1Y&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=152',
              'https://www.youtube.com/watch?v=SpNkC_t3EPY&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=153',
              'https://www.youtube.com/watch?v=h6-BcgOTLSs&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=154',
              'https://www.youtube.com/watch?v=R49BusjCvdQ&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=155',
              'https://www.youtube.com/watch?v=Tb9Cbvqs0co&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=156',
              'https://www.youtube.com/watch?v=g9oOU3L8Hvc&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=157',
              'https://www.youtube.com/watch?v=IXM4SXnBb2w&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=158',
              'https://www.youtube.com/watch?v=T-rhh9HiqV0&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=159',
              'https://www.youtube.com/watch?v=oCcimWXvUgo&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=160',
              'https://www.youtube.com/watch?v=3AVnjUpHlSs&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=161',
              'https://www.youtube.com/watch?v=3fNyDsVPMHg&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=162',
              'https://www.youtube.com/watch?v=xDsA5726x9c&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=163',
              'https://www.youtube.com/watch?v=hJiw3zoi3gA&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=164',
              'https://www.youtube.com/watch?v=e6NsLrSc2sw&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=165',
              'https://www.youtube.com/watch?v=QZD1T6Kkhh4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=166',
              'https://www.youtube.com/watch?v=0llYOP8lDKA&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=167',
              'https://www.youtube.com/watch?v=-oX5rczNf4Y&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=168',
              'https://www.youtube.com/watch?v=d_sBYcc9nm4&list=PL3dtdJSHDJGYre0e2hfbtQpW9B_Rswt1v&index=169');

let opened = "false";
let opened_day = "";
const youTubeUrl = document.getElementById('url')              


//ウインドウを開く関数
function MakoJump() {
  if (youTubeUrl === '' ){
    document.getElementById("btnMako").disabled = "disabled";
    document.getElementById("btnMako").innerHTML = "マコなり目覚まし実行中";
    document.getElementById("slcHour").disabled = "disabled";
    document.getElementById("slcMinute").disabled = "disabled";
  } else {
    alert('再生する動画のURLが入力されていません！');
  }
}

// 時計のメインとなる関数
function clock()
{
  // 曜日を表す各文字列の配列
  var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
  // 現在日時を表すインスタンスを取得
  var now = new Date();
  // 年
  var y = now.getFullYear();
  // 月 0~11で取得されるので実際の月は+1したものとなる
  var mo = now.getMonth() + 1;
  // 日
  var d = now.getDate();
  // 曜日 0~6で日曜始まりで取得されるのでweeks配列のインデックスとして指定する
  var w = weeks[now.getDay()];
  // 時
  var h = now.getHours();
  // 分
  var mi = now.getMinutes();
  // 秒
  var s = now.getSeconds();
  
  // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
  if (mo < 10) mo = "0" + mo;
  if (d < 10) d = "0" + d;
  if (mi < 10) mi = "0" + mi;
  if (s < 10) s = "0" + s;
  
  //　HTML: <span id="clock_date">(ココの日付文字列を書き換え)</span>
  document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d + " (" + w + ")";
  document.getElementById("clock_time").innerHTML = h + ":" + mi + ":" + s;
  document.getElementById("clock_frame").style.fontSize =  window.innerWidth / 10 + "px";
  
  //日付が新規の場合、初期化する
  if (opened_day != d ){
    opened_day = d;
    opened = "false";
  }
  
  if (document.getElementById("btnMako").disabled == true && opened == "false") {
    if (document.getElementById("slcHour").value == h && document.getElementById("slcMinute").value == mi ) {
      //開くのは1日1回
      opened = "true";
      //なぜかポップアップブロックされるので、同タブジャンプに変更
      location.href = youTubeUrl.value;
      //window.open(array_url[index_url]);
    }
  }
  
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 1000);
youTubeUrl.value = array_url[Math.floor( Math.random() * array_url.length )];