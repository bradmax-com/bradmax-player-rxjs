___
![Bradmax][bradmaxLogo]
![ReactJs][reactJsLogo]
___
This contains [bradmax player][bradmax] ReactJs modules.
___
## Npm submodules:
| name | npm package | language | module | description |
|:---:|:---|:---:|:---:|:---|
| `gorilla` | [@bradmax/player-rxjs/gorilla][npm-player-rxjs] | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **gorilla** skin. |
|  `mole`   | [@bradmax/player-rxjs/mole][npm-player-rxjs]    | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **mole** skin.    |
|  `snake`  | [@bradmax/player-rxjs/snake][npm-player-rxjs]   | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **snake** skin.   |
|  `zebra`  | [@bradmax/player-rxjs/zebra][npm-player-rxjs]   | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **zebra** skin.   |
___
## Example:
- [bradmax-com/bradmax-player-rxjs-example](https://github.com/bradmax-com/bradmax-player-rxjs-example) : React JS application.
___
## Usage:
### 1. Include bradmax player rx in app:
```
<!-- skin gorilla -->
<BradmaxPlayerGorilla {...this.CONFIGURATION} />

<!-- skin mole -->
<BradmaxPlayerMole {...this.CONFIGURATION} />

<!-- skin snake -->
<BradmaxPlayerSnake {...this.CONFIGURATION} />

<!-- skin zebra -->
<BradmaxPlayerZebra {...this.CONFIGURATION} />
```
*`this.CONFIGURATION` is reference to valid [bradmax player configuration][bradmax-doc-config] json object*
___
#### License MIT 
___
More info @ [bradmax.com][bradmax]

[bradmax]: https://bradmax.com
[bradmax-doc-config]: https://bradmax.com/static/player-doc/configuration.html
[npm-player-ag]: https://npmjs.com/package/bradmax-player-ag
[npm-player-ng]: https://npmjs.com/package/bradmax-player-ng
[npm-player-rxjs]: https://npmjs.com/package/bradmax-player-rxjs
[npm-player-js]: https://npmjs.com/package/bradmax-player-js
[git-player-ag]: https://github.com/bradmax-com/bradmax-player-ag
[git-player-ag-example]: https://github.com/bradmax-com/bradmax-player-ag-example
[git-player-ng]: https://github.com/bradmax-com/bradmax-player-ng
[git-player-ng-example]: https://github.com/bradmax-com/bradmax-player-ng-example
[git-player-rxjs]: https://github.com/bradmax-com/bradmax-player-rxjs
[git-player-rxjs-example]: https://github.com/bradmax-com/bradmax-player-rxjs-example
[git-player-js]: https://github.com/bradmax-com/bradmax-player-js

[bradmaxLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-rxjs/master/assets/md/bradmax.svg?sanitize=true
[reactJsLogo]: https://raw.githubusercontent.com/bradmax-com/bradmax-player-rxjs/master/assets/md/rx.svg?sanitize=true
