# z-mirror

## _...WORK IN PROGRESS..._

> a magic mirror done my way

#### screenshot

![screenshot](/static/screenshot2.png)

## Requirements

* 1 Raspbery PI
* 1 screen (I bought mine 15€ second hand and as a bonus, it has a audio input)
* Pieces of wood
* 1 One-way mirror (I built it)
* Some time and a lot of courage

You'll probably want to be able to have the shopping list & the postits : there are some more things to do: 

* create your instance of the [z-mirror-api](https://github.com/benavern/z-mirror-api)
* host the [z-mirror-app](https://github.com/benavern/z-mirror-app) (don't forget to put some security on it)
## Raspbery pi settings

I used a fresh install of raspbian (July 2017 - kernel 4.9)

#### Rotate the screen
````
sudo nano /boot/config.txt
````
Add the following line:
````
display_rotate=1
avoid_warnings=1 
````

#### Disable the screensaver
````
sudo nano ~/.config/lxsession/LXDE-pi/autostart
````
Add the following lines:
````
@xset s noblank
@xset s off
@xset -dpms
````

````
sudo nano /etc/lightdm/lightdm.conf
````
Add the following line below `[SeatDefaults]`
````
xserver-command=X -s 0 -dpms
````

## Build Setup

``` bash
# install dependencies
npm install # or yarn

# create a config.json file in src
cp src/config.example.json src/config.json
# edit it the way you need

# serve with hot reload at localhost:9080
npm run dev # or yarn run dev

# build electron application
npm run build:raspi # or yarn run build:raspi
# don't know why it does not work directly on the raspbery 
# so I built the app on my personnal computer
# then `scp` the build on my raspberry pi


# lint all JS/Vue component files in `src/`
npm run lint # or yarn run lint

```

# Photos

<details>
  <summary>Click to see pictures of the mirror building process</summary>

  ![01](/static/01.jpg)

  ![02](/static/02.jpg)

  ![03](/static/03.jpg)

  ![04](/static/04.jpg)

  ![05](/static/05.jpg)

  ![06](/static/06.jpg)

  ![07](/static/07.jpg)

  ![08](/static/08.jpg)

</details>

## Why
This project is part of my z-mirror project

* [The web app](https://github.com/benavern/z-mirror-app)
* [The web api](https://github.com/benavern/z-mirror-api)


---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue)@[b31b441](https://github.com/SimulatedGREG/electron-vue/tree/b31b44123ad42acac12337c4955df4ead853f0df) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
