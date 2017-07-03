# back-end

* [Getting started](#getting-started)
* [About style](#about-style)
* [Login flow](#login-flow)
* [ProductDetail page when developing](#productdetail-page-when-developing)


## Getting started
```yarn dev```

run the dev-server, it will open the browser and navigate to ```localhost:3000``` automatically.


```yarn watch-css```

generate bundled css and regenerate if modification was found.

## About style
when boosting ```yarn watch-css```, ```./src/assets/stylesheet/index.scss``` will be complied into ```./src/assets/stylesheet/index.css``` as long as modification was found.

Therefore, take ```./src/assets/stylesheet/index.css``` as entry point then it will take all the styles.


## Login flow

Switch login mode easily with custom environment variables ```REACT_APP_LOGIN```.

### Enable login 
```sh
REACT_APP_LOGIN=true yarn dev
```
or 
```sh
yarn dev:with-login
```

### Disable login 
```sh
REACT_APP_LOGIN=false yarn dev
```
or 
```sh
yarn dev:without-login
```

## ProductDetail page when developing

In ```PageProduct```, route looks like ```/product/:categoryKey/:seriesKey```.
For development needs, please navigate to [https://localhost:3000/product/wheel-spacers/hs](https://localhost:3000/product/wheel-spacers/hs).

