import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

export default () => (
  <Layout>
    <SEO title="about" />
    <h1>Restoran - tekst zadatka</h1>
    <div>
      <p>
        Simulirati sistem za rukovođenje porudžbinama italijanskog restorana.
        Restoran pravi dva osnovna tipa hrane - pizza i pasta, i tri vrste pića
        - gazirani sokovi, negazirani sokovi i voda. Svaki obrok i piće ima
        naziv i cenu, dok piće ima i zapreminu. Na obrok se mogu dodati prilozi.
        Svaki prilog ima naziv i svoju cenu. Ukupna cena obroka je inicijalna
        cena + cena svakog od priloga. Restoran poseduje svoje stolove koji su
        numerisani rednim brojevima. Za svaku porudžbinu se beleži broj stola i
        sve poručene stavke (obroci, pića i prilozi).
      </p>
      <p>
        Pri kreiranju obroka (pasta ili pizza), kreira se i cena koja je random
        broj između 350 i 650. Pri kreiranju pića, kreira se i cena koja je
        random broj između 150 i 400. Pri kreiranju priloga, kreira se i cena
        koja je random broj između 20 i 100. Za svaku porudžbinu se izdaje racun
        sa spiskom svake poručene stavke, brojem stola i ukupnom cenom.
      </p>
      <p>
        Jedan sto moze da ima više porudžbina, ali ne sme da poruči ponovo bez
        da se prethodna porudžbina ne naplati (dok se ne kreira račun). Ukoliko
        jedan sto poruči ponovo bez naplate prethodne porudžbine, baciti
        izuzetak uz propratnu poruku “Nije moguće izdati novu porudžbinu jer
        prethodna nije plaćena. Kreiranje porudžbina i izdavanje računa je
        potrebno logovati u fajl ili konzolu, u formatu: Porudžbina: datum
        20/05/2019 11:20 sto broj 3 Račun: datum 20/05/2019 12:30 sto broj 3,
        naplata 1340rsd
      </p>

      <p>Simulirati rad ovog sistema na sledeći način:</p>
      <ol>
        <li>Kreirati 4 stola numerisana brojevima od 1 do 4.</li>
        <li>
          Kreirati 4 različite pizze, 5 pasti, 3 različita pića i 5 priloga.
          (imena generisati).
        </li>
        <li>
          Kreirati tri porudžbine za prethodno kreirane stavke (ugledati se ili
          iskoristiti primer ispod):
          <ol>
            <li>
              Sto broj 1
              <ol>
                <li>Pizza Capricciosa + kecap + origano</li>
                <li>Pasta Italiana + extra cheese</li>
                <li>2 x Coca cola 0.5</li>
              </ol>
            </li>
            <li>
              Sto broj 2
              <ol>
                <li>Pizza Siciliana</li>
                <li>Pasta Carbonara</li>
                <li>negazirani sok 0.25</li>
              </ol>
            </li>
            <li>
              Sto broj 3
              <ol>
                <li>3 x Pizza Capricciosa + 2x kecap</li>
                <li>Gazirani sok 0.3, negazirani sok 0.5, čaša vode</li>
              </ol>
            </li>
          </ol>
        </li>
        <li>Naplatiti prvu i treću porudžbinu.</li>
        <li>
          Pokušati poručivanje Pizza Capricciosa za sto broj 2 (očekuje se da se
          baci izuzetak).
        </li>
        <li>Naplatiti drugu porudžbinu</li>
        <li>
          Pokušati poručivanje Pizza Capricciosa za sto broj 2 (očekuje se
          uspešno kreiranje porudžbine bez izuzetka).
        </li>
      </ol>
    </div>
  </Layout>
)
