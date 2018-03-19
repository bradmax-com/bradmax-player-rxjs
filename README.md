___
![Bradmax][bradmaxLogo]
![ReactJs][reactJsLogo]
___
This contains [bradmax player][bradmax] ReactJs modules.
___
## Npm submodules:
| name | npm package | language | module | description |
|:---:|:---|:---:|:---:|:---|
| `gorilla` | [@bradmax/player-rx/gorilla][npm-player-rx] | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **gorilla** skin. |
|  `mole`   | [@bradmax/player-rx/mole][npm-player-rx]    | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **mole** skin.    |
|  `snake`  | [@bradmax/player-rx/snake][npm-player-rx]   | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **snake** skin.   |
|  `zebra`  | [@bradmax/player-rx/zebra][npm-player-rx]   | *ts/js* | *es5/es2015/umd* | **ReactJs** module with [bradmax player][bradmax] **zebra** skin.   |
___
## Example:
- [bradmax-com/bradmax-player-rx-example](https://github.com/bradmax-com/bradmax-player-rx-example) : React JS application.
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
[npm-player-rx]: https://npmjs.com/package/bradmax-player-rx
[npm-player-js]: https://npmjs.com/package/bradmax-player-js
[git-player-ag]: https://github.com/bradmax-com/bradmax-player-ag
[git-player-ag-example]: https://github.com/bradmax-com/bradmax-player-ag-example
[git-player-ng]: https://github.com/bradmax-com/bradmax-player-ng
[git-player-ng-example]: https://github.com/bradmax-com/bradmax-player-ng-example
[git-player-rx]: https://github.com/bradmax-com/bradmax-player-rx
[git-player-rx-example]: https://github.com/bradmax-com/bradmax-player-rx-example
[git-player-js]: https://github.com/bradmax-com/bradmax-player-ag

[bradmaxLogo]: ./assets/md/bradmax.svg
[reactJsLogo]: ./assets/md/rx.svg
