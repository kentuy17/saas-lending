# Prepare for production
production: ensure-composer ensure-permissions enable-cache build-assets

ensure-composer:
	composer update --ignore-platform-req=php --optimize-autoloader

ensure-permissions:
	chmod -R o+w storage

enable-cache:
	php artisan optimize

build-assets:
	npm update
	npm run build --demo1 --rtl --dark-mode
	npm run build --demo2 --rtl --dark-mode
	npm run build --demo3 --rtl --dark-mode
	npm run build --demo4 --rtl
	npm run build --demo5 --rtl --dark-mode
	npm run build --demo7 --rtl --dark-mode
