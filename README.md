# lpdw-frontend

## Step 1 : Project initialisation

* Clone git lpdw-frontend project
* Configure NPM

## Step 2 : Install server side

* Install git server side submodule :

`git submodule add git@github.com:pebie/pebie-server.git`

* Understanding server side (theory)

This is a server based on **Loopback** and **Mongodb**.

**Loopback** allows you to quickly create a dynamic end-to-end rest APIs.

**MongoDB** is an open-source, document database designed for ease of development and scaling.

* Testing server side
  * In a command shell terminal launch `sudo mongodb`
  * cd to `./pebie-server`
  * run `npm install`
  * run `node .`
  * Open Robomongo and verify entries
  * Open `http://localhost:3001/explorer` and enjoy to play with API
