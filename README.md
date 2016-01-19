# mytodo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.

-------------------------------------------------------------------------------------


     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 

This project does the Yeoman Angular Generator.

I am going to try out this tutorial since I'm not sure which tutorial i tried before with yeoman. if this doesn't work,
I will go back to the codesnippets video tutorial that I have.
http://yeoman.io/codelab/setup.html


This tutorial helped with getting the right node version since nvm is on c9.

https://davidwalsh.name/nvm

Second time running through the following tutorial. I will keep a log of the steps here.
https://medium.com/@studavis/how-to-use-yeoman-on-cloud9-the-complete-guide-4348c66f0b36#.3is7mrdlh
https://c9.io/blog/how-to-use-yeoman-on-cloud9/

I did get the initial part of this tutorial to work, however there was issue with livereload. I think there are issues with
it on c9. I removed it from the Gruntfile yet it still is being requested. However, now it doesnt prevent Angular from loading.




> node --version && npm --version
v4.1.1
2.14.4

> ls /home/ubuntu/.nvm/versions/node/v
v0.12.7/ v4.1.1/  

tutorial requires node Node.js v0.10.x+

from https://davidwalsh.name/nvm

cornjacket:~/workspace $ nvm ls
        v0.6.21
        v0.8.28
       v0.10.40
        v0.12.7
    iojs-v3.3.1
->       v4.1.1
         system
default -> 4.1.1 (-> v4.1.1)
node -> stable (-> v4.1.1) (default)
stable -> 4.1 (-> v4.1.1) (default)
iojs -> iojs-v3.3 (-> iojs-v3.3.1) (default)

cornjacket:~/workspace $ nvm use 0.10.40

cornjacket:~/workspace $ npm install --global yo bower grunt-cli
npm WARN engine yo@1.6.0: wanted: {"node":">=0.12.0"} (current: {"node":"0.10.40","npm":"1.4.28"})
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
npm WARN engine deep-extend@0.4.1: wanted: {"node":">=0.12.0","iojs":">=1.0.0"} (current: {"node":"0.10.40","npm":"1.4.28"})
npm WARN engine deep-extend@0.4.1: wanted: {"node":">=0.12.0","iojs":">=1.0.0"} (current: {"node":"0.10.40","npm":"1.4.28"})
/home/ubuntu/.nvm/v0.10.40/bin/grunt -> /home/ubuntu/.nvm/v0.10.40/lib/node_modules/grunt-cli/bin/grunt

cornjacket:~/workspace $ nvm use 0.12.7
Now using node v0.12.7 (npm v2.11.3)

cornjacket:~/workspace $ npm install --global yo bower grunt-cli
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
/home/ubuntu/.nvm/versions/node/v0.12.7/bin/grunt -> /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/grunt-cli/bin/grunt
/home/ubuntu/.nvm/versions/node/v0.12.7/bin/yo -> /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/yo/lib/cli.js

> yo@1.6.0 postinstall /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/yo
> yodoctor


Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✖ Node.js version

Your Node.js version is outdated.
Upgrade to the latest version: https://nodejs.org

✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✖ npm version

Your npm version is outdated.

Upgrade to the latest version by running:
npm install -g npm

✖ NODE_PATH matches the npm root
npm global root value is not in your NODE_PATH

[Info]
  NODE_PATH = /mnt/shared/lib/node_modules
  npm root  = /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules

[Fix] Append the npm root value to your NODE_PATH variable
Add this line to your .bashrc
    export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules
  Or run this command
    echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules" >> ~/.bashrc && source ~/.bashrc


Found potential issues on your machine :(
/home/ubuntu/.nvm/versions/node/v0.12.7/bin/bower -> /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/bower/bin/bower
grunt-cli@0.1.13 /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/grunt-cli
├── nopt@1.0.10 (abbrev@1.0.7)
├── resolve@0.3.1
└── findup-sync@0.1.3 (glob@3.2.11, lodash@2.4.2)

yo@1.6.0 /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/yo
├── titleize@1.0.0
├── figures@1.4.0
├── user-home@2.0.0 (os-homedir@1.0.1)
├── sort-on@1.2.2 (arrify@1.0.1, dot-prop@2.2.0)
├── opn@3.0.3 (object-assign@4.0.1)
├── humanize-string@1.0.1 (decamelize@1.1.2)
├── string-length@1.0.1 (strip-ansi@3.0.0)
├── chalk@1.1.1 (escape-string-regexp@1.0.4, supports-color@2.0.0, ansi-styles@2.1.0, has-ansi@2.0.0, strip-ansi@3.0.0)
├── repeating@2.0.0 (is-finite@1.0.1)
├── root-check@1.0.0 (sudo-block@1.2.0, downgrade-root@1.1.0)
├── async@1.5.2
├── yeoman-character@1.1.0 (supports-color@3.1.2)
├── yosay@1.1.0 (strip-ansi@3.0.0, ansi-regex@2.0.0, ansi-styles@2.1.0, word-wrap@1.1.0, pad-component@0.0.1, taketalk@1.0.0, minimist@1.2.0, string-width@1.0.1)
├── update-notifier@0.6.0 (is-npm@1.0.0, latest-version@2.0.0, semver-diff@2.1.0)
├── configstore@1.4.0 (os-tmpdir@1.0.1, object-assign@4.0.1, graceful-fs@4.1.2, xdg-basedir@2.0.0, uuid@2.0.1, osenv@0.1.3, write-file-atomic@1.1.4, mkdirp@0.5.1)
├── package-json@2.3.0 (registry-url@3.0.3, semver@5.1.0, rc@1.1.6)
├── cross-spawn-async@2.1.6 (which@1.2.1, lru-cache@4.0.0)
├── npm-keyword@4.2.0 (object-assign@4.0.1, pinkie-promise@2.0.0, registry-url@3.0.3)
├── got@5.4.0 (lowercase-keys@1.0.0, is-stream@1.0.1, timed-out@2.0.0, is-redirect@1.0.0, is-plain-obj@1.1.0, is-retry-allowed@1.0.0, unzip-response@1.0.0, object-assign@4.0.1, node-status-codes@1.0.0, duplexer2@0.1.4, pinkie-promise@2.0.0, url-parse-lax@1.0.0, create-error-class@2.0.1, read-all-stream@3.0.1, parse-json@2.2.0, readable-stream@2.0.5)
├── fullname@2.1.0 (pify@2.3.0, pinkie-promise@2.0.0, npmconf@2.1.2)
├── meow@3.7.0 (trim-newlines@1.0.0, map-obj@1.0.1, object-assign@4.0.1, decamelize@1.1.2, camelcase-keys@2.0.0, minimist@1.2.0, redent@1.0.0, loud-rejection@1.2.0, normalize-package-data@2.3.5)
├── yeoman-environment@1.5.2 (escape-string-regexp@1.0.4, log-symbols@1.0.2, grouped-queue@0.3.2, text-table@0.2.0, untildify@2.1.0, debug@2.2.0, diff@2.2.1, mem-fs@1.1.2, globby@4.0.0)
├── read-pkg-up@1.0.1 (find-up@1.1.0, read-pkg@1.1.0)
├── inquirer@0.11.2 (strip-ansi@3.0.0, ansi-regex@2.0.0, ansi-escapes@1.1.1, cli-width@1.1.0, through@2.3.8, readline2@1.0.1, cli-cursor@1.0.2, run-async@0.1.0, rx-lite@3.1.2)
├── insight@0.7.0 (object-assign@4.0.1, lodash.debounce@3.1.1, tough-cookie@2.2.1, os-name@1.0.3, inquirer@0.10.1, request@2.67.0)
├── yeoman-doctor@2.1.0 (object-values@1.0.0, log-symbols@1.0.2, each-async@1.1.1, semver@5.1.0, bin-version-check@2.1.0, twig@0.8.6)
└── lodash@3.10.1

bower@1.7.2 /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/bower
└── semver-utils@1.1.1


cornjacket:~/workspace $ echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules" >> ~/.bashrc && source ~/.bashrc
cornjacket:~/workspace $ 

e $ npm update -g npm
/home/ubuntu/.nvm/versions/node/v0.12.7/bin/npm -> /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/npm/bin/npm-cli.js
npm@3.5.3 /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/npm
cornjacket:~/workspace $ 



cornjacket:~/workspace $ npm install -g yo
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
/home/ubuntu/.nvm/versions/node/v0.12.7/bin/yo -> /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/yo/lib/cli.js

> yo@1.6.0 postinstall /home/ubuntu/.nvm/versions/node/v0.12.7/lib/node_modules/yo
> yodoctor


Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✖ Node.js version

Your Node.js version is outdated.
Upgrade to the latest version: https://nodejs.org

✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version
✔ NODE_PATH matches the npm root

Found potential issues on your machine :(
abbrev@1.0.7 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/nopt/node_modules/abbrev -> node_modules/yo/node_modules/abbrev
ansi-escapes@1.1.1 node_modules/yo/node_modules/inquirer/node_modules/ansi-escapes -> node_modules/yo/node_modules/ansi-escapes
ansi-regex@2.0.0 node_modules/yo/node_modules/inquirer/node_modules/ansi-regex -> node_modules/yo/node_modules/ansi-regex
ansi-styles@2.1.0 node_modules/yo/node_modules/chalk/node_modules/ansi-styles -> node_modules/yo/node_modules/ansi-styles
array-uniq@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/array-union/node_modules/array-uniq -> node_modules/yo/node_modules/array-uniq
array-union@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/array-union -> node_modules/yo/node_modules/array-union
arrify@1.0.1 node_modules/yo/node_modules/sort-on/node_modules/arrify -> node_modules/yo/node_modules/arrify
asn1@0.2.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/asn1 -> node_modules/yo/node_modules/asn1
assert-plus@0.1.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/assert-plus -> node_modules/yo/node_modules/assert-plus
aws-sign2@0.6.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/aws-sign2 -> node_modules/yo/node_modules/aws-sign2
balanced-match@0.3.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/balanced-match -> node_modules/yo/node_modules/balanced-match
minimist@1.2.0 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/osx-release/node_modules/minimist -> node_modules/yo/node_modules/bin-version-check/node_modules/minimist
builtin-modules@1.1.1 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/is-builtin-module/node_modules/builtin-modules -> node_modules/yo/node_modules/builtin-modules
camelcase@2.0.1 node_modules/yo/node_modules/meow/node_modules/camelcase-keys/node_modules/camelcase -> node_modules/yo/node_modules/camelcase
capture-stack-trace@1.0.0 node_modules/yo/node_modules/got/node_modules/create-error-class/node_modules/capture-stack-trace -> node_modules/yo/node_modules/capture-stack-trace
caseless@0.11.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/caseless -> node_modules/yo/node_modules/caseless
- ansi-regex@2.0.0 node_modules/yo/node_modules/chalk/node_modules/has-ansi/node_modules/ansi-regex
- ansi-regex@2.0.0 node_modules/yo/node_modules/chalk/node_modules/strip-ansi/node_modules/ansi-regex
cli-width@1.1.0 node_modules/yo/node_modules/inquirer/node_modules/cli-width -> node_modules/yo/node_modules/cli-width
clone@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl/node_modules/clone -> node_modules/yo/node_modules/clone
clone-stats@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl/node_modules/clone-stats -> node_modules/yo/node_modules/clone-stats
concat-map@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/concat-map -> node_modules/yo/node_modules/concat-map
brace-expansion@1.1.2 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion -> node_modules/yo/node_modules/brace-expansion
- os-homedir@1.0.1 node_modules/yo/node_modules/configstore/node_modules/osenv/node_modules/os-homedir
- os-homedir@1.0.1 node_modules/yo/node_modules/configstore/node_modules/xdg-basedir/node_modules/os-homedir
core-util-is@1.0.2 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/core-util-is -> node_modules/yo/node_modules/core-util-is
dashdash@1.12.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash -> node_modules/yo/node_modules/dashdash
deep-extend@0.4.1 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/deep-extend -> node_modules/yo/node_modules/deep-extend
default-uid@1.0.0 node_modules/yo/node_modules/root-check/node_modules/downgrade-root/node_modules/default-uid -> node_modules/yo/node_modules/default-uid
delayed-stream@1.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/combined-stream/node_modules/delayed-stream -> node_modules/yo/node_modules/delayed-stream
combined-stream@1.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/combined-stream -> node_modules/yo/node_modules/combined-stream
diff@2.2.1 node_modules/yo/node_modules/yeoman-environment/node_modules/diff -> node_modules/yo/node_modules/diff
dot-prop@2.2.0 node_modules/yo/node_modules/sort-on/node_modules/dot-prop -> node_modules/yo/node_modules/dot-prop
escape-string-regexp@1.0.4 node_modules/yo/node_modules/chalk/node_modules/escape-string-regexp -> node_modules/yo/node_modules/escape-string-regexp
decamelize@1.1.2 node_modules/yo/node_modules/humanize-string/node_modules/decamelize -> node_modules/yo/node_modules/decamelize
exit-hook@1.1.1 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/exit-hook -> node_modules/yo/node_modules/exit-hook
extend@3.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/extend -> node_modules/yo/node_modules/extend
extsprintf@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/extsprintf -> node_modules/yo/node_modules/extsprintf
first-chunk-stream@1.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom-stream/node_modules/first-chunk-stream -> node_modules/yo/node_modules/first-chunk-stream
foreachasync@3.0.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/walk/node_modules/foreachasync -> node_modules/yo/node_modules/foreachasync
forever-agent@0.6.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/forever-agent -> node_modules/yo/node_modules/forever-agent
- minimist@0.0.8 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/mkdirp/node_modules/minimist
- mkdirp@0.5.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/mkdirp
- os-homedir@1.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/osenv/node_modules/os-homedir
- os-tmpdir@1.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/osenv/node_modules/os-tmpdir
- osenv@0.1.3 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/osenv
generate-function@2.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-function -> node_modules/yo/node_modules/generate-function
get-stdin@4.0.1 node_modules/yo/node_modules/yosay/node_modules/taketalk/node_modules/get-stdin -> node_modules/yo/node_modules/get-stdin
minimatch@3.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch -> node_modules/yo/node_modules/glob/node_modules/minimatch
- inherits@2.0.1 node_modules/yo/node_modules/got/node_modules/create-error-class/node_modules/inherits
- object-assign@4.0.1 node_modules/yo/node_modules/got/node_modules/object-assign
- pinkie@2.0.1 node_modules/yo/node_modules/got/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/got/node_modules/pinkie-promise
- inherits@2.0.1 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/inherits
graceful-fs@4.1.2 node_modules/yo/node_modules/configstore/node_modules/graceful-fs -> node_modules/yo/node_modules/graceful-fs
graceful-readlink@1.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/commander/node_modules/graceful-readlink -> node_modules/yo/node_modules/graceful-readlink
commander@2.9.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/commander -> node_modules/yo/node_modules/commander
grouped-queue@0.3.2 node_modules/yo/node_modules/yeoman-environment/node_modules/grouped-queue -> node_modules/yo/node_modules/grouped-queue
has-ansi@2.0.0 node_modules/yo/node_modules/chalk/node_modules/has-ansi -> node_modules/yo/node_modules/has-ansi
has-flag@1.0.0 node_modules/yo/node_modules/yeoman-character/node_modules/supports-color/node_modules/has-flag -> node_modules/yo/node_modules/has-flag
hoek@2.16.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/hoek -> node_modules/yo/node_modules/hoek
boom@2.10.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/boom -> node_modules/yo/node_modules/boom
cryptiles@2.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/cryptiles -> node_modules/yo/node_modules/cryptiles
hosted-git-info@2.1.4 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/hosted-git-info -> node_modules/yo/node_modules/hosted-git-info
- escape-string-regexp@1.0.4 node_modules/yo/node_modules/humanize-string/node_modules/decamelize/node_modules/escape-string-regexp
imurmurhash@0.1.4 node_modules/yo/node_modules/configstore/node_modules/write-file-atomic/node_modules/imurmurhash -> node_modules/yo/node_modules/imurmurhash
indent-string@2.1.0 node_modules/yo/node_modules/meow/node_modules/redent/node_modules/indent-string -> node_modules/yo/node_modules/indent-string
inherits@2.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/inherits -> node_modules/yo/node_modules/inherits
create-error-class@2.0.1 node_modules/yo/node_modules/got/node_modules/create-error-class -> node_modules/yo/node_modules/create-error-class
ini@1.3.4 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/ini -> node_modules/yo/node_modules/ini
- onetime@1.1.0 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/onetime
- number-is-nan@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at/node_modules/number-is-nan
- number-is-nan@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point/node_modules/number-is-nan
- wrappy@1.0.1 node_modules/yo/node_modules/inquirer/node_modules/run-async/node_modules/once/node_modules/wrappy
- once@1.3.3 node_modules/yo/node_modules/inquirer/node_modules/run-async/node_modules/once
- strip-ansi@3.0.0 node_modules/yo/node_modules/inquirer/node_modules/strip-ansi
- ansi-escapes@1.1.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/ansi-escapes
- ansi-regex@2.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/ansi-regex
- exit-hook@1.1.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/exit-hook
- onetime@1.1.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/onetime
- restore-cursor@1.0.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor
- cli-cursor@1.0.2 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor
- cli-width@1.1.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-width
- number-is-nan@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at/node_modules/number-is-nan
- code-point-at@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at
- number-is-nan@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point/node_modules/number-is-nan
- is-fullwidth-code-point@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point
- mute-stream@0.0.5 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/mute-stream
- readline2@1.0.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2
- wrappy@1.0.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/run-async/node_modules/once/node_modules/wrappy
- once@1.3.3 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/run-async/node_modules/once
- run-async@0.1.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/run-async
- rx-lite@3.1.2 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/rx-lite
- strip-ansi@3.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/strip-ansi
- through@2.3.8 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/through
- object-assign@4.0.1 node_modules/yo/node_modules/insight/node_modules/object-assign
- core-util-is@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/core-util-is
- inherits@2.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/inherits
- isarray@0.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/isarray
- process-nextick-args@1.0.6 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/process-nextick-args
- string_decoder@0.10.31 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/string_decoder
- util-deprecate@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/util-deprecate
- readable-stream@2.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream
- xtend@4.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/xtend
- pinkie@2.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise
- assert-plus@0.1.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash/node_modules/assert-plus
is-arrayish@0.2.1 node_modules/yo/node_modules/got/node_modules/parse-json/node_modules/error-ex/node_modules/is-arrayish -> node_modules/yo/node_modules/is-arrayish
error-ex@1.3.0 node_modules/yo/node_modules/got/node_modules/parse-json/node_modules/error-ex -> node_modules/yo/node_modules/error-ex
is-builtin-module@1.0.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/is-builtin-module -> node_modules/yo/node_modules/is-builtin-module
is-docker@1.0.0 node_modules/yo/node_modules/root-check/node_modules/sudo-block/node_modules/is-docker -> node_modules/yo/node_modules/is-docker
is-npm@1.0.0 node_modules/yo/node_modules/update-notifier/node_modules/is-npm -> node_modules/yo/node_modules/is-npm
is-plain-obj@1.1.0 node_modules/yo/node_modules/got/node_modules/is-plain-obj -> node_modules/yo/node_modules/is-plain-obj
is-property@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/node_modules/is-property -> node_modules/yo/node_modules/is-property
generate-object-property@1.2.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property -> node_modules/yo/node_modules/generate-object-property
is-redirect@1.0.0 node_modules/yo/node_modules/got/node_modules/is-redirect -> node_modules/yo/node_modules/is-redirect
is-relative@0.1.3 node_modules/yo/node_modules/cross-spawn-async/node_modules/which/node_modules/is-absolute/node_modules/is-relative -> node_modules/yo/node_modules/is-relative
is-absolute@0.1.7 node_modules/yo/node_modules/cross-spawn-async/node_modules/which/node_modules/is-absolute -> node_modules/yo/node_modules/is-absolute
is-retry-allowed@1.0.0 node_modules/yo/node_modules/got/node_modules/is-retry-allowed -> node_modules/yo/node_modules/is-retry-allowed
is-root@1.0.0 node_modules/yo/node_modules/root-check/node_modules/downgrade-root/node_modules/is-root -> node_modules/yo/node_modules/is-root
downgrade-root@1.1.0 node_modules/yo/node_modules/root-check/node_modules/downgrade-root -> node_modules/yo/node_modules/downgrade-root
is-stream@1.0.1 node_modules/yo/node_modules/got/node_modules/is-stream -> node_modules/yo/node_modules/is-stream
is-typedarray@1.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/is-typedarray -> node_modules/yo/node_modules/is-typedarray
is-utf8@0.2.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/strip-bom/node_modules/is-utf8 -> node_modules/yo/node_modules/is-utf8
isarray@0.0.1 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/isarray -> node_modules/yo/node_modules/isarray
isstream@0.1.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/isstream -> node_modules/yo/node_modules/isstream
jsbn@0.1.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jsbn -> node_modules/yo/node_modules/jsbn
jodid25519@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jodid25519 -> node_modules/yo/node_modules/jodid25519
ecc-jsbn@0.1.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/ecc-jsbn -> node_modules/yo/node_modules/ecc-jsbn
json-schema@0.2.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/json-schema -> node_modules/yo/node_modules/json-schema
json-stringify-safe@5.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/json-stringify-safe -> node_modules/yo/node_modules/json-stringify-safe
jsonpointer@2.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/jsonpointer -> node_modules/yo/node_modules/jsonpointer
latest-version@2.0.0 node_modules/yo/node_modules/update-notifier/node_modules/latest-version -> node_modules/yo/node_modules/latest-version
lodash._getnative@3.9.1 node_modules/yo/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash._getnative -> node_modules/yo/node_modules/lodash._getnative
lodash.debounce@3.1.1 node_modules/yo/node_modules/insight/node_modules/lodash.debounce -> node_modules/yo/node_modules/lodash.debounce
log-symbols@1.0.2 node_modules/yo/node_modules/yeoman-doctor/node_modules/log-symbols -> node_modules/yo/node_modules/log-symbols
lowercase-keys@1.0.0 node_modules/yo/node_modules/got/node_modules/lowercase-keys -> node_modules/yo/node_modules/lowercase-keys
map-obj@1.0.1 node_modules/yo/node_modules/meow/node_modules/map-obj -> node_modules/yo/node_modules/map-obj
camelcase-keys@2.0.0 node_modules/yo/node_modules/meow/node_modules/camelcase-keys -> node_modules/yo/node_modules/camelcase-keys
- escape-string-regexp@1.0.4 node_modules/yo/node_modules/meow/node_modules/decamelize/node_modules/escape-string-regexp
- decamelize@1.1.2 node_modules/yo/node_modules/meow/node_modules/decamelize
- spdx-license-ids@1.2.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-license-ids
- object-assign@4.0.1 node_modules/yo/node_modules/meow/node_modules/object-assign
- get-stdin@4.0.1 node_modules/yo/node_modules/meow/node_modules/redent/node_modules/strip-indent/node_modules/get-stdin
mime-db@1.21.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/mime-types/node_modules/mime-db -> node_modules/yo/node_modules/mime-db
mime-types@2.1.9 node_modules/yo/node_modules/insight/node_modules/request/node_modules/mime-types -> node_modules/yo/node_modules/mime-types
form-data@1.0.0-rc3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/form-data -> node_modules/yo/node_modules/form-data
lru-cache@2.7.3 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/minimatch/node_modules/lru-cache -> node_modules/yo/node_modules/minimatch/node_modules/lru-cache
minimist@0.0.8 node_modules/yo/node_modules/configstore/node_modules/mkdirp/node_modules/minimist -> node_modules/yo/node_modules/minimist
mkdirp@0.5.1 node_modules/yo/node_modules/configstore/node_modules/mkdirp -> node_modules/yo/node_modules/mkdirp
ms@0.7.1 node_modules/yo/node_modules/yeoman-environment/node_modules/debug/node_modules/ms -> node_modules/yo/node_modules/ms
debug@2.2.0 node_modules/yo/node_modules/yeoman-environment/node_modules/debug -> node_modules/yo/node_modules/debug
mute-stream@0.0.5 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/mute-stream -> node_modules/yo/node_modules/mute-stream
node-status-codes@1.0.0 node_modules/yo/node_modules/got/node_modules/node-status-codes -> node_modules/yo/node_modules/node-status-codes
node-uuid@1.4.7 node_modules/yo/node_modules/insight/node_modules/request/node_modules/node-uuid -> node_modules/yo/node_modules/node-uuid
nopt@3.0.6 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/nopt -> node_modules/yo/node_modules/nopt
- object-assign@4.0.1 node_modules/yo/node_modules/npm-keyword/node_modules/object-assign
- pinkie@2.0.1 node_modules/yo/node_modules/npm-keyword/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/npm-keyword/node_modules/pinkie-promise
- deep-extend@0.4.1 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/deep-extend
- ini@1.3.4 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/ini
- strip-json-comments@1.0.4 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/strip-json-comments
- rc@1.1.6 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc
number-is-nan@1.0.0 node_modules/yo/node_modules/repeating/node_modules/is-finite/node_modules/number-is-nan -> node_modules/yo/node_modules/number-is-nan
is-fullwidth-code-point@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point -> node_modules/yo/node_modules/is-fullwidth-code-point
is-finite@1.0.1 node_modules/yo/node_modules/repeating/node_modules/is-finite -> node_modules/yo/node_modules/is-finite
code-point-at@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at -> node_modules/yo/node_modules/code-point-at
oauth-sign@0.8.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/oauth-sign -> node_modules/yo/node_modules/oauth-sign
object-assign@4.0.1 node_modules/yo/node_modules/configstore/node_modules/object-assign -> node_modules/yo/node_modules/object-assign
object-values@1.0.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/object-values -> node_modules/yo/node_modules/object-values
onetime@1.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/each-async/node_modules/onetime -> node_modules/yo/node_modules/onetime
- object-assign@4.0.1 node_modules/yo/node_modules/opn/node_modules/object-assign
os-homedir@1.0.1 node_modules/yo/node_modules/user-home/node_modules/os-homedir -> node_modules/yo/node_modules/os-homedir
os-tmpdir@1.0.1 node_modules/yo/node_modules/configstore/node_modules/os-tmpdir -> node_modules/yo/node_modules/os-tmpdir
osenv@0.1.3 node_modules/yo/node_modules/configstore/node_modules/osenv -> node_modules/yo/node_modules/osenv
minimist@1.2.0 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/minimist -> node_modules/yo/node_modules/osx-release/node_modules/minimist
osx-release@1.1.0 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/osx-release -> node_modules/yo/node_modules/osx-release
- ini@1.3.4 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/ini
- registry-url@3.0.3 node_modules/yo/node_modules/package-json/node_modules/registry-url
pad-component@0.0.1 node_modules/yo/node_modules/yosay/node_modules/pad-component -> node_modules/yo/node_modules/pad-component
parse-json@2.2.0 node_modules/yo/node_modules/got/node_modules/parse-json -> node_modules/yo/node_modules/parse-json
path-is-absolute@1.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/path-is-absolute -> node_modules/yo/node_modules/path-is-absolute
pify@2.3.0 node_modules/yo/node_modules/fullname/node_modules/pify -> node_modules/yo/node_modules/pify
pinkie@2.0.1 node_modules/yo/node_modules/fullname/node_modules/pinkie-promise/node_modules/pinkie -> node_modules/yo/node_modules/pinkie
pinkie-promise@2.0.0 node_modules/yo/node_modules/fullname/node_modules/pinkie-promise -> node_modules/yo/node_modules/pinkie-promise
path-type@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type -> node_modules/yo/node_modules/path-type
path-exists@2.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up/node_modules/path-exists -> node_modules/yo/node_modules/path-exists
find-up@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up -> node_modules/yo/node_modules/find-up
prepend-http@1.0.3 node_modules/yo/node_modules/got/node_modules/url-parse-lax/node_modules/prepend-http -> node_modules/yo/node_modules/prepend-http
process-nextick-args@1.0.6 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/process-nextick-args -> node_modules/yo/node_modules/process-nextick-args
proto-list@1.2.4 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/config-chain/node_modules/proto-list -> node_modules/yo/node_modules/proto-list
config-chain@1.1.10 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/config-chain -> node_modules/yo/node_modules/config-chain
pseudomap@1.0.2 node_modules/yo/node_modules/cross-spawn-async/node_modules/lru-cache/node_modules/pseudomap -> node_modules/yo/node_modules/pseudomap
qs@5.2.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/qs -> node_modules/yo/node_modules/qs
minimist@1.2.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/minimist -> node_modules/yo/node_modules/rc/node_modules/minimist
pinkie@1.0.0 node_modules/yo/node_modules/got/node_modules/read-all-stream/node_modules/pinkie-promise/node_modules/pinkie -> node_modules/yo/node_modules/read-all-stream/node_modules/pinkie
pinkie-promise@1.0.0 node_modules/yo/node_modules/got/node_modules/read-all-stream/node_modules/pinkie-promise -> node_modules/yo/node_modules/read-all-stream/node_modules/pinkie-promise
- pinkie@2.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up/node_modules/pinkie-promise
- graceful-fs@4.1.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/graceful-fs
- is-arrayish@0.2.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/parse-json/node_modules/error-ex/node_modules/is-arrayish
- error-ex@1.3.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/parse-json/node_modules/error-ex
- parse-json@2.2.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/parse-json
- pify@2.3.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/pify
- pinkie@2.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/pinkie-promise
- hosted-git-info@2.1.4 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/hosted-git-info
- builtin-modules@1.1.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/is-builtin-module/node_modules/builtin-modules
- is-builtin-module@1.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/is-builtin-module
- semver@5.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/semver
- spdx-license-ids@1.2.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct/node_modules/spdx-license-ids
- spdx-correct@1.0.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct
- spdx-exceptions@1.0.4 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-exceptions
- spdx-license-ids@1.2.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-license-ids
- spdx-expression-parse@1.0.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse
- validate-npm-package-license@3.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license
- normalize-package-data@2.3.5 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data
- graceful-fs@4.1.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/graceful-fs
- pify@2.3.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/pify
- pinkie@2.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/pinkie-promise
readline2@1.0.1 node_modules/yo/node_modules/inquirer/node_modules/readline2 -> node_modules/yo/node_modules/readline2
replace-ext@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl/node_modules/replace-ext -> node_modules/yo/node_modules/replace-ext
restore-cursor@1.0.1 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor -> node_modules/yo/node_modules/restore-cursor
cli-cursor@1.0.2 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor -> node_modules/yo/node_modules/cli-cursor
- is-root@1.0.0 node_modules/yo/node_modules/root-check/node_modules/sudo-block/node_modules/is-root
rx-lite@3.1.2 node_modules/yo/node_modules/inquirer/node_modules/rx-lite -> node_modules/yo/node_modules/rx-lite
semver@4.3.6 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/semver -> node_modules/yo/node_modules/semver
semver@5.1.0 node_modules/yo/node_modules/update-notifier/node_modules/semver-diff/node_modules/semver -> node_modules/yo/node_modules/semver-diff/node_modules/semver
semver-diff@2.1.0 node_modules/yo/node_modules/update-notifier/node_modules/semver-diff -> node_modules/yo/node_modules/semver-diff
semver-regex@1.0.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions/node_modules/semver-regex -> node_modules/yo/node_modules/semver-regex
find-versions@1.2.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions -> node_modules/yo/node_modules/find-versions
bin-version@1.0.4 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version -> node_modules/yo/node_modules/bin-version
semver@5.1.0 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/win-release/node_modules/semver -> node_modules/yo/node_modules/semver-truncate/node_modules/semver
semver-truncate@1.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/semver-truncate -> node_modules/yo/node_modules/semver-truncate
bin-version-check@2.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check -> node_modules/yo/node_modules/bin-version-check
set-immediate-shim@1.0.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/each-async/node_modules/set-immediate-shim -> node_modules/yo/node_modules/set-immediate-shim
each-async@1.1.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/each-async -> node_modules/yo/node_modules/each-async
sigmund@1.0.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/minimatch/node_modules/sigmund -> node_modules/yo/node_modules/sigmund
minimatch@0.2.14 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/minimatch -> node_modules/yo/node_modules/minimatch
signal-exit@2.1.2 node_modules/yo/node_modules/meow/node_modules/loud-rejection/node_modules/signal-exit -> node_modules/yo/node_modules/signal-exit
loud-rejection@1.2.0 node_modules/yo/node_modules/meow/node_modules/loud-rejection -> node_modules/yo/node_modules/loud-rejection
slide@1.1.6 node_modules/yo/node_modules/configstore/node_modules/write-file-atomic/node_modules/slide -> node_modules/yo/node_modules/slide
sntp@1.0.9 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/sntp -> node_modules/yo/node_modules/sntp
hawk@3.1.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk -> node_modules/yo/node_modules/hawk
spdx-exceptions@1.0.4 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-exceptions -> node_modules/yo/node_modules/spdx-exceptions
spdx-license-ids@1.2.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct/node_modules/spdx-license-ids -> node_modules/yo/node_modules/spdx-license-ids
spdx-expression-parse@1.0.2 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse -> node_modules/yo/node_modules/spdx-expression-parse
spdx-correct@1.0.2 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct -> node_modules/yo/node_modules/spdx-correct
assert-plus@0.2.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/assert-plus -> node_modules/yo/node_modules/sshpk/node_modules/assert-plus
string_decoder@0.10.31 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/string_decoder -> node_modules/yo/node_modules/string_decoder
- ansi-regex@2.0.0 node_modules/yo/node_modules/string-length/node_modules/strip-ansi/node_modules/ansi-regex
- strip-ansi@3.0.0 node_modules/yo/node_modules/string-length/node_modules/strip-ansi
stringstream@0.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/stringstream -> node_modules/yo/node_modules/stringstream
strip-ansi@3.0.0 node_modules/yo/node_modules/chalk/node_modules/strip-ansi -> node_modules/yo/node_modules/strip-ansi
string-width@1.0.1 node_modules/yo/node_modules/yosay/node_modules/string-width -> node_modules/yo/node_modules/string-width
strip-bom@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/strip-bom -> node_modules/yo/node_modules/strip-bom
load-json-file@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file -> node_modules/yo/node_modules/load-json-file
strip-bom-stream@1.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom-stream -> node_modules/yo/node_modules/strip-bom-stream
strip-indent@1.0.1 node_modules/yo/node_modules/meow/node_modules/redent/node_modules/strip-indent -> node_modules/yo/node_modules/strip-indent
redent@1.0.0 node_modules/yo/node_modules/meow/node_modules/redent -> node_modules/yo/node_modules/redent
strip-json-comments@1.0.4 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/strip-json-comments -> node_modules/yo/node_modules/strip-json-comments
rc@1.1.6 node_modules/yo/node_modules/package-json/node_modules/rc -> node_modules/yo/node_modules/rc
registry-url@3.0.3 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url -> node_modules/yo/node_modules/registry-url
sudo-block@1.2.0 node_modules/yo/node_modules/root-check/node_modules/sudo-block -> node_modules/yo/node_modules/sudo-block
supports-color@2.0.0 node_modules/yo/node_modules/chalk/node_modules/supports-color -> node_modules/yo/node_modules/supports-color
minimist@1.2.0 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/minimist -> node_modules/yo/node_modules/taketalk/node_modules/minimist
taketalk@1.0.0 node_modules/yo/node_modules/yosay/node_modules/taketalk -> node_modules/yo/node_modules/taketalk
text-table@0.2.0 node_modules/yo/node_modules/yeoman-environment/node_modules/text-table -> node_modules/yo/node_modules/text-table
through@2.3.8 node_modules/yo/node_modules/inquirer/node_modules/through -> node_modules/yo/node_modules/through
timed-out@2.0.0 node_modules/yo/node_modules/got/node_modules/timed-out -> node_modules/yo/node_modules/timed-out
tough-cookie@2.2.1 node_modules/yo/node_modules/insight/node_modules/tough-cookie -> node_modules/yo/node_modules/tough-cookie
trim-newlines@1.0.0 node_modules/yo/node_modules/meow/node_modules/trim-newlines -> node_modules/yo/node_modules/trim-newlines
tunnel-agent@0.4.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/tunnel-agent -> node_modules/yo/node_modules/tunnel-agent
tweetnacl@0.13.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/tweetnacl -> node_modules/yo/node_modules/tweetnacl
sshpk@1.7.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk -> node_modules/yo/node_modules/sshpk
uid-number@0.0.5 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/uid-number -> node_modules/yo/node_modules/uid-number
untildify@2.1.0 node_modules/yo/node_modules/yeoman-environment/node_modules/untildify -> node_modules/yo/node_modules/untildify
unzip-response@1.0.0 node_modules/yo/node_modules/got/node_modules/unzip-response -> node_modules/yo/node_modules/unzip-response
url-parse-lax@1.0.0 node_modules/yo/node_modules/got/node_modules/url-parse-lax -> node_modules/yo/node_modules/url-parse-lax
util-deprecate@1.0.2 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/util-deprecate -> node_modules/yo/node_modules/util-deprecate
readable-stream@2.0.5 node_modules/yo/node_modules/got/node_modules/readable-stream -> node_modules/yo/node_modules/readable-stream
read-all-stream@3.0.1 node_modules/yo/node_modules/got/node_modules/read-all-stream -> node_modules/yo/node_modules/read-all-stream
duplexer2@0.1.4 node_modules/yo/node_modules/got/node_modules/duplexer2 -> node_modules/yo/node_modules/duplexer2
bl@1.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl -> node_modules/yo/node_modules/bl
uuid@2.0.1 node_modules/yo/node_modules/configstore/node_modules/uuid -> node_modules/yo/node_modules/uuid
validate-npm-package-license@3.0.1 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license -> node_modules/yo/node_modules/validate-npm-package-license
normalize-package-data@2.3.5 node_modules/yo/node_modules/meow/node_modules/normalize-package-data -> node_modules/yo/node_modules/normalize-package-data
read-pkg@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg -> node_modules/yo/node_modules/read-pkg
verror@1.3.6 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/verror -> node_modules/yo/node_modules/verror
jsprim@1.2.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim -> node_modules/yo/node_modules/jsprim
http-signature@1.1.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature -> node_modules/yo/node_modules/http-signature
vinyl@1.1.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl -> node_modules/yo/node_modules/vinyl
vinyl-file@1.3.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file -> node_modules/yo/node_modules/vinyl-file
walk@2.3.9 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/walk -> node_modules/yo/node_modules/walk
twig@0.8.6 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig -> node_modules/yo/node_modules/twig
which@1.2.1 node_modules/yo/node_modules/cross-spawn-async/node_modules/which -> node_modules/yo/node_modules/which
semver@5.1.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/semver -> node_modules/yo/node_modules/win-release/node_modules/semver
win-release@1.1.1 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/win-release -> node_modules/yo/node_modules/win-release
os-name@1.0.3 node_modules/yo/node_modules/insight/node_modules/os-name -> node_modules/yo/node_modules/os-name
word-wrap@1.1.0 node_modules/yo/node_modules/yosay/node_modules/word-wrap -> node_modules/yo/node_modules/word-wrap
wrappy@1.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/once/node_modules/wrappy -> node_modules/yo/node_modules/wrappy
once@1.3.3 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/once -> node_modules/yo/node_modules/once
run-async@0.1.0 node_modules/yo/node_modules/inquirer/node_modules/run-async -> node_modules/yo/node_modules/run-async
npmconf@2.1.2 node_modules/yo/node_modules/fullname/node_modules/npmconf -> node_modules/yo/node_modules/npmconf
inflight@1.0.4 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/inflight -> node_modules/yo/node_modules/inflight
glob@6.0.4 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob -> node_modules/yo/node_modules/glob
globby@4.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby -> node_modules/yo/node_modules/globby
write-file-atomic@1.1.4 node_modules/yo/node_modules/configstore/node_modules/write-file-atomic -> node_modules/yo/node_modules/write-file-atomic
xdg-basedir@2.0.0 node_modules/yo/node_modules/configstore/node_modules/xdg-basedir -> node_modules/yo/node_modules/xdg-basedir
xtend@4.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/xtend -> node_modules/yo/node_modules/xtend
through2@2.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2 -> node_modules/yo/node_modules/through2
mem-fs@1.1.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs -> node_modules/yo/node_modules/mem-fs
is-my-json-valid@2.12.4 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid -> node_modules/yo/node_modules/is-my-json-valid
har-validator@2.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator -> node_modules/yo/node_modules/har-validator
request@2.67.0 node_modules/yo/node_modules/insight/node_modules/request -> node_modules/yo/node_modules/request
yallist@2.0.0 node_modules/yo/node_modules/cross-spawn-async/node_modules/lru-cache/node_modules/yallist -> node_modules/yo/node_modules/yallist
lru-cache@4.0.0 node_modules/yo/node_modules/cross-spawn-async/node_modules/lru-cache -> node_modules/yo/node_modules/lru-cache
- array-uniq@1.0.2 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions/node_modules/array-uniq
- get-stdin@4.0.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions/node_modules/get-stdin
- semver@4.3.6 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/semver
- semver@5.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/semver-truncate/node_modules/semver
- escape-string-regexp@1.0.4 node_modules/yo/node_modules/yeoman-environment/node_modules/escape-string-regexp
- arrify@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/arrify
- wrappy@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/inflight/node_modules/wrappy
- inherits@2.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/inherits
- wrappy@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/once/node_modules/wrappy
- once@1.3.3 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/once
- object-assign@4.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/object-assign
- pify@2.3.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/pify
- pinkie@2.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/pinkie-promise
- log-symbols@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/log-symbols
- core-util-is@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/core-util-is
- inherits@2.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/inherits
- isarray@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/isarray
- process-nextick-args@1.0.6 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/process-nextick-args
- string_decoder@0.10.31 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/string_decoder
- util-deprecate@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/util-deprecate
- readable-stream@2.0.5 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream
- graceful-fs@4.1.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/graceful-fs
- is-utf8@0.2.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom/node_modules/is-utf8
- strip-bom@2.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom
- os-homedir@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/untildify/node_modules/os-homedir
- ansi-regex@2.0.0 node_modules/yo/node_modules/yosay/node_modules/ansi-regex
- ansi-styles@2.1.0 node_modules/yo/node_modules/yosay/node_modules/ansi-styles
- number-is-nan@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/code-point-at/node_modules/number-is-nan
- code-point-at@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/code-point-at
- number-is-nan@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/is-fullwidth-code-point/node_modules/number-is-nan
- is-fullwidth-code-point@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/is-fullwidth-code-point
- strip-ansi@3.0.0 node_modules/yo/node_modules/yosay/node_modules/strip-ansi
/home/ubuntu/.nvm/versions/node/v0.12.7/lib
└── yo@1.6.0 

cornjacket:~/workspace $ 




cornjacket:~/workspace $ nvm use stable
Now using node v4.1.1 (npm v2.14.4)

cornjacket:~/workspace $ echo "export NODE_PATH=$NODE_PATH:/home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules" >> ~/.bashrc && source ~/.bashrc
cornjacket:~/workspace $ 

cornjacket:~/workspace $ npm install -g yo
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
/home/ubuntu/.nvm/versions/node/v4.1.1/bin/yo -> /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/yo/lib/cli.js

> yo@1.6.0 postinstall /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/yo
> yodoctor


Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✖ Node.js version

Your Node.js version is outdated.
Upgrade to the latest version: https://nodejs.org

✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✖ npm version

Your npm version is outdated.

Upgrade to the latest version by running:
npm install -g npm

✔ NODE_PATH matches the npm root

Found potential issues on your machine :(
yo@1.6.0 /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/yo
├── titleize@1.0.0
├── figures@1.4.0
├── async@1.5.2
├── opn@3.0.3 (object-assign@4.0.1)
├── user-home@2.0.0 (os-homedir@1.0.1)
├── sort-on@1.2.2 (arrify@1.0.1, dot-prop@2.2.0)
├── humanize-string@1.0.1 (decamelize@1.1.2)
├── string-length@1.0.1 (strip-ansi@3.0.0)
├── chalk@1.1.1 (escape-string-regexp@1.0.4, ansi-styles@2.1.0, supports-color@2.0.0, strip-ansi@3.0.0, has-ansi@2.0.0)
├── repeating@2.0.0 (is-finite@1.0.1)
├── root-check@1.0.0 (downgrade-root@1.1.0, sudo-block@1.2.0)
├── yeoman-character@1.1.0 (supports-color@3.1.2)
├── update-notifier@0.6.0 (is-npm@1.0.0, latest-version@2.0.0, semver-diff@2.1.0)
├── yosay@1.1.0 (strip-ansi@3.0.0, ansi-regex@2.0.0, ansi-styles@2.1.0, word-wrap@1.1.0, pad-component@0.0.1, taketalk@1.0.0, minimist@1.2.0, string-width@1.0.1)
├── got@5.4.0 (lowercase-keys@1.0.0, is-stream@1.0.1, timed-out@2.0.0, is-redirect@1.0.0, is-plain-obj@1.1.0, is-retry-allowed@1.0.0, duplexer2@0.1.4, object-assign@4.0.1, unzip-response@1.0.0, node-status-codes@1.0.0, pinkie-promise@2.0.0, url-parse-lax@1.0.0, create-error-class@2.0.1, read-all-stream@3.0.1, readable-stream@2.0.5, parse-json@2.2.0)
├── package-json@2.3.0 (registry-url@3.0.3, semver@5.1.0, rc@1.1.6)
├── configstore@1.4.0 (os-tmpdir@1.0.1, object-assign@4.0.1, graceful-fs@4.1.2, xdg-basedir@2.0.0, uuid@2.0.1, osenv@0.1.3, write-file-atomic@1.1.4, mkdirp@0.5.1)
├── cross-spawn-async@2.1.6 (lru-cache@4.0.0, which@1.2.1)
├── npm-keyword@4.2.0 (object-assign@4.0.1, pinkie-promise@2.0.0, registry-url@3.0.3)
├── inquirer@0.11.2 (ansi-regex@2.0.0, strip-ansi@3.0.0, ansi-escapes@1.1.1, cli-width@1.1.0, rx-lite@3.1.2, through@2.3.8, readline2@1.0.1, cli-cursor@1.0.2, run-async@0.1.0)
├── yeoman-environment@1.5.2 (escape-string-regexp@1.0.4, log-symbols@1.0.2, grouped-queue@0.3.2, text-table@0.2.0, untildify@2.1.0, debug@2.2.0, diff@2.2.1, mem-fs@1.1.2, globby@4.0.0)
├── meow@3.7.0 (trim-newlines@1.0.0, map-obj@1.0.1, object-assign@4.0.1, decamelize@1.1.2, camelcase-keys@2.0.0, minimist@1.2.0, redent@1.0.0, loud-rejection@1.2.0, normalize-package-data@2.3.5)
├── fullname@2.1.0 (pify@2.3.0, pinkie-promise@2.0.0, npmconf@2.1.2)
├── read-pkg-up@1.0.1 (find-up@1.1.0, read-pkg@1.1.0)
├── yeoman-doctor@2.1.0 (object-values@1.0.0, log-symbols@1.0.2, semver@5.1.0, each-async@1.1.1, bin-version-check@2.1.0, twig@0.8.6)
├── insight@0.7.0 (object-assign@4.0.1, tough-cookie@2.2.1, lodash.debounce@3.1.1, os-name@1.0.3, inquirer@0.10.1, request@2.67.0)
└── lodash@3.10.1
cornjacket:~/workspace $ 


cornjacket:~/workspace $ npm update -g npm
/home/ubuntu/.nvm/versions/node/v4.1.1/bin/npm -> /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/npm/bin/npm-cli.js
npm@3.5.3 /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/npm
cornjacket:~/workspace $ 


cornjacket:~/workspace $ npm install -g yo
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of date with respect to npm
/home/ubuntu/.nvm/versions/node/v4.1.1/bin/yo -> /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/yo/lib/cli.js

> yo@1.6.0 postinstall /home/ubuntu/.nvm/versions/node/v4.1.1/lib/node_modules/yo
> yodoctor


Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✖ Node.js version

Your Node.js version is outdated.
Upgrade to the latest version: https://nodejs.org

✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version
✔ NODE_PATH matches the npm root

Found potential issues on your machine :(
abbrev@1.0.7 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/nopt/node_modules/abbrev -> node_modules/yo/node_modules/abbrev
ansi-escapes@1.1.1 node_modules/yo/node_modules/inquirer/node_modules/ansi-escapes -> node_modules/yo/node_modules/ansi-escapes
ansi-regex@2.0.0 node_modules/yo/node_modules/inquirer/node_modules/ansi-regex -> node_modules/yo/node_modules/ansi-regex
ansi-styles@2.1.0 node_modules/yo/node_modules/chalk/node_modules/ansi-styles -> node_modules/yo/node_modules/ansi-styles
array-uniq@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/array-union/node_modules/array-uniq -> node_modules/yo/node_modules/array-uniq
array-union@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/array-union -> node_modules/yo/node_modules/array-union
arrify@1.0.1 node_modules/yo/node_modules/sort-on/node_modules/arrify -> node_modules/yo/node_modules/arrify
asn1@0.2.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/asn1 -> node_modules/yo/node_modules/asn1
assert-plus@0.1.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/assert-plus -> node_modules/yo/node_modules/assert-plus
aws-sign2@0.6.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/aws-sign2 -> node_modules/yo/node_modules/aws-sign2
balanced-match@0.3.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/balanced-match -> node_modules/yo/node_modules/balanced-match
minimist@1.2.0 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/osx-release/node_modules/minimist -> node_modules/yo/node_modules/bin-version-check/node_modules/minimist
builtin-modules@1.1.1 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/is-builtin-module/node_modules/builtin-modules -> node_modules/yo/node_modules/builtin-modules
camelcase@2.0.1 node_modules/yo/node_modules/meow/node_modules/camelcase-keys/node_modules/camelcase -> node_modules/yo/node_modules/camelcase
capture-stack-trace@1.0.0 node_modules/yo/node_modules/got/node_modules/create-error-class/node_modules/capture-stack-trace -> node_modules/yo/node_modules/capture-stack-trace
caseless@0.11.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/caseless -> node_modules/yo/node_modules/caseless
- ansi-regex@2.0.0 node_modules/yo/node_modules/chalk/node_modules/has-ansi/node_modules/ansi-regex
- ansi-regex@2.0.0 node_modules/yo/node_modules/chalk/node_modules/strip-ansi/node_modules/ansi-regex
cli-width@1.1.0 node_modules/yo/node_modules/inquirer/node_modules/cli-width -> node_modules/yo/node_modules/cli-width
clone@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl/node_modules/clone -> node_modules/yo/node_modules/clone
clone-stats@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl/node_modules/clone-stats -> node_modules/yo/node_modules/clone-stats
concat-map@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion/node_modules/concat-map -> node_modules/yo/node_modules/concat-map
brace-expansion@1.1.2 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch/node_modules/brace-expansion -> node_modules/yo/node_modules/brace-expansion
- os-homedir@1.0.1 node_modules/yo/node_modules/configstore/node_modules/osenv/node_modules/os-homedir
- os-homedir@1.0.1 node_modules/yo/node_modules/configstore/node_modules/xdg-basedir/node_modules/os-homedir
core-util-is@1.0.2 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/core-util-is -> node_modules/yo/node_modules/core-util-is
dashdash@1.12.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash -> node_modules/yo/node_modules/dashdash
deep-extend@0.4.1 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/deep-extend -> node_modules/yo/node_modules/deep-extend
default-uid@1.0.0 node_modules/yo/node_modules/root-check/node_modules/downgrade-root/node_modules/default-uid -> node_modules/yo/node_modules/default-uid
delayed-stream@1.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/combined-stream/node_modules/delayed-stream -> node_modules/yo/node_modules/delayed-stream
combined-stream@1.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/combined-stream -> node_modules/yo/node_modules/combined-stream
diff@2.2.1 node_modules/yo/node_modules/yeoman-environment/node_modules/diff -> node_modules/yo/node_modules/diff
dot-prop@2.2.0 node_modules/yo/node_modules/sort-on/node_modules/dot-prop -> node_modules/yo/node_modules/dot-prop
escape-string-regexp@1.0.4 node_modules/yo/node_modules/chalk/node_modules/escape-string-regexp -> node_modules/yo/node_modules/escape-string-regexp
decamelize@1.1.2 node_modules/yo/node_modules/humanize-string/node_modules/decamelize -> node_modules/yo/node_modules/decamelize
exit-hook@1.1.1 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/exit-hook -> node_modules/yo/node_modules/exit-hook
extend@3.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/extend -> node_modules/yo/node_modules/extend
extsprintf@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/extsprintf -> node_modules/yo/node_modules/extsprintf
first-chunk-stream@1.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom-stream/node_modules/first-chunk-stream -> node_modules/yo/node_modules/first-chunk-stream
foreachasync@3.0.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/walk/node_modules/foreachasync -> node_modules/yo/node_modules/foreachasync
forever-agent@0.6.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/forever-agent -> node_modules/yo/node_modules/forever-agent
- minimist@0.0.8 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/mkdirp/node_modules/minimist
- mkdirp@0.5.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/mkdirp
- os-homedir@1.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/osenv/node_modules/os-homedir
- os-tmpdir@1.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/osenv/node_modules/os-tmpdir
- osenv@0.1.3 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/osenv
generate-function@2.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-function -> node_modules/yo/node_modules/generate-function
get-stdin@4.0.1 node_modules/yo/node_modules/yosay/node_modules/taketalk/node_modules/get-stdin -> node_modules/yo/node_modules/get-stdin
minimatch@3.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/minimatch -> node_modules/yo/node_modules/glob/node_modules/minimatch
- inherits@2.0.1 node_modules/yo/node_modules/got/node_modules/create-error-class/node_modules/inherits
- object-assign@4.0.1 node_modules/yo/node_modules/got/node_modules/object-assign
- pinkie@2.0.1 node_modules/yo/node_modules/got/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/got/node_modules/pinkie-promise
- inherits@2.0.1 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/inherits
graceful-fs@4.1.2 node_modules/yo/node_modules/configstore/node_modules/graceful-fs -> node_modules/yo/node_modules/graceful-fs
graceful-readlink@1.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/commander/node_modules/graceful-readlink -> node_modules/yo/node_modules/graceful-readlink
commander@2.9.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/commander -> node_modules/yo/node_modules/commander
grouped-queue@0.3.2 node_modules/yo/node_modules/yeoman-environment/node_modules/grouped-queue -> node_modules/yo/node_modules/grouped-queue
has-ansi@2.0.0 node_modules/yo/node_modules/chalk/node_modules/has-ansi -> node_modules/yo/node_modules/has-ansi
has-flag@1.0.0 node_modules/yo/node_modules/yeoman-character/node_modules/supports-color/node_modules/has-flag -> node_modules/yo/node_modules/has-flag
hoek@2.16.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/hoek -> node_modules/yo/node_modules/hoek
boom@2.10.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/boom -> node_modules/yo/node_modules/boom
cryptiles@2.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/cryptiles -> node_modules/yo/node_modules/cryptiles
hosted-git-info@2.1.4 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/hosted-git-info -> node_modules/yo/node_modules/hosted-git-info
- escape-string-regexp@1.0.4 node_modules/yo/node_modules/humanize-string/node_modules/decamelize/node_modules/escape-string-regexp
imurmurhash@0.1.4 node_modules/yo/node_modules/configstore/node_modules/write-file-atomic/node_modules/imurmurhash -> node_modules/yo/node_modules/imurmurhash
indent-string@2.1.0 node_modules/yo/node_modules/meow/node_modules/redent/node_modules/indent-string -> node_modules/yo/node_modules/indent-string
inherits@2.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/inherits -> node_modules/yo/node_modules/inherits
create-error-class@2.0.1 node_modules/yo/node_modules/got/node_modules/create-error-class -> node_modules/yo/node_modules/create-error-class
ini@1.3.4 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/ini -> node_modules/yo/node_modules/ini
- onetime@1.1.0 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/onetime
- number-is-nan@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at/node_modules/number-is-nan
- number-is-nan@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point/node_modules/number-is-nan
- wrappy@1.0.1 node_modules/yo/node_modules/inquirer/node_modules/run-async/node_modules/once/node_modules/wrappy
- once@1.3.3 node_modules/yo/node_modules/inquirer/node_modules/run-async/node_modules/once
- strip-ansi@3.0.0 node_modules/yo/node_modules/inquirer/node_modules/strip-ansi
- ansi-escapes@1.1.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/ansi-escapes
- ansi-regex@2.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/ansi-regex
- exit-hook@1.1.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/exit-hook
- onetime@1.1.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor/node_modules/onetime
- restore-cursor@1.0.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor
- cli-cursor@1.0.2 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-cursor
- cli-width@1.1.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/cli-width
- number-is-nan@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at/node_modules/number-is-nan
- code-point-at@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at
- number-is-nan@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point/node_modules/number-is-nan
- is-fullwidth-code-point@1.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point
- mute-stream@0.0.5 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2/node_modules/mute-stream
- readline2@1.0.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/readline2
- wrappy@1.0.1 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/run-async/node_modules/once/node_modules/wrappy
- once@1.3.3 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/run-async/node_modules/once
- run-async@0.1.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/run-async
- rx-lite@3.1.2 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/rx-lite
- strip-ansi@3.0.0 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/strip-ansi
- through@2.3.8 node_modules/yo/node_modules/insight/node_modules/inquirer/node_modules/through
- object-assign@4.0.1 node_modules/yo/node_modules/insight/node_modules/object-assign
- core-util-is@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/core-util-is
- inherits@2.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/inherits
- isarray@0.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/isarray
- process-nextick-args@1.0.6 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/process-nextick-args
- string_decoder@0.10.31 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/string_decoder
- util-deprecate@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream/node_modules/util-deprecate
- readable-stream@2.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl/node_modules/readable-stream
- xtend@4.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/xtend
- pinkie@2.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/pinkie-promise
- assert-plus@0.1.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/dashdash/node_modules/assert-plus
is-arrayish@0.2.1 node_modules/yo/node_modules/got/node_modules/parse-json/node_modules/error-ex/node_modules/is-arrayish -> node_modules/yo/node_modules/is-arrayish
error-ex@1.3.0 node_modules/yo/node_modules/got/node_modules/parse-json/node_modules/error-ex -> node_modules/yo/node_modules/error-ex
is-builtin-module@1.0.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/is-builtin-module -> node_modules/yo/node_modules/is-builtin-module
is-docker@1.0.0 node_modules/yo/node_modules/root-check/node_modules/sudo-block/node_modules/is-docker -> node_modules/yo/node_modules/is-docker
is-npm@1.0.0 node_modules/yo/node_modules/update-notifier/node_modules/is-npm -> node_modules/yo/node_modules/is-npm
is-plain-obj@1.1.0 node_modules/yo/node_modules/got/node_modules/is-plain-obj -> node_modules/yo/node_modules/is-plain-obj
is-property@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property/node_modules/is-property -> node_modules/yo/node_modules/is-property
generate-object-property@1.2.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/generate-object-property -> node_modules/yo/node_modules/generate-object-property
is-redirect@1.0.0 node_modules/yo/node_modules/got/node_modules/is-redirect -> node_modules/yo/node_modules/is-redirect
is-relative@0.1.3 node_modules/yo/node_modules/cross-spawn-async/node_modules/which/node_modules/is-absolute/node_modules/is-relative -> node_modules/yo/node_modules/is-relative
is-absolute@0.1.7 node_modules/yo/node_modules/cross-spawn-async/node_modules/which/node_modules/is-absolute -> node_modules/yo/node_modules/is-absolute
is-retry-allowed@1.0.0 node_modules/yo/node_modules/got/node_modules/is-retry-allowed -> node_modules/yo/node_modules/is-retry-allowed
is-root@1.0.0 node_modules/yo/node_modules/root-check/node_modules/downgrade-root/node_modules/is-root -> node_modules/yo/node_modules/is-root
downgrade-root@1.1.0 node_modules/yo/node_modules/root-check/node_modules/downgrade-root -> node_modules/yo/node_modules/downgrade-root
is-stream@1.0.1 node_modules/yo/node_modules/got/node_modules/is-stream -> node_modules/yo/node_modules/is-stream
is-typedarray@1.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/is-typedarray -> node_modules/yo/node_modules/is-typedarray
is-utf8@0.2.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/strip-bom/node_modules/is-utf8 -> node_modules/yo/node_modules/is-utf8
isarray@0.0.1 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/isarray -> node_modules/yo/node_modules/isarray
isstream@0.1.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/isstream -> node_modules/yo/node_modules/isstream
jsbn@0.1.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jsbn -> node_modules/yo/node_modules/jsbn
jodid25519@1.0.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/jodid25519 -> node_modules/yo/node_modules/jodid25519
ecc-jsbn@0.1.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/ecc-jsbn -> node_modules/yo/node_modules/ecc-jsbn
json-schema@0.2.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/json-schema -> node_modules/yo/node_modules/json-schema
json-stringify-safe@5.0.1 node_modules/yo/node_modules/insight/node_modules/request/node_modules/json-stringify-safe -> node_modules/yo/node_modules/json-stringify-safe
jsonpointer@2.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid/node_modules/jsonpointer -> node_modules/yo/node_modules/jsonpointer
latest-version@2.0.0 node_modules/yo/node_modules/update-notifier/node_modules/latest-version -> node_modules/yo/node_modules/latest-version
lodash._getnative@3.9.1 node_modules/yo/node_modules/insight/node_modules/lodash.debounce/node_modules/lodash._getnative -> node_modules/yo/node_modules/lodash._getnative
lodash.debounce@3.1.1 node_modules/yo/node_modules/insight/node_modules/lodash.debounce -> node_modules/yo/node_modules/lodash.debounce
log-symbols@1.0.2 node_modules/yo/node_modules/yeoman-doctor/node_modules/log-symbols -> node_modules/yo/node_modules/log-symbols
lowercase-keys@1.0.0 node_modules/yo/node_modules/got/node_modules/lowercase-keys -> node_modules/yo/node_modules/lowercase-keys
map-obj@1.0.1 node_modules/yo/node_modules/meow/node_modules/map-obj -> node_modules/yo/node_modules/map-obj
camelcase-keys@2.0.0 node_modules/yo/node_modules/meow/node_modules/camelcase-keys -> node_modules/yo/node_modules/camelcase-keys
- escape-string-regexp@1.0.4 node_modules/yo/node_modules/meow/node_modules/decamelize/node_modules/escape-string-regexp
- decamelize@1.1.2 node_modules/yo/node_modules/meow/node_modules/decamelize
- spdx-license-ids@1.2.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-license-ids
- object-assign@4.0.1 node_modules/yo/node_modules/meow/node_modules/object-assign
- get-stdin@4.0.1 node_modules/yo/node_modules/meow/node_modules/redent/node_modules/strip-indent/node_modules/get-stdin
mime-db@1.21.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/mime-types/node_modules/mime-db -> node_modules/yo/node_modules/mime-db
mime-types@2.1.9 node_modules/yo/node_modules/insight/node_modules/request/node_modules/mime-types -> node_modules/yo/node_modules/mime-types
form-data@1.0.0-rc3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/form-data -> node_modules/yo/node_modules/form-data
lru-cache@2.7.3 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/minimatch/node_modules/lru-cache -> node_modules/yo/node_modules/minimatch/node_modules/lru-cache
minimist@0.0.8 node_modules/yo/node_modules/configstore/node_modules/mkdirp/node_modules/minimist -> node_modules/yo/node_modules/minimist
mkdirp@0.5.1 node_modules/yo/node_modules/configstore/node_modules/mkdirp -> node_modules/yo/node_modules/mkdirp
ms@0.7.1 node_modules/yo/node_modules/yeoman-environment/node_modules/debug/node_modules/ms -> node_modules/yo/node_modules/ms
debug@2.2.0 node_modules/yo/node_modules/yeoman-environment/node_modules/debug -> node_modules/yo/node_modules/debug
mute-stream@0.0.5 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/mute-stream -> node_modules/yo/node_modules/mute-stream
node-status-codes@1.0.0 node_modules/yo/node_modules/got/node_modules/node-status-codes -> node_modules/yo/node_modules/node-status-codes
node-uuid@1.4.7 node_modules/yo/node_modules/insight/node_modules/request/node_modules/node-uuid -> node_modules/yo/node_modules/node-uuid
nopt@3.0.6 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/nopt -> node_modules/yo/node_modules/nopt
- object-assign@4.0.1 node_modules/yo/node_modules/npm-keyword/node_modules/object-assign
- pinkie@2.0.1 node_modules/yo/node_modules/npm-keyword/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/npm-keyword/node_modules/pinkie-promise
- deep-extend@0.4.1 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/deep-extend
- ini@1.3.4 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/ini
- strip-json-comments@1.0.4 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/strip-json-comments
- rc@1.1.6 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc
number-is-nan@1.0.0 node_modules/yo/node_modules/repeating/node_modules/is-finite/node_modules/number-is-nan -> node_modules/yo/node_modules/number-is-nan
is-fullwidth-code-point@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/is-fullwidth-code-point -> node_modules/yo/node_modules/is-fullwidth-code-point
is-finite@1.0.1 node_modules/yo/node_modules/repeating/node_modules/is-finite -> node_modules/yo/node_modules/is-finite
code-point-at@1.0.0 node_modules/yo/node_modules/inquirer/node_modules/readline2/node_modules/code-point-at -> node_modules/yo/node_modules/code-point-at
oauth-sign@0.8.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/oauth-sign -> node_modules/yo/node_modules/oauth-sign
object-assign@4.0.1 node_modules/yo/node_modules/configstore/node_modules/object-assign -> node_modules/yo/node_modules/object-assign
object-values@1.0.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/object-values -> node_modules/yo/node_modules/object-values
onetime@1.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/each-async/node_modules/onetime -> node_modules/yo/node_modules/onetime
- object-assign@4.0.1 node_modules/yo/node_modules/opn/node_modules/object-assign
os-homedir@1.0.1 node_modules/yo/node_modules/user-home/node_modules/os-homedir -> node_modules/yo/node_modules/os-homedir
os-tmpdir@1.0.1 node_modules/yo/node_modules/configstore/node_modules/os-tmpdir -> node_modules/yo/node_modules/os-tmpdir
osenv@0.1.3 node_modules/yo/node_modules/configstore/node_modules/osenv -> node_modules/yo/node_modules/osenv
minimist@1.2.0 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/minimist -> node_modules/yo/node_modules/osx-release/node_modules/minimist
osx-release@1.1.0 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/osx-release -> node_modules/yo/node_modules/osx-release
- ini@1.3.4 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/ini
- registry-url@3.0.3 node_modules/yo/node_modules/package-json/node_modules/registry-url
pad-component@0.0.1 node_modules/yo/node_modules/yosay/node_modules/pad-component -> node_modules/yo/node_modules/pad-component
parse-json@2.2.0 node_modules/yo/node_modules/got/node_modules/parse-json -> node_modules/yo/node_modules/parse-json
path-is-absolute@1.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/path-is-absolute -> node_modules/yo/node_modules/path-is-absolute
pify@2.3.0 node_modules/yo/node_modules/fullname/node_modules/pify -> node_modules/yo/node_modules/pify
pinkie@2.0.1 node_modules/yo/node_modules/fullname/node_modules/pinkie-promise/node_modules/pinkie -> node_modules/yo/node_modules/pinkie
pinkie-promise@2.0.0 node_modules/yo/node_modules/fullname/node_modules/pinkie-promise -> node_modules/yo/node_modules/pinkie-promise
path-type@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type -> node_modules/yo/node_modules/path-type
path-exists@2.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up/node_modules/path-exists -> node_modules/yo/node_modules/path-exists
find-up@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up -> node_modules/yo/node_modules/find-up
prepend-http@1.0.3 node_modules/yo/node_modules/got/node_modules/url-parse-lax/node_modules/prepend-http -> node_modules/yo/node_modules/prepend-http
process-nextick-args@1.0.6 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/process-nextick-args -> node_modules/yo/node_modules/process-nextick-args
proto-list@1.2.4 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/config-chain/node_modules/proto-list -> node_modules/yo/node_modules/proto-list
config-chain@1.1.10 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/config-chain -> node_modules/yo/node_modules/config-chain
pseudomap@1.0.2 node_modules/yo/node_modules/cross-spawn-async/node_modules/lru-cache/node_modules/pseudomap -> node_modules/yo/node_modules/pseudomap
qs@5.2.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/qs -> node_modules/yo/node_modules/qs
minimist@1.2.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/minimist -> node_modules/yo/node_modules/rc/node_modules/minimist
pinkie@1.0.0 node_modules/yo/node_modules/got/node_modules/read-all-stream/node_modules/pinkie-promise/node_modules/pinkie -> node_modules/yo/node_modules/read-all-stream/node_modules/pinkie
pinkie-promise@1.0.0 node_modules/yo/node_modules/got/node_modules/read-all-stream/node_modules/pinkie-promise -> node_modules/yo/node_modules/read-all-stream/node_modules/pinkie-promise
- pinkie@2.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/find-up/node_modules/pinkie-promise
- graceful-fs@4.1.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/graceful-fs
- is-arrayish@0.2.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/parse-json/node_modules/error-ex/node_modules/is-arrayish
- error-ex@1.3.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/parse-json/node_modules/error-ex
- parse-json@2.2.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/parse-json
- pify@2.3.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/pify
- pinkie@2.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/pinkie-promise
- hosted-git-info@2.1.4 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/hosted-git-info
- builtin-modules@1.1.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/is-builtin-module/node_modules/builtin-modules
- is-builtin-module@1.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/is-builtin-module
- semver@5.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/semver
- spdx-license-ids@1.2.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct/node_modules/spdx-license-ids
- spdx-correct@1.0.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct
- spdx-exceptions@1.0.4 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-exceptions
- spdx-license-ids@1.2.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-license-ids
- spdx-expression-parse@1.0.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse
- validate-npm-package-license@3.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data/node_modules/validate-npm-package-license
- normalize-package-data@2.3.5 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/normalize-package-data
- graceful-fs@4.1.2 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/graceful-fs
- pify@2.3.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/pify
- pinkie@2.0.1 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/path-type/node_modules/pinkie-promise
readline2@1.0.1 node_modules/yo/node_modules/inquirer/node_modules/readline2 -> node_modules/yo/node_modules/readline2
replace-ext@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl/node_modules/replace-ext -> node_modules/yo/node_modules/replace-ext
restore-cursor@1.0.1 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor/node_modules/restore-cursor -> node_modules/yo/node_modules/restore-cursor
cli-cursor@1.0.2 node_modules/yo/node_modules/inquirer/node_modules/cli-cursor -> node_modules/yo/node_modules/cli-cursor
- is-root@1.0.0 node_modules/yo/node_modules/root-check/node_modules/sudo-block/node_modules/is-root
rx-lite@3.1.2 node_modules/yo/node_modules/inquirer/node_modules/rx-lite -> node_modules/yo/node_modules/rx-lite
semver@4.3.6 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/semver -> node_modules/yo/node_modules/semver
semver@5.1.0 node_modules/yo/node_modules/update-notifier/node_modules/semver-diff/node_modules/semver -> node_modules/yo/node_modules/semver-diff/node_modules/semver
semver-diff@2.1.0 node_modules/yo/node_modules/update-notifier/node_modules/semver-diff -> node_modules/yo/node_modules/semver-diff
semver-regex@1.0.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions/node_modules/semver-regex -> node_modules/yo/node_modules/semver-regex
find-versions@1.2.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions -> node_modules/yo/node_modules/find-versions
bin-version@1.0.4 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version -> node_modules/yo/node_modules/bin-version
semver@5.1.0 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/win-release/node_modules/semver -> node_modules/yo/node_modules/semver-truncate/node_modules/semver
semver-truncate@1.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/semver-truncate -> node_modules/yo/node_modules/semver-truncate
bin-version-check@2.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check -> node_modules/yo/node_modules/bin-version-check
set-immediate-shim@1.0.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/each-async/node_modules/set-immediate-shim -> node_modules/yo/node_modules/set-immediate-shim
each-async@1.1.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/each-async -> node_modules/yo/node_modules/each-async
sigmund@1.0.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/minimatch/node_modules/sigmund -> node_modules/yo/node_modules/sigmund
minimatch@0.2.14 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/minimatch -> node_modules/yo/node_modules/minimatch
signal-exit@2.1.2 node_modules/yo/node_modules/meow/node_modules/loud-rejection/node_modules/signal-exit -> node_modules/yo/node_modules/signal-exit
loud-rejection@1.2.0 node_modules/yo/node_modules/meow/node_modules/loud-rejection -> node_modules/yo/node_modules/loud-rejection
slide@1.1.6 node_modules/yo/node_modules/configstore/node_modules/write-file-atomic/node_modules/slide -> node_modules/yo/node_modules/slide
sntp@1.0.9 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk/node_modules/sntp -> node_modules/yo/node_modules/sntp
hawk@3.1.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/hawk -> node_modules/yo/node_modules/hawk
spdx-exceptions@1.0.4 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse/node_modules/spdx-exceptions -> node_modules/yo/node_modules/spdx-exceptions
spdx-license-ids@1.2.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct/node_modules/spdx-license-ids -> node_modules/yo/node_modules/spdx-license-ids
spdx-expression-parse@1.0.2 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-expression-parse -> node_modules/yo/node_modules/spdx-expression-parse
spdx-correct@1.0.2 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license/node_modules/spdx-correct -> node_modules/yo/node_modules/spdx-correct
assert-plus@0.2.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/assert-plus -> node_modules/yo/node_modules/sshpk/node_modules/assert-plus
string_decoder@0.10.31 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/string_decoder -> node_modules/yo/node_modules/string_decoder
- ansi-regex@2.0.0 node_modules/yo/node_modules/string-length/node_modules/strip-ansi/node_modules/ansi-regex
- strip-ansi@3.0.0 node_modules/yo/node_modules/string-length/node_modules/strip-ansi
stringstream@0.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/stringstream -> node_modules/yo/node_modules/stringstream
strip-ansi@3.0.0 node_modules/yo/node_modules/chalk/node_modules/strip-ansi -> node_modules/yo/node_modules/strip-ansi
string-width@1.0.1 node_modules/yo/node_modules/yosay/node_modules/string-width -> node_modules/yo/node_modules/string-width
strip-bom@2.0.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file/node_modules/strip-bom -> node_modules/yo/node_modules/strip-bom
load-json-file@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg/node_modules/load-json-file -> node_modules/yo/node_modules/load-json-file
strip-bom-stream@1.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom-stream -> node_modules/yo/node_modules/strip-bom-stream
strip-indent@1.0.1 node_modules/yo/node_modules/meow/node_modules/redent/node_modules/strip-indent -> node_modules/yo/node_modules/strip-indent
redent@1.0.0 node_modules/yo/node_modules/meow/node_modules/redent -> node_modules/yo/node_modules/redent
strip-json-comments@1.0.4 node_modules/yo/node_modules/package-json/node_modules/rc/node_modules/strip-json-comments -> node_modules/yo/node_modules/strip-json-comments
rc@1.1.6 node_modules/yo/node_modules/package-json/node_modules/rc -> node_modules/yo/node_modules/rc
registry-url@3.0.3 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url -> node_modules/yo/node_modules/registry-url
sudo-block@1.2.0 node_modules/yo/node_modules/root-check/node_modules/sudo-block -> node_modules/yo/node_modules/sudo-block
supports-color@2.0.0 node_modules/yo/node_modules/chalk/node_modules/supports-color -> node_modules/yo/node_modules/supports-color
minimist@1.2.0 node_modules/yo/node_modules/npm-keyword/node_modules/registry-url/node_modules/rc/node_modules/minimist -> node_modules/yo/node_modules/taketalk/node_modules/minimist
taketalk@1.0.0 node_modules/yo/node_modules/yosay/node_modules/taketalk -> node_modules/yo/node_modules/taketalk
text-table@0.2.0 node_modules/yo/node_modules/yeoman-environment/node_modules/text-table -> node_modules/yo/node_modules/text-table
through@2.3.8 node_modules/yo/node_modules/inquirer/node_modules/through -> node_modules/yo/node_modules/through
timed-out@2.0.0 node_modules/yo/node_modules/got/node_modules/timed-out -> node_modules/yo/node_modules/timed-out
tough-cookie@2.2.1 node_modules/yo/node_modules/insight/node_modules/tough-cookie -> node_modules/yo/node_modules/tough-cookie
trim-newlines@1.0.0 node_modules/yo/node_modules/meow/node_modules/trim-newlines -> node_modules/yo/node_modules/trim-newlines
tunnel-agent@0.4.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/tunnel-agent -> node_modules/yo/node_modules/tunnel-agent
tweetnacl@0.13.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk/node_modules/tweetnacl -> node_modules/yo/node_modules/tweetnacl
sshpk@1.7.3 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/sshpk -> node_modules/yo/node_modules/sshpk
uid-number@0.0.5 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/uid-number -> node_modules/yo/node_modules/uid-number
untildify@2.1.0 node_modules/yo/node_modules/yeoman-environment/node_modules/untildify -> node_modules/yo/node_modules/untildify
unzip-response@1.0.0 node_modules/yo/node_modules/got/node_modules/unzip-response -> node_modules/yo/node_modules/unzip-response
url-parse-lax@1.0.0 node_modules/yo/node_modules/got/node_modules/url-parse-lax -> node_modules/yo/node_modules/url-parse-lax
util-deprecate@1.0.2 node_modules/yo/node_modules/got/node_modules/readable-stream/node_modules/util-deprecate -> node_modules/yo/node_modules/util-deprecate
readable-stream@2.0.5 node_modules/yo/node_modules/got/node_modules/readable-stream -> node_modules/yo/node_modules/readable-stream
read-all-stream@3.0.1 node_modules/yo/node_modules/got/node_modules/read-all-stream -> node_modules/yo/node_modules/read-all-stream
duplexer2@0.1.4 node_modules/yo/node_modules/got/node_modules/duplexer2 -> node_modules/yo/node_modules/duplexer2
bl@1.0.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/bl -> node_modules/yo/node_modules/bl
uuid@2.0.1 node_modules/yo/node_modules/configstore/node_modules/uuid -> node_modules/yo/node_modules/uuid
validate-npm-package-license@3.0.1 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/validate-npm-package-license -> node_modules/yo/node_modules/validate-npm-package-license
normalize-package-data@2.3.5 node_modules/yo/node_modules/meow/node_modules/normalize-package-data -> node_modules/yo/node_modules/normalize-package-data
read-pkg@1.1.0 node_modules/yo/node_modules/read-pkg-up/node_modules/read-pkg -> node_modules/yo/node_modules/read-pkg
verror@1.3.6 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim/node_modules/verror -> node_modules/yo/node_modules/verror
jsprim@1.2.2 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature/node_modules/jsprim -> node_modules/yo/node_modules/jsprim
http-signature@1.1.0 node_modules/yo/node_modules/insight/node_modules/request/node_modules/http-signature -> node_modules/yo/node_modules/http-signature
vinyl@1.1.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl -> node_modules/yo/node_modules/vinyl
vinyl-file@1.3.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file -> node_modules/yo/node_modules/vinyl-file
walk@2.3.9 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig/node_modules/walk -> node_modules/yo/node_modules/walk
twig@0.8.6 node_modules/yo/node_modules/yeoman-doctor/node_modules/twig -> node_modules/yo/node_modules/twig
which@1.2.1 node_modules/yo/node_modules/cross-spawn-async/node_modules/which -> node_modules/yo/node_modules/which
semver@5.1.0 node_modules/yo/node_modules/meow/node_modules/normalize-package-data/node_modules/semver -> node_modules/yo/node_modules/win-release/node_modules/semver
win-release@1.1.1 node_modules/yo/node_modules/insight/node_modules/os-name/node_modules/win-release -> node_modules/yo/node_modules/win-release
os-name@1.0.3 node_modules/yo/node_modules/insight/node_modules/os-name -> node_modules/yo/node_modules/os-name
word-wrap@1.1.0 node_modules/yo/node_modules/yosay/node_modules/word-wrap -> node_modules/yo/node_modules/word-wrap
wrappy@1.0.1 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/once/node_modules/wrappy -> node_modules/yo/node_modules/wrappy
once@1.3.3 node_modules/yo/node_modules/fullname/node_modules/npmconf/node_modules/once -> node_modules/yo/node_modules/once
run-async@0.1.0 node_modules/yo/node_modules/inquirer/node_modules/run-async -> node_modules/yo/node_modules/run-async
npmconf@2.1.2 node_modules/yo/node_modules/fullname/node_modules/npmconf -> node_modules/yo/node_modules/npmconf
inflight@1.0.4 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/inflight -> node_modules/yo/node_modules/inflight
glob@6.0.4 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob -> node_modules/yo/node_modules/glob
globby@4.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby -> node_modules/yo/node_modules/globby
write-file-atomic@1.1.4 node_modules/yo/node_modules/configstore/node_modules/write-file-atomic -> node_modules/yo/node_modules/write-file-atomic
xdg-basedir@2.0.0 node_modules/yo/node_modules/configstore/node_modules/xdg-basedir -> node_modules/yo/node_modules/xdg-basedir
xtend@4.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/xtend -> node_modules/yo/node_modules/xtend
through2@2.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2 -> node_modules/yo/node_modules/through2
mem-fs@1.1.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs -> node_modules/yo/node_modules/mem-fs
is-my-json-valid@2.12.4 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator/node_modules/is-my-json-valid -> node_modules/yo/node_modules/is-my-json-valid
har-validator@2.0.5 node_modules/yo/node_modules/insight/node_modules/request/node_modules/har-validator -> node_modules/yo/node_modules/har-validator
request@2.67.0 node_modules/yo/node_modules/insight/node_modules/request -> node_modules/yo/node_modules/request
yallist@2.0.0 node_modules/yo/node_modules/cross-spawn-async/node_modules/lru-cache/node_modules/yallist -> node_modules/yo/node_modules/yallist
lru-cache@4.0.0 node_modules/yo/node_modules/cross-spawn-async/node_modules/lru-cache -> node_modules/yo/node_modules/lru-cache
- array-uniq@1.0.2 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions/node_modules/array-uniq
- get-stdin@4.0.1 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/bin-version/node_modules/find-versions/node_modules/get-stdin
- semver@4.3.6 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/semver
- semver@5.1.0 node_modules/yo/node_modules/yeoman-doctor/node_modules/bin-version-check/node_modules/semver-truncate/node_modules/semver
- escape-string-regexp@1.0.4 node_modules/yo/node_modules/yeoman-environment/node_modules/escape-string-regexp
- arrify@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/arrify
- wrappy@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/inflight/node_modules/wrappy
- inherits@2.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/inherits
- wrappy@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/once/node_modules/wrappy
- once@1.3.3 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/glob/node_modules/once
- object-assign@4.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/object-assign
- pify@2.3.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/pify
- pinkie@2.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/pinkie-promise/node_modules/pinkie
- pinkie-promise@2.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/globby/node_modules/pinkie-promise
- log-symbols@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/log-symbols
- core-util-is@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/core-util-is
- inherits@2.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/inherits
- isarray@0.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/isarray
- process-nextick-args@1.0.6 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/process-nextick-args
- string_decoder@0.10.31 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/string_decoder
- util-deprecate@1.0.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream/node_modules/util-deprecate
- readable-stream@2.0.5 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/through2/node_modules/readable-stream
- graceful-fs@4.1.2 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/graceful-fs
- is-utf8@0.2.1 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom/node_modules/is-utf8
- strip-bom@2.0.0 node_modules/yo/node_modules/yeoman-environment/node_modules/mem-fs/node_modules/vinyl-file/node_modules/strip-bom
- os-homedir@1.0.1 node_modules/yo/node_modules/yeoman-environment/node_modules/untildify/node_modules/os-homedir
- ansi-regex@2.0.0 node_modules/yo/node_modules/yosay/node_modules/ansi-regex
- ansi-styles@2.1.0 node_modules/yo/node_modules/yosay/node_modules/ansi-styles
- number-is-nan@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/code-point-at/node_modules/number-is-nan
- code-point-at@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/code-point-at
- number-is-nan@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/is-fullwidth-code-point/node_modules/number-is-nan
- is-fullwidth-code-point@1.0.0 node_modules/yo/node_modules/yosay/node_modules/string-width/node_modules/is-fullwidth-code-point
- strip-ansi@3.0.0 node_modules/yo/node_modules/yosay/node_modules/strip-ansi
/home/ubuntu/.nvm/versions/node/v4.1.1/lib
└── yo@1.6.0 

cornjacket:~/workspace $ 

DRT---The node version is still giving an error but I don't think this will cause an error later. Let' ee


cornjacket:~/workspace $ yo --version && bower --version && grunt --version
1.6.0
1.5.3
grunt-cli v0.1.13
cornjacket:~/workspace $ 


DRT - Now I am running through the yeoman tutorial - http://yeoman.io/codelab/index.html


cornjacket:~/workspace $ npm install --global generator-angular@0.11.1 generator-karma
npm WARN deprecated CSSselect@0.4.1: the module is now available as 'css-select'
npm WARN deprecated CSSwhat@0.4.7: the module is now available as 'css-what'
/home/ubuntu/.nvm/versions/node/v4.1.1/lib
├─┬ generator-angular@0.11.1 
│ ├─┬ chalk@0.5.1 
│ │ ├── ansi-styles@1.1.0 
│ │ ├── escape-string-regexp@1.0.4 
│ │ ├─┬ has-ansi@0.1.0 
│ │ │ └── ansi-regex@0.2.1 
│ │ ├── strip-ansi@0.3.0 
│ │ └── supports-color@0.2.0 
│ ├─┬ wiredep@2.2.2 
│ │ ├─┬ bower-config@0.5.2 
│ │ │ ├── graceful-fs@2.0.3 
│ │ │ ├── mout@0.9.1 
│ │ │ ├─┬ optimist@0.6.1 
│ │ │ │ ├── minimist@0.0.10 
│ │ │ │ └── wordwrap@0.0.3 
│ │ │ └── osenv@0.0.3 
│ │ ├─┬ glob@4.5.3 
│ │ │ ├─┬ inflight@1.0.4 
│ │ │ │ └── wrappy@1.0.1 
│ │ │ ├── inherits@2.0.1 
│ │ │ ├─┬ minimatch@2.0.10 
│ │ │ │ └─┬ brace-expansion@1.1.2 
│ │ │ │   ├── balanced-match@0.3.0 
│ │ │ │   └── concat-map@0.0.1 
│ │ │ └── once@1.3.3 
│ │ ├── lodash@2.4.2 
│ │ ├── minimist@1.2.0 
│ │ ├── propprop@0.3.0 
│ │ └─┬ through2@0.6.5 
│ │   ├─┬ readable-stream@1.0.33 
│ │   │ ├── core-util-is@1.0.2 
│ │   │ ├── isarray@0.0.1 
│ │   │ └── string_decoder@0.10.31 
│ │   └── xtend@4.0.1 
│ ├─┬ yeoman-generator@0.16.0 
│ │ ├── async@0.2.10 
│ │ ├─┬ chalk@0.4.0 
│ │ │ ├── ansi-styles@1.0.0 
│ │ │ ├── has-color@0.1.7 
│ │ │ └── strip-ansi@0.1.1 
│ │ ├─┬ cheerio@0.13.1 
│ │ │ ├─┬ CSSselect@0.4.1 
│ │ │ │ ├── CSSwhat@0.4.7 
│ │ │ │ └── domutils@1.4.3 
│ │ │ ├── entities@0.5.0 
│ │ │ ├─┬ htmlparser2@3.4.0 
│ │ │ │ ├── domelementtype@1.3.0 
│ │ │ │ ├── domhandler@2.2.1 
│ │ │ │ ├── domutils@1.3.0 
│ │ │ │ └── readable-stream@1.1.13 
│ │ │ └── underscore@1.5.2 
│ │ ├─┬ class-extend@0.1.2 
│ │ │ └── object-assign@2.1.1 
│ │ ├── dargs@0.1.0 
│ │ ├── debug@0.7.4 
│ │ ├── diff@1.0.8 
│ │ ├─┬ download@0.1.19 
│ │ │ ├─┬ decompress@0.2.5 
│ │ │ │ ├── adm-zip@0.4.7 
│ │ │ │ ├─┬ ext-name@1.0.1 
│ │ │ │ │ └─┬ ext-list@0.2.0 
│ │ │ │ │   └─┬ got@0.2.0 
│ │ │ │ │     └── object-assign@0.3.1 
│ │ │ │ ├─┬ stream-combiner@0.0.4 
│ │ │ │ │ └── duplexer@0.1.1 
│ │ │ │ ├─┬ tar@0.1.20 
│ │ │ │ │ ├── block-stream@0.0.8 
│ │ │ │ │ └─┬ fstream@0.1.31 
│ │ │ │ │   ├── graceful-fs@3.0.8 
│ │ │ │ │   └─┬ mkdirp@0.5.1 
│ │ │ │ │     └── minimist@0.0.8 
│ │ │ │ └─┬ tempfile@0.1.3 
│ │ │ │   └── uuid@1.4.2 
│ │ │ ├── each-async@0.1.3 
│ │ │ ├── get-stdin@0.1.0 
│ │ │ ├── get-urls@0.1.2 
│ │ │ ├─┬ nopt@2.2.1 
│ │ │ │ └── abbrev@1.0.7 
│ │ │ ├─┬ request@2.67.0 
│ │ │ │ ├── aws-sign2@0.6.0 
│ │ │ │ ├─┬ bl@1.0.0 
│ │ │ │ │ └─┬ readable-stream@2.0.5 
│ │ │ │ │   ├── process-nextick-args@1.0.6 
│ │ │ │ │   └── util-deprecate@1.0.2 
│ │ │ │ ├── caseless@0.11.0 
│ │ │ │ ├─┬ combined-stream@1.0.5 
│ │ │ │ │ └── delayed-stream@1.0.0 
│ │ │ │ ├── extend@3.0.0 
│ │ │ │ ├── forever-agent@0.6.1 
│ │ │ │ ├─┬ form-data@1.0.0-rc3 
│ │ │ │ │ └── async@1.5.2 
│ │ │ │ ├─┬ har-validator@2.0.5 
│ │ │ │ │ ├─┬ chalk@1.1.1 
│ │ │ │ │ │ ├── ansi-styles@2.1.0 
│ │ │ │ │ │ ├─┬ has-ansi@2.0.0 
│ │ │ │ │ │ │ └── ansi-regex@2.0.0 
│ │ │ │ │ │ ├── strip-ansi@3.0.0 
│ │ │ │ │ │ └── supports-color@2.0.0 
│ │ │ │ │ ├─┬ commander@2.9.0 
│ │ │ │ │ │ └── graceful-readlink@1.0.1 
│ │ │ │ │ ├─┬ is-my-json-valid@2.12.4 
│ │ │ │ │ │ ├── generate-function@2.0.0 
│ │ │ │ │ │ ├─┬ generate-object-property@1.2.0 
│ │ │ │ │ │ │ └── is-property@1.0.2 
│ │ │ │ │ │ └── jsonpointer@2.0.0 
│ │ │ │ │ └─┬ pinkie-promise@2.0.0 
│ │ │ │ │   └── pinkie@2.0.1 
│ │ │ │ ├─┬ hawk@3.1.2 
│ │ │ │ │ ├── boom@2.10.1 
│ │ │ │ │ ├── cryptiles@2.0.5 
│ │ │ │ │ ├── hoek@2.16.3 
│ │ │ │ │ └── sntp@1.0.9 
│ │ │ │ ├─┬ http-signature@1.1.0 
│ │ │ │ │ ├─┬ jsprim@1.2.2 
│ │ │ │ │ │ ├── extsprintf@1.0.2 
│ │ │ │ │ │ ├── json-schema@0.2.2 
│ │ │ │ │ │ └── verror@1.3.6 
│ │ │ │ │ └─┬ sshpk@1.7.3 
│ │ │ │ │   ├── asn1@0.2.3 
│ │ │ │ │   ├── assert-plus@0.2.0 
│ │ │ │ │   ├── dashdash@1.12.1 
│ │ │ │ │   ├── ecc-jsbn@0.1.1 
│ │ │ │ │   ├── jodid25519@1.0.2 
│ │ │ │ │   ├── jsbn@0.1.0 
│ │ │ │ │   └── tweetnacl@0.13.3 
│ │ │ │ ├── is-typedarray@1.0.0 
│ │ │ │ ├── isstream@0.1.2 
│ │ │ │ ├─┬ mime-types@2.1.9 
│ │ │ │ │ └── mime-db@1.21.0 
│ │ │ │ ├── oauth-sign@0.8.0 
│ │ │ │ ├── qs@5.2.0 
│ │ │ │ ├── stringstream@0.0.5 
│ │ │ │ ├── tough-cookie@2.2.1 
│ │ │ │ └── tunnel-agent@0.4.2 
│ │ │ └─┬ through2@0.4.2 
│ │ │   └─┬ xtend@2.1.2 
│ │ │     └── object-keys@0.4.0 
│ │ ├─┬ file-utils@0.1.5 
│ │ │ ├─┬ glob@3.2.11 
│ │ │ │ └── minimatch@0.3.0 
│ │ │ ├── isbinaryfile@0.1.9 
│ │ │ ├── lodash@2.1.0 
│ │ │ └─┬ minimatch@0.2.14 
│ │ │   ├── lru-cache@2.7.3 
│ │ │   └── sigmund@1.0.1 
│ │ ├─┬ findup-sync@0.1.3 
│ │ │ └─┬ glob@3.2.11 
│ │ │   └── minimatch@0.3.0 
│ │ ├─┬ glob@3.2.11 
│ │ │ └── minimatch@0.3.0 
│ │ ├── iconv-lite@0.2.11 
│ │ ├─┬ inquirer@0.4.1 
│ │ │ ├─┬ cli-color@0.2.3 
│ │ │ │ ├── es5-ext@0.9.2 
│ │ │ │ └─┬ memoizee@0.2.6 
│ │ │ │   ├── event-emitter@0.2.2 
│ │ │ │   └── next-tick@0.1.0 
│ │ │ ├── mute-stream@0.0.4 
│ │ │ ├─┬ readline2@0.1.1 
│ │ │ │ └─┬ strip-ansi@2.0.1 
│ │ │ │   └── ansi-regex@1.1.1 
│ │ │ └── through@2.3.8 
│ │ ├── isbinaryfile@2.0.4 
│ │ ├── mime@1.2.11 
│ │ ├── mkdirp@0.3.5 
│ │ ├─┬ request@2.30.0 
│ │ │ ├── aws-sign2@0.5.0 
│ │ │ ├── forever-agent@0.5.2 
│ │ │ ├─┬ form-data@0.1.4 
│ │ │ │ ├── async@0.9.2 
│ │ │ │ └─┬ combined-stream@0.0.7 
│ │ │ │   └── delayed-stream@0.0.5 
│ │ │ ├─┬ hawk@1.0.0 
│ │ │ │ ├── boom@0.4.2 
│ │ │ │ ├── cryptiles@0.2.2 
│ │ │ │ ├── hoek@0.9.1 
│ │ │ │ └── sntp@0.2.4 
│ │ │ ├─┬ http-signature@0.10.1 
│ │ │ │ ├── asn1@0.1.11 
│ │ │ │ ├── assert-plus@0.1.5 
│ │ │ │ └── ctype@0.5.3 
│ │ │ ├── json-stringify-safe@5.0.1 
│ │ │ ├── node-uuid@1.4.7 
│ │ │ ├── oauth-sign@0.3.0 
│ │ │ ├── qs@0.6.6 
│ │ │ ├─┬ tough-cookie@0.9.15 
│ │ │ │ └── punycode@1.4.0 
│ │ │ └── tunnel-agent@0.3.0 
│ │ ├── rimraf@2.2.8 
│ │ ├── shelljs@0.2.6 
│ │ ├── text-table@0.2.0 
│ │ └── underscore.string@2.3.3 
│ └─┬ yosay@1.1.0 
│   ├── ansi-regex@2.0.0 
│   ├── ansi-styles@2.1.0 
│   ├─┬ chalk@1.1.1 
│   │ ├── has-ansi@2.0.0 
│   │ └── supports-color@2.0.0 
│   ├── pad-component@0.0.1 
│   ├─┬ repeating@2.0.0 
│   │ └─┬ is-finite@1.0.1 
│   │   └── number-is-nan@1.0.0 
│   ├─┬ string-width@1.0.1 
│   │ ├── code-point-at@1.0.0 
│   │ ├── is-fullwidth-code-point@1.0.0 
│   │ └─┬ strip-ansi@3.0.0 
│   │   └── ansi-regex@2.0.0 
│   ├── strip-ansi@3.0.0 
│   ├─┬ taketalk@1.0.0 
│   │ └── get-stdin@4.0.1 
│   └── word-wrap@1.1.0 
├─┬ generator-karma@1.0.1 
│ ├── sorted-object@1.0.0 
│ ├── underscore@1.8.3 
│ └─┬ yeoman-generator@0.19.2 
│   ├── async@0.9.2 
│   ├─┬ chalk@1.1.1 
│   │ ├── ansi-styles@2.1.0 
│   │ ├── escape-string-regexp@1.0.4 
│   │ ├─┬ has-ansi@2.0.0 
│   │ │ └── ansi-regex@2.0.0 
│   │ ├── strip-ansi@3.0.0 
│   │ └── supports-color@2.0.0 
│   ├─┬ class-extend@0.1.2 
│   │ └── object-assign@2.1.1 
│   ├─┬ cli-table@0.3.1 
│   │ └── colors@1.0.3 
│   ├─┬ cross-spawn@0.2.9 
│   │ └── lru-cache@2.7.3 
│   ├─┬ dargs@4.1.0 
│   │ └── number-is-nan@1.0.0 
│   ├─┬ dateformat@1.0.12 
│   │ ├── get-stdin@4.0.1 
│   │ └─┬ meow@3.7.0 
│   │   ├─┬ camelcase-keys@2.0.0 
│   │   │ └── camelcase@2.0.1 
│   │   ├── decamelize@1.1.2 
│   │   ├─┬ loud-rejection@1.2.0 
│   │   │ └── signal-exit@2.1.2 
│   │   ├── map-obj@1.0.1 
│   │   ├── minimist@1.2.0 
│   │   ├─┬ normalize-package-data@2.3.5 
│   │   │ ├── hosted-git-info@2.1.4 
│   │   │ ├─┬ is-builtin-module@1.0.0 
│   │   │ │ └── builtin-modules@1.1.1 
│   │   │ ├── semver@5.1.0 
│   │   │ └─┬ validate-npm-package-license@3.0.1 
│   │   │   ├─┬ spdx-correct@1.0.2 
│   │   │   │ └── spdx-license-ids@1.2.0 
│   │   │   └─┬ spdx-expression-parse@1.0.2 
│   │   │     └── spdx-exceptions@1.0.4 
│   │   ├── object-assign@4.0.1 
│   │   ├─┬ read-pkg-up@1.0.1 
│   │   │ ├─┬ find-up@1.1.0 
│   │   │ │ └── path-exists@2.1.0 
│   │   │ └─┬ read-pkg@1.1.0 
│   │   │   ├── load-json-file@1.1.0 
│   │   │   └── path-type@1.1.0 
│   │   ├─┬ redent@1.0.0 
│   │   │ ├─┬ indent-string@2.1.0 
│   │   │ │ └─┬ repeating@2.0.0 
│   │   │ │   └── is-finite@1.0.1 
│   │   │ └── strip-indent@1.0.1 
│   │   └── trim-newlines@1.0.0 
│   ├─┬ debug@2.2.0 
│   │ └── ms@0.7.1 
│   ├── detect-conflict@1.0.0 
│   ├── diff@1.4.0 
│   ├─┬ download@4.4.3 
│   │ ├─┬ caw@1.2.0 
│   │ │ ├─┬ get-proxy@1.0.1 
│   │ │ │ └─┬ rc@0.5.5 
│   │ │ │   ├── deep-extend@0.2.11 
│   │ │ │   ├── ini@1.3.4 
│   │ │ │   ├── minimist@0.0.10 
│   │ │ │   └── strip-json-comments@0.1.3 
│   │ │ ├── is-obj@1.0.0 
│   │ │ ├── object-assign@3.0.0 
│   │ │ └── tunnel-agent@0.4.2 
│   │ ├─┬ concat-stream@1.5.1 
│   │ │ └── typedarray@0.0.6 
│   │ ├─┬ each-async@1.1.1 
│   │ │ ├── onetime@1.1.0 
│   │ │ └── set-immediate-shim@1.0.1 
│   │ ├─��� filenamify@1.2.0 
│   │ │ ├── filename-reserved-regex@1.0.0 
│   │ │ ├── strip-outer@1.0.0 
│   │ │ └── trim-repeated@1.0.0 
│   │ ├─┬ got@5.4.0 
│   │ │ ├─┬ create-error-class@2.0.1 
│   │ │ │ └── capture-stack-trace@1.0.0 
│   │ │ ├── duplexer2@0.1.4 
│   │ │ ├── is-plain-obj@1.1.0 
│   │ │ ├── is-redirect@1.0.0 
│   │ │ ├── is-retry-allowed@1.0.0 
│   │ │ ├── is-stream@1.0.1 
│   │ │ ├── lowercase-keys@1.0.0 
│   │ │ ├── node-status-codes@1.0.0 
│   │ │ ├── object-assign@4.0.1 
│   │ │ ├─┬ parse-json@2.2.0 
│   │ │ │ └─┬ error-ex@1.3.0 
│   │ │ │   └── is-arrayish@0.2.1 
│   │ │ ├─┬ pinkie-promise@2.0.0 
│   │ │ │ └── pinkie@2.0.1 
│   │ │ ├── timed-out@2.0.0 
│   │ │ ├── unzip-response@1.0.0 
│   │ │ └── url-parse-lax@1.0.0 
│   │ ├─┬ gulp-decompress@1.2.0 
│   │ │ ├─┬ archive-type@3.2.0 
│   │ │ │ └── file-type@3.4.0 
│   │ │ ├─┬ decompress@3.0.0 
│   │ │ │ ├─┬ buffer-to-vinyl@1.1.0 
│   │ │ │ │ └── uuid@2.0.1 
│   │ │ │ ├─┬ decompress-tar@3.1.0 
│   │ │ │ │ ├── is-tar@1.0.0 
│   │ │ │ │ ├─┬ strip-dirs@1.1.1 
│   │ │ │ │ │ ├─┬ is-absolute@0.1.7 
│   │ │ │ │ │ │ └── is-relative@0.1.3 
│   │ │ │ │ │ ├── is-natural-number@2.0.0 
│   │ │ │ │ │ └── sum-up@1.0.2 
│   │ │ │ │ ├─┬ tar-stream@1.3.1 
│   │ │ │ │ │ ├── bl@1.0.0 
│   │ │ │ │ │ └── end-of-stream@1.1.0 
│   │ │ │ │ └─┬ vinyl@0.4.6 
│   │ │ │ │   └── clone@0.2.0 
│   │ │ │ ├─┬ decompress-tarbz2@3.1.0 
│   │ │ │ │ ├── is-bzip2@1.0.0 
│   │ │ │ │ ├─┬ seek-bzip@1.0.5 
│   │ │ │ │ │ └─┬ commander@2.8.1 
│   │ │ │ │ │   └── graceful-readlink@1.0.1 
│   │ │ │ │ └─┬ vinyl@0.4.6 
│   │ │ │ │   └── clone@0.2.0 
│   │ │ │ ├─┬ decompress-targz@3.1.0 
│   │ │ │ │ ├── is-gzip@1.0.0 
│   │ │ │ │ └─┬ vinyl@0.4.6 
│   │ │ │ │   └── clone@0.2.0 
│   │ │ │ ├─┬ decompress-unzip@3.4.0 
│   │ │ │ │ ├── is-zip@1.0.0 
│   │ │ │ │ ├── stat-mode@0.2.1 
│   │ │ │ │ ├── through2@2.0.0 
│   │ │ │ │ └─┬ yauzl@2.4.1 
│   │ │ │ │   └─┬ fd-slicer@1.0.1 
│   │ │ │ │     └── pend@1.2.0 
│   │ │ │ └─┬ vinyl-assign@1.2.1 
│   │ │ │   └── object-assign@4.0.1 
│   │ │ └─┬ gulp-util@3.0.7 
│   │ │   ├── array-differ@1.0.0 
│   │ │   ├── array-uniq@1.0.2 
│   │ │   ├── beeper@1.1.0 
│   │ │   ├── fancy-log@1.1.0 
│   │ │   ├─┬ gulplog@1.0.0 
│   │ │   │ └── glogg@1.0.0 
│   │ │   ├─┬ has-gulplog@0.1.0 
│   │ │   │ └── sparkles@1.0.0 
│   │ │   ├── lodash._reescape@3.0.0 
│   │ │   ├── lodash._reevaluate@3.0.0 
│   │ │   ├── lodash._reinterpolate@3.0.0 
│   │ │   ├─┬ lodash.template@3.6.2 
│   │ │   │ ├── lodash._basecopy@3.0.1 
│   │ │   │ ├── lodash._basetostring@3.0.1 
│   │ │   │ ├── lodash._basevalues@3.0.0 
│   │ │   │ ├── lodash._isiterateecall@3.0.9 
│   │ │   │ ├── lodash.escape@3.1.0 
│   │ │   │ ├─┬ lodash.keys@3.1.2 
│   │ │   │ │ ├── lodash._getnative@3.9.1 
│   │ │   │ │ ├── lodash.isarguments@3.0.5 
npm WARN generator-angular@0.11.1 requires a peer of yo@>=1.0.0 but none was installed.

│   │ │   │ ├── lodash.restparam@3.6.1 
│   │ │   │ └── lodash.templatesettings@3.1.1 
│   │ │   ├─┬ multipipe@0.1.2 
│   │ │   │ └─┬ duplexer2@0.0.2 
│   │ │   │   └── readable-stream@1.1.13 
│   │ │   ├── object-assign@3.0.0 
│   │ │   ├── through2@2.0.0 
│   │ │   └── vinyl@0.5.3 
│   │ ├── gulp-rename@1.2.2 
│   │ ├── is-url@1.2.1 
│   │ ├── object-assign@4.0.1 
│   │ ├─┬ read-all-stream@3.0.1 
│   │ │ └─┬ pinkie-promise@1.0.0 
│   │ │   └── pinkie@1.0.0 
│   │ ├─┬ readable-stream@2.0.5 
│   │ │ ├── core-util-is@1.0.2 
│   │ │ ├── isarray@0.0.1 
│   │ │ ├── process-nextick-args@1.0.6 
│   │ │ ├── string_decoder@0.10.31 
│   │ │ └── util-deprecate@1.0.2 
│   │ ├── stream-combiner2@1.1.1 
│   │ ├─┬ vinyl@1.1.0 
│   │ │ ├── clone@1.0.2 
│   │ │ ├── clone-stats@0.0.1 
│   │ │ └── replace-ext@0.0.1 
│   │ ├─┬ vinyl-fs@2.3.1 
│   │ │ ├─┬ duplexify@3.4.2 
│   │ │ │ └── end-of-stream@1.0.0 
│   │ │ ├─┬ glob-stream@5.3.1 
│   │ │ │ ├── extend@3.0.0 
│   │ │ │ ├─┬ glob-parent@2.0.0 
│   │ │ │ │ └── is-glob@2.0.1 
│   │ │ │ ├─┬ micromatch@2.3.7 
│   │ │ │ │ ├─┬ arr-diff@2.0.0 
│   │ │ │ │ │ └── arr-flatten@1.0.1 
│   │ │ │ │ ├── array-unique@0.2.1 
│   │ │ │ │ ├─┬ braces@1.8.3 
│   │ │ │ │ │ ├─┬ expand-range@1.8.1 
│   │ │ │ │ │ │ └─┬ fill-range@2.2.3 
│   │ │ │ │ │ │   ├── is-number@2.1.0 
│   │ │ │ │ │ │   ├── isobject@2.0.0 
│   │ │ │ │ │ │   ├── randomatic@1.1.5 
│   │ │ │ │ │ │   └── repeat-string@1.5.2 
│   │ │ │ │ │ ├── preserve@0.2.0 
│   │ │ │ │ │ └── repeat-element@1.1.2 
│   │ │ │ │ ├── expand-brackets@0.1.4 
│   │ │ │ │ ├─┬ extglob@0.3.1 
│   │ │ │ │ │ ├─┬ ansi-green@0.1.1 
│   │ │ │ │ │ │ └── ansi-wrap@0.1.0 
│   │ │ │ │ │ └── success-symbol@0.1.0 
│   │ │ │ │ ├── filename-regex@2.0.0 
│   │ │ │ │ ├── is-extglob@1.0.0 
│   │ │ │ │ ├─┬ kind-of@3.0.2 
│   │ │ │ │ │ └── is-buffer@1.1.1 
│   │ │ │ │ ├── normalize-path@2.0.1 
│   │ │ │ │ ├─┬ object.omit@2.0.0 
│   │ │ │ │ │ ├─┬ for-own@0.1.3 
│   │ │ │ │ │ │ └── for-in@0.1.4 
│   │ │ │ │ │ └── is-extendable@0.1.1 
│   │ │ │ │ ├─┬ parse-glob@3.0.4 
│   │ │ │ │ │ ├── glob-base@0.3.0 
│   │ │ │ │ │ └── is-dotfile@1.0.2 
│   │ │ │ │ └─┬ regex-cache@0.4.2 
│   │ │ │ │   ├── is-equal-shallow@0.1.3 
│   │ │ │ │   └── is-primitive@2.0.0 
│   │ │ │ ├── ordered-read-streams@0.3.0 
│   │ │ │ ├─┬ to-absolute-glob@0.1.1 
│   │ │ │ │ └── extend-shallow@2.0.1 
│   │ │ │ └── unique-stream@2.2.0 
│   │ │ ├── graceful-fs@4.1.2 
│   │ │ ├─┬ gulp-sourcemaps@1.6.0 
│   │ │ │ ├── convert-source-map@1.1.3 
│   │ │ │ └── through2@2.0.0 
│   │ │ ├── is-valid-glob@0.3.0 
│   │ │ ├── lazystream@1.0.0 
│   │ │ ├── merge-stream@1.0.0 
│   │ │ ├── object-assign@4.0.1 
│   │ │ ├─┬ strip-bom@2.0.0 
│   │ │ │ └── is-utf8@0.2.1 
│   │ │ ├─┬ strip-bom-stream@1.0.0 
│   │ │ │ └── first-chunk-stream@1.0.0 
│   │ │ ├── through2@2.0.0 
│   │ │ └─┬ through2-filter@2.0.0 
│   │ │   └── through2@2.0.0 
│   │ └─┬ ware@1.3.0 
│   │   └─┬ wrap-fn@0.1.4 
│   │     └── co@3.1.0 
│   ├─┬ findup-sync@0.2.1 
│   │ └─┬ glob@4.3.5 
│   │   └── minimatch@2.0.10 
│   ├─┬ github-username@1.1.1 
│   │ ├── get-stdin@1.0.0 
│   │ └─┬ got@2.9.2 
│   │   ├── infinity-agent@2.0.3 
│   │   ├── nested-error-stacks@1.0.2 
│   │   ├── prepend-http@1.0.3 
│   │   ├── read-all-stream@2.2.0 
│   │   └── statuses@1.2.1 
│   ├─┬ glob@5.0.15 
│   │ ├─┬ inflight@1.0.4 
│   │ │ └── wrappy@1.0.1 
│   │ ├── inherits@2.0.1 
│   │ ├─┬ minimatch@3.0.0 
│   │ │ └─┬ brace-expansion@1.1.2 
│   │ │   ├── balanced-match@0.3.0 
│   │ │   └── concat-map@0.0.1 
│   │ ├── once@1.3.3 
│   │ └── path-is-absolute@1.0.0 
│   ├─┬ gruntfile-editor@1.1.0 
│   │ └─┬ ast-query@1.1.0 
│   │   ├─┬ escodegen@1.8.0 
│   │   │ ├── estraverse@1.9.3 
│   │   │ ├── esutils@2.0.2 
│   │   │ ├─┬ optionator@0.8.1 
│   │   │ │ ├── deep-is@0.1.3 
│   │   │ │ ├── fast-levenshtein@1.1.0 
│   │   │ │ ├── levn@0.3.0 
│   │   │ │ ├── prelude-ls@1.1.2 
│   │   │ │ ├── type-check@0.3.2 
│   │   │ │ └── wordwrap@1.0.0 
│   │   │ └─┬ source-map@0.2.0 
│   │   │   └── amdefine@1.0.0 
│   │   ├── esprima@2.7.1 
│   │   └── traverse@0.6.6 
│   ├─┬ html-wiring@1.2.0 
│   │ ├─┬ cheerio@0.19.0 
│   │ │ ├─┬ css-select@1.0.0 
│   │ │ │ ├── boolbase@1.0.0 
│   │ │ │ ├── css-what@1.0.0 
│   │ │ │ ├── domutils@1.4.3 
│   │ │ │ └── nth-check@1.0.1 
│   │ │ ├─┬ dom-serializer@0.1.0 
│   │ │ │ └── domelementtype@1.1.3 
│   │ │ ├── entities@1.1.1 
│   │ │ └─┬ htmlparser2@3.8.3 
│   │ │   ├── domelementtype@1.3.0 
│   │ │   ├── domhandler@2.3.0 
│   │ │   ├── domutils@1.5.1 
│   │ │   ├── entities@1.0.0 
│   │ │   └── readable-stream@1.1.13 
│   │ └── detect-newline@1.0.3 
│   ├─┬ inquirer@0.8.5 
│   │ ├── ansi-regex@1.1.1 
│   │ ├── cli-width@1.1.0 
│   │ ├── figures@1.4.0 
│   │ ├─┬ readline2@0.1.1 
│   │ │ ├── mute-stream@0.0.4 
│   │ │ └─┬ strip-ansi@2.0.1 
│   │ │   └── ansi-regex@1.1.1 
│   │ ├── rx@2.5.3 
│   │ └── through@2.3.8 
│   ├─┬ istextorbinary@1.0.2 
│   │ ├── binaryextensions@1.0.0 
│   │ └── textextensions@1.0.1 
│   ├── lodash@3.10.1 
│   ├─┬ mem-fs-editor@1.2.3 
│   │ └─┬ vinyl@0.4.6 
│   │   └── clone@0.2.0 
│   ├── mime@1.3.4 
│   ├─┬ mkdirp@0.5.1 
│   │ └── minimist@0.0.8 
│   ├─┬ nopt@3.0.6 
│   │ └── abbrev@1.0.7 
│   ├── pretty-bytes@1.0.4 
│   ├── read-chunk@1.0.1 
│   ├─┬ rimraf@2.5.0 
│   │ └── glob@6.0.4 
│   ├── run-async@0.1.0 
│   ├── shelljs@0.4.0 
│   ├─┬ sinon@1.17.2 
│   │ ├── formatio@1.1.1 
│   │ ├── lolex@1.3.2 
│   │ ├── samsam@1.1.2 
│   │ └── util@0.10.3 
│   ├── text-table@0.2.0 
│   ├─┬ through2@0.6.5 
│   │ ├── readable-stream@1.0.33 
│   │ └── xtend@4.0.1 
│   ├── underscore.string@3.2.3 
│   ├── user-home@1.1.1 
│   ├── xdg-basedir@1.0.1 
│   ├─┬ yeoman-assert@1.0.0 
│   │ ├─┬ chalk@0.5.1 
│   │ │ ├── ansi-styles@1.1.0 
│   │ │ ├─┬ has-ansi@0.1.0 
│   │ │ │ └── ansi-regex@0.2.1 
│   │ │ ├── strip-ansi@0.3.0 
│   │ │ └── supports-color@0.2.0 
│   │ └── lodash@2.4.2 
│   ├─┬ yeoman-environment@1.5.2 
│   │ ├── diff@2.2.1 
│   │ ├─┬ globby@4.0.0 
│   │ │ ├── array-union@1.0.1 
│   │ │ ├── arrify@1.0.1 
│   │ │ ├── glob@6.0.4 
│   │ │ ├── object-assign@4.0.1 
│   │ │ └── pify@2.3.0 
│   │ ├── grouped-queue@0.3.2 
│   │ ├─┬ inquirer@0.11.2 
│   │ │ ├── ansi-escapes@1.1.1 
│   │ │ ├─┬ cli-cursor@1.0.2 
│   │ │ │ └─┬ restore-cursor@1.0.1 
│   │ │ │   └── exit-hook@1.1.1 
│   │ │ ├─┬ readline2@1.0.1 
│   │ │ │ ├── code-point-at@1.0.0 
│   │ │ │ ├── is-fullwidth-code-point@1.0.0 
│   │ │ │ └── mute-stream@0.0.5 
│   │ │ └── rx-lite@3.1.2 
│   │ ├── log-symbols@1.0.2 
│   │ ├─┬ mem-fs@1.1.2 
│   │ │ ├── through2@2.0.0 
│   │ │ └── vinyl-file@1.3.0 
│   │ └─┬ untildify@2.1.0 
│   │   └── os-homedir@1.0.1 
│   └── yeoman-welcome@1.0.1 
└── UNMET PEER DEPENDENCY yo@>=1.0.0

DRT Error with yo@ 1.0.0 not install, now I am just installing the angular generator without a specific version

cornjacket:~/workspace $ npm install --global generator-angular generator-karma
npm WARN deprecated CSSselect@0.4.1: the module is now available as 'css-select'
npm WARN deprecated CSSwhat@0.4.7: the module is now available as 'css-what'
- ansi-regex@2.0.0 node_modules/generator-angular/node_modules/har-validator/node_modules/ansi-regex
- ansi-styles@2.1.0 node_modules/generator-angular/node_modules/har-validator/node_modules/ansi-styles
- has-ansi@2.0.0 node_modules/generator-angular/node_modules/har-validator/node_modules/has-ansi
- strip-ansi@3.0.0 node_modules/generator-angular/node_modules/har-validator/node_modules/strip-ansi
- supports-color@2.0.0 node_modules/generator-angular/node_modules/har-validator/node_modules/supports-color
- chalk@1.1.1 node_modules/generator-angular/node_modules/har-validator/node_modules/chalk
- ansi-regex@2.0.0 node_modules/generator-angular/node_modules/string-width/node_modules/ansi-regex
- strip-ansi@3.0.0 node_modules/generator-angular/node_modules/string-width/node_modules/strip-ansi
- ansi-regex@2.0.0 node_modules/generator-angular/node_modules/yosay/node_modules/ansi-regex
- ansi-styles@2.1.0 node_modules/generator-angular/node_modules/yosay/node_modules/ansi-styles
- has-ansi@2.0.0 node_modules/generator-angular/node_modules/yosay/node_modules/has-ansi
- strip-ansi@3.0.0 node_modules/generator-angular/node_modules/yosay/node_modules/strip-ansi
- supports-color@2.0.0 node_modules/generator-angular/node_modules/yosay/node_modules/supports-color
- chalk@1.1.1 node_modules/generator-angular/node_modules/yosay/node_modules/chalk
/home/ubuntu/.nvm/versions/node/v4.1.1/lib
├─┬ generator-angular@0.15.1 
│ ├─┬ chalk@1.1.1 
│ │ ├── ansi-styles@2.1.0 
│ │ ├── has-ansi@2.0.0 
│ │ ├── strip-ansi@3.0.0 
│ │ └── supports-color@2.0.0 
│ ├─┬ wiredep@2.2.2
│ │ └─┬ chalk@0.5.1 
│ │   ├── ansi-styles@1.1.0 
│ │   ├─┬ has-ansi@0.1.0 
│ │   │ └── ansi-regex@0.2.1 
│ │   ├── strip-ansi@0.3.0 
│ │   └── supports-color@0.2.0 
│ └─┬ yosay@1.1.0
│   └── ansi-regex@2.0.0 
└─┬ generator-karma@1.0.1 
  └─┬ yeoman-generator@0.19.2
    ├─┬ chalk@1.1.1 
    │ ├── ansi-styles@2.1.0 
    │ ├─┬ has-ansi@2.0.0 
    │ │ └── ansi-regex@2.0.0 
    │ ├── strip-ansi@3.0.0 
    │ └── supports-color@2.0.0 
    └─┬ yeoman-assert@1.0.0
      └─┬ chalk@0.5.1 
        ├── ansi-styles@1.1.0 
        ├─┬ has-ansi@0.1.0 
        │ └── ansi-regex@0.2.1 
        ├── strip-ansi@0.3.0 
        └── supports-color@0.2.0 

DRT - Much less is installed. Not sure why

cornjacket:~/workspace $ mkdir mytodo && cd mytodo
cornjacket:~/workspace/mytodo $ ls
cornjacket:~/workspace/mytodo $ 


cornjacket:~/workspace/mytodo $ yo

DRT - ran yo get an error in package.json. Tutorial says don't worry about it.

├─┬ grunt-jscs@1.8.0
│ └─┬ jscs@1.13.1
│   └─┬ xmlbuilder@2.6.5
│     └── lodash@3.10.1 
├─┬ grunt-karma@0.12.1 
│ └── lodash@3.10.1 
├─┬ grunt-usemin@3.1.1
│ └── lodash@3.10.1 
├── UNMET PEER DEPENDENCY jasmine-core@*
├── UNMET PEER DEPENDENCY karma@^0.13.0 || >= 0.14.0-rc.0
├── karma-jasmine@0.3.6 
├─┬ karma-phantomjs-launcher@0.2.3 
│ └── lodash@3.10.1 
└── UNMET PEER DEPENDENCY phantomjs@>=1.9

npm WARN grunt-karma@0.12.1 requires a peer of karma@^0.13.0 || >= 0.14.0-rc.0 but none was installed.
npm WARN karma-jasmine@0.3.6 requires a peer of jasmine-core@* but none was installed.
npm WARN karma-phantomjs-launcher@0.2.3 requires a peer of karma@>=0.9 but none was installed.
npm WARN karma-phantomjs-launcher@0.2.3 requires a peer of phantomjs@>=1.9 but none was installed.

     _-----_
    |       |    .-----------------------.
    |--(o)--|    |      Bye from us!     |
   `---------´   |       Chat soon.      |
    ( _´U`_ )    |      Yeoman team      |
    /___A___\    |    http://yeoman.io   |
     |  ~  |     '-----------------------'
   __'.___.'__   
 ´   `  |° ´ Y ` 

cornjacket:~/workspace/mytodo $ 

DRT - UNMET PEER DEPENDENCIES above for testing components. What will happen?


Ignoring for now.

DRT - making following changes.

I read a couple of discussions on Stack Overflow on how to get Grunt working properly on Cloud9.
Firstly you need to open up your Gruntfile.js file and change your server from localhost to 0.0.0.0 and your
port from 9000 to 8080.

DRT - made change to test port to 8081. I have no real reason to do this.


Now to start the server...

cornjacket:~/workspace/mytodo $ grunt serve
Running "serve" task

Running "clean:server" (clean) task
>> 0 paths cleaned.

Running "wiredep:app" (wiredep) task

Running "wiredep:test" (wiredep) task

Running "concurrent:server" (concurrent) task
    
    Running "copy:styles" (copy) task
    Copied 1 file
    
    Done, without errors.
    
    
    Execution Time (2016-01-18 05:04:32 UTC)
    loading tasks               277ms  ▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇▇ 84%
    loading grunt-contrib-copy   29ms  ▇▇▇▇ 9%
    copy:styles                  21ms  ▇▇▇ 6%
    Total 328ms
    
Running "postcss:server" (postcss) task
>> 1 processed stylesheet created.

Running "connect:livereload" (connect) task
Started connect web server on http://0.0.0.0:8080

Running "watch" task
Waiting...
>> File "app/index.html" changed.
Completed in 0.000s at Mon Jan 18 2016 05:04:55 GMT+0000 (UTC) - Waiting...

DRT - if I edit a file, it appears to reload.

Now to try to open the browser.

So the app is working at

https://yeoman-on-c9-cornjacket.c9users.io:8080/#/

UI looks pretty sparse. Not sure if something is missing. The view does not match the tutorial example. There are some
missing stuff.



The testing component is probably not working right now though.


DRT - Not able to GET angular.js. Getting lots of errors.

I need to re-run the entire tutorial, except try out the webapp generator instead and see if I can get that running consistently.

DRT - i think live reload may be causing a problem, so i commented it out of the grunt file.

So partial success. Angular is now being loaded and I see the welcome screen. However the browser is still trying to load reload.
Maybe it would work on heroku or non c9 environment.


TODO - Go through the following log to see if I can get rid of this reload issue.
https://gitter.im/SaintPeter/BangingOnYeoman/archives/2015/07/28
Maybe not that important if it works on heroku. I should push this to heroku to see what happens....


bower not installed by yeoman

http://stackoverflow.com/questions/22367837/what-is-causing-grunt-serve-to-throw-no-bower-

components-found

>bower install


1/17/16

Had decent progress with yeoman angular generator on c9 that makes a todo app. I am going 

to finish it up.

I am going to try to run it again, this time with the angular-fullstack generator on c9 and 

see if I can get that to work.

I probably will have the same issue with the node version though. But I think it will still 

work though.

Running through the yeoman todo app tutorial. Using ui-sortable is pretty cool. You can 

drag and drop the tasks easily.

But I ran into a problem with running 'grunt test'. It fails because it can not find module 

karma.

http://stackoverflow.com/questions/19203051/cannot-find-module-karma-while-using-grunt

Make sure you have installed both karma and grunt-karma before running the grunt task:

npm install karma
npm install grunt-karma


installing karma gives following error
 UNMET PEER DEPENDENCY jasmine-core@*
 UNMET PEER DEPENDENCY phantomjs@>=1.9

So I am trying this:
npm install karma jasmine-core phantomjs --save-dev
from this
https://github.com/yeoman/generator-angular/issues/1205



continuing through the unit testing steps in the yeoman.io example using angular-generator.

i have the following error when running
$ grunt test

Running "karma:unit" (karma) task
19 01 2016 18:13:33.586:WARN [watcher]: Pattern 

"/home/ubuntu/workspace/mytodo/test/mock/**/*.js" does not match any file.
19 01 2016 

18:13:33.605:INFO [karma]: Karma v0.13.19 server started at http://0.0.0.0:8080/
19 01 2016 

18:13:33.611:INFO [launcher]: Starting browser PhantomJS
19 01 2016 18:13:33.635:ERROR 

[phantomjs.launcher]: Fontconfig warning: ignoring C.UTF-8: not a valid language tag

i ran the following which did not solve the problem.
npm install --save-dev karma-phantomjs-launcher

However the unit tests pass after having changed the tests according to the tutorial. The 

error above is not limiting my progress. I will table it for now and return at a later time 

if needed.

***Regarding phantomjs error above: I am not sure if c9 allows a phantom connection. Maybe 

it is not a real bug. Have no idea if this is right or wrong... moving forward.

Step 10, local storage

bower install --save angular-local-storage

finshed tutorial. actually pretty useful stuff.



