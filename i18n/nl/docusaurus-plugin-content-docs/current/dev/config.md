---
title: UserConfig
---

De inhoud binnen `==UserConfig==` komt na `==UserScript==` en beschrijft enkele door de gebruiker configureerbare opties voor het script. De configuratie wordt geschreven in [YAML](https://yaml.org/)-indeling:

```js
/* ==UserConfig==
group1:
  configA:                                # sleutel is group.config, bv. deze sleutel is group1.configA
    title: Configuratie A                 # de titel van de configuratie
    description: Dit is een configuratie van het teksttype # de beschrijving van de configuratie
    type: text                            # optietype; automatisch gedetecteerd uit de gegevens indien weggelaten
    default: standaardwaarde              # de standaardwaarde van de configuratie
    min: 2                                # minimaal 2 tekens
    max: 18                               # maximaal 18 tekens
    password: true                        # markeren als wachtwoordveld
  configB:
    title: Configuratie B
    description: Dit is een configuratie met een selectievakje
    type: checkbox
    default: true
  configC:
    title: Configuratie C
    description: Dit is een configuratie met een keuzelijst
    type: select
    default: 1
    values: [1,2,3,4,5]
  configD:
    title: Configuratie D
    description: Dit is een configuratie met een dynamische keuzelijst
    type: select
    bind: $cookies                       # dynamisch gebonden waarden; de sleutel begint met $ en de waarde moet een array zijn
  configE:
    title: Configuratie E
    description: Dit is een configuratie met een meerkeuzelijst
    type: mult-select
    default: [1]
    values: [1,2,3,4,5]
  configF:
    title: Configuratie F
    description: Dit is een configuratie met een dynamische meerkeuzelijst
    type: mult-select
    bind: $cookies
  configG:
    title: Configuratie G
    description: Dit is een numerieke configuratie
    type: number
    default: 1
    min: 10  # minimumwaarde
    max: 16  # maximumwaarde
    unit: min # eenheidslabel
  configH:
    title: Configuratie H
    description: Dit is een configuratie met lange tekst
    type: textarea
    default: standaardwaarde
  configI:
    title: Configuratie I
    description: Dit is een configuratie van het tijdtype
    type: time
    default: "12:00"
---
group2: # tweede configuratiegroep
  configX:
    title: Configuratie X
    description: Dit is een configuratie van het teksttype
    default: standaardwaarde
 ==/UserConfig== */
```

Zodra dit hier is gedefinieerd, verschijnt er een configuratieknop in het dashboard waarmee de gebruiker kan configureren. Ontwikkelaars gebruiken `GM_getValue` om de waarde van de configuratie te lezen, waarbij de sleutel wordt uitgedrukt als `group.config`.

![](@site/docs/dev/config.assets/image-20210621213013631.png)
