### Repo commando's

In deze bijlage wordt uitgelegd wat de "repo commando's" inhouden.
Een "repo commando" is één van de scripts die in de package.json staan.

Dat levert de volgende items op:


| Commando                    | resultaat                                                                                              | Notities                                  |
|-----------------------------|--------------------------------------------------------------------------------------------------------|-------------------------------------------|
| start                       | Start de apps in development modus                                                                     |                                           |
| build                       | Start de apps in productie modus (en bouwt productie files)                                            |                                           |
| build-docker                | Bouwt zowel de dev als de productie docker images.                                                     |                                           |
| build-docker-dev            | Bouwt de dev docker image.                                                                             |                                           |
| build-docker-prod           | Bouwt de productie docker image                                                                        |                                           |
| compile-deliverables        | Bouwt alle documentatie                                                                                |                                           |
| compile-images              | Verzamelt alle images in de deliverables/images map zodat ze gebruikt kunnen worden in de documentatie | ! werkt niet op Windows                   |
| compile-pva                 | Bouwt het Plan van Aanpak                                                                              | Wordt gebouwt in de deliverables map      |
| compile-fo                  | Bouwt het Functioneel ontwerp                                                                          | Wordt gebouwt in de deliverables map      |
| compile-to                  | Bouwt het technisch ontwerp                                                                            | Wordt gebouwt in de deliverables map      |
| compile-testplan            | Bouwt het testplan                                                                                     | Wordt gebouwt in de deliverables map      |
| compile-opleverdocumentatie | Bouwt de opleverdocumentatie                                                                           | Wordt gebouwt in de deliverables map      |
| generate-pdfs               | Zet alle gebouwde bestanden om naar een .pdf                                                           | Wordt gebouwt in de deliverables/pdfs map |
| copy-endpoint-prod          |  Dit kopieërd alle development instellingen naar de apps                                                                                                     | ! werkt niet op Windows                   |
| copy-endpoint-dev           |  Dit kopieërd alle development instellingen naar de apps                                                   | ! werkt niet op Windows                   |
| postinstall                 | Dit script draait NA een npm install en zal de "build-docker" taak uitvoeren                           |                                           |
