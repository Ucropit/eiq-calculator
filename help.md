## Instructions for publishing package in npm
* Check which account you have logged in -
```sh
npm whoami
```
* If this is not the correct account then login with correct npmjs account.
``` 
npm login
```
Add user
```sh
username: ucropit
Password: <Password>
```
* Now you need to publish to npmjs

```sh
npm publish
```
* Note in my case package was already existing and I just updated the version. If this new package you need to run below command -

```sh
npm publish --access public
```

Install the above published package locally by executing -
```sh
npm install @@ucropit/eiq-calculator
```

Let’s bump a new patch version of the package:
```sh
npm version patch
```