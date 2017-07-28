# wtt
WTT web application including official website and manage platform

## Deploy to Heroku 

1. First, you have to login `heroku` first.
```heroku login```
2. Then, execute the following under path `wtt`
```sh
cd ./wtt
git subtree push --prefix front-end heroku master
```