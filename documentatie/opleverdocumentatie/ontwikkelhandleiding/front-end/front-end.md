Op Linux en Mac OS X zit verder nog een limiet op het aantal bestanden / mappen waar een gebruiker tegelijk naar mag "luisteren" voor veranderingen. Om dat op te lossen moet je het volgende commando uitvoeren:

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

<sub>Voor technische info klik [hier](https://github.com/emcrisostomo/fswatch), voor sysctl uitleg [klik](https://wiki.archlinux.org/index.php/sysctl) hier.</sub>
