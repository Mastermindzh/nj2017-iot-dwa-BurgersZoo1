# Audioformaat onderzoek

Welk audioformaat is het beste geschikt om een audio bestanden vanuit de gateway naar de poten te verzenden?

### Beoordelingscriteria audioformaten

**Ondersteuning**: Het geluidformaat moet afgespeeld kunnen worden op een arduino. De arduino moet dus ook snel genoeg zijn om ene eventueel encoded geluid te kunnen decoderen.

**Geluidskwaliteit**: Wat is de kwaliteit van het geluid? Opgenomen stemmen met weetjes moeten te begrijpen zijn en opgenomen dierengeluiden moeten te herkennen zijn.

**Bestandsgroote**: Wat is de grootte van het bestand per seconde aan geluid? De bestanden moeten zo klein zijn zodat ze snel overgestuurd kunnen worden over de langzame NRF verbinding. 

### Theorie
Er zijn twee libraries beschikbaar voor de arduino om geluid af te spelen:
* [SimpleSDAudio](https://hackerspace-ffm.de/wiki/index.php?title=SimpleSDAudio)
* [TMRpcm](https://github.com/TMRh20/TMRpcm)

Beide ondersteunen alleen WAV. Dus we gaan voor het Wave formaat.

Bij het wave formaat zijn twee variable die invloed hebben op de kwaliteit en de grootte van het bestand. Dit is de sampeling frequentie in kHz en de sampeling quality in bits.

Een sector waar veel wordt gedaan met opgenomen spraak is de podcast-wereld. Hieronder een aantal artiekelen die tips geven over audio-bitrates voor podcasts:

* [what-is-lowest-best-possible-bitrate](http://mygeekopinions.blogspot.nl/2011/05/what-is-lowest-best-possible-bitrate.html) (22kHz) (mono)
* [choosing-bit-rates-for-podcasts](http://www.richardfarrar.com/choosing-bit-rates-for-podcasts/) (44.1 kHz)
* [what-bitrate-should-i-use-for-a-podcast](https://www.thepodcasthost.com/editing-production/what-bitrate-should-i-use-for-a-podcast) (44.1kHz) (mono)
* [what-does-44100hz-mean-podcast-sample-rates](https://www.thepodcasthost.com/q-and-a/what-does-44100hz-mean-podcast-sample-rates) (16bit)

Voor mooie spraak geschikt voor podcasts wordt minimaal 16 bit 22kHz aangeraden. Sinds de speakertjes niet super-hoge kwaliteit nodig hebben kan een iets lagere frequentie ook wel. 

Beide libraries kunnen op 8 bit en 16 bit audio afspelen. De SimpleSDAudio library kan afspelen op 62.500 kHz, 31.250 kHz en 15.625 kHz terwijl de TMRpcm library op 8khz en 32khz kan afspelen.

Na een beetje experimenteren is uitgevonden dat 8 bit ook nog goed klinkt. De voorbeeldgeluiden met verschillende bitrates zijn bijgevoegd.

### Conclusie
De combinatie van testen van bestandsgrootes en het gebruiken van de podcast-khz theorie is gevonden dat **mono 8 bit 32kHz** het beste klinkt en met het kleinste formaat.

