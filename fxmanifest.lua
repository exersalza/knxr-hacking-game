fx_version 'cerulean'
game 'gta5'

author 'ZerX <github.com/ZerXGIT>'
description 'Kenxar FiveM boilerplate with Vite and preact'
lua54 'yes'
version '1.0.0'

client_scripts {
    'client/*.lua',
}

shared_scripts {
    'config.lua',
}

server_scripts {
    'server/*.lua',
}

ui_page 'web/dist/index.html'

files {
    'web/dist/*',
    'web/dist/**/*'
}