# Get correct extension from url and mimetype
Get extension of file and url path 

## Problem statement

we were getting problem while getting image url extension correctly 
because of these kind on url `https://regmedia.co.uk/2017/06/26/cloudflarelogo.jpg?width=100`
or like this one `https://regmedia.co.uk/2017/06/26/cloudflarelogo.jpg-xml`
so I solved this problem to get correct url extension
now using this library you can get correct extension


## Installation 

`npm install get-url-extension`

## Usage 

```javascript

const get_extension = require('get-url-extension')

const extension = get_extension('https://github.com/SalahudinMalik/get-extension.git')

```



## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Salahudin Malik** - *Initial work* - [SalahudinMalik](https://github.com/SalahuidnMalik)

See also the list of [contributors](https://github.com/salahudinmalik/project) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
