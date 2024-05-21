---
layout: post
title: "Configurações importantes para adicionar no arquivo .htaccess"
author: matheus
categories: [Front-end]
image: assets/images/posts/configuracoes-no-htaccess.jpg
comments: true
---

Veja neste artigo configurações importantes de se adicionar no arquivo `.htaccess` para servidores web/PHP:

## Redirecionamento HTTP para HTTPs

```txt
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.dominio.com.br/$1 [R,L]
```

## Remover extensões dos arquivos na URL

```txt
<IfModule mod_rewrite.c>
Options +FollowSymLinks -MultiViews
RewriteEngine On
RewriteBase /
RewriteCond %{THE_REQUEST} ^[A-Z]{3,}\s([^.]+)\.html [NC]
RewriteRule ^ %1 [R,L]
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*?)/?$ $1.html [L]
</IfModule>
```

## Exibir página não encontrada - 404

```txt
ErrorDocument 404 /404.html
```

## Ativar compactação GZIP

```txt
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/atom_xml
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/x-httpd-php
AddOutputFilterByType DEFLATE application/x-httpd-fastphp
AddOutputFilterByType DEFLATE application/x-httpd-eruby
AddOutputFilterByType DEFLATE text/html
SetOutputFilter DEFLATE
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch ^HMSI[E] !no-gzip !gzip-only-text/html
SetEnvIfNoCase Request_URI .(?:gif|jpe?g|png)$ no-gzip dont-vary
```

## Habilitar Keep Alive

```txt
<ifModule mod_headers.c>
Header set Connection keep-alive
</ifModule>
```
