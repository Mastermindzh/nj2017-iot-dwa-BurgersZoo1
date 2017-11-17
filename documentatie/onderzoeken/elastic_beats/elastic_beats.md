# Elastic beats vs agents

## Onderzoeksmethode

**Categorie**: Stepping Stones <br />
**Naam**: Comparison chart

## Hypothese

De verwachting is dat Elastic Beats beter zullen werken dan de ouderwetse agents / handmatig opsturen van log data.

De hoofdvraag van dit onderzoek is:
> Welk COTS product is het meest geschikt om loginformatie op te sturen naar een logstash back-end.

## Test opzet

Om te kijken welk COTS product het beste is zal er gebruik gemaakt worden van een zogeheten "comparison chart". In deze tabel worden een aantal kenmerken naast elkaar gezet en beoordeeld ten opzichte van elkaar. Deze kenmerken zullen beoordeeld worden met plusjes en minnetjes.

Een voorbeeld van deze tabel is bijv. als volgt:

| Te beoordelen producten                        | Snelheid | Benzinegebruik |
|------------------------------------------------|:--------:|----------------|
| Snelle motor met veel benzinegebruik           | +        | -              |
| Langzame motor met weinig benzinegebruik       | -        | +              |
| Zeer snelle motor met zeer veel benzinegebruik | ++       | --             |

Aan de hand van deze tabel kan er, op basis van de belangrijkste aspecten een keuze gemaakt worden.

### Data agents
Er zijn verschillende stukken software op een basis besturingssysteem om data te loggen, in dit onderzoek wordt voornamelijk gerefereerd naar "[rsyslog](http://www.rsyslog.com/)".

Rsyslog kan naast OS data bijv ook pgsql en mongodb statistieken verzenden. Dit stukje software zal de logs uit het OS ontvangen en doorsturen naar logstash zodat deze het verder kan verwerken. Voordat rsyslog data kan versturen naar een logstash instance moet de server admin een regel aanmaken met het dataformaat en evt. opties.

### Elastic Beats
![heartbeat](https://static-www.elastic.co/assets/blt4c84a68e1bf91a44/simple-heartbeat-dashboard.jpg?q=350)

Elastic beats zijn in het beginsel hetzelfde als rsyslog omdat het een programma is dat logdata verzamelt, processed en opstuurt. Waar de beats verschillen, volgens de bron, is in zowel resource gebruik, de [community](https://www.elastic.co/guide/en/beats/libbeat/current/community-beats.html) en gebruiksgemak.

### Vergelijking
Nu beide producten ingeleid zijn is het tijd om de claims naast elkaar te zetten in een overzichtelijke tabel en daar een conclusie uit te trekken. Voor compleetheid voeg ik ook een eigen te bouwen systeem toe.

|                                                   | rsyslog | Elastic beats | Eigen systeem |
|---------------------------------------------------|---------|---------------|---------------|
| compatibiliteit met logstash                      | -       | ++            | --            |
| aantal log messages                               | +       | ++            | ?             |
| compatibiliteit met architectuur (i386, arm, etc) | ++      | +             | ++            |
| Onafhankelijkheid                                 | +       | --            | ++            |
| JSON support                                      | -       | ++            | ++            |
| snelheid implementatie                            | +       | ++            | -             |

## Resultaat
Bij beide systemen zal het onvermijdbaar zijn om een aantal dingen zelf te moeten versturen (denk bijv. aan nfc scans) maar zowel rsyslog als Elastic beats gebruiken zal een tijd/feature winst opleveren

Elastic beats komen het beste uit de test maar is wel afhankelijk van logstash.

## bronnen
1. [How To Centralize Logs with Rsyslog, Logstash, and Elasticsearch on Ubuntu 14.04](https://www.elastic.co/blog/how-to-centralize-logs-with-rsyslog-logstash-and-elasticsearch-on-ubuntu-14-04)
2. [Remote file collection with rsync and scp](https://discuss.elastic.co/t/remote-file-collection-rsync-scp/54063)
3. [Configure filebeat](https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-configuration.html)[](https://www.elastic.co/products/beats/heartbeat)
4. [Elasticsearch benchmarks](https://elasticsearch-benchmarks.elastic.co/index.html#tracks/logging/release)
