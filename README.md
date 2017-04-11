# Angular2-Generator

This project generates **angular2 project templates** with various configurations like Gulp, TSLint etc.

### Source Code

You can view and download the source code from

```link
https://github.com/KishoreIthadi/Angular2-Generator
```

### Features

| Commands       | Description                                                                                         |
|----------------|-----------------------------------------------------------------------------------------------------|
| a2 basicsetup  | Generates basic template with minimum dependencies used for developing an angular2 app from scratch |
| a2 gulp        | Generates gulp setup in the application.                                                            |
| a2 tslint      | (Under Development) Generates tslint setup in the application.                                      |

### Getting started

#### Step 1: Install Angular2-Generator Globally

```bash
npm install -g Angular2-Gen
```

#### Step 2: Generator Commands

##### a. Basic Template

```bash
a2 basictemplate
```

**Install dependencies**
```bash
npm install
```

**Run the application**

```bash
npm start
```

The above command will generate basic angular2 template as shown below.

![Alt text](https://github.com/KishoreIthadi/Angular2-Generator/blob/master/readmefiles/images/basicSetup.png?raw=true "Basic Setup")

##### b. Gulp Template

```bash
a2 gulp
```

**Install dependencies**
```bash
npm install
```

The above command will generate gulp configuration & task files as shown below.

![Alt text](https://github.com/KishoreIthadi/Angular2-Generator/blob/master/readmefiles/images/gulpSetup.png?raw=true "Gulp Setup")


**Run gulp build**

```bash
npm run build-web
```

The above command will generate production build in dist folder as shown below.

![Alt text](https://github.com/KishoreIthadi/Angular2-Generator/blob/master/readmefiles/images/gulpDist.png?raw=true "Gulp Build")
