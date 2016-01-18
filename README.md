This is an example of how to build a __Windows MSI__ installer for a node.js server application using wix.

## Introduction

The msi installer will install:

1.  Every file in the Program Files\Manufacturer\Product folder
2.  node.exe in Files\Manufacturer\Product
3.  nssm.exe in Files\Manufacturer\Product
4.  Register the service as a Windows Service
5.  A shortcut in the start menu to the url of the web application

Every component installed is properly rolled back on uninstall.

## Why packaging node.exe?

1.  node.exe is an small file and an standalone file
2.  we don't want to mess with other applications

## PreRequisites

You need WIX, node.js, nssm.exe.

There paths hardcoded all over the example but if something fails you get a very good message.

## Building

Run `installer\build.ps1` on powershell.

## How it works

First the script will copy everything to a temporary directory excluding directories such as `.git`.

Then we run WIX `heat.exe` to generate a wxs of all our files with a ComponentGroup (installer\directory).

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](auth0.com)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
