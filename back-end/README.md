# back-end

## Getting started
```yarn dev```

run the dev-server, it will open the browser and navigate to ```localhost:3000``` automatically.



```yarn watch-css```

generate bundled css and regenerate if modification was found.

## About style
take ```./src/assets/stylesheet/index.scss``` as entry point and import corresponding scss file.


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

