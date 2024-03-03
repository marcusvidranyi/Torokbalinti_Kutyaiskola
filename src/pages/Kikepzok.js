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
                    <h3>Szabó Balázs</h3>
                    <p>Pellentesque placerat tellus eu sapien maximus egestas. Vestibulum convallis lacinia neque, eu ultricies mi rutrum et. Mauris quis mauris ut est condimentum semper at vitae augue. Vivamus vel iaculis eros. Phasellus vehicula gravida arcu, ac venenatis arcu rutrum sed. Aliquam ullamcorper nisl magna, scelerisque facilisis sem finibus eget. Sed posuere massa et enim dapibus, nec fermentum arcu mattis. Fusce mollis, erat sed ornare consequat, justo erat consectetur dolor, ut dignissim massa felis eu eros. Sed vestibulum scelerisque quam, at eleifend lectus condimentum porta.</p>
                   {/*  <div className="balazs_dogs">
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                        <img src={dog_screenshot_3} />
                    </div> */}
                </div>
                <div className="niki_box">
                    <img src={niki_profile_picture} />
                    <h3>Szabóné György Nikolett</h3>
                    <p>
                        Mindig is szerettem volna kutyát gyerekként.<br></br>
                        12 éves voltam mikor hozzánk került életem első kutyája Suzy a tacsi. 
                        Mindent együtt csináltunk, kirándultunk, együtt pihentünk, magam tanítgattam amire csak tudtam. 2000-ben 16 éves lett egy német juhász jellegű kutyám,
                        akivel már komolyabban foglalkoztam, kutyaiskolába kezdtem járni. Részt vettünk csoportos foglalkozásokon , őrzö-vèdőn, agility-n, jártunk bemutatókra. 
                        2002-ben túl estünk első vizsgákon BH-n (Kiserő kutya).<br></br>
                        2004-ben Kutyakozmetikuskènt végeztem, amiben el is helyezkedttem, majd oktattam a gyakorlati részét.<br></br>
                        2006-tól a Juhász Klinikán keztedm el dolgozni állatorvosi asszisztenkènt, mellette folytattam a kutyakozmetikát csak már saját bérelt helyiségben.
                        Pár évvel később Kutyakikèpzőkènt kezdtem tevékenykedni és megalakult a napközi és a panzió szolgáltatás is. Ez idő alatt labradookkal gyarapodott a család. 
                        Velük BH vizsgákon vettünk részt és csatlakoztunk Lecki Saroltához mentőkutya képzésre. Terület és Romkutatás volt a fő irány. Mivel a labradook energiája végtelen, 
                        így Peckhán Eszternek köszönhetően tagjai lehettünk a Kutyával az Emberért Alapítványnak és heti rendszerességgel, mint Terápiás kutya (és vezetője) 
                        foglalkozásokat tarthattunk mozgás és szellemileg sérült gyerekeknek.  
                    </p>
                    <p>
                        Gyerekeim érkeztèvel mozgás korlátozottabbak lettünk, így létrehoztuk saját Kutyaiskolánkat férjemmel 2013-ban.
                        2016-ban BH és IGP vizsgát tettünk több kutyankkal.<br></br>
                        Sem én,sem férjem nem lustálkodtunk és folyamatosan tovább és tovább képeztük (és képezzük) magunkat.
                        2017-ben Szolgálati Kutyák képzésével kezdtünk el foglaltoskodni, 2018-ra 3 állományba vettünk kutyával rendelkeztünk. Több nemzetközi, kisebb szolgálati verseny vettünk részt, 
                        jó eredményekkel. Mára már több állományba került kutyával rendelkezünk, melyekkel rendszereen szolgálatot látunk el Pest megyében.
                        2018. "Azura" Lea Von Der Winterschal Hivatásos Nemzetközi Szolgálati Verseny-en vett részt(köszönjük a bizalmat a ROKK-nak Rendőrség Országos Kiképző Központ, hogy minket javasoltak). 
                        Emellett 2018-ban Armani-nal Tapolca Kupán Őrző-Vèdő ágazatban I.helyezèst értünk el. Külön köszönet a felkészülésben Rusvai Zoltán segédnek.<br></br>
                        2018-ban IV. Fordulós Országos Szolgálati Verseny összesítésben Hektor nevű kutyámmal II. helyezést értünk el.<br></br>
                        2019-2020 as éveinek tréningekkkel, szolgálatokkal és bemutatókkal teltek.<br></br>
                        2021-ben Puller Oktatóként végeztem, majd versenyeken indultam. Armani német juhász kutyámmal több I. helyezést is elértünk, mindkét kategóriában.<br></br>
                        2023. Gyermek Pedagógiai Asszisztenskènt végeztem,hogy a tudásomat legjobb formában tudjam tovább adni a jövő számára.
                        2024 Januárjában Terápiás Kutya Foglalkozás Vezetőkènt végeztem.<br></br>
                        2024. Ebrendèszeti Telepvezetőkènt végeztem.<br></br>
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
