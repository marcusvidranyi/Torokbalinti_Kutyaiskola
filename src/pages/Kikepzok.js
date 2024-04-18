import "./kikepzok.css"

import NavBar from "../components/NavBar";
import dog_category_example_1 from "../images/dog_category_example_1.jpg";
import dog_category_example_2 from "../images/dog_category_example_2.jpg";
import dog_category_example_3 from "../images/dog_category_example_3.jpg";
import dog_screenshot_3 from "../images/dog_screenshot_3.jpg";
import niki_profile_picture from "../images/niki_profile_picture.jpg";
import balazs_profil from "../images/balazs_profil.jpg";

const Kikepzok = () => {
    return (
        <>
            <NavBar />
            <div className="kikepzok_box">
                <h1>KIKÉPZŐK</h1>
                <div className="balazs_box clearfix">
                    <img src={balazs_profil} />
                    <h2>Szabó Balázs</h2>
                    <p>Egy puli tenyésztő családba születtem, igy már kisgyerekkoromtól kezdve szerves részét képezték az életemnek a kutyák,
                        magától értetődő volt, hogy a magyar honvédségnél is kutyás leszek, tehát a szolgálati kutyavezetői tanfolyam elvégzése
                        után kutyavezetőként szolgáltam a hadseregben.
                    </p>
                    <p>A '90-es években Csibra Pista bácsi közremüködésével készült az első komolyabb, vizsgázott szolgálati kutyám,
                        akivel a saját biztonsági cégen belül őrzéseket vállaltam.
                    </p>
                    <p>
                        A 2000-es évek elején a DogFit Kutyaiskolához kerültem és az oktatás mellett a Rottweiler fajtamentéssel foglalatoskodtam, igy került hozzám Marcus nevü kutyám,
                        akivel BH illetve IGP vizsgát tettünk.
                    </p>
                    <p>
                        2010-ben ismertem meg Nikit, a feleségemet, aki akkor már kutyakiképzőként dolgozott, igy együtt folytattuk tovább a kutyakiképzést,
                        napköziztetést és a kutyapanziózást.
                    </p>
                    <p>
                        2013-ban megalapitottam a Törökbálinti Kutyaiskola Sport Egyesületet és megvettem a mára már legendás szolgálati német juhász kutyámat,
                        Xtreme-et. Az egyesület létrejötte egy megingathatatlan elköteleződéssel is járt, hogy folyamatosan fejlesszük magunkat és a tudásunkat,
                        szabadidőnket olyan méltán neves kutyások társaságában töltöttük, mint Levente Zsolt, Vörös Lajos (ringdresszúra), és Sasvári Frigyes.
                    </p>
                    <p>
                        2015-ben Ang nevü rottweileremmel mind nyomkövetésben, mind őrző-védő ágazatban sikeresen megálltuk a helyünket, utóbbiban olyan biztató
                        teljesitménnyel, hogy egyenesen az olaszországi Appiano-ig utaztunk egy versenyre.
                    </p>
                    <p>
                        Szintén ez évben III. helyezést értünk el a Szöllősi Zsolt Emlékverseny IGP C ágazatában Xtreme kutyámmal.
                        2016-ban kiállitásra és BH vizsgára készitettünk fel vállalt kutyákat, Dutch nevü amerikai bulldogunk pedig TKOK CAC kiállitáson kitünő,
                        CAC fajtagyőztes cimeket szerzett.
                    </p>
                    <p>
                        2017-ben kezdtem szolgálati kutyák képzésével is foglalkozni, 2018-ra pedig már 3 állományba vett kutyával rendelkeztünk.
                        Több nemzetközi, kisebb szolgálati versenyen szerepeltünk, jó eredményekkel.
                    </p>
                    <p>
                        2020-ban polgárőr kutyák képzését és vizsgáztatását segitettem a ROKK szakoktatójának irányitása mellett.
                    </p>
                    <p>
                        2022-től közös, épitő jellegü tréningeket és kapcsolatot tartunk a szlovák kollégákkal is, Csicsay Csaba vezetésével.
                        Következő években rengeteget tréningeztünk együtt profi segédekkel,mint Kis Attila (BV-s), Kolerics Péter (BV-s). 
                        Bemutatókat , rendezvényeket biztosítottunk, kutyás szolgálatot adtunk , járőrözést biztosítottunk.
                    </p>
                    <p>
                        Mára már több állományba került kutyával rendelkezünk, akikkel rendszeresen szolgálatot látunk el Pest vármegyében. 
                        Olyan neves segédekkel dolgozunk együtt a tökéletesités érdekében, mint Marco Pesci, Kovács Dániel, Dajka József, 
                        Takács Attila, Rusvai Zoltán és Poszpischil Péter.
                    </p>
                    <h3 style={{ textDecoration: "underline"}}>
                        Néhány eredmény:
                    </h3>
                    <p>
                        2018. Nemzetközi Szolgálati Verseny, Dévaványa, V. helyezés és különdij Kiváló Szakmai Intézkedésért
                    </p>
                    <p>
                        2019. Szolgálati Kutyák Országos Bajnoksága, csapatban III. helyezés, majd II. helyezés
                    </p>
                    <p>
                        2019. Kinevezés az OPSZ-nél, mint Országos Lovas és Kutyás Tagozat kiképzési szakreferense
                    </p>
                    <p>
                        2022. Újabb kinevezés,mint Pest vármegye Polgárőr Szövetség Kutyás és Állatvédelmi Szakreferense
                    </p>
                    <p>
                        2023. Dr. Túrósi András elismerését és kitüntetését kaptam jutalmul
                    </p>
                    <p>
                        2024. Január 1-től a Nemzeti Közszolgálati Egyetem Ludovika S.E. a Rendészeti Kutyás Szakosztály Mesterkiképzőjének nevezett ki
                    </p>
                    <p>
                        Jelenleg a Törökbálinti Kutyaiskola oktatója, a Polgárőrség szolgálati kutyáinak egyik vizsgabiztosa vagyok, ezek mellett a 
                        kinevezéssekkel járó feladataimat látom el.
                    </p>
                    <h3>
                        Titulus:
                    </h3>
                    <p>
                        <li>Országos Polgárőr Szövetség Kutyás Szolgálati és Állatvédelmi Tagozat Országos Oktatásért Felelős Szakreferense</li>
                        <li>Pest Vármegyei Polgárőr Szövetség Kutyás és Állatvédelmi Szakterületi Koordinátora</li>
                        <li>Nemzeti Közszolgálati Egyetem Luduvika SE Rendészeti Kutyás Szakosztály Mesterkiképzője.</li>
                    </p>
                    {/*  <div className="balazs_dogs">
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                    </div> */}
                </div>
                <div className="niki_box">
                    <img src={niki_profile_picture} />
                    <h2>Szabóné György Nikolett</h2>
                    <p>
                    Mindig is szerettem volna kutyát gyerekként.
                    </p>
                    <p>
                    12 éves voltam mikor hozzánk került életem első kutyája Suzy a tacsi.
                    Mindent együtt csináltunk, kirándultunk, együtt pihentünk, magam tanítgattam amire csak tudtam.
                    </p>
                    <p>
                    2000-ben 16 éves lett egy német juhász jellegű kutyám,
                    akivel már komolyabban foglalkoztam, kutyaiskolába kezdtem járni. Részt vettünk csoportos foglalkozásokon , őrzö-vèdőn, agility-n, jártunk bemutatókra.
                    </p>
                    <p>
                    2002-ben túl estünk első vizsgákon BH-n (Kiserő kutya).
                    </p>
                    <p>
                    2004-ben Kutyakozmetikuskènt végeztem, amiben el is helyezkedttem, majd oktattam a gyakorlati részét.
                    </p>
                    <p>
                    2006-tól a Juhász Klinikán keztedm el dolgozni állatorvosi asszisztenkènt, mellette folytattam a kutyakozmetikát csak már saját bérelt helyiségben.
                    </p>
                    <p>
                    Pár évvel később Kutyakikèpzőkènt kezdtem tevékenykedni és megalakult a napközi és a panzió szolgáltatás is.<br></br>
                    Ez idő alatt labradookkal gyarapodott a család.
                    Velük BH vizsgákon vettünk részt és csatlakoztunk Lecki Saroltához mentőkutya képzésre. Terület és Romkutatás volt a fő irány. Mivel a labradook energiája végtelen,
                    így Peckhán Eszternek köszönhetően tagjai lehettünk a Kutyával az Emberért Alapítványnak és heti rendszerességgel, mint Terápiás kutya (és vezetője)
                    foglalkozásokat tarthattunk mozgás és szellemileg sérült gyerekeknek.
                    </p>
                    <p>
                        Gyerekeim érkeztèvel mozgás korlátozottabbak lettünk, így létrehoztuk saját Kutyaiskolánkat férjemmel 2013-ban.
                    </p>
                    <p>
                        2016-ban BH és IGP vizsgát tettünk több kutyánkkal.
                    </p>
                    <p>
                        Sem én,sem férjem nem lustálkodtunk és folyamatosan tovább és tovább képeztük (és képezzük) magunkat.
                    </p>
                    <p>
                        2017-ben Szolgálati Kutyák képzésével kezdtünk el foglaltoskodni, 2018-ra 3 állományba vettünk kutyával rendelkeztünk. Több nemzetközi, 
                        kisebb szolgálati verseny vettünk részt,
                        jó eredményekkel.
                    </p>
                    <p>
                        Mára már több állományba került kutyával rendelkezünk, melyekkel rendszereen szolgálatot látunk el Pest megyében.
                     </p>
                     <p>
                        2018. "Azura" Lea Von Der Winterschal Hivatásos Nemzetközi Szolgálati Verseny-en vett részt(köszönjük a bizalmat a ROKK-nak 
                        Rendőrség Országos Kiképző Központ, hogy minket javasoltak).
                        Emellett 2018-ban Armani-nal Tapolca Kupán Őrző-Vèdő ágazatban I.helyezèst értünk el. Külön köszönet a felkészülésben Rusvai Zoltán segédnek.
                    </p>
                    <p>
                        2018-ban IV. Fordulós Országos Szolgálati Verseny összesítésben Hektor nevű kutyámmal II. helyezést értünk el.
                    </p>
                    <p>
                        2019-2020 as éveinek tréningekkkel, szolgálatokkal és bemutatókkal teltek.
                    </p>
                    <p>
                        2021-ben Puller Oktatóként végeztem, majd versenyeken indultam. Armani német juhász kutyámmal több I. helyezést is elértünk, mindkét kategóriában.
                    </p>
                    <p>
                        2023. Gyermek Pedagógiai Asszisztenskènt végeztem,hogy a tudásomat legjobb formában tudjam tovább adni a jövő számára.
                    </p>
                    <p>
                        2024 Januárjában Terápiás Kutya Foglalkozás Vezetőkènt végeztem.
                    </p>
                    <p>
                        2024. Ebrendèszeti Telepvezetőkènt végeztem
                        A Törökbálinti Kutyaiskola Sport Egyesület oktatója vagyok.
                    </p>
                    {/* <div className="niki_dogs">
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                    </div> */}
                </div>

            </div>

        </>
    )
}

export default Kikepzok;
