fx_version 'cerulean'
game 'gta5'

name 'fivem-ts-boilerplate'
author 'DreamingCodes'
url 'https://dreaming.codes'

--dependency 'yarn'
--dependency 'webpack'

--webpack_config 'webpack.config.js'

files{
  "configs/config.json5",
  "configs/locale.json5"
}

client_scripts {
  'dist/client.js'
}

server_scripts {
  'dist/server.js'
}
