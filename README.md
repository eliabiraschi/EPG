# EPG

## Local Running

### Requirements

* NodeJS 16 (it should work with other versions of Node, but I haven't tested them).

### Installation

Clone this repo and the backend into 2 separate folders and install the package

**Frontend**

```bash
$ git clone git@github.com:eliabiraschi/EPG.git
$ cd EPG
$ npm i
```

**Backend**

```bash
$ git clone https://github.com/NoriginMedia/mock-api.git
$ cd mock-api
$ npm i
```

### Run

Run the backend first to make sure that the UI will be able to request the data as soon as it runs.

```bash
$ pwd
mock-api
$ npm start
```

In a different terminal, launch the UI in the same way

```bash
$ pwd
EPG
$ npm start
```

A new browser tab should be open pointing to the webapp. If it does not open automatically, you can find the app by visiting this addess http://localhost:3000/

## Testing

The test suite is set up, but at the moment of writing, no test have been implemented yet.
