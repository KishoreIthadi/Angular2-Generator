# Angular2-Generator

This project generates **angular2 project templates** with various configurations like Gulp, TSLint etc.

### Source Code

You can view and download the source code from

```link
https://github.com/KishoreIthadi/Angular2-Generator
```

### Features

| Commands             | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| a2 basicsetup        | Generates basic template with minimum dependencies for developing angular2 app from scratch. |
| a2 basicsetuprouter  | Same as **basicsetup**. Adds router with navigation layout design.                           |
| a2 gulp              | Generates gulp setup in the application.                                                     |
| a2 tslint            | (Under Development) Generates tslint setup in the application.                               |

### Getting started

#### Step 1: Install Angular2-Generator Globally

```bash
npm install -g angular2-gen
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


##### b. Basic Template With Router

```bash
a2 basictemplaterouter
```

**Install dependencies**
```bash
npm install
```

**Run the application**

```bash
npm start
```

The above command will generate basic angular2 template with router configuration as shown below. It will add Home, About & Contact views for demonstrating navigation between views.

![Alt text](https://github.com/KishoreIthadi/Angular2-Generator/blob/master/readmefiles/images/basicSetupRouter.png?raw=true "Basic Router Setup")

##### c. Gulp Setup

```bash
a2 basicsetup or a2 basicsetuprouter
```

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

The above command will generate production build in dist folder as shown below. The below build structure is for **basicsetup**, In case of **basicsetuprouter** the build structure will be different.

![Alt text](https://github.com/KishoreIthadi/Angular2-Generator/blob/master/readmefiles/images/gulpDist.png?raw=true "Gulp Build")

Note: The gulp setup is generated based on the **basicsetup/basicsetuprouter** templates. If you are running the gulp command on a different application you might have to change gulp tasks and index.html file accordingly.

For more advanced angular2 gulp build refer the below link

```link
https://github.com/KishoreIthadi/Angular2Gulp
```

